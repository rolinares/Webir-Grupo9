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