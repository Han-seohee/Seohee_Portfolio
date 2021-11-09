import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

function Covid() {

    const key = 'H%2Bn33W2WWhRLY358pYUSI7utTn5NMjnA5wGhh3fOvjDu3Dr%2BWPllB9jLaLaHWQJXZVnwB1rqCn637HKz1aUrcQ%3D%3D';
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        call_Api();
    }, []);

    function call_Api() {
        axios.
        get("covid/getCovid19SidoInfStateJson", {
            params : {
                "ServiceKey" : key,
                "pageNo" : 1,
                "numOfRows" : 10,
                "startCreateDt" : 20200410,
                "endCreateDt" : 20200410
            }
        })
        .then((response) => {
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
        안녕하시오~~~
        </>
    )
}

export default Covid;