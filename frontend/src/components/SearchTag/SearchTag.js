import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import './SearchTag.css';


const tags = [
    { label: "Breakfast", value: 1 },
    { label: "Lunch", value: 2 },
    { label: "Dinner", value: 3 },
    { label: "Snaks", value: 4 },
];

class SearchTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = selectedOption => {
        this.setState({ selectedOption });
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <div className="st-search">
                <Select
                    className="st-search-input"
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={tags}
                    placeholder="Select a tag"
                    isMulti
                />
            </div>
        );
    }
}

export default withRouter(SearchTag);