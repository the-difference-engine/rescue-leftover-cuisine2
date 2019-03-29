import React, { Component } from 'react';

import Footer from '../Footer/Footer';
import './EditRecipeForm.css';

class EditRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '', // eslint-disable-line react/no-unused-state
      snippet: '', // eslint-disable-line react/no-unused-state
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="editRecipeForm container-fluid">
        <div className="row justify-content-md-center">
          <h1 className="text-center">Create Recipe</h1>
        </div>
        <div className="row form-recipe-label">
          <div className="form-title col-4 offset-4">
            <label htmlFor="title">
Recipe Title
              <input className="form-control input-sm" id="title" type="text" onChange={this.handleInputChange} />
            </label>
          </div>
          <div className="form-snippet col-6 offset-3">
            <label htmlFor="snippet">
Recipe Description
              <textarea className="form-control" id="snippet" rows="4" onChange={this.handleInputChange} />
            </label>
          </div>
        </div>
        <div className="row form-dropdown">
          <div className="dropdown col-2 offset-3">
            <h2>
              <img src="https://img.icons8.com/material/26/000000/bar-chart.png" alt="difficulty" />
Difficulty
            </h2>
            <select className="difficulty">
              <option>Advanced</option>
              <option>Medium</option>
              <option>Easy</option>
            </select>
          </div>
          <div className="dropdown col-2">
            <h2>
              <i className="fas fa-clock" />
Duration
            </h2>
            <select className="duration">
              <option>30 mins</option>
              <option>60 mins</option>
              <option>90 mins</option>
              <option>120 mins</option>
            </select>
          </div>
          <div className="dropdown col-2">
            <h2>
              <i className="fas fa-utensil-spoon" />
Servings
            </h2>
            <select className="servings">
              <option>4</option>
              <option>8</option>
              <option>12</option>
            </select>
          </div>
        </div>
        <div className="row form-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default EditRecipeForm;
