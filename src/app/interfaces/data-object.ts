export interface DataObject {
    id: number,
    title: string,
    parent?: DataObject | undefined
}