import react,{Component} from 'react';
import Card from './Card';
import axios from 'axios';
import './Deck.css';
const API_URL="https://deckofcardsapi.com/api/deck/new/shuffle";
const CARD_URL="https://deckofcardsapi.com/api/deck";

class Deck extends Component{
    constructor(props)
    {
        super(props);
        this.state={deck:null,drawn : []};
        this.getCard=this.getCard.bind(this);
    }
    async componentDidMount(){
        let deck = await axios.get(API_URL);
        console.log(deck.data);
        this.setState( {deck : deck.data});
    }
    async getCard()
    {
        let card_id = this.state.deck.deck_id;
        try{
        let card_url= `${CARD_URL}/${card_id}/draw/`;
        let cardRes = await axios.get(card_url);
        console.log(cardRes.data);
          if(!cardRes.data.success)
          {
                throw new Error("No cards Remaning!");
          }
        let card = cardRes.data.cards[0];
        console.log(card);
        this.setState( st => ({
            drawn :[
                 ...st.drawn,
                 {
                     id:card.code,
                     image:card.image,
                     name:`${card.value} of ${card.suit}`
                 }
            ]
        }))
      }catch(err){
          alert(err);
      }
    }
    render(){
        console.log("In render of Deck");  
      return(
          <div>
        <h1> Card Game</h1>
        <button onClick={this.getCard}> Add Card to Deck</button>
        <div className="Deck-cardarea">
            { this.state.drawn.map(c => (
          <Card name={c.name} image={c.image} key={c.id}/>
      ))}
            </div>
        </div>
      );
    }
}

export default Deck;
