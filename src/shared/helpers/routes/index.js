import { Switch, Route, Redirect } from 'react-router-dom';
import PATHS from '../../constants/paths';

export const renderRoutes = (routes) => (
  <Switch>
    {routes.map((route) => (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        render={(props) => <route.component {...props} />}
      />
    ))}
    <Redirect to={PATHS.topNews} />
  </Switch>
);
