import React from 'react';
import Buttons from '../Dashboard/Buttons/Buttons';
import Table from './Table';

class DashboardContracts extends React.Component {
    render() {
        return(
            <div className="dashboard-page">
            <Buttons />
            <Table />
            </div>
        );
    } 
}

export default DashboardContracts;