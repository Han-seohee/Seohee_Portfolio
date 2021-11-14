import '../../App.css';
import '../../Styles/Parking.css';
import axios from "axios";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import ParkinglotTable from './ParkingTable';
import ParkinglotButton from './ParkingButton';
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

    Test = async (index) => { //async await 비동기처리 , 
        await this.setState({
        airport_index: index
        });
        this.call(); 
        // console.log(this.state.airport_index);
    }
        // function Test(index) {
            
        // }
    call = async () => { 
        await axios //API를 호출하기 위한 라이브러리
        //서버에 데이터를 요청
        .get("parking/service/rest/AirportParking/airportparkingRT",{
        params: {
            // API 를 사용하기 위해서는 serviceKey와 schAirportCode가 필요한데
            // state에 미리 저장해두고 가져오는 방식으로 구축함.
            "serviceKey":this.state.serviceKey,
            "schAirportCode":this.state.airport_index
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
    };

    render() {
        // return <div className="App">{}</div>;
        let names = [];
        let datas = [];
        if (this.state.data) {
            names = this.state.data.map((row) => {
                return `${row.aprkor}_${row.parkingAirportCodeName}_exist`
            });
            datas = this.state.data.map((row) => {
                return row.parkingFullSpace
            });
        }

        let colors = datas.map(() => {
            return randomColor();
        });

        return(
            <>
                <div className="App">
                    <div className="DashBoard">
                        {names.length >0 ?
                            <ParkingChart name={names} data={datas} color={colors} />
                            : <>what</>
                        }
                    </div>
                    <div className="Wrapper_p">
                        <div className="ButtonBox">
                        <ParkinglotButton Test={this.Test} airport_list={this.state.airport_list}/>
                        </div>
                        {
                            this.state.data ?
                            <div className="TableBox">
                                <ParkinglotTable parkingData={this.state.data}/>
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
