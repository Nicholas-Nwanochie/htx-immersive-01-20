import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import BaseLayout from './components/layout/BaseLayout';
import Blogs from './components/Blogs';
import NoMatch from './components/NoMatch';
import Forms from './components/Forms';
import LiftingState from './components/LiftingState';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Redirect from="/aboutus" to="/" />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
        <Route exact path="/blogs" component={Blogs} />
        <Route path="/blogs/:blogID" component={Blogs} />
        <Route path="/forms" component={Forms} />
        <Route path="/liftingstate" component={LiftingState} />

        <Route component={NoMatch} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


// Corona Virus Assignment:
// Use the corona virus link to list all of the corona information per state: https://corona.lmao.ninja/states
// The list should be searchable, so if I type Texas, the results will be filtered
// I want to see the percentage of deaths per cases, i.e. (deaths/cases) * 100
// User Chart.js to plot the cases for each state https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react
// The sum of all infected in the U.S.
// The sum of all deaths in the U.S.

