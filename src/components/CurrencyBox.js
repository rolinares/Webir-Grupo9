import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import "./styles/CurrencyBox.css";

class currencyBox extends Component {
  render() {
    return (
      <Grid item>
        <Paper className="paperImp">
          <Typography className="titulo" variant="h6" gutterBottom>
            {this.props.title}
          </Typography>
          <div className="backgroundColor">
            <img className="icono" src={this.props.img1} alt={this.props.title}/>
            <img className="icono" src={this.props.img2} alt={this.props.title} />
          </div>
          <h1 className="valor">{this.props.cot}</h1>
        </Paper>
      </Grid>
    );
  }
}

export default currencyBox;
