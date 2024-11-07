import React, { Component } from "react";
import Navebar from "./Components/Navebar";
import News from "./Components/News";
// import Card from "./Components/Card";

// import Practice from "./Components/Practice";
// import Counter from "./Components/Counter";

export default class App extends Component {
  render() {
    return (
      <>
      <div >
         <Navebar />
         </div>
        
         <div className="container">
         <News pageSize={5} country={"us"} category={"Science"}/>
         
          </div>
         {/* <Card/> */}
         {/* <Counter/> */}
         {/* <Practice 
         name="Ammar"
         age = {20}
        accupation = "developers"
         /> */}
        </> 
      
    );
  }
}

// import React from 'react';
// import Counter from './Components/Counter';
// export default function App() {
//   return (
//     <div>
//      <Counter /> 
//     </div>
//   );
// }

