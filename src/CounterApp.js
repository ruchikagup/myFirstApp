import React, { Component } from 'react';
import './button.styles.css';

class CounterApp extends Component{
    constructor(props){
      super(props)
      this.state={ 
          count: props.start
        }
      this.props = props;
    }
    
    handleClick = () => {
       this.setState((prevState, prevProps)=>
           ({count: prevState.count + prevProps.increment}),
            ()=>console.log(this.state.count));
    }
  
    render()
    {
      return(
  
        <div>
          <h3>{this.state.count}</h3>
          <button className = 'button'
            type ='button'
            onClick = {this.handleClick}
            >Click Me!
          </button>
        </div>
        );
    }
  }
  
  export default CounterApp;