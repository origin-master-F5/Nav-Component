import React from 'react';
import TopBar from './TopBar.jsx';
import BottomBar from './BottomBar.jsx';
import BottomNavBar from './BottomNavBar.jsx'
import Logo from './Logo.jsx';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <Logo />
          <div>
            <TopBar />
            <BottomBar />
          </div>
        </div>
            <BottomNavBar />


      </div>

    )
  }

}

export default NavBar;

