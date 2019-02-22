import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './Recipes.css';

export default class Recipes extends Component {
  render() {
    const columns = [
      {
        dataField: 'inStock', // name?
        text: '',
        formatter: (cellContent, row) => (
          <div className="checkbox">
            <label>
              <input type="checkbox" checked={row.inStock} />
            </label>
          </div>
        ),
      },
      {
        dataField: 'name',
        text: 'Recipe Name',
        headerStyle: { textAlign: 'center' },
        style: { textAlign: 'center' },
      },
      {
        dataField: 'createdBy',
        text: 'Created By',
        headerStyle: { textAlign: 'center' },
        style: { textAlign: 'center' },
      },
      {
        dataField: 'dateCreated',
        text: 'Date Created',
        headerStyle: { textAlign: 'center' },
        style: { textAlign: 'center' },
      },
      {
        dataField: 'numberOfComments',
        text: 'Number Of Comments',
        headerStyle: { textAlign: 'center' },
        style: { textAlign: 'center' },
      },
      {
        dataField: 'edit',
        text: '',
        headerStyle: { textAlign: 'center' },
        style: { textAlign: 'center' },
        formatter: (cellContent, row) => (
          <div>
            <button>
              <img
                src="https://img.icons8.com/windows/32/000000/edit.png"
                alt="edit"
              />
            </button>
            <button>
              <img
                src="https://img.icons8.com/windows/32/000000/cancel.png"
                alt="delete"
              />
            </button>
          </div>
        ),
      },
    ];
    const options = {
      hideSizePerPage: true,
      sizePerPageList: [
        {
          text: '5',
          value: 20,
        },
        {
          text: 'All',
          value: recipes.length,
        },
      ],
    };

    return (
      <BootstrapTable
        keyField="id"
        data={recipes}
        columns={columns}
        bordered={false}
        pagination={paginationFactory(options)}
      />
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
