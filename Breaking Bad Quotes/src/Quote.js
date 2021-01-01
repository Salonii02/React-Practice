import React,{Component} from 'react';
import './Quote.css';
class Quote extends Component{
render(){
  return(
      <div>
    <blockquote>
        {this.props.Quote}
    <span>{this.props.Author}</span>
    </blockquote>
</div>
  
  );
}
}

export default Quote;