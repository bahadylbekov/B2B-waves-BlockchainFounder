import React from 'react';
import Buttons from '../Dashboard/Buttons/Buttons';
import ContractsTable from './Table';

class DashboardContracts extends React.Component {
    render() {
        return(
            <div className="dashboard-page">
            <Buttons />
            <ContractsTable />
            </div>
        );
    } 
}

export default DashboardContracts;