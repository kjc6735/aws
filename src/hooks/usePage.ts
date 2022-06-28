import { useQuery } from 'react-query';
import axios from 'axios';

const getNumbers = async () => {
    const { data } = await axios.get('http://localhost:3000/problems');
    return data;
}

export const usePages = () => {
    return useQuery('page', () => getNumbers(),{enabled:true});
}