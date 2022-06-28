import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { usePages } from "../hooks/usePage";



function MainPage() {
    const { data, isLoading, isError } = usePages();
    
    if (isLoading) return <div>로딩중..</div>;
    if (isError) return <div>에러 발생</div>;
    return (<div>
        {
            data.map((i: any) => {
                return <Link to={`/problems/${i.id}`}>{i.id}</Link>
            })
        }
    </div>)
    
}

export default MainPage;