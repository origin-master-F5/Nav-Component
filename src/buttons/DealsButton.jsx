import React from 'react';
import DealsMenu from '../dropDownmenus/DealsMenu.jsx'
import LeftNavButton from './LeftNavButton.jsx';


class DealsButton extends React.Component {
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
                <LeftNavButton activeClass={activeClass} onClick={this.onClick} title="Deals" />
                <DealsMenu active={activeClass} />
            </li>
        )
    }
}


export default DealsButton;