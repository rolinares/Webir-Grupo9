import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CurrencyBox from "./CurrencyBox";
import Boxes from "./Boxes";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 270,
    width: 500
  },
  control: {
    padding: theme.spacing(2)
  },
  updated: {
    float: "right",
    padding: 20
  },
  valor: {
    textAlign: "center"
  },
  titulo: {
    padding: 20
  }
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <div>
      {/* <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography
                  className={classes.titulo}
                  variant="h6"
                  gutterBottom
                >
                  Cotización USD - UY
                </Typography>
                <Typography
                  className={classes.valor}
                  variant="h1"
                  component="h2"
                  gutterBottom
                >
                  $ 36.75
                </Typography>
                <Typography
                  className={classes.updated}
                  variant="caption"
                  color="textSecondary"
                  gutterBottom
                >
                  Actualizado al 20/09/2019 15:00 hs.
                </Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography
                  className={classes.titulo}
                  variant="h6"
                  gutterBottom
                >
                  Cotización USD - AR
                </Typography>
                <Typography
                  className={classes.valor}
                  variant="h1"
                  component="h2"
                  gutterBottom
                >
                  $ 56.69
                </Typography>
                <Typography
                  className={classes.updated}
                  variant="caption"
                  color="textSecondary"
                  gutterBottom
                >
                  Actualizado al 20/09/2019 15:00 hs.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
      {/* <Boxes /> */}
    </div>
  );
}
