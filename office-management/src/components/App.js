import React, { useState, useEffect, Component } from 'react';
import '../assets/css/style.css';
import Calendar from './Calendar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default class App extends Component {
  constructor(){
    super();

      this.state = {
        week : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        employees : ['Alex','Bea', 'Carl','Dasha','Eric','Francesca','Gabriella']
      } 
      
  }




  render() {
   return (
    <div className='main-cont'>
      <h1>Office management plan:</h1>
      <div className='info-section'>
        <Calendar 
        employees={this.state.employees}
        week={this.state.week}
      />
      </div>
    </div>
  );
  }
}


