import React, { Component } from 'react';
import './CreateRecipeForm.css';
import Footer from '../Footer/Footer.js'

class CreateRecipeForm extends Component {
  // constructor(props) {
  //   this.state = {
  //     title: '',
  //     snippet: '',
  //     ingredients: [],
  //     directions: [],
  //     difficulty: '',
  //     duration: 0,
  //     servings: 0,
  //   };
    
  //   this.handleInputChange = this.handleInputChange.bind(this);
  // }

  // handleInputChange = (event) => {
  //   const name = event.target.id;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   })
  // }

	render() {
    return(
      <div className="createRecipeForm container-fluid">
        <div className="row form-title">
          <div className="col-4 offset-4">
            <h1>Create Recipe</h1>
          </div>
        </div>
        <div className="row form-recipe-label">
          <div class="form-group col-4 offset-4 ">
            <label for="recipe-title"><h2>Recipe Title</h2></label>
            <textarea class="form-control" id="title" rows="2"></textarea>
          </div>
          <div class="form-group col-6 offset-3">
            <label for="recipe-description"><h2>Recipe Description</h2></label>
            <textarea class="form-control" id="snippet" rows="4"></textarea>
          </div>
        </div>
        <div className="row form-dropdown">
          <div className="dropdown col-2 offset-3">
          <h2><i class="fas fa-signal"></i>Difficulty</h2>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="difficulty" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>
            <div className="difficulty dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="">EASY</a>
              <a className="dropdown-item" href="">MEDIUM</a>
              <a className="dropdown-item" href="">HARD</a>
            </div>
          </div>
          <div className="dropdown col-2">
            <h2><i class="fas fa-clock"></i>Duration</h2>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="duration" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>
            <div className="duration dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="">30</a>
              <a className="dropdown-item" href="">60</a>
              <a className="dropdown-item" href="">90</a>
            </div>
          </div>
          <div className="dropdown col-2">
            <h2><i class="fas fa-utensil-spoon"></i>Servings</h2>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="servings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>
            <div className="servings dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="">2</a>
              <a className="dropdown-item" href="">4</a>
              <a className="dropdown-item" href="">6</a>
            </div>
          </div>
        </div>
        <div className="row form-tag-input">
          <div className="col-4 offset-4">
            <div class="form-group">
              <label for="exampleFormControlTextarea1"><h2>Tags</h2></label>
              <input class="form-control" type="text" placeholder=""></input>
            </div> 
          </div>
        </div>
        <div className="row form-ingredients">
          <div className="col-6 offset-3">
            <div class="form-group">
              <label for="Ingredients"><h2>Ingredients</h2></label>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
            </div>
          </div>
        </div>
        <div className="row form-directions">
          <div className="col-6 offset-3">
            <div class="form-group">
              <label for="Directions"><h2>Directions</h2></label>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
              <input class="form-control" type="text" placeholder=""></input>
            </div>
          </div>
        </div>
        <div className="row form-photo-upload">
          <div className="col-2 offset-6">
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
        <div className="row form-submit">
          <div className="col-4 offset-4">
            <button type="button" className="btn btn-lg">Publish</button>
          </div>
        </div>
        <div className="row form-footer">
        <Footer />
        </div>
      </div>
    )
  }
}

export default CreateRecipeForm;