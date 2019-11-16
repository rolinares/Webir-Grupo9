import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Principal from "../pages/Principal";
import NotFound from "../pages/NotFound";
import Historic from "../pages/Historic";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {<Redirect from="/" exact to="/Principal" />}
        {<Route path="/Principal" component={Principal} />}
        <Route path="/Historic" component={Historic} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
