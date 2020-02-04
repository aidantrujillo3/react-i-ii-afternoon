import React from 'react';
import './App.css';
import data from "./data"
import NavBar from './Components/NavBar.js'
import DisplayedItems from './Components/DisplayedItems'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      counter: 1, //this is intented to refer to data[i].id
      data: data
    }
  }

  backward = () => {
    if(this.state.counter <= 1){
    return null
    } else this.setState({counter: this.state.counter -1})
  }

  forward = () => {
    if(this.state.counter >= this.state.data.length){
      return null
    } else this.setState({counter: this.state.counter +1})

  }




  render(){
    return(
      <div className="App">
          <div className="navBar"> <NavBar/></div>
        <div className="buttonBox">
          <DisplayedItems data={this.state.data[this.state.counter -1]}/>
          <div className="NavBar"></div>
          <button className=" previous navButton" onClick={this.backward}>{"< Previous"}</button>
          <button className="edit blueButton">Edit</button>
          <button className="delete blueButton">Delete</button>
          <button className="new blueButton">New</button>
          <button className="next navButton" onClick={this.forward}>{"Next >"}</button>
        </div>
      </div>
    )
  }




}
export default App
