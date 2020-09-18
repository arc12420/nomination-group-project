import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Donations from './components/Donations/Donations';
import MyAccount from './components/MyAccount/MyAccount';
import Nomination from './components/Nomination/Nomination';
import Volunteer from './components/Volunteer/Volunteer';
import Welcome from './components/Welcome/Welcome';

export default (
  <Switch>
    <Route exact path='/' component={Welcome} />
    <Route path='/volunteer' component={Volunteer} />
    <Route path='/nomination' component={Nomination} />
    <Route path='/myaccount' component={MyAccount} />
    <Route path='/donations' component={Donations} />
    <Route path='/contact' component={Contact} />
  </Switch>
);