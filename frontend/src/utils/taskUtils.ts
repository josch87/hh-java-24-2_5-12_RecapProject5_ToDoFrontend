import {TaskStatusEnumType, TaskType} from "../model/model.ts";

export function filterTasksByStatus(tasks: TaskType[], status: TaskStatusEnumType) {
    return tasks.filter((task) => task.status === status)
}