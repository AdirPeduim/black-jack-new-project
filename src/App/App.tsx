import React from 'react';
import './App.css';
// @ts-ignore
import background from '../images/background.jpg';
import {Button, Card} from '@material-ui/core'
import {Player} from "../Entities/Player";
import {Packet} from "../Entities/Packet";
import {CardEntity} from "../Entities/CardEntity";
import PlayerComponent from "../Components/PlayerComponent";


// let suits = ['Hearts', 'Diamonds', 'Clubs' , 'Speeds'];
// let values = ['1','2','3','4','5','6','7','8','9','10','J','Q','k','A'];

interface MyProps {
}

interface MyState {
  player: Player;
  pc: Player;
  packet: Packet;
  scorePlayer: Number;
  scorePc: Number;

  turn:String;
  winner: String;
  exampleCard:CardEntity;
}

// statusGame:['restartGame' , 'Hit' , 'stay' ,'split'],
// turn: ['player', 'pc'],
// scorePlayer1: 0,
// scorePlayer2: 0,
// gameOver: false,
// winner: undefined

class App extends React.Component <MyProps , MyState>{
  constructor(props: MyProps){
    super(props);
    
    this.state = {
      pc: new Player("PC"),
      player: new Player("Player"),
      packet: new Packet(),
      scorePlayer: 0,
      scorePc: 0,
      exampleCard: new CardEntity ("clubs","A" ),
      turn: "Player",
      winner:"",
    };
  }
  
  

startNewGame(){
 
    this.state.player.insertCard(this.state.packet.randomCard());
    this.state.player.insertCard(this.state.packet.randomCard());
    
    this.state.pc.insertCard(this.state.packet.randomCard());
    this.state.pc.insertCard(this.state.packet.randomCard());

     this.setState({
      scorePlayer: this.state.player.calculateScore(),
      scorePc:  this.state.pc.calculateScore()
     });


 }

stand(){
  this.setState({
    turn:"pc"
   });
}
 
hit(){
  if(this.state.turn == "player")
  {
    if(this.state.scorePlayer < 21)
    {
      this.state.player.insertCard(this.state.packet.randomCard());
      this.setState({
        scorePlayer: this.state.player.calculateScore(),
      });
    }
    else{
      alert("you can't HIT anymore");
    }
 }
}
gameStatus()
{
  if(this.state.scorePlayer > 21)
  {
    this.setState({
      winner: "pc"

     });

  }
}

render(){
  return (
    <div className="App" style={{ backgroundImage:`url(${background})` }}>

      <Button className="button" variant='contained' color='primary' id="newGame" onClick={() => {this.startNewGame()}} size = 'large'>
         New Game</Button>
      <Button className="button" variant='contained' color='primary' id="hit" onClick={() => {this.hit()}} size = 'large' >
         Hit</Button>
      <Button className="button" variant='contained' color='primary' id="stand" onClick={() => {this.stand()}} size = 'large' >
         Stand</Button>
      
      <PlayerComponent player={this.state.player}/>
      <PlayerComponent player={this.state.pc}/>



    </div>
  );
}

}

export default App;
