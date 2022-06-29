import axios from "axios"
import { useQuery } from "react-query";

import { data as d } from '../datas/data';

const data = d;
const getProblem = (id:number) => data[id-1];

export const useProblem = (id: number) => getProblem(id);

// const getProblem = async (id: number) => {
//     const { data } = await axios.get(`http://jaechan.com:3000/problems/${id-1}`);
//     return data;
// }


// export const useProblem = (id:number) => {
//     return useQuery(['problem', id], () => getProblem(id), {enabled:true})
// }