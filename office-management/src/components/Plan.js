import React, { Component } from 'react'

export default class Plan extends Component {
    render() {
        return (
              <div className='d-flex flex-column'>

        {this.props.week.map((day, i)=>{
            return (
              <ul
                key={i}
                className='w-100 p-2 list-group list-group-horizontal m-3 align-items-center'
              >
                <li className='list-group-item bg-warning font-weight-bold  w-100 border border-info'>{day}</li>
                <li className='list-group-item w-50 border border-info'>In:</li>
                <li className='list-group-item w-50 border border-info'>Out:</li>
              </ul>
            );
        })}
            
        </div>
        )
    }
}


