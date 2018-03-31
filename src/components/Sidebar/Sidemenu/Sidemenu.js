import React from 'react';
import Dashboard from './Dashboard';
import Sales from './Sales';
import Purchases from './Purchases';
import Contacts from './Contacts';
import Inventory from './Inventory';
import Documents from './Documents';

class Sidemenu extends React.Component {
    render() {
        return (
            <div className="sidemenu">
                <Dashboard />
                <Sales />
                <Purchases />
                <Contacts />
                <Inventory />
                <Documents />
            </div>
        );
    }
};

export default Sidemenu;