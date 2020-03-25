import React from 'react';

const OrderStatusMenu = props => (
    <div className="navbar-menu-box-right">
        <div className="navbar-order-status-container">
            <div className="navbar-carousel">
                <div className="navbar-carousel-header">
                    <h2 className="navbar-carousel-header-content">
                        <span>
                            <img width="34" style={{ "margin-right": "10px", "margin-bottom": "3px", "height": "30px" }} />
                                Order Status
                                </span>
                    </h2>
                </div>

                <div className="navbar-login-container">
                    <div className="navbar-login">
                        <div>
                            <h1 className="navbar-login-header">
                                Hi there! Looking
                            <br />
                            for a current order?
                            </h1>
                            <p className="navbar-login-subheader">
                                You'll need to sign in or have your order number handy.
                            </p>
                            <a href="#">
                                <button className="navbar-btn navbar-btn-secondary">Continue</button>
                            </a>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default OrderStatusMenu;