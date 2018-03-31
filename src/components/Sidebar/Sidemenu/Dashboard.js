import React from 'react';
import DashboardSubMenu from './DashboardSubMenu';

class Dashboard extends React.Component {
    state = {
        isVisible: false
    };
    showSideBarMenuElement = () => {
        this.setState(() => ({ isVisible: !this.state.isVisible}));
        console.log(this.state.showMenuElement);
    };
    render() {
        return (
            <div>
                <div className="menu-item">
                    <a href="#" className="active">
                    <span><i className="fas fa-home fa-lg"></i></span>
                    <span className="title">Dashboard</span></a>
                    <button onClick={this.showSideBarMenuElement} className="dropdown-btn">
                            <i className="fas fa-chevron-down"></i></button>
                </div>
                {this.state.isVisible ? <DashboardSubMenu /> : null}
            </div>
        );
    }
};

export default Dashboard;