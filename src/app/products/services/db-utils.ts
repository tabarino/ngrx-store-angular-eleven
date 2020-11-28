export function convertSnaps<T>(snaps): T[] {
    return snaps.payload.map(snap => snap);
}
