import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import TagsBar from '../TagsBar/TagsBar';
import { createRecipe, getTags } from '../../lib/apiClient';
import Footer from '../Footer/Footer';
import barChart from '../../assets/bar-chart.png';
import './EditRecipeForm.css';

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

  const handleDelete = (tagTitle) => {
    const newTagsWithId = selectedTagsWithId.filter(tag => tag.title !== tagTitle);
    setSelectedTagsWithId(newTagsWithId);
    const newTags = selectedTags.filter(tag => tag.value !== tagTitle);
    setSelectedTags(newTags);
  };

  return (
    <div className="editRecipeForm container-fluid">
      <div className="row form-recipe-label">
        <div className="form-title col-4 offset-4">
          <label className="detail-labels" htmlFor="title">
          Recipe Title
            <input className="form-control input-sm recipe-details" id="title" type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
          </label>
        </div>
        <div className="form-snippet col-6 offset-3">
          <label className="detail-labels" htmlFor="snippet">
          Recipe Description
            <textarea className="form-control recipe-details" id="description" name="description" value={description} rows="4" onChange={e => setDescription(e.target.value)} />
          </label>
        </div>
        <div className="search-tag col-6 offset-3">
          <label htmlFor="tags">
            Tags
            <Select
              className="st-search-input"
              styles={customStyles}
              value={selectedTags}
              options={tags.map((tag) => {
                const obj = {
                  label: tag.title,
                  value: tag.title,
                  id: tag.id,
                  className: 'hide',
                };
                return obj;
              })}
              onChange={(selected) => {
                setSelectedTags(selected);
              }
            }
              placeholder="Search and tag"
              isMulti
            />
            <TagsBar
              deleteSelTag={handleDelete}
              tags={selectedTagsWithId}
              showDeleteButton="yes"
              allTags={tags}
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
      <div id="recipe-submit-containaner">
        <button type="submit" id="recipe-submit-btn" value="submit" onClick={handleSubmit}>Submit</button>
      </div>
      <div className="row form-footer">
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(EditRecipeForm);
