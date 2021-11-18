import { React, Component } from 'react';
import { Pie } from "react-chartjs-2";

class ParkingChart extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.title);
        this.state = {
            title: this.props.title,
            name: this.props.name,
            data: this.props.data,
            color: this.props.color,
        }
    }
    renderChart = (name, data, color) => {
        return {
            labels: name,
            datasets: [{
                data: data,
                backgroundColor: color,
                borderColor: ['black'],
            }]
        }
    }
    
    render() {
        return(
            <>
            {
                this.state.title && this.state.name && this.state.data ?
                <Pie
                    data = {this.renderChart(this.state.name, this.state.data, this.state.color)}
                    options={{
                        plugins : {
                            title: {
                                text: this.props.title,
                                font: {
                                        family: 'Aggro-Light'
                                    },
                                    display: true
                                },
                                legend: {
                                    display: false,
                                }
                            }
                        }}
                        />
                    :
                    <div></div>
                }
            </>
        )
    }
}
export default ParkingChart;