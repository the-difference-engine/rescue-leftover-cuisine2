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
        <div class="form-group">
          <label for="exampleFormControlTextarea1"><h1>Create Recipe</h1></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div> 
      </div>
      )
    }
}

export default CreateRecipeForm;