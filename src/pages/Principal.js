import React, { Component } from "react";
import SearchPanel from "../components/SearchPanel";
import Boxes from "../components/Boxes";
import LineChart from "../components/LineChart";
import NavBar from "../components/NavBar";

class Principal extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <NavBar />
        <Boxes />
        <SearchPanel />
        <LineChart />
      </div>
    );
  }
}

export default Principal;
