import { withRouter } from 'react-router-dom';

import classes from './app.module.scss';
import Layout from './components/layout';
import routes from './routes';
import { renderRoutes } from './shared/helpers/routes';

const App = (props) => (
  <div className={classes.app}>
    <Layout pathname={props.location.pathname}>{renderRoutes(routes)}</Layout>
  </div>
);

export default withRouter(App);
