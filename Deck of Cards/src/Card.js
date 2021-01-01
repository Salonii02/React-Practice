import react,{Component} from 'react';
import './Card.css';
class Card extends Component{
    //transform: translate(10px,20px) rotate(20deg);
    constructor(props)
    {
        super(props);
        let angle=Math.random()*90-45;
        let xPos=Math.random()*40-20;
        let yPos=Math.random()*40-20;
        this._transform=`translate(${xPos}px,${yPos}px) rotate(${angle}deg)`;
        console.log("In Constructor of Card");
        console.log(this._transform);
    }
    render(){
        console.log("In Render of Card");
        console.log(this._transform);
        return(
            <img style={{ transform: this._transform} } className="Card"  src={this.props.image} alt={this.props.name} />
        );
    }
}

export default Card;