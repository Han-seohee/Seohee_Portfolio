import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

function Covid() {

    const key = 'H+n33W2WWhRLY358pYUSI7utTn5NMjnA5wGhh3fOvjDu3Dr+WPllB9jLaLaHWQJXZVnwB1rqCn637HKz1aUrcQ==';
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState(false);

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
            setData(response.data);
            setDisplay(true);
        })
        .catch((error) => {
            console.log(error);
            setDisplay(false);
        })
    }
    
    return(
        <>
        코로나19 차트
        </>
    )
}

export default Covid;