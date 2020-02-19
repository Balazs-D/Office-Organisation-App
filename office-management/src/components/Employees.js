import React, { useContext } from 'react';
import OfficeContext from '../context/officeContext'

const Employees = () => {

  const officeContext = useContext(OfficeContext);


  return (
    <div className='w-25'>
      <ul className='list-group'>
        {officeContext.staff.map((employee, i) => {

          
          return (
            <li
              key={i}
              className='list-group-item border border-info d-flex justify-content-between'
            >
              {employee.name}
              <span className='d-flex w-50 p-2 badge badge-secondary justify-content-between' id={i} onClick={officeContext.isHere}>
                {employee.dep}
                {employee.available ? (
                  <p className='badge badge-info'>available</p>
                ) : (
                  <p className='badge badge-danger'>away</p>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Employees
