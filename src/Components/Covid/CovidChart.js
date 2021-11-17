import { Bar } from 'react-chartjs-2';

function BarChart(props) {
    const dataSet = {
        labels: props.label,
        datasets: [{
            data: props.data,
            backgroundColor: props.color,
            borderColor: props.color,
        }]
    };

    const option = {
        // false로 설정시 사용자 정의 크기에 따라 그래프 크기 결정
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            title: {
                text: "코로나 현황(" + props.title + ")",
                display: true
            },
            legend: {
                position: "bottom",
                display: false, // label 숨기기
            },
        },
        indexAxis: 'y',
        animation: {
            animateScale: true
        }
    } ;
    return(
        <Bar
        data={dataSet}
        options={option}
        width={600}
        height={600}
        />
    )
}

export default BarChart;