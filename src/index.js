import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import News from "./Pages/News";
import InvestorRelations from "./Pages/InvestorRelations";
import Downloadables from "./Pages/Downloadables";
import ContactUs from "./Pages/ContactUs";




ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/news" component={News}></Route>
      <Route exact path="/investorrelations" component={InvestorRelations}></Route>
      <Route exact path="/downloadables" component={Downloadables}></Route>
      <Route exact path="/contactus"component={ContactUs}></Route>
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
