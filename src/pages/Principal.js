import React, { Component } from "react";
import SearchPanel from "../components/SearchPanel";
import Boxes from "../components/Boxes";
import NavBar from "../components/NavBar";
import { Helmet } from 'react-helmet'

const TITLE = 'Principal - ViajAR'

class Principal extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>{ TITLE }</title>
        </Helmet>
        <NavBar />
        <Boxes />        
        <SearchPanel />
      </div>
    );
  }
}

export default Principal;
