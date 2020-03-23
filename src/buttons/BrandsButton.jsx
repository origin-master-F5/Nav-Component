import React from 'react';
import BrandsMenu from '../dropDownmenus/BrandsMenu.jsx'
import LeftNavButton from './LeftNavButton.jsx';


class BrandsButton extends React.Component {
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
                <LeftNavButton activeClass={activeClass} onClick={this.onClick} title="Brands" />
                <BrandsMenu active={activeClass} />
            </li>
        )
    }
}


export default BrandsButton;