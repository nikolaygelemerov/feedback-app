import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = props => {
  return (
    <div>
      <div className="fixed-action-btn">
        <NavLink to="/surveys/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </NavLink>
      </div>
    </div>
  );
};

export default memo(Dashboard);
