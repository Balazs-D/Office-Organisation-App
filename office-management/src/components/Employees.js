import React, { Component } from 'react';

export default class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  };



  render() {



    return (
      
        <div className='w-25'>
          <ul className='list-group'>
            {this.props.employees.map((employee, i) => {
              return (
                <li key={i} className='list-group-item border border-info d-flex justify-content-between'>
                  {employee.name}
                  <span className='d-flex w-50 p-2 badge badge-secondary justify-content-between'>
                    {employee.dep}
                    {employee.available ? (<p className='badge badge-info'>available</p>) : (<p className='badge badge-danger'>away</p>)}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
     
    );
  }
}
