import React, { useContext, useEffect, useRef, useState } from 'react';
import OfficeContext from '../context/officeContext';

const Plan = () => {
  const officeContext = useContext(OfficeContext);

  const [availableStaff, setAvailableStaff] = useState([]);
  const [selection, setSelection] = useState([]);
  const [endList, setEndList] = useState([]);
  const isInitialMount = useRef(true);

  useEffect( () => {
      setAvailableStaff([]);
      setEndList([]);
     
      // checking ref bool for handling
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        // fill availableStuff with employees who are available
        officeContext.staff.map((emp, i) => {
          if (officeContext.staff[i].available) {
            availableStaff.push(emp);
            return availableStaff;
          } else {
            return officeContext.staff;
          }
        });
      }

      // creates an array for the selection
      // min - max safety
      // even if only 1 person is available fills the cal
      for (let i = 0; i < 10; i++) {
        availableStaff.map((emp, i) => {
          endList.push(emp.name);
        });
      }

      console.log('endList: ' + typeof endList.slice(0, 10));
      setSelection(Array.from(endList.slice(0, 10)));
      console.log(selection);
    },
    [officeContext.click]
  );

  return (
    <div className='mx-auto w-25'>
      <ul className='list-group d-flex flex-row'>
        <li style={{ listStyle: 'none' }}>
          {officeContext.week.map((day, i) => {
            
              return (
                <li key={i} className='list-group-item bg-info'>
                  {day}
                </li>
              );
            
          })}
        </li>
        <li style={{ listStyle: 'none' }}>
          {selection.map((emp, i) => {
            if (0 || i % 2 === 0) {
              return (
                <li key={i} className='list-group-item bg-info'>
                  {emp}
                </li>
              );
            }
          })}
        </li>

        <li style={{ listStyle: 'none' }}>
          {selection.map((emp, i) => {
            if (i % 2 !== 0) {
              return (
                <li key={i} className='list-group-item bg-info'>
                  {emp}
                </li>
              );
            }
          })}
        </li>
      </ul>
    </div>
  );
};

export default Plan;
