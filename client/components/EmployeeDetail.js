import React, { PropTypes } from 'react';

const propTypes = {
  employee: PropTypes.object.isRequired
};

const EmployeeDetail = ({ employee }) => (
  <div className="thumbnail">
    <img alt="avatar" src={employee.avatar} />
    <div className="caption">
      <h3>{employee.name}</h3>
      <ul className="list-group">
        <li className="list-group-item">Email: {employee.email}</li>
        <li className="list-group-item">Phone: {employee.phone}</li>
      </ul>
    </div>
  </div>
);

EmployeeDetail.propTypes = propTypes;

export default EmployeeDetail;
