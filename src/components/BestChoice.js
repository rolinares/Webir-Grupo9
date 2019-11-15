// import React, { Component } from "react";

// function BestChoice(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }

//   export default BestChoice;
import React, { Component } from "react";

class BestChoice extends Component {
    render() {
      return (
       <div style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backbacgroundImage: `url(${"../images/moneda.png"})`}}> 
           <h3 style={{textAlign: "center", fontFamily: "Segoe UI,Arial,sans-serif", fontWeight: "400", fontSize: "3vw"}}>{this.props.name}</h3>
       </div>
      );
    }
  }
  
   export default BestChoice;
  