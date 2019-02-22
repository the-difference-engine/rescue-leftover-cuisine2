import React, { Component } from 'react';
import './Users.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default class Users extends Component {
  render() {
    const columns = [
      {
        dataField: 'name',
        text: 'Member Name',
        headerStyle: { textAlign: 'center' },
        style: { textAlign: 'center' },
      },
      {
        dataField: 'memberSince',
        text: 'Member Since',
        headerStyle: { textAlign: 'center' },
        style: { textAlign: 'center' },
      },
      {
        dataField: 'numberOfRecipes',
        text: 'Number Of Recipes',
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
          value: users.length,
        },
      ],
    };

    return (
      <BootstrapTable
        keyField="id"
        data={users}
        columns={columns}
        bordered={false}
        pagination={paginationFactory(options)}
      />
    );
  }
}

const users = [
  {
    name: 'Darell Bernardi',
    memberSince: '4/12/2018',
    numberOfRecipes: 614,
  },
  {
    name: 'Cesya Polamontayne',
    memberSince: '7/3/2018',
    numberOfRecipes: 474,
  },
  {
    name: 'Marjy Standley',
    memberSince: '5/19/2018',
    numberOfRecipes: 178,
  },
  {
    name: 'Gennifer Mcwhinney',
    memberSince: '6/22/2018',
    numberOfRecipes: 919,
  },
  {
    name: 'Fredi Penquet',
    memberSince: '6/22/2018',
    numberOfRecipes: 242,
  },
  {
    name: 'Rosanne Churn',
    memberSince: '10/21/2018',
    numberOfRecipes: 758,
  },
  {
    name: 'Roanna Layfield',
    memberSince: '10/7/2018',
    numberOfRecipes: 418,
  },
  {
    name: 'Tommi Humblestone',
    memberSince: '1/8/2019',
    numberOfRecipes: 935,
  },
  {
    name: 'Donnell Kermitt',
    memberSince: '1/24/2019',
    numberOfRecipes: 268,
  },
  {
    name: 'Gregory Gilbertson',
    memberSince: '12/17/2018',
    numberOfRecipes: 495,
  },
  {
    name: "Philbert L'argent",
    memberSince: '9/5/2018',
    numberOfRecipes: 349,
  },
  {
    name: 'Wenona Kull',
    memberSince: '11/23/2018',
    numberOfRecipes: 925,
  },
  {
    name: 'Letti Temperley',
    memberSince: '2/15/2019',
    numberOfRecipes: 906,
  },
  {
    name: 'Edmund Bruyns',
    memberSince: '12/13/2018',
    numberOfRecipes: 457,
  },
  {
    name: 'Gussy Labrum',
    memberSince: '2/18/2019',
    numberOfRecipes: 749,
  },
  {
    name: 'Angelique Lyptrit',
    memberSince: '11/28/2018',
    numberOfRecipes: 415,
  },
  {
    name: 'Pavla Abotson',
    memberSince: '3/22/2018',
    numberOfRecipes: 395,
  },
  {
    name: 'Gisella Zanicchi',
    memberSince: '1/23/2019',
    numberOfRecipes: 694,
  },
  {
    name: 'Maxie Curee',
    memberSince: '10/15/2018',
    numberOfRecipes: 504,
  },
  {
    name: 'Joseph Scotchmore',
    memberSince: '8/30/2018',
    numberOfRecipes: 506,
  },
  {
    name: 'Kissiah Littlefair',
    memberSince: '1/7/2019',
    numberOfRecipes: 799,
  },
  {
    name: 'Monti Coggeshall',
    memberSince: '4/15/2018',
    numberOfRecipes: 452,
  },
  {
    name: 'Ephrayim Leadbeatter',
    memberSince: '11/28/2018',
    numberOfRecipes: 975,
  },
  {
    name: 'Craggy Menat',
    memberSince: '10/24/2018',
    numberOfRecipes: 780,
  },
  {
    name: 'Alisa Courteney',
    memberSince: '5/24/2018',
    numberOfRecipes: 511,
  },
  {
    name: 'Birgit Androck',
    memberSince: '4/29/2018',
    numberOfRecipes: 456,
  },
  {
    name: 'Thibaut Renshaw',
    memberSince: '5/19/2018',
    numberOfRecipes: 794,
  },
  {
    name: 'Moina McKeating',
    memberSince: '2/22/2018',
    numberOfRecipes: 191,
  },
  {
    name: 'Guillaume Fulger',
    memberSince: '6/3/2018',
    numberOfRecipes: 912,
  },
  {
    name: 'Corette Wood',
    memberSince: '5/6/2018',
    numberOfRecipes: 294,
  },
  {
    name: 'Udall Petett',
    memberSince: '10/17/2018',
    numberOfRecipes: 20,
  },
  {
    name: 'Gardie Laste',
    memberSince: '4/3/2018',
    numberOfRecipes: 324,
  },
  {
    name: 'Rhiamon Sainer',
    memberSince: '9/26/2018',
    numberOfRecipes: 205,
  },
  {
    name: 'Ibrahim de Aguirre',
    memberSince: '7/11/2018',
    numberOfRecipes: 662,
  },
  {
    name: 'Melania Jarville',
    memberSince: '3/22/2018',
    numberOfRecipes: 896,
  },
  {
    name: 'Deina McLuckie',
    memberSince: '7/23/2018',
    numberOfRecipes: 389,
  },
  {
    name: 'Livvyy Swadlin',
    memberSince: '4/8/2018',
    numberOfRecipes: 146,
  },
  {
    name: 'Kimmi Bougen',
    memberSince: '7/2/2018',
    numberOfRecipes: 717,
  },
  {
    name: 'Sarita Lucius',
    memberSince: '9/14/2018',
    numberOfRecipes: 74,
  },
  {
    name: 'Skylar Tollfree',
    memberSince: '6/22/2018',
    numberOfRecipes: 11,
  },
  {
    name: 'Hadria Mowsdale',
    memberSince: '6/13/2018',
    numberOfRecipes: 43,
  },
  {
    name: 'Gardie De Beauchamp',
    memberSince: '9/28/2018',
    numberOfRecipes: 96,
  },
  {
    name: 'Frederik Leele',
    memberSince: '2/20/2019',
    numberOfRecipes: 500,
  },
  {
    name: 'Otis Itskovitz',
    memberSince: '12/9/2018',
    numberOfRecipes: 71,
  },
  {
    name: 'Cordy Fice',
    memberSince: '7/14/2018',
    numberOfRecipes: 469,
  },
  {
    name: 'Antonin Chatters',
    memberSince: '8/26/2018',
    numberOfRecipes: 657,
  },
  {
    name: 'Ryann Seligson',
    memberSince: '4/21/2018',
    numberOfRecipes: 376,
  },
  {
    name: 'Jervis Sharratt',
    memberSince: '8/7/2018',
    numberOfRecipes: 124,
  },
  {
    name: 'Fin Bygott',
    memberSince: '7/31/2018',
    numberOfRecipes: 669,
  },
  {
    name: 'Mommy Ellcome',
    memberSince: '12/23/2018',
    numberOfRecipes: 528,
  },
  {
    name: 'Gabriele Ineson',
    memberSince: '12/12/2018',
    numberOfRecipes: 768,
  },
  {
    name: "Evangelin O'Neary",
    memberSince: '1/26/2019',
    numberOfRecipes: 433,
  },
  {
    name: 'Drucy Bernet',
    memberSince: '2/11/2019',
    numberOfRecipes: 436,
  },
  {
    name: 'Rogers Dransfield',
    memberSince: '3/17/2018',
    numberOfRecipes: 736,
  },
  {
    name: 'Barbe Bohl',
    memberSince: '3/21/2018',
    numberOfRecipes: 692,
  },
  {
    name: 'Marianne Beardsell',
    memberSince: '6/18/2018',
    numberOfRecipes: 387,
  },
  {
    name: 'Idette Rubinlicht',
    memberSince: '2/28/2018',
    numberOfRecipes: 143,
  },
  {
    name: 'Rabi Frensch',
    memberSince: '2/28/2018',
    numberOfRecipes: 356,
  },
  {
    name: 'Rosamond Daniely',
    memberSince: '7/21/2018',
    numberOfRecipes: 487,
  },
  {
    name: 'Laina Ruddy',
    memberSince: '9/12/2018',
    numberOfRecipes: 343,
  },
  {
    name: 'Klarrisa Bulcock',
    memberSince: '3/10/2018',
    numberOfRecipes: 153,
  },
  {
    name: 'Lyndell Coronado',
    memberSince: '2/12/2019',
    numberOfRecipes: 124,
  },
  {
    name: 'Zachery Warrell',
    memberSince: '2/12/2019',
    numberOfRecipes: 34,
  },
  {
    name: 'Babita Rochford',
    memberSince: '9/17/2018',
    numberOfRecipes: 924,
  },
  {
    name: 'Aubrey Merwede',
    memberSince: '2/12/2019',
    numberOfRecipes: 650,
  },
  {
    name: 'Gilly Joesbury',
    memberSince: '4/11/2018',
    numberOfRecipes: 939,
  },
  {
    name: 'Netta Clewer',
    memberSince: '2/26/2018',
    numberOfRecipes: 260,
  },
  {
    name: 'Bernice Silveston',
    memberSince: '5/5/2018',
    numberOfRecipes: 376,
  },
  {
    name: 'Killian Dodworth',
    memberSince: '1/8/2019',
    numberOfRecipes: 78,
  },
  {
    name: 'Gare Trueman',
    memberSince: '8/23/2018',
    numberOfRecipes: 375,
  },
  {
    name: 'Cecily De Hooch',
    memberSince: '7/19/2018',
    numberOfRecipes: 369,
  },
  {
    name: 'Lucias Bonhan',
    memberSince: '4/24/2018',
    numberOfRecipes: 987,
  },
  {
    name: 'Dacey Wellfare',
    memberSince: '7/5/2018',
    numberOfRecipes: 580,
  },
  {
    name: 'Tildy Poschel',
    memberSince: '6/3/2018',
    numberOfRecipes: 931,
  },
  {
    name: 'Niel Blaw',
    memberSince: '2/20/2019',
    numberOfRecipes: 366,
  },
  {
    name: 'Merry Yankishin',
    memberSince: '5/13/2018',
    numberOfRecipes: 72,
  },
  {
    name: 'Janey Davitti',
    memberSince: '2/6/2019',
    numberOfRecipes: 95,
  },
  {
    name: 'Rora Corneille',
    memberSince: '5/19/2018',
    numberOfRecipes: 436,
  },
  {
    name: 'Devi Borley',
    memberSince: '11/4/2018',
    numberOfRecipes: 615,
  },
  {
    name: 'Christiane Ingliss',
    memberSince: '4/5/2018',
    numberOfRecipes: 900,
  },
  {
    name: 'Guthrie Glandfield',
    memberSince: '5/30/2018',
    numberOfRecipes: 187,
  },
  {
    name: 'Marley Byk',
    memberSince: '9/28/2018',
    numberOfRecipes: 167,
  },
  {
    name: 'Rriocard Avramovitz',
    memberSince: '6/25/2018',
    numberOfRecipes: 802,
  },
  {
    name: 'Cheston Benet',
    memberSince: '7/25/2018',
    numberOfRecipes: 17,
  },
  {
    name: 'Cordey Abisetti',
    memberSince: '11/6/2018',
    numberOfRecipes: 702,
  },
  {
    name: 'Moyna Davisson',
    memberSince: '9/3/2018',
    numberOfRecipes: 724,
  },
  {
    name: 'Napoleon Jorissen',
    memberSince: '10/5/2018',
    numberOfRecipes: 523,
  },
  {
    name: 'Elberta Obeney',
    memberSince: '2/23/2018',
    numberOfRecipes: 958,
  },
  {
    name: 'Kora Whittuck',
    memberSince: '4/29/2018',
    numberOfRecipes: 398,
  },
  {
    name: 'Korie Landal',
    memberSince: '8/10/2018',
    numberOfRecipes: 868,
  },
  {
    name: 'Novelia Schutter',
    memberSince: '8/10/2018',
    numberOfRecipes: 66,
  },
  {
    name: 'Terencio Trump',
    memberSince: '4/30/2018',
    numberOfRecipes: 390,
  },
  {
    name: 'Mag MacCaig',
    memberSince: '8/31/2018',
    numberOfRecipes: 993,
  },
  {
    name: 'Clerc Mapowder',
    memberSince: '9/7/2018',
    numberOfRecipes: 851,
  },
  {
    name: 'Marlo Kyles',
    memberSince: '6/7/2018',
    numberOfRecipes: 209,
  },
  {
    name: 'Davina Osment',
    memberSince: '4/5/2018',
    numberOfRecipes: 361,
  },
  {
    name: 'Barrie Dust',
    memberSince: '5/12/2018',
    numberOfRecipes: 149,
  },
  {
    name: 'Bert Bristowe',
    memberSince: '5/29/2018',
    numberOfRecipes: 267,
  },
  {
    name: 'Riane Follitt',
    memberSince: '9/17/2018',
    numberOfRecipes: 9,
  },
  {
    name: 'Kaile Yannikov',
    memberSince: '6/27/2018',
    numberOfRecipes: 546,
  },
];
