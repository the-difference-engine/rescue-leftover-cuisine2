import React, { Component } from 'react';
import { Table, InputGroupText, Input } from 'reactstrap';

export default class Recipes extends Component {
  render() {
    return (
      <Table borderless>
        <thead>
          <tr>
            <th />
            <th>Recipe Name</th>
            <th>Created By</th>
            <th>Date Created</th>
            <th>Number of Comments</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {recipes.map(recipe => {
            return (
              <tr>
                <th scope="row">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                </th>
                <td>{recipe.name}</td>
                <td>{recipe.createdBy}</td>
                <td>{recipe.dateCreated}</td>
                <td>{recipe.numberOfComments}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

const recipes = [
  {
    name: 'Overhold',
    createdBy: 'Adella Joinson',
    dateCreated: '12/15/2018',
    numberOfComments: 66,
  },
  {
    name: 'Daltfresh',
    createdBy: 'Palm Hick',
    dateCreated: '3/21/2018',
    numberOfComments: 58,
  },
  {
    name: 'Bytecard',
    createdBy: 'Amie Lukes',
    dateCreated: '6/3/2018',
    numberOfComments: 1,
  },
  {
    name: 'Zaam-Dox',
    createdBy: 'Lambert Petel',
    dateCreated: '5/3/2018',
    numberOfComments: 9,
  },
  {
    name: 'Kanlam',
    createdBy: 'Meta Stanbrooke',
    dateCreated: '3/24/2018',
    numberOfComments: 44,
  },
  {
    name: 'Y-Solowarm',
    createdBy: 'Silvano Curtois',
    dateCreated: '7/5/2018',
    numberOfComments: 58,
  },
  {
    name: 'Home Ing',
    createdBy: 'Faydra Holhouse',
    dateCreated: '12/23/2018',
    numberOfComments: 36,
  },
  {
    name: 'Span',
    createdBy: 'Almire Edmunds',
    dateCreated: '5/25/2018',
    numberOfComments: 62,
  },
  {
    name: 'Biodex',
    createdBy: 'Maryl Mercey',
    dateCreated: '3/19/2018',
    numberOfComments: 22,
  },
  {
    name: 'Pannier',
    createdBy: 'Tan Carvill',
    dateCreated: '2/8/2019',
    numberOfComments: 54,
  },
  {
    name: 'Zamit',
    createdBy: 'Adaline Trevain',
    dateCreated: '3/28/2018',
    numberOfComments: 9,
  },
];
