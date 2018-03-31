import React from 'react';
import Navbar from './Navbar/Navbar';
import Dashboard from '../Pages/Dashboard/Dashboard';

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