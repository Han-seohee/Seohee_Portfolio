import { React, Component } from 'react';
import { Button } from 'react-bootstrap';

class ParkingButton extends Component {
    render() {
        return (
            <div className="BtnBox">
            {
                this.props.btnData ? 
                this.props.btnData.map((row, idx) => {
                    return (
                        <Button onClick={(e) => this.props.changeAirport(row.idx)} className="mb-2"
                                variant="secondary" 
                                key={idx} 
                                size="lg" 
                                active>
                            {row.name}
                        </Button>
                    )
                }) :
                <Button>데이터를 확인할 수 없습니다</Button>
            }
            </div>
        );
    }
}

export default ParkingButton;