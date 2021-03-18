import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import App from '../App';

import Test from '../pages/Test';
import LabInfo from '../pages/LabInfo'
import Research from '../pages/Research';
import Publication from '../pages/Publication';
import Member from '../pages/Member';
import Board from '../pages/Board';

class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/LabInfo/:id" component={LabInfo} />
          <Route path="/LabInfo" component={LabInfo} />
          <Route path="/Research/:id?/:des?" component={Research} />
          <Route path="/Research" component={Research} />
          <Route path="/Publication" component={Publication} />
          <Route path="/Member" component={Member} />
          <Route path="/Board" component={Board} />
          <Route path="/Board/Posting_new" component={Board} />
          <Route path="/test" component={Test} />
        </Switch>
      </Router>
    )
  }
}

export default Routers;