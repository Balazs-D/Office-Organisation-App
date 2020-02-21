import React, { useContext } from 'react';
import OfficeContext from '../context/officeContext';

const Employees = () => {
  const officeContext = useContext(OfficeContext);

  return (
    <div className='w-25 pt-3'>
      <h4 className='w-100 bg-warning border border-dark rounded p-1 text-center'>Sing in / out!</h4>
      <ul className='list-group border border-dark rounded'>
        {officeContext.staff.map((employee, i) => {
          return (
            <li
              key={i}
              className='list-group-item border border-info d-flex justify-content-between'
            >
              {employee.name}
              <span
                className='d-flex w-50 badge badge-secondary justify-content-around pt-2'
                id={i}
                onClick={officeContext.isHere}
                style={{ cursor: 'pointer' }}
              >
                
                <p className='badge badge-warning'>{employee.dep}</p>
                <p style={{ fontSize: '0.6vw' }} x>
                  Is
                </p>
                {employee.available ? (
                  <p
                    onClick={officeContext.blockClick}
                    className='badge badge-info'
                  >
                    available
                  </p>
                ) : (
                  <p
                    onClick={officeContext.blockClick}
                    className='badge badge-danger'
                  >
                    away
                  </p>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Employees;
