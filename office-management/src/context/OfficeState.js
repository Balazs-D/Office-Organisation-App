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
        dep: 'Technical Support'
      },
      { name: 'Bea', available: false, dep: 'Project-Man' },
      { name: 'Carl', available: false, dep: 'Humar-Res' },
      {
        name: 'Dasha',
        available: false,
        dep: 'Backend-Dev'
      },
      {
        name: 'Eric',
        available: false,
        dep: 'Bussiness-Dev'
      },
      {
        name: 'Francesca',
        available: false,
        dep: 'Frontend-Dev'
      },
      {
        name: 'Gabriella',
        available: false,
        dep: 'Online-Mar'
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
