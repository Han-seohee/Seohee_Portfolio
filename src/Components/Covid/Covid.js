import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import axios from 'axios';
import randomColor from 'randomcolor';
import moment from 'moment';

import BarChart from './CovidChart';

import {} from '../../Styles/Covid.css';

const Covid = () => {

    let key = 'H+n33W2WWhRLY358pYUSI7utTn5NMjnA5wGhh3fOvjDu3Dr+WPllB9jLaLaHWQJXZVnwB1rqCn637HKz1aUrcQ==';
    
    const [title, setTitle] = useState('신규 확진자');
    const[filter, setFilter] = useState('incDec');

    const [BaseData, setBaseData] = useState('');
    const [group, setGroup] = useState([]); 
    // 👆🏻차트.js에서 필요한 라벨값(데이터랑 배열의 위치가 같아야함. 그룹이 여러개면 데이터도 여러개 순서,위치 동일하게 작성)
    const [data, setData] = useState([]);  
    const [color, setColor] = useState([]);

    //오늘의 날짜 구하기
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const date = (year + '' + month + '' + (day - 1));
    // const [display, setDisplay] = useState(false);

    // const updateData = (target) => {
    //     CallApi(target);
    // } // 확진자와 사망자 버튼을 누를때마다 API호출을 새로 하기 위함
    
    useEffect(() => {
        CallApi();
    }, []);

    useEffect(() => {
        CallApi();
    }, [filter]);

    const CallApi = async () => { // 데이터를 가져오기 위한 함수 //async 비동기 // await 다음에 있는것들은 작업이 끝날때까지 기다림
        axios.defaults.baseURL = "http://ec2-52-78-205-163.ap-northeast-2.compute.amazonaws.com:3000";

        if(filter.length > 0){
            await axios //Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다.
        //get이 끝날때 까지 기다림
        .get("/covid", {
            params : {
                "ServiceKey" : key,
                "pageNo" : 1,
                "numOfRows" : 100,
                "startCreateDt" : date,
                "endCreateDt" : date
            }
        })
        .then((response) => {
            //axios .get을 요청을 통해 가져온 응답 메세지를 담는것이 response파라미터
            // console.log(response); 
            console.log(response.data.response.body.items);
            if(response.data.response.items.length > 0) {   
                response = response.data.response.items.item; //보고자 하는 데이터를 끌어올림

                setBaseData(moment(response[0].createDt).format('YYYY.MM.DD H:mm A').toString());

                setGroup(response.map((row) => {
                    return row.gubun
                }));

                setData(response.map((row) => {
                    switch(filter) {
                        case 'defCnt':
                            return row.defCnt;
                        case 'incDec':
                            return row.incDec;
                        case 'localOccCnt':
                            return row.localOccCnt;
                        case 'overFlowCnt':
                            return row.overFlowCnt;
                        case 'deathCnt':
                            return row.deathCnt;
                        default:
                            break;
                    }
                }));
                setColor(response.map((row) => {
                    return randomColor()
                }));
            }
        })

        .catch((error) => {
            console.log(error);
        });
    }
}
        
    return(
        <>
            <div className="btnBox">
            <Button
                    className="lg btn-selector"
                    variant="secondary"
                    value="incDec"
                    onClick={(e) => {
                        setFilter(e.target.value);
                        setTitle(e.target.innerText);
                    }}
                    >신규 확진자
                </Button>
                <Button
                    className="lg btn-selector"
                    variant="secondary"
                    value="localOccCnt"
                    onClick={(e) => {
                        setFilter(e.target.value);
                        setTitle(e.target.innerText);
                    }}
                    >지역발생
                </Button>
                <Button
                    className="lg btn-selector"
                    variant="secondary"
                    value="overFlowCnt"
                    onClick={(e) => {
                        setFilter(e.target.value);
                        setTitle(e.target.innerText);
                    }}
                    >해외유입
                </Button>
                <Button
                    className="lg btn-selector"
                    variant="secondary"
                    value="defCnt"
                    onClick={(e) => {
                        setFilter(e.target.value);
                        setTitle(e.target.innerText);
                    }}
                    >누적 확진자
                </Button>
                <Button
                    className="lg btn-selector"
                    variant="secondary"
                    value="deathCnt"
                    onClick={(e) => {
                        setFilter(e.target.value);
                        setTitle(e.target.innerText);
                    }}
                    >누적사망수
                </Button>
            </div>
            <div className="chartBox">
                <span>업데이트 기준 일시 : {BaseData} </span>
                {
                    group.length > 0 && data.length > 0 && color.length > 0 ?
                    <BarChart title={title} label={group} data={data} color={color}/>
                    :
                    <div></div>
                }
            </div>        
        </>
    )
}

export default Covid;