import axios from "axios"
import { useQuery } from "react-query";


const getProblem = async (id: number) => {
    const { data } = await axios.get(`http://jaechan.com:3000/problems/${id}`);
    return data;
}


export const useProblem = (id:number) => {
    return useQuery(['problem', id], () => getProblem(id), {enabled:true})
}