import useSWR from "swr";
import {TaskType} from "../model/model.ts";
import axios from "axios";


const fetcher = (url: string) => axios.get(url).then(res => res.data)

export function useTasks() {
    const {data, error, isLoading} = useSWR<TaskType[]>(`/api/todo`, fetcher);

    return {
        tasks: data,
        isLoading,
        isError: error
    }
}