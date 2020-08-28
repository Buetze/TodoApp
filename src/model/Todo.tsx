type UniqueId = number | string | undefined;

export interface Todo {
    id: UniqueId,
    title: string,
    completed: boolean
}