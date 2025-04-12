function getDailyImage(items) {
    const today = new Date().toISOString().split('T')[0]

    let hash = 0;
    for (let i = 0; i < today.length; i++) {
        hash = (hash * 31 + today.charCodeAt(i)) % items.length;
    }

    return items[hash];
}