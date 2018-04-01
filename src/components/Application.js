import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar/Sidebar';
import PageContainer from './PageContainer/PageContainer';

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
