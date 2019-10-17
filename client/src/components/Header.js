import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends PureComponent {
  renderContent() {
    const { auth } = this.props;

    switch (auth) {
      case null:
        return;
      case false:
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
          </li>
        ];
    }
  }

  render() {
    const { auth } = this.props;

    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={auth ? '/surveys' : '/'} className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapState = ({ auth }) => ({
  auth
});

export default connect(
  mapState,
  null
)(Header);
