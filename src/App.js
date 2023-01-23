import logo from './logo.svg';
import './App.css';
import React , { Component } from 'react';
import Fir from './components/Fir';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

class App extends Component{ 
  constructor (props){
    super(props)
    this.state = {
      fullName:"jawher rjab",
      bio: "ay yo im here again", 
      imgSrc:"monkey.png", 
      profession: "full stack dev kan 7ab rabi",
      shows:true,
      digit: 0
    }
  } 
  componentDidMount = () => {
    setInterval(() =>{
      this.setState(prevState =>({
        digit:prevState.digit + 1
      }));
    },
    1000);
  }
  toggle() {
    this.setState({ shows: !this.state.shows })
    if (!this.state.shows) {
      this.setState({digit:0});
    }
  }
  render (){

  return(
    <div className="App">
      {this.state.shows ? <div> <Fir/>
      <img src={this.state.imgSrc} alt="im a monkey bro" />
      <h1>fullName:{this.state.fullName}</h1>
      <h3>bio:{this.state.bio}</h3>
      <h4>profession: {this.state.profession}</h4>
      {/* shows:{this.state.shows} */}
      </div> :  <div> <h1>GO BACK NOW</h1><img src='https://media4.giphy.com/media/l0HluVRlGyuCOYQhi/giphy.gif' alt='my monkey'/> <p>kindly to reset the component</p> </div>}
      <button  onClick={() =>this.toggle() }>change state</button>
      <h5>time interval : {this.state.digit}</h5>
      
      </div>
  )
  }
}

export default App;
