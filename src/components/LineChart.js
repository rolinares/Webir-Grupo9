import React from 'react';
import {Line} from 'react-chartjs-2';
import './styles/LineChart.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const data = {
  labels: ['15/09/2019', '16/09/2019', '17/09/2019', '18/09/2019', '19/09/2019', '20/09/2019', '21/09/2019'],
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
      data: [56.03, 56.27, 56.48, 56.44, 56.48, 56.69, 56.69]
    }
  ]
};

class LineChart extends React.Component {
  render() {
    return (
      <Grid container className="margin" direction="row" justify="center" alignItems="center" >
        <Paper className="paper">
          <Grid item className="margin" direction="column" justify="center" alignItems="center" >
            <Line data={data} />
          </Grid>
        </Paper>
      </Grid>
      // <div className="ChartSize">
      //   <h2>Line Example</h2>
      //   <Line data={data} />
      // </div>
    );
  }
};

export default LineChart;