import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Principal from "../pages/Principal";
import LineChart from "./LineChart";
import NotFound from "../pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {<Redirect from="/" exact to="/Principal" />}
        {<Route path="/Principal" component={Principal} />}
        <Route exact path="/lineCharts" component={LineChart} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
