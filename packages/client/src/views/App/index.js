import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Fallback from '../../components/Fallback';
import withTitle from '../../components/TitleComponent';
import NotFound from '../../components/404';

// Pages
const Home = lazy(() => import('../Home'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <Switch>
          {/* Page routes */}
          <Route
            exact
            path="/"
            render={(props) =>
              withTitle({
                component: Home,
                title: 'Welcome',
                ...props,
              })
            }
          />

          {/* Default 404 */}
          <Route
            render={(props) =>
              withTitle({
                component: NotFound,
                title: '404 Error',
                ...props,
              })
            }
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
