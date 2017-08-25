import React, { Component } from 'react';
import '../styles/App.css';

import { Switch, Route } from 'react-router-dom';

import ListOfLinks from './ListOfLinks';
import CreateLink from './CreateLink';
import Login from './Login';
import Header from './Header';
import Search from './Search';

class App extends Component {
  render() {
  return (
    <div className='center w85'>
      <Header />
      <div className='ph3 pv1 background-gray'>
        <Switch>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/create' component={CreateLink}/>
          <Route exact path='/' component={ListOfLinks}/>
        </Switch>
      </div>
    </div>
  )
}
}

export default App;
