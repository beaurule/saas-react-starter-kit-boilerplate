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

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import NavigationAuth from "./Navigation/NavigationAuth";
import FooterAuth from "./Footer/FooterAuth";
import ReduxToastr from 'react-redux-toastr'
import withNoAuth from "./withNoAuth";
import Navigation from "./Navigation";
import Header from "./Header";
import FooterAdmin from "./Footer/FooterAdmin";

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        /*<div className="main-content">
          <Navigation showLogo={true}/>
          <Header/>
          <div className="container-fluid mt--7">
            {this.props.children}
            <FooterAdmin/>
          </div>
        </div>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick/>*/
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(withNoAuth(Layout));
