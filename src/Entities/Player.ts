import { CardEntity } from "./CardEntity";

type PlayerTypes = "Player" | "PC";

export class Player {
    private cardsOfplayer: CardEntity[];
    private typePlayer: String;
    private score: Number;

    constructor(typePlayer: PlayerTypes)
    {
        this.cardsOfplayer= [];
        this.typePlayer = typePlayer;
        this.score = 0;
    }

    calculateScore()
    {
        let totalScore = 0
        for(let i = 0 ; i < this.cardsOfplayer.length; i++ ){
            totalScore += Number(this.cardsOfplayer[i].getValue());
        }
        this.setScore(totalScore);
        return totalScore;

    }

    setScore(num:Number)
    {
        this.score=num;
    }
    getScore()
    {
        return this.score;
    }
    insertCard(card:CardEntity){
        this.cardsOfplayer.push(card);
    }
    getTypePlyer()
    {
        return this.typePlayer;
    }
    getCards()
    {
        return this.cardsOfplayer;
    }
    getfirstCard()
    {
        return this.cardsOfplayer[0];
    }



}