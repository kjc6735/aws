import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { usePages } from '../hooks/usePage';
import { useProblem } from '../hooks/useProblem';
import './Problem.css';

function Problems() {
    const { id } = useParams();
    const { data: page } = usePages();
    
    const { data, isLoading, isError } = useProblem(Number(id));
    const [answer, setAnswer] = useState<any>();


    const [showAnswer, setShowAnswer] = useState<boolean>();
    const [language, setLanguage] = useState<boolean>(true);


    const changeLanguage = useCallback(() => setLanguage(!language),[language]);
    const showAnswerView = useCallback(() => setAnswer(!answer), [answer]);
    useEffect(() => {
        setShowAnswer(false);
        setLanguage(true);
    },[id]);
    if (isLoading) return <div>loading...</div>
    return (
        <div className="Problem">
            <div className="Contents">
                <div className="Title">
                    <div className="Buttton">
                        {
                            page[0].id !== (Number(id) ) && <Link to={`/problems/${Number(id) - 1}`} >prev</Link>
                        }
                    </div>
                    <div style={{flex:1, textAlign:'center'}}>
                        { `문제${id}` }
                    </div>
                    <div className="Buttton">
                        {
                            page[page.length-1].id !== (Number(id) ) && <Link to={`/problems/${Number(id) +1}`} >next</Link>
                        }
                    </div>
                </div>
                <div className='Body'>
                    {
                        language ? data.data.problem_ko.split('\n').map( (line:any) => {
                            return (<span>{line}<br/></span>)
                        }) :  data.data.problem_en.split('\n').map( (line:any) => {
                            return (<span>{line}<br/></span>)
                        })
                    }
                </div>
                <div>
                    <Link to="/" >홈</Link>
                    <div onClick={() => changeLanguage()}>원문보기</div>
                </div>
            </div>
        </div>
    );
}

export default Problems;