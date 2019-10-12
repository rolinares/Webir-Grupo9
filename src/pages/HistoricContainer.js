import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import LineChart from '../components/LineChart';

class Historic extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cots: [40, 49.27, 56.48, 56.44, 56.48, 56.69, 56.69],
            labels: ['15/09/2019', '16/09/2019', '17/09/2019', '18/09/2019', '19/09/2019', '20/09/2019', '21/09/2019'],
         }
         console.log(this.state)
    }
    async componentDidMount(){
        await this.fetchCotization()
    }
    fetchCotization = async () => {                
        let sal
        let response = await fetch('https://localhost:5001/api/Quotations',{            
        }).then((response) => {           
            return response.json()
        })
        .then((recurso) => {
            console.log(recurso)
             sal = recurso
        })      
        console.log(sal[0])        
        console.log("Valor: "+ sal[0].value)        
    }
    render() { 
        return ( 
           
            <React.Fragment>                
                <NavBar />                                
                <LineChart cots={this.state.cots} labels={this.state.labels}/>
            </React.Fragment>
         );
    }
}
 
export default Historic;

/* Object recibido
{
Id:
Coin:
Value:
Date:
}

Coin:
{
id
code
CountryBank
RefCode
}
*/