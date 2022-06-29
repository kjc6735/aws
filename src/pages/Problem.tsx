import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { usePages } from '../hooks/usePage';
import { useProblem } from '../hooks/useProblem';
import './Problem.css';
import { data } from '../datas/data';
function Problems() {
    const { id } = useParams();
    const page = usePages();
    
    const data = useProblem(Number(id));
    const [answer, setAnswer] = useState<boolean>();
    const [language, setLanguage] = useState<boolean>(true);
    console.log(page, data,)

    const changeLanguage = useCallback(() => setLanguage(!language),[language]);
    const showAnswerView = useCallback(() => setAnswer(!answer), [answer]);
    useEffect(() => {
        setAnswer(false);
        setLanguage(true);
        console.log(id)
    },[id]);
    return (
        <div className="Problem">
            <div className="Contents">
                <div className="Title">
                    <Link to="/" style={{display:'block'}} >홈</Link>
                    <div style={{flex:1, textAlign:'center'}}>
                        { `문제${id}` }
                    </div>
                    <div onClick={() => changeLanguage()}>원문보기</div>

                </div>
                <div className='Body'>
                    {
                        language ? data[0].split('\n').map((line: any) => {
                            return (<div style={{marginBottom:'10px'}}>{line}<br/></div>)
                        }) :  data[1].split('\n').map( (line:any) => {
                            return (<div style={{marginBottom:'10px'}}>{line}<br/></div>)
                        })
                    }
                </div>
                <br />
                <br />
                {
                    answer && <div>{data[2]}</div>
                }
                <div style={{ display: 'flex', }}>
                    <div className="Buttton" style={{ flex: 1,textAlign:'center',background:'orange'}}>
                        {
                             ( Number(id) > 0) && <Link to={`/problems/${Number(id) - 1}`} >prev</Link>
                        }
                    </div>
                    <div onClick={() => showAnswerView() }style={{flex:1,textAlign:'center'}}>정답보기</div>
                    <div className="Buttton" style={{ flex: 1,textAlign:'center' ,background:'orange'}}>
                        {
                            page.length-1 !== (Number(id) ) && <Link to={`/problems/${Number(id) +1}`} >next</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Problems;