import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';

import EmployeeDetail from './EmployeeDetail';

const PER_PAGE = 20;

const propTypes = {
  employees: PropTypes.array.isRequired
};

class EmployeeList extends Component {
  componentWillMount() {
    this.page = 1;
  }

  onLoadMore = () => {
    Meteor.subscribe('employees', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render() {
    const { employees } = this.props;
    return (
      <div>
        <div className="EmployeeList">
          {employees.map(e => <EmployeeDetail key={e._id} employee={e} />)}
        </div>
        <button
          className="btn btn-primary"
          onClick={this.onLoadMore}
        >Load More...</button>
      </div>
    );
  }
}

EmployeeList.propTypes = propTypes;

export default createContainer(() => {
  // set up sub
  Meteor.subscribe('employees', PER_PAGE);

  // return obj that creates props
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
