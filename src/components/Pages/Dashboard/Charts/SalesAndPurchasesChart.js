import React from 'react';
import { Bar } from 'react-chartjs-2';

class SalesAndPurchasesChart extends React.Component {
    state = {
        chartData: {
            labels: ['APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
            datasets: [{
                label: 'Sales',
                data: [290, 360, 390, 150, 80, 340],
                backgroundColor: '#361FB2',
            },   {
                label: 'Purchases',
                data: [200, 310, 260, 340, 170, 280],
                backgroundColor: '#2768C9',
            }]
        }
    }
    render() {
        return (
            <div className="chart col-lg-8 col-xl-8">
                <Bar
                    data={this.state.chartData}
                    options={{
                        legend: {
                            display: false,
                        },
                        scales: {
                        xAxes: [{
                            barThickness: 10,
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

export default SalesAndPurchasesChart;