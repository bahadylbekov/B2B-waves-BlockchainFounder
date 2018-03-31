import React from 'react';

const Sidebar = (props) => (
    <section className="sidebar">
            <ul className="sidebar-menu" >
                <li>
                    <div className="menu-item">
                        <a href="#" className="active">
                            <span><i className="fas fa-home fa-lg"></i></span>
                            <span className="title">Dashboard</span></a>
                            <button 
                                onClick={props.showSideBarMenuElement}
                                className="dropdown-btn">
                                    <i className="fas fa-chevron-down"></i>
                            </button>
                    </div>
                    <ul className="submenu">
                        <li className="subtitle">
                            <a href="#" className="active">Financial Result</a>
                        </li>
                        <li className="subtitle">
                            <a href="#">Contracts</a>
                        </li>
                        <li className="subtitle">
                            <a href="#">Contacts</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <div className="menu-item">
                        <a href="#">
                            <span><i className="fas fa-credit-card fa-lg"></i></span>
                            <span className="title">Sales</span></a>
                            <button 
                                className="dropdown-btn">
                                    <i className="fas fa-chevron-down"></i>
                            </button>
                    </div>
                    <ul className="submenu">
                        <li className="subtitle">
                            <a href="#" className="active">All Sales</a>
                        </li>
                        <li className="subtitle">
                            <a href="#">Draft</a>
                        </li>
                        <li className="subtitle">
                            <a href="#">Paid</a>
                        </li>
                        <li className="subtitle">
                            <a href="#">Awaiting Payment</a>
                        </li>
                        <li className="subtitle">
                            <a href="#">Overdue</a>
                        </li>
                        <li className="subtitle">
                            <a href="#">Canceled</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <div className="menu-item">
                        <a href="#">
                            <span><i className="fas fa-shopping-cart fa-lg"></i></span>
                            <span className="title">Purchases</span></a>
                            <button 
                                className="dropdown-btn">
                                    <i className="fas fa-chevron-down"></i>
                            </button>
                    </div>
                    <ul className="submenu">
                        <li className="subtitle">
                            <a href="#" className="active">All Purchases</a>
                        </li>
                        <li className="subtitle">
                            <a href="#">Draft</a>
                        </li>
                        <li className="subtitle">
                            <a href="#">Paid</a>
                        </li>
                        <li className="subtitle">
                            <a href="#">Awaiting Payment</a>
                        </li>
                        <li className="subtitle">
                            <a href="#">Overdue</a>
                        </li>
                        <li className="subtitle">
                            <a href="#">Canceled</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <div className="menu-item">
                        <a href="#">
                            <span><i className="fas fa-address-card fa-lg"></i></span>
                            <span className="title">Contacts</span></a>
                    </div>
                </li>

                <li>
                    <div className="menu-item">
                        <a href="#">
                            <span><i className="fas fa-archive fa-lg"></i></span>
                            <span className="title">Inventory</span></a>
                    </div>
                </li>

                <li>
                    <div className="menu-item">
                        <a href="#">
                            <span><i className="fas fa-folder fa-lg"></i></span>
                            <span className="title">Documents</span></a>
                    </div>
                </li>
            </ul>
    </section>
);

export default Sidebar;