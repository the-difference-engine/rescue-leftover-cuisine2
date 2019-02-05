import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';



const RecipeSearchList = () => {

  const recipes = [
    {
      photos: ['http://placekitten.com/g/325/325'],
      meal: 'BREAKFAST',
      title: 'Scrambled Eggs',
      snippet: 'The best scrambled eggs recipe, hands down!',
      difficulty: 'MEDIUM',
      duration: 5,
      servings: 10,
      id: 1,
    },
    {
      photos: ['http://placekitten.com/g/325/325'],
      meal: 'LUNCH',
      title: 'Huevos Rancheros',
      snippet: "You can't get better huevos rancheros, even from your favorite local Mexian resuatrant.",
      difficulty: 'EASY',
      duration: 8,
      servings: 4,
      id: 2,
    },
    {
      photos: ['http://placekitten.com/g/325/325'],
      meal: 'DINNER',
      title: 'Lasagne',
      snippet: 'Not even your mother can make this better.  And no gender-reveals here!',
      difficulty: 'ADVANCED',
      duration: 7,
      servings: 6,
      id: 3,
    },
  ]

  return (
    <div id="wrapper">
      {recipes.map(recipe =>
        <RecipeCard
          {...recipe}
          key={recipe.id}
        />
      )}
    </div>
  )
}

export default RecipeSearchList;