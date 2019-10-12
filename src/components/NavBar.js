import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import "./styles/NavBar.css";
import icono from "../images/moneda.png";
import LongMenu from "./LongMenu";

export default function ButtonAppBar() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <div>
            <img className="icono" src={icono} alt="inicio"/>
          </div>
          <Typography variant="h6" className="title">
            News
          </Typography>
          <h4 className="menuButton">
            Informate con que moneda viajar para que te convenga más!
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
