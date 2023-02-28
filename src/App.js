import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "Didier",
      companyName: ""
    }
  }

  handleClick = () => {
    this.setState({ name: "Irakiza", companyName:" The Company Name you works for is SolvIT"});
    // this.setState({ companyName:" Company Name is SolvIT"})
  }

  render(){
    return (
      <div className="App">
        <p>
          <strong>Hello, {this.state.name} {this.state.companyName}  </strong>
        </p>
        {/* <p> <strong> {this.state.companyName} </strong> </p> */}
        <button onClick={this.handleClick} className='btn'>
         Click Me
        </button>
      </div>
    );
  }
}

export default App;
