import React from 'react';
import Navbar from './Navbar/Navbar';
import Dashboard from '../Pages/Dashboard/Dashboard';
import DashboardContracts from '../Pages/DashboardContracts/DashboardContracts';
import CurrentContract from '../Pages/CurrentContract/CurrentContract';

class PageContainer extends React.Component {
    render() {
        return (
            <div className="page-container">
                <Navbar />
                <CurrentContract />
            </div>
        );
    }
};

export default PageContainer;