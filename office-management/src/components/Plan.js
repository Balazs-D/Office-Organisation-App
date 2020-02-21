import React, { useContext, useEffect, useRef, useState } from 'react';
import OfficeContext from '../context/officeContext';

const Plan = () => {
  const officeContext = useContext(OfficeContext);

  const [availableStaff, setAvailableStaff] = useState([]);
  const [selection, setSelection] = useState([]);
  const [endList, setEndList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
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
    console.log(selection, typeof selection);
  }, [officeContext.click]);

  const doToggle = e => {
    // selection.map((emp, i) => {
    //   if (i === e.target.value) {
        if (e.target.style.backgroundColor !== 'green') {
          e.target.style.backgroundColor = 'green';
        }
       else {
        e.target.style.backgroundColor = 'white';
      }

      console.log(e.target.style.backgroundColor);
    };

  

  return (
    <div className='d-flex align-items-center rounded flex-column justify-content-center'>
      {selection.length !== 0 ? (
        <h5
          className='border p-1 text-dark w-100 border bg-success border-dark align-items-center rounded'
          style={{ width: '100%' }}
        >
          Don't forget to open up / close down the office.
        </h5>
      ) : (
        <h4
          className='bg-warning border p-1 text-dark border border-dark rounded'
          style={{ width: '100%' }}
        >
          Nobody is arrived yet.
        </h4>
      )}
      <ul
        className='list-group w-100 justify-content-around d-flex border border-dark rounded bg-light flex-row '
        style={{ width: '100%' }}
      >
        <li style={{ listStyle: 'none' }}>
          {officeContext.week.map((day, i) => {
            return (
              <li
                key={i}
                className='list-group-item m-2 border border-dark bg-dark text-light'
              >
                {day}
              </li>
            );
          })}
        </li>
        <li style={{ listStyle: 'none' }}>
          {selection.map((emp, i) => {
            if (0 || i % 2 === 0) {
              return (
                <li
                  key={i}
                  value={i}
                  onClick={doToggle}
                  className={
                    toggle === false
                      ? 'list-group-item m-2 border border-dark flex-column '
                      : 'list-group-item m-2 border border-dark flex-column '
                  }
                >
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
                <li
                  key={i}
                  value={i}
                  onClick={doToggle}
                  className={
                    toggle === false
                      ? 'list-group-item m-2 border border-dark flex-column'
                      : 'list-group-item m-2 border border-dark flex-column'
                  }
                >
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
