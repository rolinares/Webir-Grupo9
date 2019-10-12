import React, { Component } from "react";
import CurrencyBox from "./CurrencyBox";
import Grid from "@material-ui/core/Grid";
import ARGFlag from "../images/ARGFlag.png";
import URUFlag from "../images/URUFlag.png";
import USAFlag from "../images/USAFlag.png";
import "./styles/Boxes.css";
// import Typography from "@material-ui/core/Typography";

class boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cotizaciones: [
        {
          id: 1,
          title: "Cotización Dólar USA - Peso Argentino",
          img1: USAFlag,
          img2: ARGFlag,
          cot: 60.56
        },
        {
          id: 2,
          title: "Cotización Dólar USA - Peso Uruguayo",
          img1: USAFlag,
          img2: URUFlag,
          cot: 37.65
        }
      ]
    };
  }
  async componentDidMount(){// se paraliza con un wait para que continue luego de recibir la info
    await this.fetchCotization()
  }

  fetchCotization = async () => {
    //let res = await fetch('http://ws.geeklab.com.ar/dolar/dolar-iframe.php',{mode: "no-cors", headers:{"Content-Type": 'application/json' }})
    let res = await fetch('http://api.estadisticasbcra.com/usd',{
      mode: "no-cors",
      type: 'GET',
      AccessControlAllowCredentials : "true",
     AccessControlAllowHeaders: "Authorization",
      data:{d: "2004-12-31"},
      headers:{"Authorization": 
    'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAxMjUyMjQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJzYW50aXNvc2ExOTkyQGdtYWlsLmNvbSJ9.bb5Y7fB43NW8YHK6lGKqeD1EoithBqwu7yUnMmZAo5xyVkk1aIP9E6VRGQf_l950rVC4BI0_kb8uIs2VpYqbXQ'
  ,  Accept: 'application/json',
  'Content-Type': 'application/json',
}})
let data = await res.json    
     console.log(res)
    
    
     console.log(data)
  }

  render() {
    return (
      <Grid container className="root">
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {this.state.cotizaciones.map(item => {
              return (
                <CurrencyBox
                  id={item.id}
                  title={item.title}
                  img1={item.img1}
                  img2={item.img2}
                  cot={item.cot}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default boxes;
