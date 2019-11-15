import React from 'react';
import {Line} from 'react-chartjs-2';
import './styles/LineChart.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



class LineChart extends React.Component {
  render(){
  const cot = this.props.cots  
  var sal= new Array()
  for (var i = 0; i < cot.length; i++)
  {
    sal[i] = cot[i]
  }  
  const data = {
    labels: this.props.labels,
    datasets: [
      {
        label: 'Cotización',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: sal
      }
    ]
  };

    return ( 
      <Grid container className="margin" direction="row" justify="center" alignItems="center" >
        <Paper className="paper">
          <Grid item className="margin" direction="column" justify="center" alignItems="center" >
            <Line data={data} />
          </Grid>
        </Paper>
        
      </Grid>      
      );
    }
};

export default LineChart;