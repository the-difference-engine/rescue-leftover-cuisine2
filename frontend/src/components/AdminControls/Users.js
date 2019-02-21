import React, { Component } from 'react';
import { Table, InputGroupText, Input } from 'reactstrap';
import './Users.css';
export default class Users extends Component {
  render() {
    return (
      <Table borderless>
        <thead className="text">
          <tr className="text">
            <th />
            <th className="text">User Name</th>
            <th className="text">Member Since</th>
            <th>Number of Recipes</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr>
                <td>
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                </td>
                <td className="text">{user.name}</td>
                <td className="text">{user.memberSince}</td>
                <td>{user.numberOfRecipes}</td>
                <td>
                  <img src="https://img.icons8.com/windows/32/000000/edit.png" />
                  <img src="https://img.icons8.com/windows/32/000000/cancel.png" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

const users = [
  {
    name: 'Daphna Pennington',
    memberSince: '8/2/2018',
    numberOfRecipes: 41,
  },
  {
    name: 'Rutherford Alekseicik',
    memberSince: '9/21/2018',
    numberOfRecipes: 67,
  },
  {
    name: 'Sarge Helgass',
    memberSince: '8/14/2018',
    numberOfRecipes: 30,
  },
  {
    name: 'Janela Lamyman',
    memberSince: '11/11/2018',
    numberOfRecipes: 29,
  },
  {
    name: 'Mateo Daborne',
    memberSince: '5/22/2018',
    numberOfRecipes: 21,
  },
  {
    name: 'Anetta Marsters',
    memberSince: '3/5/2018',
    numberOfRecipes: 30,
  },
  {
    name: 'Ulrich Gaddas',
    memberSince: '4/10/2018',
    numberOfRecipes: 60,
  },
  {
    name: 'Beale Klas',
    memberSince: '11/27/2018',
    numberOfRecipes: 59,
  },
  {
    name: 'Brandise Tompion',
    memberSince: '11/6/2018',
    numberOfRecipes: 100,
  },
  {
    name: 'Gusella Maven',
    memberSince: '7/21/2018',
    numberOfRecipes: 51,
  },
];
