import React from 'react';
import ExpensesDoughnutChart from '../Charts/ExpensesDoughnutChart';
import ExpensesChartLegend from './ExpensesChartLegend';

const StatementAndExpensesChart = (props) => (
    <div className="statement-chart col-lg-4 col-xl-4">
        <p className="expenses-title">Expenses Pie Chart</p>
        <ExpensesDoughnutChart />
        <ExpensesChartLegend />
    </div> 
);

export default StatementAndExpensesChart;