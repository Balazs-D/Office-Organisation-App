import React, { Component } from 'react';



export default class Calendar extends Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }


    render (){

        return (
          <div>
            <div className='week grid-2'>
              {this.props.week.map((day, i) => {
                return (
                  <p key={i} className='days'>
                    {day}
                  </p>
                );
              })}
            </div>

            <div className='week-col grid-2'>
             
              {this.props.employees.map((employee, i) => {
                return (
                  <p key={i} className='days'>
                    {employee}
                  </p>
                );
              })}
            </div>
          </div>
        );
    }
    

}



