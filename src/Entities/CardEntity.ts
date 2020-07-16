export class CardEntity {
    private suit: String;
    private number: String;
   

    constructor(suit: string, number: string)
    {
        this.suit = suit;
        this.number = number;
        
    }

    getValue() {
        if(this.number == 'A')
            return 11;
        if (this.number == 'J' || this.number =='Q' || this.number == 'K') 
            return 10;
         else 
            return Number(this.number);
        
    }

    getImage() {
        return "src/images/cards/PNG-cards-1.3/" + this.number+ "_of_" + this.suit + ".png";
    }

} 