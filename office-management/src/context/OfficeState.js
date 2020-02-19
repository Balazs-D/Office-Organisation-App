import React, { useReducer, setState } from 'react';
import OfficeContext from './officeContext';
import OfficeReducer from './officeReducer';
import { IS_HERE } from './types';

const OfficeState = props => {
  const initialState = {
    week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    staff: [
      { name: 'Alex', available: false, dep: 'Tech' },
      { name: 'Bea', available: true, dep: 'PM' },
      { name: 'Carl', available: true, dep: 'HR' },
      { name: 'Dasha', available: true, dep: 'B-Dev' },
      { name: 'Eric', available: true, dep: 'Buss-Dev' },
      { name: 'Francesca', available: true, dep: 'F-Dev' },
      { name: 'Gabriella', available: true, dep: 'OM' }
    ]
  };

  const [state, dispatch] = useReducer(OfficeReducer, initialState);

  // Additional Functions

  const isHere = (e) => {


    const index = e.target.id
    const status = state.staff[index].available;
    console.log(status)

    dispatch({
        type: IS_HERE,
        payload: !status,
    })
  
    console.log(status)

  };

  return (
    <OfficeContext.Provider
      value={{
        week: state.week,
        staff: state.staff,
        isHere
      }}
    >
      {props.children}
    </OfficeContext.Provider>
  );
};

export default OfficeState;
