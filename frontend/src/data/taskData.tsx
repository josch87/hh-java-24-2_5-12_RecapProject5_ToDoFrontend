import useSWR from "swr";
import {TaskType} from "../model/model.ts";



export function useTasks() {
    const {data, error, isLoading} = useSWR<TaskType[]>(`/api/todo`);

    return {
        tasks: data,
        isLoading,
        isError: error
    }
}