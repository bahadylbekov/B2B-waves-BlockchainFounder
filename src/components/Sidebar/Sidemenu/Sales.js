import React from 'react';
import SalesSubMenu from './SalesSubMenu';

class Sales extends React.Component {
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
                    <a href="#">
                        <span><i className="fas fa-credit-card fa-lg"></i></span>
                        <span className="title">Voting</span></a>
                        <button onClick={this.showSideBarMenuElement} className="dropdown-btn">
                                <i className="fas fa-chevron-down"></i></button>
                    </div>
                {this.state.isVisible ? <SalesSubMenu /> : null}
            </div>
        );
    }
};

export default Sales;