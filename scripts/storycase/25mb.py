import subprocess
from pathlib import Path

# === CONFIG ===
root_dir = Path("../../public/clips/storycase")  # percorso cartella video
target_size_mb = 25
remove_audio = True  # imposta su False se vuoi tenere l'audio
codec = "libx265"  # usa hevc per massima compressione (supporto moderno)

print(f"🔍 Scanning in: {root_dir.resolve()}")

video_files = [f for f in root_dir.rglob("*.mp4") if "-optimized" not in f.stem]
print(f"📁 Trovati {len(video_files)} file .mp4 da ottimizzare (escludendo già ottimizzati)")

if not video_files:
    print("⚠️ Nessun file .mp4 da ottimizzare trovato. Controlla il percorso.")
    exit()

for video_path in video_files:
    try:
        file_size_mb = video_path.stat().st_size / (1024 * 1024)
        output_path = video_path.with_name(video_path.stem + "-optimized.mp4")

        if output_path.exists():
            print(f"⚠️ Già esiste, salto: {output_path.name}")
            continue

        if file_size_mb <= target_size_mb:
            print(f"📦 {video_path.name} sotto {target_size_mb}MB ({file_size_mb:.2f}MB), copio diretto.")
            output_path.write_bytes(video_path.read_bytes())
            print(f"✅ Copiato in {output_path.name}")
            continue

        print(f"🎞️ Ottimizzo {video_path.name} ({file_size_mb:.2f}MB)...")

        # 1. Ottieni durata del video
        result = subprocess.run(
            ["ffprobe", "-v", "error", "-select_streams", "v:0",
             "-show_entries", "format=duration", "-of",
             "default=noprint_wrappers=1:nokey=1", str(video_path)],
            capture_output=True, text=True
        )
        duration = float(result.stdout.strip())
        if duration <= 0:
            raise ValueError("Durata non valida")

        # 2. Calcola bitrate massimo (con margine sicurezza extra)
        safe_target_size_mb = target_size_mb - 1.5  # margine più stretto (~23.5 MB)
        safe_target_size_bytes = safe_target_size_mb * 1024 * 1024

        target_bitrate = (safe_target_size_bytes * 8) / duration  # bit/s
        video_bitrate = max(int(target_bitrate), 150_000)  # min 150 kbps

        print(f"📏 Durata: {duration:.1f}s → Bitrate: {video_bitrate // 1000} kbps (~{safe_target_size_mb:.1f}MB)")

        # 3. Costruisci comando ffmpeg
        cmd = [
            "ffmpeg", "-i", str(video_path),
            "-c:v", codec,
            "-b:v", str(video_bitrate),
            "-maxrate", str(video_bitrate),
            "-bufsize", str(video_bitrate * 2),
            "-preset", "slow",
            "-movflags", "+faststart",
            "-y", str(output_path)
        ]

        if remove_audio:
            cmd.insert(-2, "-an")
        else:
            cmd.extend(["-c:a", "aac", "-b:a", "128k"])

        # 4. Esegui ffmpeg
        subprocess.run(cmd, check=True)

        # 5. Verifica dimensione finale
        new_size = output_path.stat().st_size / (1024 * 1024)
        if new_size > target_size_mb:
            print(f"❌ {output_path.name} troppo grande: {new_size:.2f}MB (> {target_size_mb}MB)")
        else:
            print(f"✅ Ottimizzato {output_path.name} → {new_size:.2f}MB")

    except Exception as e:
        print(f"❌ Errore con {video_path.name}: {e}")
