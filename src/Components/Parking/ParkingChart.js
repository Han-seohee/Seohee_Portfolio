import { React, Component } from 'react';
import { Pie } from "react-chartjs-2";

class ParkingChart extends Component {
    renderChart = (names, datas, colors) => {
        return {
            labels: names,
            datasets: [{
                data: datas,
                backgroundColor: colors,
                borderColor: colors,
            }]
        }
    }
    
    render() {
        const { name, data, color } = this.props;

        return(
            <div>
                {
                    name.length > 0 ?
                    <>
                        <Pie
                            data={this.renderChart(name, data, color)}
                            options={{
                                responsive: true,
                                title: {
                                    display: false,
                                },
                                plugins: {
                                    title: {
                                        text: "현재 주차된 차량",
                                        display: true
                                        },
                                    legend: {
                                        position: "bottom",
                                        display: false, //label숨기기
                                    },
                                },
                                // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨
                                maintainAspectRatio: false,
                                scales: {
                                    alignToPixels: true
                                },
                                animation: {
                                    animateScale: true
                                }
                            }}
                        />
                    </>
                    :
                    <></>
                }
            </div>
        )
    }
}

export default ParkingChart;

