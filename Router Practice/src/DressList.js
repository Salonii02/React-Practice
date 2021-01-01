import react,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import './DressList.css';
class DressList extends Component{
   render(){
       return(
           <div className="DressList">
            <h1 className="Display-1 text-center">Dress List!</h1>
             <div className="container">
                <div className="row">
                {this.props.dresses.map(d=>(
                    <div className="Dress col-md-3  text-center" key={d.name}>
                     <img src={d.src} alt={d.name}/>
                     <h3>{d.name}</h3>
                    </div>
                ))}
                </div>
             </div>
           </div>
       );
   }
}
export default DressList;