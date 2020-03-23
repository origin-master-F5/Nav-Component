import React from 'react';
import AutoCompleteBox from '../AutoCompleteBox/AutoCompleteBox.jsx';


class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
    }

    onChange = event => {
        this.setState({text: event.target.value})
    }

    render() {
        return (
            <div className="navbar-topbarmiddle-searchbar">
                <input value={this.state.text} name="text" placeholder="Search Best Buy" onChange={this.onChange} />
                {this.state.text ? <AutoCompleteBox search={this.state.text} /> : null}
                <button className="navbar-searchbutton">
                    <span className="navbar-searchicon">
                        <img src="https://origin-master.s3-us-west-1.amazonaws.com/search_icon.svg" />
                    </span>
                </button>
            </div>
        )
    }

}

export default SearchBar;