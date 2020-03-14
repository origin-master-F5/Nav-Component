import React from 'react';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-top">
        <div>
          <img className="navbar-logo" src="https://origin-master.s3-us-west-1.amazonaws.com/bblogo.png" />
        </div>

        <div className="navbar-right">
          <div className="navbar-right-top">
            <ul className="navbar-links">
              <li><a href="#">Products</a></li>
              <li><a href="#">Brands</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>
        </div>

      <div className="navbar-top">
      <input className="navbar-search" placeholder="Search Best Buy" />
      </div>

      </div>
    )
  }

}

export default NavBar;

