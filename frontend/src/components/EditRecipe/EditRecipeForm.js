import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import TagsBar from '../TagsBar/TagsBar';
import { createRecipe, getTags } from '../../lib/apiClient';
import Footer from '../Footer/Footer';
import './EditRecipeForm.css';

const customStyles = {
  control: provided => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    height: 70,
  }),
};

const EditRecipeForm = ({ history }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('ADVANCED');
  const [duration, setDuration] = useState('30 mins');
  const [servings, setServings] = useState('2');
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTagsWithId, setSelectedTagsWithId] = useState([]);

  useEffect(() => {
    getTags().then((data) => {
      if (tags.length === 0) setTags(data);
    });
  }, [tags]);

  useEffect(() => {
    let tagsWithIdObject = [];
    if (selectedTags) {
      tagsWithIdObject = selectedTags.map(e => ({ id: e.id, title: e.value }));
    }
    setSelectedTagsWithId(tagsWithIdObject);
  }, [selectedTags]);

  const handleSubmit = () => {
    const parsedDuration = parseInt(duration, 10);
    const parsedServings = parseInt(servings, 10);

    createRecipe({
      title,
      description,
      difficulty,
      duration: parsedDuration,
      servings: parsedServings,
      tags: selectedTagsWithId,
    }).then(response => history.push(`/recipe/${response.data.id}`));
  };

  return (
    <div className="editRecipeForm container-fluid">
      <div className="row form-recipe-label">
        <div className="form-title col-4 offset-4">
          <label htmlFor="title">
            Recipe Title
            <input className="form-control input-sm" id="title" type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
          </label>
        </div>
        <div className="form-snippet col-6 offset-3">
          <label htmlFor="snippet">
            Recipe Description
            <textarea className="form-control" id="description" name="description" value={description} rows="4" onChange={e => setDescription(e.target.value)} />
          </label>
        </div>
        <div className="search-tag col-6 offset-3">
          <label htmlFor="tags">
            Tags
            <Select
              className="st-search-input"
              styles={customStyles}
              value={selectedTags}
                // onChange to pass an event to setselectedOption, rather than a tag,
            // eslint-disable-next-line lodash/prefer-lodash-method
              options={tags.map((tag) => {
                const obj = {
                  label: tag.title,
                  value: tag.title,
                  id: tag.id,
                };
                return obj;
              })}
              onChange={(selected) => {
                setSelectedTags(selected);
                // eslint-disable-next-line max-len
              }
            }
              placeholder="Search and tag"
              isMulti
            />
            <TagsBar tags={selectedTagsWithId} />
          </label>
        </div>
      </div>
      <div className="row form-dropdown">
        <div className="dropdown col-2 offset-3">
          <h2>
            <img src="https://img.icons8.com/material/26/000000/bar-chart.png" alt="difficulty" />
            Difficulty
          </h2>
          <select className="difficulty" name="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
            <option>ADVANCED</option>
            <option>MEDIUM</option>
            <option>EASY</option>
          </select>
        </div>
        <div className="dropdown col-2">
          <h2>
            <i className="fas fa-clock" />
            Duration
          </h2>
          <select className="duration" name="duration" value={duration} onChange={e => setDuration(e.target.value)}>
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
          <select className="servings" name="servings" value={servings} onChange={e => setServings(e.target.value)}>
            <option>2</option>
            <option>4</option>
            <option>6</option>
            <option>8</option>
            <option>10</option>
            <option>12</option>
          </select>
        </div>
      </div>
      <div id="btn-container">
        <button type="submit" id="recipe-submit-btn" value="submit" onClick={handleSubmit}>Submit</button>
      </div>
      <div className="row form-footer">
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(EditRecipeForm);
