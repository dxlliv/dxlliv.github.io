export function routeRawMedia(path: string) {
    return path

    if (import.meta.dev) {
        // return name
    }

    return `https://github.com/dxlliv/clips/raw/refs/heads/main/${path.replace('clips/', '')}`;
}

export function extractFirstVideoFromStorycase(storycase: any) {
    if (!storycase?.blocks) return null
    return storycase.blocks.find((block: any) => block.type === "video")?.src || null
}

export function extractMediaFromStorycase(storycase: any) {
    if (!storycase?.blocks) return []
    return storycase.blocks.filter((block: any) => block.type === "video") || []
}