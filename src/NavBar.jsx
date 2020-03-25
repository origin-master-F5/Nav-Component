import React from 'react';
import TopBar from './TopBar/TopBar.jsx';
import BottomBar from './BottomBar/BottomBar.jsx';
import OverlayBackdrop from './OverlayBackdrop.jsx';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="navbar">

        <TopBar />
        <BottomBar />
        {/* <OverlayBackdrop /> */}

      </div>

    )
  }

}

export default NavBar;

