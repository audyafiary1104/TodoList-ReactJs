import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//react component
function Biodata(props) {
  return <span>Umur : {props.age}</span>;
}
function Nama(data) {
  return <h1>Halo {data.name} - <Biodata age="17"/></h1>
}
// react state
class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time : props.start
    }
  }
  componentDidMount(){
    this.addInterfal = setInterval(()=>this.increase(),1000)
  }
  componentWillMount(){
    clearInterval(this.addInterfal)
  }
  increase(){
    this.setState((state,props)=>({
      time : parseInt(state.time) + 1
    }))
  }
  render(){
    return(
      <h1> {this.state.time} Detik</h1>
    )
  }
}
// hendler
class Toogle extends Component{
  constructor(props){
    super(props)
    this.state = {
      tooglestatus : true
    }
    this.handlerclick = this.handlerclick.bind(this)
  }
  handlerclick(){
    this.setState(state=> ({
      tooglestatus : !state.tooglestatus
    }))
  }
  render(){
    return(
      <button onClick={this.handlerclick}>
        {this.state.tooglestatus ? 'ON':'OFF'}
      </button>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Timer start="0"/>
        <Nama name="Audy"/>
        <img src={logo} className="App-logo" alt="logo" />
        <Toogle/>
        </div>
      </div>
    );
  }
}

export default App;
