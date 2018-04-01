import React from 'react';
import Navbar from './Navbar/Navbar';
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard';
import DashboardContracts from '../Pages/DashboardContracts/DashboardContracts';
import CurrentContract from '../Pages/CurrentContract/CurrentContract';
import NewContract from '../Pages/NewContract/NewContract';

class PageContainer extends React.Component {
    render() {
        return (
            <div className="page-container">
            <page-container>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/newcontract' component={NewContract}/>
                    <Route path='/dashboard-contracts' component={DashboardContracts}/>
                    <Route path='/current-contract' component={CurrentContract}/>
                </Switch>
            </page-container>
            </div>
        );
    }
};

export default PageContainer;