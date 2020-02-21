import React, { useState, useEffect, useContext } from 'react';
import '../assets/css/style.css';
import Employees from './Employees';

import Plan from './Plan';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import OfficeState from '../context/OfficeState';
import OfficeContext from '../context/officeContext';

const App = () => {

  const officeContext = useContext(OfficeContext)

  return (
    <OfficeState>
      <div
        className='container-fluid bg-info w-100 d-flex flex-column m-0 p-0'
        style={{ height: '100vh' }}
      >
        <h1 className='p-3 text-light text-uppercase w-100 bg-dark text-center'>Office management plan</h1>

        <div className='info-section d-flex flex-row w-100  justify-content-around'>
        
          <Employees />
          <Plan />
        </div>
      </div>
    </OfficeState>
  );
};

export default App;
