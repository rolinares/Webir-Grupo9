import React, { Component } from "react";
import SearchPanel from "../components/SearchPanel";
import SearchPanel2 from "../components/SearchPanel2";
import Boxes from "../components/Boxes";
import LineChart from "../components/LineChart";
import NavBar from "../components/NavBar";

class Principal extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Boxes />
        <SearchPanel2 />
       
      </div>
    );
  }
}

export default Principal;
