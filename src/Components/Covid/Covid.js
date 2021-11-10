import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import axios from 'axios';
import React from 'react';

function Covid() {

    const key = 'H+n33W2WWhRLY358pYUSI7utTn5NMjnA5wGhh3fOvjDu3Dr+WPllB9jLaLaHWQJXZVnwB1rqCn637HKz1aUrcQ==';
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState(false);
    const [btnGroup, setbtnGroup] = useState([]);
    const [filterIndex, setfilterIndex] = useState('');

    useEffect(() => {
        call_Api();
    }, []);

    function call_Api() {
        axios
        .get("covid/getCovid19SidoInfStateJson", {
            params : {
                "ServiceKey" : key,
                "pageNo" : 1,
                "numOfRows" : 10,
                "startCreateDt" : 20200410,
                "endCreateDt" : 20200410
            }
        })
        .then((response) => {
            console.log(response);
            console.log(response.data.response.body.items);

            let temp = [];
            response = response.data.response.body.items.item;

            if(response.length > 0) {
                response.map(row => {
                    temp.push(row.gubun);
                });

                if(filterIndex.length > 0) {
                    setData(
                        response.filter(row => row.gubun === filterIndex)
                    );
                }   else {
                    setData(response);
                }
            }

            setbtnGroup(temp);
            setDisplay(true);
        })
        .catch((error) => {
            console.log(error);
            setDisplay(false);
        });
    }
    
    return(
        <>
        코로나19 차트
        { btnGroup.length > 0 ?
        btnGroup.map((gubun, index) =>
            <Button
                className="mb-2"
                variant="secondary"
                value={gubun}
                key={index}
                size="lg"
                active>{gubun}
            </Button>
            ):
            <div>데이터가 존재하지 않습니다.</div>
        }
            <>
                { data ? data.map((row, index) => {
                    return(
                        <div key={index}>
                            {row.gubun} , {row.gubunEn}, {row.isolClearCnt}
                        </div>
                    )
                }):
                    <div></div>
                }
            </>
        </>
    )
}

export default Covid;