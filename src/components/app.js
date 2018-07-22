import React, {Component} from 'react';
import '../assets/css/app.css';
import cardData from '../assets/helpers/card_data';
import Card from './card';
import { doubleArray, shuffleArray } from '../assets/helpers';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstCardIndex: null,
            cards: [],
            matches: 0,
            attempts: 0,
            gameState: 'ready'
        }

        this.flipCard = this.flipCard.bind(this);
        this.blockClick = false;
    }

    componentDidMount(){
        this.setState({
            cards: shuffleArray(doubleArray(cardData))
        });
    }

    handleCardClicked(index){
        if(this.blockClick === true) return;

        const {firstCardIndex, cards} = this.state;
        let matches = this.state.matches;
        let attempts = this.state.attempts;
        let cardIndex = null;
        let gameState = this.state.gameState;

        if(firstCardIndex === null){
            cardIndex = index;

            this.flipCard(index);

        } else {
            this.blockClick = true;
            attempts++;
            const card1 = cards[firstCardIndex].front;
            const card2 = cards[index].front;
            this.flipCard(index);

            if(card1 === card2){
                matches++;

                if(matches === cards.length/2){
                    gameState = 'won';
                }

                this.blockClick = false;

            } else {
                console.log("try again");

                setTimeout(() => {
                    this.flipCard(firstCardIndex);
                    this.flipCard(index);
                    this.blockClick = false;
                }, 1000);
            }
        }

        this.setState({
            firstCardIndex: cardIndex,
            matches: matches,
            attempts: attempts,
            gameState: gameState
        });
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
        const {cards, matches, attempts, gameState} = this.state;

        const cardElements = cards.map((card, index) => {
            return <Card key={index} flip={() => this.handleCardClicked(index)} card={card} />
        });
        //put flipcard in anon function b/c it's going to be called later

        return(
            <div className="app">
                <h1>Hello</h1>
                <h3>Accuracy: { attempts ? ((matches/attempts) * 100).toFixed(0) : 0}%</h3>
                <div className="game-board">
                    {cardElements}
                </div>
                <h1>{gameState === 'won' ? 'You won!' : ''}</h1>
            </div>
        )
    };
}

export default App;
