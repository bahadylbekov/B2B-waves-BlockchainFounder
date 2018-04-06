import React from 'react';
import Buttons from './Buttons/Buttons';
import FinanceResult from './FinanceResult';
import ContractsTable from '../DashboardContracts/Table';

class Dashboard extends React.Component {
    // state = {
    //     id: 1
    // };
    // handleClick = (e) => { this.setState(() => ({ id: e }))};
    render() {
        return(
            <div className="main-container">
                <Buttons />
                <FinanceResult />
            </div>
        );
    } 
}

export default Dashboard;