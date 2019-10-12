import React from 'react';
class CotizationContiner extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
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
                ,Accept: 'application/json',
                ContentType: 'application/json',  
          }})
    let data = await res.json    
        console.log(res)
        
        
        console.log(data)
  }


  render() { 
    return (awjhdkj  );
  }
}
 
export default CotizationContiner;
