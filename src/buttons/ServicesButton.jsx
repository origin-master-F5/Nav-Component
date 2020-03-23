import React from 'react';
import ServicesMenu from '../dropDownmenus/ServicesMenu.jsx'
import LeftNavButton from './LeftNavButton.jsx';


class ServicesButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    onClick = event => {
        this.setState({
            active: !this.state.active
        });
    }

    render() {

        const activeClass = this.state.active ? "active" : "";

        return (
            <li>
                <LeftNavButton activeClass={activeClass} onClick={this.onClick} title="Services" />
                <ServicesMenu active={activeClass} />
            </li>
        )
    }
}


export default ServicesButton;