
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React, { Component } from "react";
import BestChoice from './BestChoice';
import "./styles/SearchPanel.css";

class SearchPanel2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            
         }
         this.changeInfo = this.changeInfo.bind(this);
    }
    
    changeInfo() {
        //this.setState({temperature: e.target.value});
         this.fetchCotization()
        
    }
    fetchCotization = async () => {
        
        let response = await fetch('https://localhost:5001/api/Quotations/Best',{            
        }).then((response) => {         
            return response.json()
        })
        .then((recurso) => {
            console.log(recurso.name)            
            console.log(recurso)
            var nameAux = this.state.name;  
            nameAux = recurso.name == "Dolar Oficial"? "Le conviene viajar llevando Dólares" : "Le conviene viajar con pesos Argentinos";          
            this.setState({name: nameAux});
           
        })
        
            
      }

    render() { 
        // const [selectedDate, setSelectedDate] = React.useState(new Date('2019-09-19T21:11:54'));
        // const classes = useStyles();
        // function handleDateChange(date) {
        //     setSelectedDate(date);
        //   }
        return (
              <div>
                {/* <Button 
                    variant="contained" 
                    color="primary" 
                    
                    onClick={this.changeInfo}>
                    Buscar Cotización
                    
                </Button> */}
                 <Grid container className="margin" direction="row" justify="center" alignItems="center" >
                    <Paper className="paper">
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
                            //value={selectedDate}
                            //onChange={handleDateChange}
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
                            className="button"
                            onClick={this.changeInfo}>
                            Buscar Cotización
                            <Search className="rightIcon" />
                        </Button>
                        </Grid>
                    </Grid>
                    <BestChoice name={this.state.name}/>
                    </Paper>
                </Grid> 
                
              </div>

          );
    }
}
 
export default SearchPanel2;


  