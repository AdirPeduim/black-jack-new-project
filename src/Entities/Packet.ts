import { CardEntity } from "./CardEntity";

const cards = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const suits = ['hearts', 'diamonds', 'clubs' , 'spades'];

export class Packet {
    private packet : CardEntity [];
    private used: CardEntity[];
   
    constructor() {
       this.packet = [];
       this.used= [];

       for (let i = 0; i < cards.length; i++) {
            for (let j = 0; j < suits.length; j++) {
             
            const c: CardEntity = new CardEntity( suits[j] , cards[i]);
            this.packet.push(c);
        } 
    }
}


randomCard(){
    let rnd = Math.floor(Math.random() * (this.packet.length)); 
    let randCard:CardEntity = this.packet[rnd];
    
    this.used.push(randCard);
    this.packet.splice(rnd, 1);

    return randCard;
}

}