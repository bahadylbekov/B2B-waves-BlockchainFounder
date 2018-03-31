import React from 'react';
import TitlePage from './TitlePage';
import ClientArea from './ClientArea';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <TitlePage />
                <ClientArea />
            </div>
        );
    }
};

export default Navbar;