import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(2),
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 700,
    },
    margin: {
      marginTop: '20px'
    }
  }));

export default function MaterialUIPickers() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-09-19T21:11:54'));
  
    function handleDateChange(date) {
      setSelectedDate(date);
    }
    const classes = useStyles();
    return (
      <Grid container className={classes.margin} direction="row" justify="center" alignItems="center" >
        <Paper className={classes.paper}>
          <Grid container spacing={10}>
            <Grid item>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Fecha de cotización"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                  'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item direction="row" justify="center" alignItems="flex-end">
              <Button 
                  variant="contained" 
                  color="primary" 
                  className={classes.button}
                  onClick={this.changeInfo}>
                Buscar Cotización
                <Search className={classes.rightIcon} />
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }