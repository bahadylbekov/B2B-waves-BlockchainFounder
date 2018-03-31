import React from 'react';
import SearchIcon from './SearchIcon';
import NotificationsIcon from './NotificationsIcon';
import LogoutIcon from './LogoutIcon';
import CreateNewButton from './CreateNewButton';

const ClientArea = (props) => (
    <div className="client-area">
        <CreateNewButton />
        <SearchIcon />
        <NotificationsIcon />
        <LogoutIcon />
    </div>
);

export default ClientArea;