import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 500,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();


  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
            <Grid item>
                <Paper className={classes.paper} >
                    <Typography variant="caption" color="textSecondary" gutterBottom>
                        Actualizado al 20/09/2019 15:00 hs.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Cotización USD - UY
                    </Typography>
                </Paper>
            </Grid>
            <Grid item>
                <Paper className={classes.paper} >
                    <Typography variant="caption" color="textSecondary" gutterBottom>
                        Actualizado al 20/09/2019 15:00 hs.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Cotización USD - AR
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
