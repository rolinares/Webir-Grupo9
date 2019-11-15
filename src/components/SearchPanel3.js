
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React, { useState , Component } from "react";
import BestChoice from './BestChoice';
import "./styles/SearchPanel.css";
function BasicDatePicker(){
        
    return (
      <div>
        <input
    type="date"
    className="input-group-field"
    name="date"
    id="date"
    value={this.state.selectDate}
    onChange={this.handleDateChange}
    onClick={this.changeInfo}
/>      
        </div>
    );
   
  }
  
  
  class SearchPanel3 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            selectDate: '2019-11-11'
         }
         this.changeInfo = this.changeInfo.bind(this);
         this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(e){
        console.log(e.target.value);
        this.setState({selectDate: e.target.value});
        console.log(this.state.selectDate);
    }
    changeInfo(e) {
        console.log(e.target.value)
         this.fetchCotization(e)
        
    }
    fetchCotization = async (e) => {
        console.log(this.state.selectDate)
        console.log(e.target.value)
        var url = 'https://localhost:5001/api/Quotations/Best/' + this.state.selectDate
        console.log("url" + url)
        let response = await fetch(url,{            
        }).then((response) => {         
            return response.json()
        })
        .then((recurso) => {
            console.log(recurso.name)            
            //console.log(recurso)
            var nameAux = this.state.name;  
            nameAux = recurso.name == "Dolar Oficial"? "Le conviene viajar llevando Dólares" : "Le conviene viajar con pesos Argentinos";          
            this.setState({name: nameAux});
           
        })
        
            
      }

    render() {
      const { classes } = this.props;
      return (
        <div className="height">
      
         <Grid container className="margin" direction="row" justify="center" alignItems="center" >
            <Paper className="paper">
            <Grid style={{display: "flex", justifyContent: "center", alignItems: "center"}} container spacing={10}>
                <Grid item>
                <input
                    type="date"
                    className="input-group-field"
                    name="date"
                    id="date"
                    value={this.state.selectDate}
                    onChange={this.handleDateChange}
                    //onClick={this.changeInfo}
                    
                />      
                </Grid>
                <Grid item direction="row" justify="center" alignItems="flex-end">
                <Button 
                    variant="contained" 
                    color="primary" 
                    className="button"
                    onClick={this.changeInfo}>
                    Consultar
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
  
  
  export default SearchPanel3;

