import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import React, { Component } from "react";
import BestChoice from './BestChoice';
import "./styles/SearchPanel.css";
  
  class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            selectDate: '2019-11-18'
         }
         this.changeInfo = this.changeInfo.bind(this);
         this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(e){        
      this.setState({selectDate: e.target.value});        
    }
    changeInfo(e) {        
      this.fetchCotization(e)        
    }
    fetchCotization = async (e) => {        
        var url = 'https://localhost:5001/api/Quotations/Best/' + this.state.selectDate        
        let response = await fetch(url,{            
        }).then((response) => {         
            return response.json()
        })
        .then((recurso) => {
            var nameAux = this.state.name;  
            nameAux = recurso.name === "Dolar Oficial"? "Te conviene viajar llevando dólares" : "Te conviene viajar con pesos argentinos";
            this.setState({name: nameAux});           
        })
      }

    render() {
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
  
  
  export default SearchPanel;

