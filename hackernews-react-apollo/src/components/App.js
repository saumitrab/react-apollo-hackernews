import React, { Component } from 'react';
import '../styles/App.css';

import { Switch, Route } from 'react-router-dom';

import ListOfLinks from './ListOfLinks';
import CreateLink from './CreateLink';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path="/" component={ListOfLinks} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
