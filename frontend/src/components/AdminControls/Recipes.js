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
        headerStyle: {
          borderTop: 'none',
          borderBottom: 'none',
        },
        formatter: (cellContent, row) => (
          <div className="checkbox">
            <label className='container'> 
              <input type="checkbox" checked={row.inStock} />
              <span class="checkmark"></span>
            </label>
          </div>
        ),
      },
      {
        dataField: 'name',
        text: 'Recipe Name',
        headerStyle: {
          textAlign: 'center',
          borderTop: 'none',
          borderBottom: 'none',
        },
        style: { textAlign: 'center' },
      },
      {
        dataField: 'createdBy',
        text: 'Created By',
        headerStyle: {
          textAlign: 'center',
          borderTop: 'none',
          borderBottom: 'none',
        },
        style: { textAlign: 'center' },
      },
      {
        dataField: 'dateCreated',
        text: 'Date Created',
        headerStyle: {
          textAlign: 'center',
          borderTop: 'none',
          borderBottom: 'none',
        },
        style: { textAlign: 'center' },
      },
      {
        dataField: 'numberOfComments',
        text: 'Number Of Comments',
        headerStyle: {
          textAlign: 'center',
          borderTop: 'none',
          borderBottom: 'none',
        },
        style: { textAlign: 'center' },
      },
      {
        dataField: 'edit',
        text: '',
        headerStyle: {
          textAlign: 'center',
          borderTop: 'none',
          borderBottom: 'none',
        },
        style: { textAlign: 'center' },
        formatter: (cellContent, row) => (
          <div>
            <button className="button">
              <img
                src="https://img.icons8.com/windows/32/000000/edit.png"
                alt="edit"
              />
            </button>
            <button className="button">
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
  {
    name: 'Job',
    createdBy: 'Abner Earles',
    dateCreated: '11/18/2018',
    numberOfComments: 891,
  },
  {
    name: 'Tempsoft',
    createdBy: 'Stephani Playhill',
    dateCreated: '5/15/2018',
    numberOfComments: 238,
  },
  {
    name: 'Greenlam',
    createdBy: 'Symon Pettingill',
    dateCreated: '3/10/2018',
    numberOfComments: 378,
  },
  {
    name: 'Veribet',
    createdBy: 'Bancroft Benka',
    dateCreated: '12/5/2018',
    numberOfComments: 907,
  },
  {
    name: 'Konklux',
    createdBy: 'Curry Gosforth',
    dateCreated: '2/2/2019',
    numberOfComments: 849,
  },
  {
    name: 'Treeflex',
    createdBy: 'Justis Feldstern',
    dateCreated: '8/9/2018',
    numberOfComments: 822,
  },
  {
    name: 'Asoka',
    createdBy: 'Oralie Rahl',
    dateCreated: '6/28/2018',
    numberOfComments: 269,
  },
  {
    name: 'Overhold',
    createdBy: 'Karmen Ingerfield',
    dateCreated: '9/17/2018',
    numberOfComments: 806,
  },
  {
    name: 'Transcof',
    createdBy: 'Dusty McCathie',
    dateCreated: '1/11/2019',
    numberOfComments: 163,
  },
  {
    name: 'Daltfresh',
    createdBy: 'Wilmar Webby',
    dateCreated: '11/9/2018',
    numberOfComments: 706,
  },
  {
    name: 'Gembucket',
    createdBy: 'Essa Karby',
    dateCreated: '10/2/2018',
    numberOfComments: 317,
  },
  {
    name: 'Keylex',
    createdBy: 'Lamont Jozefczak',
    dateCreated: '8/12/2018',
    numberOfComments: 28,
  },
  {
    name: 'Tin',
    createdBy: 'Rory Carman',
    dateCreated: '10/18/2018',
    numberOfComments: 552,
  },
  {
    name: 'Pannier',
    createdBy: 'Nathalie Devil',
    dateCreated: '2/16/2019',
    numberOfComments: 464,
  },
  {
    name: 'Y-find',
    createdBy: 'Ingelbert Potebury',
    dateCreated: '8/1/2018',
    numberOfComments: 883,
  },
  {
    name: 'Konklab',
    createdBy: 'Cathlene Fielden',
    dateCreated: '7/22/2018',
    numberOfComments: 837,
  },
  {
    name: 'Fixflex',
    createdBy: 'Wenona Strathdee',
    dateCreated: '9/23/2018',
    numberOfComments: 777,
  },
  {
    name: 'Holdlamis',
    createdBy: 'Anselm Dallas',
    dateCreated: '8/21/2018',
    numberOfComments: 633,
  },
  {
    name: 'Vagram',
    createdBy: 'Lalo Idenden',
    dateCreated: '6/2/2018',
    numberOfComments: 491,
  },
  {
    name: 'Konklux',
    createdBy: 'Nico Vicioso',
    dateCreated: '5/10/2018',
    numberOfComments: 101,
  },
  {
    name: 'Vagram',
    createdBy: 'Colline Bick',
    dateCreated: '3/5/2018',
    numberOfComments: 233,
  },
  {
    name: 'Zontrax',
    createdBy: 'Lanette Voden',
    dateCreated: '10/15/2018',
    numberOfComments: 340,
  },
  {
    name: 'Y-find',
    createdBy: 'Cad Sprott',
    dateCreated: '3/16/2018',
    numberOfComments: 599,
  },
  {
    name: 'Transcof',
    createdBy: 'Donella Rea',
    dateCreated: '5/12/2018',
    numberOfComments: 205,
  },
  {
    name: 'Zamit',
    createdBy: 'Karrie Paunsford',
    dateCreated: '5/15/2018',
    numberOfComments: 577,
  },
  {
    name: 'Redhold',
    createdBy: 'Beverlie Bissex',
    dateCreated: '5/15/2018',
    numberOfComments: 236,
  },
  {
    name: 'Tresom',
    createdBy: 'Denver Jenkins',
    dateCreated: '10/6/2018',
    numberOfComments: 390,
  },
  {
    name: 'Sonsing',
    createdBy: 'Byran Pettiford',
    dateCreated: '1/3/2019',
    numberOfComments: 890,
  },
  {
    name: 'Voltsillam',
    createdBy: 'Rivy Velten',
    dateCreated: '12/6/2018',
    numberOfComments: 547,
  },
  {
    name: 'Stronghold',
    createdBy: 'Barney Plewman',
    dateCreated: '8/18/2018',
    numberOfComments: 950,
  },
  {
    name: 'Overhold',
    createdBy: 'Eward Willcox',
    dateCreated: '3/16/2018',
    numberOfComments: 326,
  },
  {
    name: 'Ronstring',
    createdBy: 'Cherish Hummerston',
    dateCreated: '6/13/2018',
    numberOfComments: 535,
  },
  {
    name: 'Bigtax',
    createdBy: 'Lorens Brumfitt',
    dateCreated: '4/27/2018',
    numberOfComments: 16,
  },
  {
    name: 'Ventosanzap',
    createdBy: 'Adina Gutcher',
    dateCreated: '4/7/2018',
    numberOfComments: 925,
  },
  {
    name: 'Temp',
    createdBy: 'Karrah Hanretty',
    dateCreated: '2/17/2019',
    numberOfComments: 969,
  },
  {
    name: 'Home Ing',
    createdBy: 'Novelia McDonand',
    dateCreated: '7/15/2018',
    numberOfComments: 50,
  },
  {
    name: 'Zathin',
    createdBy: 'Griffith Nutbrown',
    dateCreated: '10/3/2018',
    numberOfComments: 61,
  },
  {
    name: 'Konklab',
    createdBy: 'Tobie Garfit',
    dateCreated: '4/14/2018',
    numberOfComments: 350,
  },
  {
    name: 'Home Ing',
    createdBy: 'Yard Brooking',
    dateCreated: '1/22/2019',
    numberOfComments: 149,
  },
  {
    name: 'Bytecard',
    createdBy: 'Alayne Baber',
    dateCreated: '4/4/2018',
    numberOfComments: 70,
  },
  {
    name: 'Alpha',
    createdBy: 'Solly Shawl',
    dateCreated: '12/13/2018',
    numberOfComments: 668,
  },
  {
    name: 'Voltsillam',
    createdBy: 'Clair Otley',
    dateCreated: '12/30/2018',
    numberOfComments: 865,
  },
  {
    name: 'Zaam-Dox',
    createdBy: 'Sammie Tyhurst',
    dateCreated: '7/17/2018',
    numberOfComments: 971,
  },
  {
    name: 'Bitchip',
    createdBy: 'Vida Buttrey',
    dateCreated: '8/29/2018',
    numberOfComments: 708,
  },
  {
    name: 'Gembucket',
    createdBy: 'Lani McIlory',
    dateCreated: '4/21/2018',
    numberOfComments: 475,
  },
  {
    name: 'Keylex',
    createdBy: 'Ripley Stubbings',
    dateCreated: '8/4/2018',
    numberOfComments: 78,
  },
  {
    name: 'Andalax',
    createdBy: 'Hildegaard Juan',
    dateCreated: '9/17/2018',
    numberOfComments: 318,
  },
  {
    name: 'Cardguard',
    createdBy: 'Barrett Giacomazzo',
    dateCreated: '7/7/2018',
    numberOfComments: 478,
  },
  {
    name: 'Daltfresh',
    createdBy: 'Archie Nisco',
    dateCreated: '10/19/2018',
    numberOfComments: 330,
  },
  {
    name: 'Veribet',
    createdBy: 'Adela Seiler',
    dateCreated: '1/27/2019',
    numberOfComments: 524,
  },
  {
    name: 'Zoolab',
    createdBy: 'Gwenneth Newling',
    dateCreated: '6/14/2018',
    numberOfComments: 222,
  },
  {
    name: 'Bitwolf',
    createdBy: 'Maryjane Rodenborch',
    dateCreated: '3/22/2018',
    numberOfComments: 819,
  },
  {
    name: 'Lotstring',
    createdBy: 'Artemas Gabbitas',
    dateCreated: '6/19/2018',
    numberOfComments: 961,
  },
  {
    name: 'Stronghold',
    createdBy: 'Issy Jollands',
    dateCreated: '7/25/2018',
    numberOfComments: 477,
  },
  {
    name: 'Sonair',
    createdBy: 'Darrick Koppen',
    dateCreated: '2/12/2019',
    numberOfComments: 700,
  },
  {
    name: 'Quo Lux',
    createdBy: 'Gwenette Gylle',
    dateCreated: '10/31/2018',
    numberOfComments: 628,
  },
  {
    name: 'Zaam-Dox',
    createdBy: 'Marve Lukehurst',
    dateCreated: '3/23/2018',
    numberOfComments: 127,
  },
  {
    name: 'Lotlux',
    createdBy: 'Jimmy Dureden',
    dateCreated: '2/17/2019',
    numberOfComments: 412,
  },
  {
    name: 'Aerified',
    createdBy: 'Annabella Aldwich',
    dateCreated: '9/14/2018',
    numberOfComments: 504,
  },
  {
    name: 'It',
    createdBy: 'Chip Charleston',
    dateCreated: '11/17/2018',
    numberOfComments: 776,
  },
  {
    name: 'Alpha',
    createdBy: 'Beryl Burhouse',
    dateCreated: '11/14/2018',
    numberOfComments: 194,
  },
  {
    name: 'Wrapsafe',
    createdBy: 'Feodor Knotton',
    dateCreated: '8/1/2018',
    numberOfComments: 271,
  },
  {
    name: 'Biodex',
    createdBy: 'Brittany Hollibone',
    dateCreated: '7/12/2018',
    numberOfComments: 67,
  },
  {
    name: 'Zaam-Dox',
    createdBy: 'Codi Mungane',
    dateCreated: '7/15/2018',
    numberOfComments: 261,
  },
  {
    name: 'Duobam',
    createdBy: 'Moritz Junkin',
    dateCreated: '8/18/2018',
    numberOfComments: 209,
  },
  {
    name: 'Job',
    createdBy: 'Maximo Yule',
    dateCreated: '5/24/2018',
    numberOfComments: 930,
  },
  {
    name: 'Konklab',
    createdBy: 'Emilie Kimbury',
    dateCreated: '9/2/2018',
    numberOfComments: 193,
  },
  {
    name: 'Regrant',
    createdBy: 'Britta Corden',
    dateCreated: '7/5/2018',
    numberOfComments: 394,
  },
  {
    name: 'Sonair',
    createdBy: 'Ethan Ewins',
    dateCreated: '4/23/2018',
    numberOfComments: 640,
  },
  {
    name: 'Zathin',
    createdBy: 'Flora Malafe',
    dateCreated: '9/18/2018',
    numberOfComments: 620,
  },
  {
    name: 'Zathin',
    createdBy: 'Wade McFarlan',
    dateCreated: '2/2/2019',
    numberOfComments: 353,
  },
  {
    name: 'Voyatouch',
    createdBy: 'Anastasie Roubert',
    dateCreated: '4/12/2018',
    numberOfComments: 497,
  },
  {
    name: 'Voltsillam',
    createdBy: 'Jammie Saddington',
    dateCreated: '9/12/2018',
    numberOfComments: 250,
  },
  {
    name: 'Alpha',
    createdBy: 'Lisa Edeler',
    dateCreated: '5/29/2018',
    numberOfComments: 48,
  },
  {
    name: 'Voltsillam',
    createdBy: 'Jock Dunaway',
    dateCreated: '8/24/2018',
    numberOfComments: 912,
  },
  {
    name: 'Cookley',
    createdBy: 'Madge Elsbury',
    dateCreated: '11/11/2018',
    numberOfComments: 618,
  },
  {
    name: 'Zathin',
    createdBy: 'Evin Fynan',
    dateCreated: '11/11/2018',
    numberOfComments: 588,
  },
  {
    name: 'Asoka',
    createdBy: 'Sherm Caffery',
    dateCreated: '9/14/2018',
    numberOfComments: 925,
  },
  {
    name: 'Namfix',
    createdBy: 'Jude Piggford',
    dateCreated: '2/5/2019',
    numberOfComments: 23,
  },
  {
    name: 'Fix San',
    createdBy: 'Anette Usborn',
    dateCreated: '5/25/2018',
    numberOfComments: 472,
  },
  {
    name: 'Sonsing',
    createdBy: 'Jeromy Sweetmore',
    dateCreated: '1/1/2019',
    numberOfComments: 737,
  },
  {
    name: 'Biodex',
    createdBy: 'Cathyleen Pettigrew',
    dateCreated: '5/10/2018',
    numberOfComments: 946,
  },
  {
    name: 'Solarbreeze',
    createdBy: 'Zonnya Flippini',
    dateCreated: '1/9/2019',
    numberOfComments: 599,
  },
  {
    name: 'Andalax',
    createdBy: 'Kerwinn Have',
    dateCreated: '2/27/2018',
    numberOfComments: 938,
  },
  {
    name: 'Stim',
    createdBy: 'Tiphany Filipczak',
    dateCreated: '7/14/2018',
    numberOfComments: 29,
  },
  {
    name: 'Domainer',
    createdBy: 'Robenia Robelet',
    dateCreated: '8/12/2018',
    numberOfComments: 422,
  },
  {
    name: 'Andalax',
    createdBy: 'Kania Langtry',
    dateCreated: '2/5/2019',
    numberOfComments: 610,
  },
  {
    name: 'Asoka',
    createdBy: 'Hill Tramel',
    dateCreated: '12/3/2018',
    numberOfComments: 26,
  },
  {
    name: 'Toughjoyfax',
    createdBy: 'Cherida Poppleton',
    dateCreated: '11/13/2018',
    numberOfComments: 899,
  },
  {
    name: 'Otcom',
    createdBy: 'Birch Alfonsini',
    dateCreated: '4/22/2018',
    numberOfComments: 631,
  },
  {
    name: 'Zoolab',
    createdBy: 'Isabella Garrioch',
    dateCreated: '1/7/2019',
    numberOfComments: 356,
  },
  {
    name: 'Redhold',
    createdBy: 'Pearce Coulthard',
    dateCreated: '2/10/2019',
    numberOfComments: 399,
  },
  {
    name: 'Fixflex',
    createdBy: 'Inger Spilling',
    dateCreated: '7/13/2018',
    numberOfComments: 93,
  },
  {
    name: 'Y-Solowarm',
    createdBy: 'Brocky Jannasch',
    dateCreated: '10/26/2018',
    numberOfComments: 62,
  },
  {
    name: 'Y-find',
    createdBy: 'Kristina Brooker',
    dateCreated: '7/30/2018',
    numberOfComments: 675,
  },
  {
    name: 'Rank',
    createdBy: 'Gibb Casarili',
    dateCreated: '3/24/2018',
    numberOfComments: 887,
  },
  {
    name: 'Mat Lam Tam',
    createdBy: 'Nanci Galbraith',
    dateCreated: '4/26/2018',
    numberOfComments: 784,
  },
  {
    name: 'Voltsillam',
    createdBy: 'Lacey Wendover',
    dateCreated: '7/4/2018',
    numberOfComments: 668,
  },
  {
    name: 'Veribet',
    createdBy: 'Ali Russam',
    dateCreated: '11/20/2018',
    numberOfComments: 153,
  },
  {
    name: 'Tempsoft',
    createdBy: 'Aggie Airy',
    dateCreated: '12/20/2018',
    numberOfComments: 402,
  },
];
