/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import routes from '../routes';
import Localizer from './Localizer';
import AppNavbar from '../components/AppNavbar';
import AppFooter from '../components/AppFooter';

const App = props => {
  const { uiTranslationsLoaded } = props;
  return (
    <div style={{ paddingTop: '80px' }}>
      <Router>
        <Localizer>
          {uiTranslationsLoaded
                      && (
                      <div>
                        <AppNavbar />
                        <div className="container">
                          <main id="main" role="main">
                            <Switch>
                              {routes.map((route, index) => (
                                <Route
                                  // eslint-disable-next-line react/no-array-index-key
                                  key={index}
                                  path={route.path}
                                  exact={route.exact}
                                  component={route.component}
                                />
                              ))}
                            </Switch>
                          </main>
                        </div>
                        <AppFooter />
                      </div>
                      )}
        </Localizer>
      </Router>
    </div>
  );
};

export default connect(
  state => ({ uiTranslationsLoaded: state.l10n.uiTranslationsLoaded }),
)(App);
