import React from 'react';
import Navbar from './Navbar/Navbar';
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard';
import DashboardContracts from '../Pages/DashboardContracts/DashboardContracts';
import CurrentContract from '../Pages/CurrentContract/CurrentContract';
import Vote2 from '../Pages/Votes/Vote2';
import Vote3 from '../Pages/Votes/Vote3';
import Vote4 from '../Pages/Votes/Vote4';
import Vote5 from '../Pages/Votes/Vote5';
import NewVote from '../Pages/NewContract/NewVote';


class PageContainer extends React.Component {
    render() {
        return (
            <div className="page-container">
            <page-container>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/new' component={NewVote}/>
                    <Route path='/vote2' component={Vote2}/>
                    <Route path='/vote3' component={Vote3}/>
                    <Route path='/vote4' component={Vote4}/>
                    <Route path='/vote5' component={Vote5}/>
                    <Route path='/dashboard-contracts' component={DashboardContracts}/>
                    <Route path='/current-contract' component={CurrentContract}/>
                </Switch>
            </page-container>
            </div>
        );
    }
};

export default PageContainer;