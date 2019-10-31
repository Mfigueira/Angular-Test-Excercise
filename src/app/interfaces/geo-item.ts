export interface GeoItem {
    id: number,
    title: string,
    parent?: GeoItem | undefined
}