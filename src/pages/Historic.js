import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import LineChart from '../components/LineChart';
import { Helmet } from 'react-helmet'

const TITLE = 'Histórico - ViajAR'

class Historic extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cots: [],
            labels: []
         }         
    }
    async componentDidMount(){               
        await this.fetchCotization()
    }
    fetchCotization = async () => {                
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let initDate = '01-' + month + '-' + year
        let endDate = date + '-' + month + '-'+year
        let url = 'https://localhost:5001/api/Quotations/range?codes=DolarArg&startTime=' + initDate + '&endTime=' + endDate
        let response = await fetch(url,{            
        }).then((response) => {           
            return response.json()
        })
        .then((recurso) => {            
            var labelsAux = this.state.labels
            var cotsAux = this.state.cots
            var a
            { recurso[0].map((item) => (
                a = new Date(item.date),
                labelsAux.push(a.getDate() + '-' + a.getMonth() + '-' + a.getFullYear()),
                cotsAux.push(item.value)
            ))}
            this.setState({
                labels: labelsAux,
                cots: cotsAux
            })              
        })
    }
    render() { 
        return ( 
           
            <React.Fragment>
                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>
                <NavBar />                                            
                <LineChart cots={this.state.cots} labels={this.state.labels}/>
            </React.Fragment>
         );
    }
}
 
export default Historic;
