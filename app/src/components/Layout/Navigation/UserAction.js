/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../../Link';
import AuthService from '../../../services/AuthService';

class UserAction extends React.Component {
  render() {
    return (
      <ul
        className={`align-items-center ${
          this.props.collapsed ? 'nav d-md-none' : 'navbar-nav d-none d-md-flex'
        }`}
      >
        <li className="nav-item dropdown">
          <a
            className="nav-link pr-0"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="media align-items-center">
              <div className="media-body ml-2 d-none d-lg-block mr-2">
                <span className="mb-0 text-sm  font-weight-bold">
                  {this.props.user.username || 'Unknown'}
                </span>
              </div>
              <span className="avatar avatar-sm rounded-circle">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                  alt="Image placeholder"
                  src={
                    this.props.user.profile.avatar ||
                    '/assets/img/theme/team-4-800x800.jpg'
                  }
                />
              </span>
            </div>
          </a>
          <div
            className="dropdown-menu dropdown-menu-arrow dropdown-menu-right"
            style={{ zIndex: '1000000' }}
          >
            <div className=" dropdown-header noti-title">
              <h6 className="text-overflow m-0">Welcome!</h6>
            </div>
            <Link to="/member/settings/billing" className="dropdown-item">
              <i className="ni ni-single-02" />
              <span>Billing</span>
            </Link>
            <Link to="/member" className="dropdown-item">
              <i className="ni ni-calendar-grid-58" />
              <span>Dashboard</span>
            </Link>
            <Link to="/member/subscription" className="dropdown-item">
              <i className="ni ni-support-16" />
              <span>Subscription</span>
            </Link>
            <Link to="/member/onboarding" className="dropdown-item">
              <i className="ni ni-support-16" />
              <span>Onboarding</span>
            </Link>
            <div className="dropdown-divider" />
            <a
              href="#!"
              className="dropdown-item"
              onClick={() => AuthService.logout()}
            >
              <i className="ni ni-user-run" />
              <span>Logout</span>
            </a>
          </div>
        </li>
      </ul>
    );
  }
}

export default withStyles(s)(UserAction);

UserAction.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
};
