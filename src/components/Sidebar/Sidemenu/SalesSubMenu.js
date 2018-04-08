import React from 'react';
import { Link } from 'react-router-dom';

const SalesSubMenu = (props) => (
    <ul className="submenu">
        <li className="subtitle">
            <a><Link to="/new">New Voting</Link></a>
        </li>
        <li className="subtitle">
            <a><Link to="/vote2">Vote by 1st</Link></a>
        </li>
        <li className="subtitle">
            <a><Link to="/vote3">Vote by 2st</Link></a>
        </li>
        <li className="subtitle">
            <a><Link to="/vote4">Vote by 3st</Link></a>
        </li>
        <li className="subtitle">
            <a><Link to="/vote5">Vote by 4st</Link></a>
        </li>
    </ul>
);

export default SalesSubMenu;