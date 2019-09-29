import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from "../pages/Principal";
import LineChart from "./LineChart";
import NotFound from "../pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/principal" component={Principal} />
        <Route exact path="/lineCharts" component={LineChart} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
