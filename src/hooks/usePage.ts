import { useQuery } from 'react-query';
import axios from 'axios';
import { data as d } from '../datas/data';
import { mapQueryStatusFilter } from 'react-query/types/core/utils';

const data = d;
const getNumbers = () => {
    return data.map((e, i) => i+1);
}

export const usePages = () => getNumbers();
// const getNumbers = async () => {
//     const { data } = await axios.get('http://jaechan.com:3000/problems');
//     return data;
// }

// export const usePages = () => {
//     return useQuery('page', () => getNumbers(),{enabled:true});
// }