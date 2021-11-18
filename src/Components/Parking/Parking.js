import '../../App.css';
import '../../Styles/Parking.css';
import axios from "axios";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import ParkingTable from './ParkingTable';
import ParkingButton from './ParkingButton';
import ParkingChart from './ParkingChart';

import randomColor from 'randomcolor';

class Parking extends Component {
    constructor(props) {
        super(props);

        this.state = { 
        data: [], 
        airport_list: [
            { idx:"", name:"전체"},
            { idx:"GMP", name:"김포"},
            { idx:"PUS", name:"김해"},
            { idx:"CJU", name:"제주"},
            { idx:"TAE", name:"대구"},
            { idx:"KWJ", name:"광주"},
            { idx:"RSU", name:"여수"},
            { idx:"USN", name:"울산"},
            { idx:"KUV", name:"군산"},
            { idx:"WJU", name:"원주"},
            { idx:"CJJ", name:"청주"}
        ],
        serviceKey: 'H+n33W2WWhRLY358pYUSI7utTn5NMjnA5wGhh3fOvjDu3Dr+WPllB9jLaLaHWQJXZVnwB1rqCn637HKz1aUrcQ==',
        airport_index: ''
        };
    }

    componentDidMount() {
        this.call(); 
    }

    changeAirport = async (index) => { //async await 비동기처리 , 
        await this.setState({
            airport_idx: index, 
            parking: [] 
        });
        this.call(this.state.airport_idx); 
        }
        
    call = async (index) => { 
        try {
        await axios //API를 호출하기 위한 라이브러리
        //서버에 데이터를 요청
        .get("parking/service/rest/AirportParking/airportparkingRT",{
            params: {
                // API 를 사용하기 위해서는 serviceKey와 schAirportCode가 필요한데
                // state에 미리 저장해두고 가져오는 방식으로 구축함.
                "serviceKey":this.state.serviceKey,
                "schAirportCode":index
            }
            })
            .then((res) => {
            let response_data = res.data.response.body.items.item; 
            
            //조건문
            if(Array.isArray(response_data)) {
                this.setState({
                    data: response_data
                });
            } else {
                this.setState({
                    data: [response_data]
                });
            }
            
            })
            .catch((error) => {
            console.log(error);
            });
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        return(
            <>
                <div className="App">
                    <div className="DashBoard">
                        {
                            this.state.data ? this.state.data.map((row, index) => {
                                let title = `${row.aprKor} ${row.parkingAirportCodeName}`;
                                let name = ['전체 주차면 수', '입고된 차량 수', '출고된 차량 수','현재 주차 차량 수'];
                                let data = [row.parkingFullSpace, row.parkingIincnt, row.parkingIoutcnt, row.parkingIstay];
                                let color = [randomColor(), randomColor(), randomColor(), randomColor()];
                                console.log(row);
                                return(
                                    <div key={index} className="ChartBox">
                                        <ParkingChart title={title} name={name} data={data} color={color}/>
                                        <hr />
                                    </div>
                                )
                            }):
                            <div></div>
                        }
                        </div>
                        <div className={'Wrapper'}>
                            <div className={'ButtonBox'}>
                                <ParkingButton btnData={this.state.airport_list} changeAirport={this.changeAirport}/>
                            </div>
                            {
                                this.state.data ?
                                <div className={'TableBox'}>
                                    <ParkingTable parking={this.state.data}/>
                                </div>
                                :
                                <><b>데이터가 존재하지 않습니다.</b></>
                            }
                        </div>
                    </div>
            </>
        )
    }
}

export default Parking;
