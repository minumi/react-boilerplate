import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from '../../Routes/Login';
import Home from '../../Routes/Home';
import Signup from '../../Routes/Signup';

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </BrowserRouter>
);

const LoggedOutRoutes: React.SFC = () => (
  <Switch>
    <Redirect from={'/'} exact={true} to={'/login'} />
    <Route path={'/login'} exact={true} component={Login} />
    <Route path={'/signup'} exact={true} component={Signup} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path={'/'} exact={true} component={Home} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
);

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppPresenter;
