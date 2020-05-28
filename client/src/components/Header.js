import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

const Header = () => {
  const { auth } = useSelector((state) => ({ auth: state.auth }));

  const renderContent = useCallback(() => {
    switch (auth) {
      case null:
        return (
          <li>
            <a href="/auth/google">Login with google</a>
          </li>
        );
      default:
        return [
          <li key="0">
            <Payments />
          </li>,
          <li key="2" style={{ margin: '0 10px' }}>
            Credits: {auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }, [auth]);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={auth ? '/surveys' : '/'} className="left brand-logo">
          Emaily
        </Link>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};

export default memo(Header);
