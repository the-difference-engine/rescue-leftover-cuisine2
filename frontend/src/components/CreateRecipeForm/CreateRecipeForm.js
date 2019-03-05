import React, { Component } from 'react';
import './CreateRecipeForm.css';

class CreateRecipeForm extends Component {
	render() {
    return(
      <div className="createRecipeForm container-fluid">
        <div className="row">
          <div className="form-title">
            <h1>Create Recipe</h1>
          </div>
        </div>
        <div className="row">
        <div className="form-recipe-label">
          <div class="form-group">
            <label for="exampleFormControlTextarea1"><h3>Recipe Title</h3></label>
            <input class="form-control" type="text" placeholder=""></input>
          </div> 
          <div class="form-group">
            <label for="exampleFormControlTextarea1"><h3>Recipe Description</h3></label>
            <input class="form-control" type="text" placeholder=""></input>
          </div>
        </div>
      </div>
        <div className="row">
          <div className="dropdown">
            <h2>Difficulty</h2>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="">Action</a>
              <a className="dropdown-item" href="">Another action</a>
              <a className="dropdown-item" href="">Something else here</a>
            </div>
          </div>
          <div className="dropdown">
            <h2>Duration</h2>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="">Action</a>
              <a className="dropdown-item" href="">Another action</a>
              <a className="dropdown-item" href="">Something else here</a>
            </div>
          </div>
          <div className="dropdown">
            <h2>Servings</h2>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="">Action</a>
              <a className="dropdown-item" href="">Another action</a>
              <a className="dropdown-item" href="">Something else here</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-tag-input">
            <div class="form-group">
              <label for="exampleFormControlTextarea1"><h3>Tags</h3></label>
              <input class="form-control" type="text" placeholder=""></input>
            </div> 
          </div>
        </div>
        <div className="row">
          <div className="form-ingredients">
            <div class="form-group">
              <label for="exampleFormControlTextarea1"><h3>Ingredients</h3></label>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
            </div>
          </div>
          <div className="form-directions">
            <div class="form-group">
              <label for="exampleFormControlTextarea1"><h3>Directions</h3></label>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateRecipeForm;