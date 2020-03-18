import React from 'react';
import TopBar from './TopBar.jsx';
import BottomBar from './BottomBar.jsx';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        
        <TopBar />
        <BottomBar />

      </div>

    )
  }

}

export default NavBar;

