import React, {Component} from 'react';
import '../assets/css/app.css';
import cardData from '../assets/helpers/card_data';
import Card from './card';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            cards: cardData
        }

        this.flipCard = this.flipCard.bind(this);

    }

    flipCard(index) {
        const newCards = this.state.cards.slice();

        newCards[index].flipped = !newCards[index].flipped;
        //toggles to opposite of what it was

        this.setState({
            cards: newCards
        });

    }

    render(){

        const cardElements = this.state.cards.map((card, index) => {
            return <Card key={index} flip={() => this.flipCard(index)} card={card} />
        });
        //put flipcard in anon function b/c it's going to be called later

        return(
            <div className="app">
                <h1>Hello</h1>
                {cardElements}
            </div>
        )
    };
}

export default App;
