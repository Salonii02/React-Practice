import React,{Component} from 'react';
import './TapButton.css';
import axios from 'axios';
import Quote from './Quote';
const API_URL="https://breaking-bad-quotes.herokuapp.com/v1/quotes";
class TapButton extends Component{
    constructor(props)
    {
        super(props);
        this.state={Quote:"Breaking Bad Quote",Author:"Bitch"};
        this.getQuote=this.getQuote.bind(this);
    }
    async getQuote(){
        let Q= await axios.get(API_URL);
        console.log(Q.data);
        this.setState({Quote:Q.data[0].quote,
                       Author:Q.data[0].author}); 
    }
    render(){
        return(
            <div>
                  <button className="style-button" onClick={this.getQuote}>Curious Curious </button>;
                  <Quote Quote={this.state.Quote} Author={this.state.Author}/>
           </div>

        );
    }
}
export default TapButton;