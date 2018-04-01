import React from 'react';
import Navbar from './Navbar/Navbar';
import Dashboard from '../Pages/Dashboard/Dashboard';
import DashboardContracts from '../Pages/DashboardContracts/DashboardContracts';
import CurrentContract from '../Pages/CurrentContract/CurrentContract';
import NewContract from '../Pages/NewContract/NewContract';

class PageContainer extends React.Component {
    render() {
        return (
            <div className="page-container">
                <Navbar />
                <Dashboard />
            </div>
        );
    }
};

export default PageContainer;