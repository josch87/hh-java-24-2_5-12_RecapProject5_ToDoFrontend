type TaskStatusEnumType = "OPEN" | "IN_PROGRESS" | "DONE";

export type TaskType = {
    id: string,
    description: string,
    status: TaskStatusEnumType,
}