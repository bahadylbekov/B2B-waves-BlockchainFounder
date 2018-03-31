import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class ExpensesDoughnutChart extends React.Component {
    state = {
        chartData: {
            labels: ['Advertising', 'Payroll', 'Reinvestment'],
            datasets: [{
                label: 'Expenses pie chart',
                data: [230, 215, 240],
                backgroundColor: ['#FFCC00', '#FF3B30', '#1E61EE']
            }]
        }
    }
    render() {
        return (
            <div className="expenses-chart">
                <Doughnut
                    data={this.state.chartData}
                    options={{
                        cutoutPercentage: 80,
                        rotation: 5,
                        legend: {
                            display: false,
                        },
                     }}
                />
            </div>
        )
    }
}

export default ExpensesDoughnutChart;