import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import DressList from './DressList';
import DressDetails from './DressDetails';
import NavBar from './NavBar';
import './App.css';
import black from  './black-dress.jpg';
import purple from './dress.jpg';
import yellow from './yellow-dress.jpg';
import pink from    './pink-dress.png';
class App extends Component{
  static defaultProps ={
    Dresses: [
      {
        name: "Black",
        age: 2,
        src: black,
        facts: [
          "Black is the darkest color.", 
          "The result of the absence or complete absorption of visible light.",
          "Black is a formal, elegant, and prestigious color."
        ]
      },
      {
        name: "Yellow",
        age: 3,
        src: yellow,
        facts: [
           "For many people, yellow is seen as a bright and cheerful color.",
           "Advertisers may use it to not only draw attention but also to evoke a sense of happiness."
        ]
      },
      {
        name: "Purple",
        age: 1,
        src: purple,
        facts: [
           "Originally, the color purple came from a dye made from the mucus glands of a tropical sea snail known as the murex",
          "In Japan, the color purple signifies wealth and position.",
          "Purple is the hardest color for the eye to distinguish."
        ]
      },
      {
        name: "Pink",
        age: 1,
        src: pink,
        facts: [
          "Girls mast favourite color ",
          "Color of charm."
        ]
      }
    ]
  }
  render(){
    const getDress = props =>{
      let DressName=props.match.params.name;
      let CurrentDress= this.props.Dresses.find(
        dress => dress.name.toLowerCase() === DressName.toLowerCase()
      );
      return <DressDetails dress={CurrentDress}/>;
    };
    return(
      <div>
        <NavBar dresses={this.props.Dresses}/>
      <Switch>
       <Route exact path='/dress' render={ () => <DressList dresses={this.props.Dresses}/> } />
       <Route exact path='/dress/:name' render={getDress}/>
       </Switch>
       </div>
    );
  }
}

export default App;
