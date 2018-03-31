import React from 'react';
import Profile from './Profile/Profile';
import Sidemenu from './Sidemenu/Sidemenu';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <Profile />
                <Sidemenu />
            </div>
        );
    }
};

export default Sidebar;