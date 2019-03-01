import React, { Component } from 'react';
import './CreateRecipeForm.css';

class CreateRecipeForm extends Component {
	render() {
    return(
      <div className="createRecipeForm container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="title">
              <h1>Create Recipe</h1>
            </div>
          </div>
        </div>
        <div className="recipe-label">
          <div class="form-group">
            <label for="exampleFormControlTextarea1"><h3>Recipe Title</h3></label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
          </div> 
          <div class="form-group">
            <label for="exampleFormControlTextarea1"><h3>Recipe Description</h3></label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
          </div>
        </div>
        <div className="recipe-form">
          <div className="row">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="">Action</a>
                <a className="dropdown-item" href="">Another action</a>
                <a className="dropdown-item" href="">Something else here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
}

export default CreateRecipeForm;