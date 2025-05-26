export function chunkArray(array, size) {
    if (!Array.isArray(array)) {
        throw new Error("Invalid array format. Please use valid JSON array syntax.");
    }
    if (typeof size !== 'number' || size <= 0) {
        throw new Error("Chunk size must be a positive integer.");
    }
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
