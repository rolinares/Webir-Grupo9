// import React, { Component } from "react";

// function BestChoice(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }

//   export default BestChoice;
import React, { Component } from "react";

class BestChoice extends Component {
    render() {
      return (
       <div>
           <h3>{this.props.name}</h3>
       </div>
      );
    }
  }
  
   export default BestChoice;
  