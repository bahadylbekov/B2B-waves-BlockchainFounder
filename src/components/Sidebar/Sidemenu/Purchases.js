import React from 'react';
import PurchasesSubMenu from './PurchasesSubMenu';

class Purchases extends React.Component {
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
                        <span><i className="fas fa-shopping-cart fa-lg"></i></span>
                        <span className="title">Purchases</span></a>
                        <button onClick={this.showSideBarMenuElement} className="dropdown-btn">
                                <i className="fas fa-chevron-down"></i></button>
                </div>
            {this.state.isVisible ? <PurchasesSubMenu /> : null}
            </div>
        );
    }
};

export default Purchases;