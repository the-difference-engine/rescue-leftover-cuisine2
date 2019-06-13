import React, { Component } from 'react';
import './SearchLozenge.css';
// import { getRecipes } from '../../lib/apiClient';


class SearchLozenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lozenges: [],
    };
  }

  componentWillMount() {
    const { searchTerm } = this.props;
    console.log(searchTerm);
    // this.createLozenges(searchTerm);
  }


  // createLozenges(searchTerm) {
  //   this.setState({
  //     lozenges: searchTerm.split(' '),
  //   });
  // }


  render() {
    const { lozenges } = this.state;
    // console.log(lozenges);
    return (
      <div className="searchLozenge container-fluid">
        <div className="row">
          <div className="lozengeBubbles">
            <h2>Filter Your Results!</h2>
            { lozenges[0] }
          </div>
        </div>
      </div>
    );
  }
}

export default SearchLozenge;
