import React from 'react';
import AutoCompleteBox from '../AutoCompleteBox/AutoCompleteBox.jsx';
import axios from 'axios';
var _ = require('lodash');


class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "",
            items: []
        }

        this.debouncedSearch = _.debounce(function () {
            this.searchText(this.state.text);
        }, 200);
    }

    onChange = event => {
        this.setState({ text: event.target.value }, () => {
            //this.searchText(this.state.text);
            this.debouncedSearch();
        });
    }

    searchText = (text) => {
        if (text.trim()) {
            axios.post("http://127.0.0.1:3001/search", { text: this.state.text })
                .then(result => {
                    this.setState({
                        items: result.data
                    });
                })
                .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <div className="navbar-topbarmiddle-searchbar">
                <input value={this.state.text} name="text" placeholder="Search Best Buy" onChange={this.onChange} />
                {this.state.items.length && this.state.text ? <AutoCompleteBox items={this.state.items} search={this.state.text} /> : null}
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