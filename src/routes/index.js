import React from "react";
import { Switch, Route } from "react-router-dom";
import Booking from "../components/Booking";
import Seating from "../components/Seating";
import LandingPage from "../components/LandingPage";

export default () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/booking" component={Booking} />
    <Route path="/seating" component={Seating} />
  </Switch>
);
