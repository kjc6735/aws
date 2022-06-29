import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { usePages } from "../hooks/usePage";
import "./Main.css"
import { data as d } from '../datas/data';
const data = d;

function MainPage() {
    return (<div>
        {
            data.map((e,i) => {
                return <Link to={`/problems/${i+1}`} className="Link">{i+1}</Link>
            })
        }
    </div>)
    
}

export default MainPage;