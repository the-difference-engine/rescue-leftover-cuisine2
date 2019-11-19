import React, { useState, useEffect } from 'react';
import map from 'lodash/map';
import reject from 'lodash/reject';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import TagsBar from '../TagsBar/TagsBar';
import { createRecipe, getTags } from '../../lib/apiClient';
import barChart from '../../assets/bar-chart.png';
import Footer from '../Footer/Footer';
import './EditRecipeForm.css';
import EditDirections from './EditDirections/EditDirections';
import Ingredients from './Ingredients/Ingredients';

const customStyles = {
  control: provided => ({
    ...provided,
    height: 70,
  }),
  multiValueLabel: provided => ({
    ...provided,
    display: 'none',
  }),
  multiValueRemove: provided => ({
    ...provided,
    display: 'none',
  }),
  clearIndicator: provided => ({
    ...provided,
    display: 'none',
  }),
};

const EditRecipeForm = ({ history }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('ADVANCED');
  const [duration, setDuration] = useState('30 mins');
  const [servings, setServings] = useState('2');
  const [directions, setDirections] = useState(['']);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTagsWithId, setSelectedTagsWithId] = useState([]);
  const [refreshTags, setRefreshTags] = useState(true);
  const [ingredients, setIngredients] = useState(['']);
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [ingredientsError, setIngredientError] = useState('');
  const [directionsError, setDirectionsError] = useState('');


  useEffect(() => {
    if (refreshTags) {
      getTags().then((data) => {
        setTags(data);
      });
      setRefreshTags(false);
    }
  }, [refreshTags]);

  useEffect(() => {
    let tagsWithIdObject = [];
    if (selectedTags) {
      tagsWithIdObject = map(selectedTags, e => ({ id: e.id, title: e.value }));
    }
    setSelectedTagsWithId(tagsWithIdObject);
  }, [selectedTags]);

  const validate = () => {
    if (!title) {
      setTitleError('Title cannot be blank');
    } if (!description) {
      setDescriptionError('Description cannot be blank');
    } if (ingredients.length <= 1) {
      setIngredientError('Ingredients cannot be blank');
    } if (directions.length <= 1) {
      setDirectionsError('Directions cannot be blank');
    }
  };

  const handleSubmit = () => {
    const parsedDuration = parseInt(duration, 10);
    const parsedServings = parseInt(servings, 10);
    if (!title || !description || ingredients.length <= 1 || directions.length <= 1) {
      validate();
    } else {
      createRecipe({
        title,
        description,
        difficulty,
        duration: parsedDuration,
        servings: parsedServings,
        tags: selectedTagsWithId,
        directions,
        ingredients,
      }).then(response => history.push(`/recipe/${response.data.id}`));
    }
  };

  const handleDelete = (tagTitle) => {
    const newTagsWithId = reject(selectedTagsWithId, ['title', tagTitle]);
    setSelectedTagsWithId(newTagsWithId);
    const newTags = reject(selectedTags, ['value', tagTitle]);
    setSelectedTags(newTags);
  };

  const refreshSelectedTags = (newTagData) => {
    setRefreshTags(true);
    const newSelectedTag = {
      id: newTagData.id,
      label: newTagData.title,
      value: newTagData.title,
    };
    const newTags = selectedTags.concat(newSelectedTag);
    setSelectedTags(newTags);
  };

  return (
    <div className="editRecipeForm container-fluid">
      <div className="row form-recipe-label">
        <div className="form-title col-4 offset-4">
          <label className="detail-labels" htmlFor="title">
            Recipe Title
            <input className="form-control input-sm recipe-details" id="title" type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} required />
          </label>
          <div className="error-message">{title ? '' : titleError}</div>
        </div>
        <div className="form-snippet col-6 offset-3">
          <label className="detail-labels" htmlFor="snippet">
            Recipe Description
            <textarea className="form-control recipe-details recipe-description" id="description" name="description" value={description} rows="4" onChange={e => setDescription(e.target.value)} required />
          </label>
          <div className="error-message">{description ? '' : descriptionError}</div>
        </div>
        <div className="search-tag col-6 offset-3">
          <label className="detail-labels" htmlFor="tags">
            Tags
            <Select
              className="st-search-input"
              styles={customStyles}
              value={selectedTags}
              options={map(tags, (tag) => {
                const obj = {
                  label: tag.title,
                  value: tag.title,
                  id: tag.id,
                };
                return obj;
              })}
              onChange={(selected) => {
                setSelectedTags(selected);
              }}
              placeholder="Search and tag"
              isMulti
            />
            <TagsBar
              deleteSelectedTag={handleDelete}
              tags={selectedTagsWithId}
              showDeleteButton
              allTags={tags}
              refreshTags={refreshSelectedTags}
            />
          </label>
        </div>
      </div>
      <div className="row">
        <div className="dropdown col-2 offset-3 form-dropdown ">
          <h2 className="dropdown-headings">
            <img className="recipe-detail-icons" src={barChart} alt="difficulty" />
            Difficulty
          </h2>
          <select className="recipe-details detail-selection" name="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
            <option>Advanced</option>
            <option>Medium</option>
            <option>Easy</option>
          </select>
        </div>
        <div className="dropdown col-2 form-dropdown">
          <h2 className="dropdown-headings">
            <i className="recipe-detail-icons fas fa-clock" />
            Duration
          </h2>
          <select className="recipe-details detail-selection" name="duration" value={duration} onChange={e => setDuration(e.target.value)}>
            <option>30 minutes</option>
            <option>60 minutes</option>
            <option>90 minutes</option>
            <option>120 minutes</option>
          </select>
        </div>
        <div className="dropdown col-2 form-dropdown">
          <h2 className="dropdown-headings">
            <i className="recipe-detail-icons fas fa-utensil-spoon" />
            Servings
          </h2>
          <select className="recipe-details detail-selection" name="servings" value={servings} onChange={e => setServings(e.target.value)}>
            <option>2</option>
            <option>4</option>
            <option>6</option>
            <option>8</option>
            <option>10</option>
            <option>12</option>
          </select>
        </div>
      </div>
      <Ingredients
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      <div className="error-message">{ingredients.length <= 1 ? ingredientsError : ''}</div>
      <EditDirections
        directions={directions}
        setDirections={setDirections}
      />
      <div className="error-message">{directions.length <= 1 ? directionsError : ''}</div>
      <div>
        <div id="recipe-submit-containaner">
          <button type="submit" id="recipe-submit-btn" value="submit" onClick={handleSubmit}>Submit</button>
        </div>
        <div className="row form-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default withRouter(EditRecipeForm);
