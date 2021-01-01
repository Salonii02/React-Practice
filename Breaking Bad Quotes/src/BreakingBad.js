import React,{Component} from 'react';
import './BreakingBad.css';
import TapButton from './TapButton';
class BreakingBad extends Component{
    render(){
        return(
            <div>
            <p>
              <span className="B br">Br</span>eaking  
            </p>
            <p className="bad">     
             <span className="B">Ba</span>d
            </p>
           <TapButton/>  
           </div> 
        );
    }
}
export default BreakingBad;