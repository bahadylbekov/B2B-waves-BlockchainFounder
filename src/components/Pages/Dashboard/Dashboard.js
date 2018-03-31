import React from 'react';
import Buttons from './Buttons/Buttons';
import FinanceResult from './FinanceResult';

class Dashboard extends React.Component {
    render() {
        return(
            <div className="dashboard-page">
                <Buttons />
                <FinanceResult />
            </div>
        );
    } 
}

export default Dashboard;