import React, { Component } from 'react';
// import Counter from './Counter';

export default class Practice extends Component {
    // Initialize state
    constructor(props){
    super(props);
    this.state={
        count :0,
    };
    }
   //Update State
     updateCounter = ()=>{
        this.setState({count:this.state.count + 1});
    };

  render() {
    return (
      <div>
        <ol>
            <li>{this.props.name}</li>
            <li>{this.props.age}</li>
            <li>{this.props.accupation}</li>
        </ol>

        <p>count:{this.state.count}</p>
        <button onClick={this.updateCounter}>updateCounter</button>
      </div>
    );
  }
}