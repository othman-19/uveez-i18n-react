import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';
import routes from '../routes';

const App = () => (
  <div style={{ paddingTop: '80px' }}>
    <Router>
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
    </Router>
  </div>
);

export default App;
