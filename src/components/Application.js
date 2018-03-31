import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar/Sidebar';
import PageContainer from './PageContainer/PageContainer';
import Dashboard from './Pages/Dashboard/Dashboard';

class Application extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                <PageContainer />
            </div>
        );
    }
}

export default Application;
