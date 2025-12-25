import cv2
from pathlib import Path

# Imposta la cartella principale
root_dir = Path("../../public/clips/storycase")

# Trova tutti i file .mp4 ricorsivamente
video_files = list(root_dir.rglob("*.mp4"))

for video_path in video_files:
    # Se il nome contiene "optimized" → skippa
    if "optimized" in video_path.name.lower():
        print(f"⏭️  Skippato (contiene 'optimized'): {video_path.name}")
        continue

    cap = cv2.VideoCapture(str(video_path))
    success, frame = cap.read()
    output_path = video_path.with_suffix(".webp")

    if output_path.exists():
        print(f"⚠️  Già esistente, salto: {output_path.name}")
        cap.release()
        continue

    if success:
        # Salva l'immagine in formato WebP (qualità 90 su 100)
        cv2.imwrite(str(output_path), frame, [cv2.IMWRITE_WEBP_QUALITY, 90])
        print(f"✅ Salvato: {output_path}")
    else:
        print(f"❌ Errore nel leggere il frame da: {video_path.name}")

    cap.release()
