
export const truncate = (input: string, maxLength: number = 900) => {
    if (input.length > maxLength) {
        return input.substring(0, maxLength) + '...'
    }
    return input
}
