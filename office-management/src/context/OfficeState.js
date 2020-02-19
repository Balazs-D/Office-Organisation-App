import React, { useReducer, setState } from 'react';
import OfficeContext from './officeContext';
import OfficeReducer from './officeReducer';
import { IS_HERE, CLICKED } from './types';

const OfficeState = props => {
  const initialState = {
    click: 0,
    week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    staff: [
      {
        name: 'Alex',
        available: false,
        dep: 'Tech'
      },
      { name: 'Bea', available: true, dep: 'PM' },
      { name: 'Carl', available: true, dep: 'HR' },
      {
        name: 'Dasha',
        available: true,
        dep: 'B-Dev'
      },
      {
        name: 'Eric',
        available: true,
        dep: 'Buss-Dev'
      },
      {
        name: 'Francesca',
        available: true,
        dep: 'F-Dev'
      },
      {
        name: 'Gabriella',
        available: true,
        dep: 'OM'
      }
    ]
  };

  const [state, dispatch] = useReducer(OfficeReducer, initialState);

  // Toggle available

  const isHere = e => {
    const index = e.target.id;
    const status = state.staff[index].available;
    console.log('1: ' + status);

    let updatedStaff = { ...state };
    updatedStaff.staff[index].available = !status;
    let clicked = {...state};
    state.click = state.click + 1;

    dispatch({
      type: IS_HERE,
      payload: updatedStaff
    });

    dispatch({
      type: CLICKED,
      payload: clicked
    });

    console.log(updatedStaff);
    console.log('2: ' + status);
  };

  // Block child click

  const blockClick = e => {
    e.stopPropagation();
  };

  

  return (
    <OfficeContext.Provider
      value={{
        week: state.week,
        staff: state.staff,
        click: state.click,
        isHere,
        blockClick
      }}
    >
      {props.children}
    </OfficeContext.Provider>
  );
};

export default OfficeState;
