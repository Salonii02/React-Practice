import react,{Component} from 'react';
import {Link} from 'react-router-dom';
import './DressDetails.css';
class DressDetails extends Component{
    render(){
        let {dress}=this.props;
        return(
        <div className="container">
        <div className="DressDetails row justify-content-center mt-5">
        <div className="col-11 col-lg-5 ">
        <div className="DressDetails-card card">
        <img className="card-img-top" src={dress.src} alt={dress.name}/>
        <div className="card-body">
         <h2 className="card-title"> {dress.name}</h2>
         <h4 className="card-subtitle text-muted"> Rank : {dress.age}</h4>
        </div>
        <ul className="list-group list-group-flush">
            {dress.facts.map( (fact,i)  =>(  
               <li className="list-group-item" key={i}> 
                 {fact}
               </li>
               ))}
        </ul>
         <div className="card-body">
           <Link className="btn btn-info"to="/dress">Go Back</Link>      
         </div>
        </div>
        </div>
        </div>
        </div>
        );
    }
}
export default DressDetails;