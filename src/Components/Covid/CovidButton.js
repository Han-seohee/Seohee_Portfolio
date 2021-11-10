import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function CovidBtn(props) {
    return(
        <>
        {props.btnIndex ? props.btnIndex.map((gubun, index) => {
            console.log(gubun, index);
            <Button
                className="mb-2"
                variant="secondary"
                value={gubun}
                key={index}
                size="lg"
                active>{gubun}
            </Button>
        }):
        <div>데이터가 존재하지 않습니다.</div>
        }
        </>
    )   
}

export default CovidBtn;