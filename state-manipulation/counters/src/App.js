import React, { Component } from 'react';
import './App.css';
import {Counter} from './components/counter';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
      count3: 0
  }
  }
  inCounter = (count) => {
    let { count1, count2, count3 } = this.state;
    switch (count) {
      case 'count1':
        this.setState({
          count1: ++count1
        })
        break;
      case 'count2':
        this.setState({
          count2: ++count2
        })
        break;  
      case 'count3':
        this.setState({
          count3: ++count3
        })
        break;  
    
      default:
        break;
    }

  }
  
  deCounter = (count) => {
    let { count1, count2, count3 } = this.state;
    switch (count) {
      case 'count1':
        this.setState({
          count1: --count1
        })
        break;
      case 'count2':
        this.setState({
          count2: --count2
        })
        break;  
      case 'count3':
        this.setState({
          count3: --count3
        })
        break;  
    
      default:
        break;
    }

  }
  
  increaseAll() {
    let { count1, count2, count3 } = this.state;
    this.setState({
      count1: ++count1,
      count2: ++count2,
      count3: ++count3
    });
  }

  decreaseAll() {
    let { count1, count2, count3 } = this.state;
    this.setState({
      count1: --count1,
      count2: --count2,
      count3: --count3
    });
  }


  render() {
    let { count1, count2, count3 } = this.state;
    return (
      <div className="App">
        <Counter count={ count1 } inCounter={() => this.inCounter('count1')} deCounter={() => this.deCounter('count1')}/>
        <Counter count={ count2 } inCounter={() => this.inCounter('count2')} deCounter={() => this.deCounter('count2')} />
        <Counter count={ count3 } inCounter={() => this.inCounter('count3')} deCounter={() => this.deCounter('count3')}/>
        <button className='btn' onClick={() => this.increaseAll()}>+</button>
        <button className='btn' onClick={() => this.decreaseAll()}>-</button>

      </div>
    );
  }
}

export default App;
