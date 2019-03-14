import React, { Component } from 'react';
import './EditRecipe.css';
import Footer from '../Footer/Footer.js'
import ImageUploader from 'react-images-upload';


class EditRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    })
  }
	render() {
    return(
      <div className='createRecipeForm container-fluid'>
        <div className='row form-title'>
          <div className='col-4 offset-4'>
            <h1>Create Recipe</h1>
          </div>
        </div>
        <div className='row form-recipe-label'>
          <div className='form-group col-4 offset-4 '>
            <label for='title'>Recipe Title</label>
            <textarea className='form-control' id="title" rows='2' ></textarea>
          </div>
          <div className='form-group col-6 offset-3'>
            <label for='snippet'>Recipe Description</label>
            <textarea className='form-control' id="snippet" rows='4' ></textarea>
          </div>
        </div>
        <div className='row form-dropdown'>
          <div className='dropdown col-2 offset-3'>
          <h2><i className='fas fa-signal'></i>Difficulty</h2>
            <button className='btn btn-secondary dropdown-toggle' type='button' id="difficulty" data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Advanced</button>
            <div className='difficulty dropdown-menu' aria-labelledby='dropdownMenuButton2'>
              <button className='dropdown-item' type='button'>Easy</button>
              <button className='dropdown-item' type='button'>Medium</button>
            </div>
          </div>
          <div className='dropdown col-2'>
            <h2><i className='fas fa-clock'></i>Duration</h2>
            <button className='btn btn-secondary dropdown-toggle' type='button' id="duration" data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>30 mins</button>
            <div className='duration dropdown-menu' aria-labelledby='dropdownMenuButton2'>
              <button className='dropdown-item' type='button'>60 mins</button>
              <button className='dropdown-item' type='button'>90 mins</button>
              <button className='dropdown-item' type='button'>90 mins</button>
            </div>
          </div>
          <div className='dropdown col-2'>
            <h2><i className='fas fa-utensil-spoon'></i>Servings</h2>
            <button className='btn btn-secondary dropdown-toggle' type='button' id="servings" data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>2 servings</button>
            <div className='servings dropdown-menu' aria-labelledby='dropdownMenuButton2'>
              <button className='dropdown-item' type='button'>4 servings</button>
              <button className='dropdown-item' type='button'>6 servings</button>
              <button className='dropdown-item' type='button'>8 servings</button>
            </div>
          </div>
        </div>
        <div className='row form-tag-input'>
          <div className='col-4 offset-4'>
            <div className='row tag-input'>
              <div className='col-11'>
                <div className='form-group'>
                  <label for='tag'><h2>Tags</h2></label>
                  <input className='form-control' type='text' placeholder='Search and tag'></input>          
                  <button className='card-meal-btn'>DINNER</button>
                </div>
              </div>
              <div className='col-1'>
                <div className='search-icon'>
                  <i class="fas fa-search"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row ingredients-title'>
          <div className='col-8 offset-2'>
            <div>Ingredients</div>
          </div>
        </div>
        <div className='row'>
          <div className='col-8 offset-2'>
            <div className='row form-ingredients'>
              <div className='col-7 offset-2'>
                <div className='ingredients form-group'>
                  <div className='ingredient-input'><input className='form-control' type='text' placeholder=''></input></div>
                  <div className='ingredient-input'><input className='form-control' type='text' placeholder=''></input></div>
                  <div className='ingredient-input'><input className='form-control' type='text' placeholder=''></input></div>
                  <div className='ingredient-input'><input className='form-control' type='text' placeholder=''></input></div>
                  <div className='ingredient-input'><input className='form-control' type='text' placeholder=''></input></div> 
                </div>
              </div>
              <div className='col-1'>
                <div className='row delete-input'><i class="fas fa-times"></i></div>
                <div className='row delete-input'><i class="fas fa-times"></i></div>
                <div className='row delete-input'><i class="fas fa-times"></i></div>
                <div className='row delete-input'><i class="fas fa-times"></i></div>
                <div className='row delete-input'><i class="fas fa-times"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div className='row add-button'>
          <div className='col-2 offset-7'>
            <button type='button' className='btn btn-primary btn-lg'><i class="fas fa-plus"></i>ADD</button>
          </div>
        </div>
        <div className='row directions-title'>
          <div className='col-8 offset-2'>
            <div>Directions</div>
          </div>
        </div>   
        <div className='row'>
          <div className='col-8 offset-2'>
            <div className='row form-directions'>
              <div className='col-7 offset-2'>
                <div className='directions form-group'>
                  <div className='direction-input'><input className='form-control' type='text' placeholder=''></input></div>
                  <div className='direction-input'><input className='form-control' type='text' placeholder=''></input></div>
                  <div className='direction-input'><input className='form-control' type='text' placeholder=''></input></div>
                  <div className='direction-input'><input className='form-control' type='text' placeholder=''></input></div>
                  <div className='direction-input'><input className='form-control' type='text' placeholder=''></input></div> 
                </div>
              </div>
              <div className='col-1'>
                <div className='row delete-input'><i class="fas fa-times"></i></div>
                <div className='row delete-input'><i class="fas fa-times"></i></div>
                <div className='row delete-input'><i class="fas fa-times"></i></div>
                <div className='row delete-input'><i class="fas fa-times"></i></div>
                <div className='row delete-input'><i class="fas fa-times"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div className='row add-button'>
          <div className='col-2 offset-7'>
            <button type='button' class='btn btn-primary btn-lg'><i class="fas fa-plus"></i>ADD</button>
          </div>
        </div>
        <div className='row photo-title'>
          <div className='col-8 offset-2'>
            <div>Photos</div>
          </div>
        </div>
        <div className='row form-photo-upload'>
          <div className='col-6 offset-3'>
            <ImageUploader 
              withIcon={true}
              buttonText='choose images'
              onChange={this.onDrop}
              imgExtension={[ '.jpg', '.gif', '.png' ]}
              maxFileSize={5242880}
            />
          </div>
        </div>
        <div className='row form-photo-upload-2'>
          <div className='col-2 offset-2'>
            <ImageUploader 
              withIcon={true}
              buttonText='choose images'
              onChange={this.onDrop}
              imgExtension={[ '.jpg', '.gif', '.png' ]}
              maxFileSize={5242880}
            />
          </div>
          <div className='col-2'>
            <ImageUploader 
              withIcon={true}
              buttonText='choose images'
              onChange={this.onDrop}
              imgExtension={[ '.jpg', '.gif', '.png' ]}
              maxFileSize={5242880}
            />
          </div>
          <div className='col-2'>
            <ImageUploader 
              withIcon={true}
              buttonText='choose images'
              onChange={this.onDrop}
              imgExtension={[ '.jpg', '.gif', '.png' ]}
              maxFileSize={5242880}
            />
          </div>
          <div className='col-2'>
            <ImageUploader 
              withIcon={true}
              buttonText='choose images'
              onChange={this.onDrop}
              imgExtension={[ '.jpg', '.gif', '.png' ]}
              maxFileSize={5242880}
            />
          </div>
        </div>
        <div className='row form-submit'>
          <div className='col-4 offset-4'>
            <button type='button' className='btn btn-lg'>Publish</button>
          </div>
        </div>
        <div className='row form-footer'>
          <Footer />
        </div>
      </div>
    )
  }
}

export default EditRecipe;