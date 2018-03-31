import React from 'react';
// import TotalResultChart from './Charts/TotalResultChart';
// import SalesAndPurchasesChart from './Charts/SalesAndPurchasesChart';
// import ExpensesDoughnutChart from './Charts/ExpensesDoughnutChart';
import TotalResultAndBalance from './TotalResultAndBalance';
import SalesAndPurchases from './SalesAndPurchases';
import StatementAndExpenses from './StatementAndExpenses';

class FinanceResult extends React.Component {
    render() {
        return(
            <div className="page-information">
                <TotalResultAndBalance />
                <SalesAndPurchases />
                <StatementAndExpenses />
            </div>
        );
    } 
}

export default FinanceResult;