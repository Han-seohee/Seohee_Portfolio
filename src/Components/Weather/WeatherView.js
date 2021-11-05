import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function WeatherView(props) {

    const asdf = props;
    console.log(asdf);
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <td>Weather</td>
                    </tr>
                </thead>
            </Table>
        </>
    )
}

export default WeatherView();