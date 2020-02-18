import React, { useState, useEffect, Component } from 'react';
import { createStore } from 'redux';
import '../assets/css/style.css';
import Employees from './Employees';
import Plan from './Plan';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      employees: [
        { name: 'Alex', available: false, dep: 'Tech' },
        { name: 'Bea', available: true, dep: 'PM' },
        { name: 'Carl', available: true, dep: 'HR' },
        { name: 'Dasha', available: true, dep: 'B-Dev' },
        { name: 'Eric', available: true, dep: 'Buss-Dev' },
        { name: 'Francesca', available: true, dep: 'F-Dev' },
        { name: 'Gabriella', available: true, dep: 'OM' }
      ]
    };
  }

  render() {
    return (
      <div
        className='container-fluid bg-info d-flex flex-column'
        style={{ height: '100vh' }}
      >
        <h1 className='mx-auto m-3 text-uppercase'>Office management plan:</h1>

      
          <div className='info-section d-flex flex-row w-100 justify-content-around'>
            <Employees
              employees={this.state.employees}
              week={this.state.week}
            />
            <Plan employees={this.state.employees} week={this.state.week} />
          </div>
      </div>
    );
  }
}
