import {Component, setState, useState} from "react";
import './Counter.css';

class Counter extends Component {
    
    state = {
        counter: 0,
    };

    updateCounter = () => {
         this.setState({
             counter: this.state.counter+ 1,
         })       
    }
        
     render() {       
            return(
                <button className="button" onClick={this.updateCounter}>{this.state.counter}</button>
            );
     }

}

export default Counter;