import React from 'react';
import Navbar from './Navbar/Navbar';
import Dashboard from '../Pages/Dashboard/Dashboard';
import DashboardContracts from '../Pages/DashboardContracts/DashboardContracts';

class PageContainer extends React.Component {
    render() {
        return (
            <div className="page-container">
                <Navbar />
                <DashboardContracts />
            </div>
        );
    }
};

export default PageContainer;