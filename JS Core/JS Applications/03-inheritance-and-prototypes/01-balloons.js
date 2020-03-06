function solve(){

    class Balloon{

        constructor(color, gasWeight ){
            this.color = color;
            this.gasWeight  = gasWeight ;
        }

    }

    class PartyBalloon extends Balloon{

        constructor(color, gasWeight ,ribbonColor, ribbonLength){

            super(color, gasWeight );
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
        }
        // set ribbon(ribbon){
        //     this.ribbonProp = ribbon;
        // }
        get ribbon(){
            let color = this.ribbonColor;
            let length = this.ribbonLength;
            let obj = {color, length};
            return obj;
        }
    }

    class BirthdayBalloon extends PartyBalloon{

        constructor(color, gasWeight, ribbonColor, ribbonLength, text){

            super(color, gasWeight, ribbonColor, ribbonLength);
             this.textProp = text;
        }

        // set text(text){
        //     this.textProp = text;
        // }

        get text(){
            return this.textProp;
        }
    }
    
    // let birthdayBalloon = new BirthdayBalloon('red', 1, 'blue', 10, 'random text');
    // console.log(birthdayBalloon.ribbon);
    // birthdayBalloon.text = 'new';
    // console.log(birthdayBalloon.ribbon.color);
    return {Balloon, PartyBalloon, BirthdayBalloon};
}


    solve();
