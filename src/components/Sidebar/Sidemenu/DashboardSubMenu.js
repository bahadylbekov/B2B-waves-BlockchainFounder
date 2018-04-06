import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSubMenu = (props) => (
    <ul className="submenu">
        <li className="subtitle">
            <a className="active"><Link to="/">Financial Result</Link></a>
        </li>
        <li className="subtitle">
            <a><Link to="/dashboard-contracts">Contracts</Link></a>
        </li>
        <li className="subtitle">
            <a href="#">Contacts</a>
        </li>
    </ul>
);

export default DashboardSubMenu;