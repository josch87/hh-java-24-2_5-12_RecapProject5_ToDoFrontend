import useSWR from "swr";
import axios from "axios";
import {TaskType} from "../model/model.ts";

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export function useTasks() {
    const {data, error, isLoading} = useSWR<TaskType[]>(`/api/todo`, fetcher);

    return {
        tasks: data,
        isLoading,
        isError: error
    }
}