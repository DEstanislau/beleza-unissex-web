import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import ResetPassword from '~/pages/ResetPassword';

import Dashboard from '~/pages/Dashboard';
import Products from '~/pages/Products';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/reset" component={ResetPassword} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/products" component={Products} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
