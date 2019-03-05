import React, { Component } from 'react';
import './CreateRecipeForm.css';

class CreateRecipeForm extends Component {
	render() {
    return(
      <div className="createRecipeForm container-fluid">
        <div className="row form-title">
          <div className="col-4 offset-4">
            <h1>Create Recipe</h1>
          </div>
        </div>
        <div className="row form-recipe-label">
        <div className="col-4 offset-4">
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
        <div className="row form-dropdown">
          <div className="dropdown col-2 offset-3">
            <h2>Difficulty</h2>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="">Action</a>
              <a className="dropdown-item" href="">Another action</a>
              <a className="dropdown-item" href="">Something else here</a>
            </div>
          </div>
          <div className="dropdown col-2">
            <h2>Duration</h2>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="">Action</a>
              <a className="dropdown-item" href="">Another action</a>
              <a className="dropdown-item" href="">Something else here</a>
            </div>
          </div>
          <div className="dropdown col-2">
            <h2>Servings</h2>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="">Action</a>
              <a className="dropdown-item" href="">Another action</a>
              <a className="dropdown-item" href="">Something else here</a>
            </div>
          </div>
        </div>
        <div className="row form-tag-input">
          <div className="col-12">
            <div class="form-group">
              <label for="exampleFormControlTextarea1"><h3>Tags</h3></label>
              <input class="form-control" type="text" placeholder=""></input>
            </div> 
          </div>
        </div>
        <div className="row form-ingredients">
          <div className="col-12">
            <div class="form-group">
              <label for="exampleFormControlTextarea1"><h3>Ingredients</h3></label>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
            </div>
          </div>
        </div>
        <div className="row form-directions">
          <div className="col-12">
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
        <div className="row form-photo-upload">
          <div className="col-12">
            <div className="input-group">
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="inputGroupFile04"></input>
                <label className="custom-file-label" for="inputGroupFile04">Choose file</label>
              </div>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateRecipeForm;