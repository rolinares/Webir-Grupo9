import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import "./styles/NavBar.css";
import SiteIcon from "../images/site_icon.png";
import LongMenu from "./LongMenu";

export default function ButtonAppBar() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <div>
            <img className="icono" src={SiteIcon} alt="inicio" />
          </div>
          <Typography variant="h6" className="title">
            ViajAR
          </Typography>
          <h4 className="menuButton">
            Informate con qué moneda te conviene viajar desde Uruguay a Argentina
          </h4>
          <IconButton edge="start" color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}

            <LongMenu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className="separador"></div>
    </div>
  );
}
