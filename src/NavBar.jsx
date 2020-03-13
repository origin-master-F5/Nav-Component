import React from 'react';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div align="center">
        This is an image:
        <div>
          <img src="https://origin-master.s3-us-west-1.amazonaws.com/IMG_0328.JPG" />
        </div>
      </div>
    )
  }

}

export default NavBar;

