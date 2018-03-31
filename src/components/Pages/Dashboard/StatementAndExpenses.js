import React from 'react';
import StatementAndExpensesInfo from './AdditionalInfo/StatementAndExpensesInfo';
import StatementAndExpensesChart from './AdditionalInfo/StatementAndExpensesChart';

const StatementAndExpenses = (props) => (
    <div className="main-chart col-lg-12 col-xl-12">
        <StatementAndExpensesInfo />
        <StatementAndExpensesChart/>
    </div>
);

export default StatementAndExpenses;