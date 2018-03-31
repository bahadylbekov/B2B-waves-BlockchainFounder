import React from 'react';
import { Line } from 'react-chartjs-2';

class TotalResultChart extends React.Component {
    state = {
        chartData: {
            labels: ['APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
            datasets: [{
                label: 'Total Result',
                data: [230, 215, 440, 300, 240, 470],
                borderColor: '#361FB2'
            }]
        }
    }
    render() {
        return (
            <div className="chart col-lg-8 col-xl-8">
                <Line
                    data={this.state.chartData}
                    options={{
                        legend: {
                            display: false,
                        },
                        scales: {
                        xAxes: [{
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                padding: 10,
                                fontFamily: 'Roboto',
                                fontSize: 12,
                                fontColor: '#8e8e93',
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                zeroLineWidth: 0,
                                drawBorder: false,
                                drawTicks: false,
                            },
                            ticks: {
                                min: 0,
                                max: 600,
                                stepSize: 150,
                                padding: 15,
                                fontFamily: 'Roboto',
                                fontSize: 12,
                                fontColor: '#8e8e93',
                            },
                        }]
                    },
                    }}
                />
            </div>
        )
    }
}

export default TotalResultChart;