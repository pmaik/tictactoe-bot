import React, { Component } from 'react';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            B:[0,0,0,0,0,0,0,0,0],
            circleUrl:"circle.svg",
            crossUrl:"cross.svg",
            player:0,
            text:"Defeate me if you can!!!",
            class: "heading2"
        }

        // this.handleClick = this.handleClick.bind(this);
    }
    
    countEmptyBox(){
        var count = 0;
        for(var i=0; i<9; i++){
            if(this.state.B[i] === 0){
                count++;
            }
        }
        return count;
    }

    findBestIndex(){
        var idx = -1;
        var cnt = 0;
        var i;

        //*********************************************************/
        // Check for the winning 
        for( i=0; i<=8; i+=4){
            if(this.state.B[i] === 2){
                cnt++;
            }
            else if(this.state.B[i] === 0){
                idx = i; 
            }
        }
        if(cnt === 2 && idx !== -1){
            return idx;
        }

        idx=-1; cnt=0;
        for( i=2; i<=6; i+=2){
            if(this.state.B[i] === 2){
                cnt++;
            }
            else if(this.state.B[i] === 0){
                idx = i; 
            }
        }
        if(cnt === 2 && idx !== -1){
            return idx;
        }

        for(i=0; i<=6; i+=3)
        {
            idx=-1; cnt=0;
            for(var j=i; j<i+3; j++){
                if(this.state.B[j] === 2){
                    cnt++;
                }
                else if(this.state.B[j] === 0){
                    idx = j;
                }
            }
            if(cnt === 2 && idx !== -1){
                return idx;
            }
        }

        for(i=0; i<=2; i++)
        {
            idx=-1; cnt=0;
            for(j=i; j<=i+6; j+=3){
                if(this.state.B[j] === 2){
                    cnt++;
                }
                else if(this.state.B[j] === 0){
                    idx = j;
                }
            }
            if(cnt === 2 && idx !== -1){
                return idx;
            }
        }

        //*************************************************************/
        // Check for Opposition winning 
        idx = -1; cnt = 0;
        for( i=0; i<=8; i+=4){
            if(this.state.B[i] === 1){
                cnt++;
            }
            else if(this.state.B[i] === 0){
                idx = i; 
            }
        }
        if(cnt === 2 && idx !== -1){
            return idx;
        }

        idx=-1; cnt=0;
        for( i=2; i<=6; i+=2){
            if(this.state.B[i] === 1){
                cnt++;
            }
            else if(this.state.B[i] === 0){
                idx = i; 
            }
        }
        if(cnt === 2 && idx !== -1){
            return idx;
        }

        for(i=0; i<=6; i+=3)
        {
            idx=-1; cnt=0;
            for(var j=i; j<i+3; j++){
                if(this.state.B[j] === 1){
                    cnt++;
                }
                else if(this.state.B[j] === 0){
                    idx = j;
                }
            }
            if(cnt === 2 && idx !== -1){
                return idx;
            }
        }

        for(i=0; i<=2; i++)
        {
            idx=-1; cnt=0;
            for(j=i; j<=i+6; j+=3){
                if(this.state.B[j] === 1){
                    cnt++;
                }
                else if(this.state.B[j] === 0){
                    idx = j;
                }
            }
            if(cnt === 2 && idx !== -1){
                return idx;
            }
        }

        if(this.state.B[4] === 0){
            return 4;
        }

        for(i=0; i<=8; i+=2){
            if(this.state.B[i] === 0){
                return i;
            }
        }

        for(i=1; i<=7; i+=2){
            if(this.state.B[i] === 0){
                return i;
            }
        }
    }

    checkWin(){
        var cnt = 0;
        var i;
        for(i=2; i<=8; i+=4){
            if(this.state.B[i] === 2){
                cnt++;
            }
        }
        if(cnt === 3 ){
            return "true";
        }

        cnt = 0;
        for(i=2; i<=6; i+=2){
            if(this.state.B[i] === 2){
                cnt++;
            }
        }   
        if(cnt === 3){
            return "true";
        }

        for(i=0; i<=6; i+=3)
        {
            cnt=0;
            for(var j=i; j<i+3; j++){
                if(this.state.B[j] === 2){
                    cnt++;
                }
            }
            if(cnt === 3){
                return "true";
            }
        }

        for(i=0; i<=2; i++)
        {
            cnt=0;
            for(j=i; j<=i+6; j+=3){
                if(this.state.B[j] === 2){
                    cnt++;
                }
            }
            if(cnt === 3){
                return "true";
            }
        }

        return "false";
    }

    handleClick(event, index){
        var B1 = this.state.B;
        var player1 = this.state.player;
        // const {player} = this.state; // object destructuring.

        if(B1[index] !== 0){
            alert("You have clicked wrong button! Please click empty button!!");
        }
        else{
            B1[index] = 1;
            this.setState(state => ({
                B:B1,
                player:player1
            }));

            if( this.countEmptyBox() === 0){
                var text2 = "Match Draw!! Refresh to play again!";
                var class2 = "heading2_draw";
                this.setState(state => ({text:text2, class:class2}));
            }
            else {
                var B2 = this.state.B;
                var idx = this.findBestIndex();

                setTimeout(() => { 
                    B2[idx] = 2;
                    this.setState(state => ( { B:B2 }) );

                    if(this.checkWin() === "true"){
                        var text1 = "You Loose the game!! Refresh to play again!!";
                        var class1 = "heading2_loose";
                        this.setState(state => ({text:text1, class:class1}));
                    }
                 }, 1000);
                
            }
        }
        
        
    }

    render() { 

        const circle = <img src={this.state.circleUrl} alt=""></img>;
        const cross = <img src={this.state.crossUrl} alt=""></img>;
        const plane = <img src="" alt=""></img>;

        
        return ( 
            <div className="board">
                <h2 className={this.state.class}>{this.state.text}</h2>
                <div>
                    <button onClick={(event) => this.handleClick(event, 0)}  className="box"> 
                        <span> {this.state.B[0]===1 ? cross : (this.state.B[0]===2?circle:plane) } </span>
                    </button>
                    <button onClick={(event) => this.handleClick(event, 1)}  className="box"> 
                        <span> {this.state.B[1]===1 ? cross : (this.state.B[1]===2?circle:plane) } </span>
                    </button>
                    <button onClick={(event) => this.handleClick(event, 2)}  className="box"> 
                        <span> {this.state.B[2]===1 ? cross : (this.state.B[2]===2?circle:plane) } </span>
                    </button>
                </div>
                <div>
                    <button onClick={(event) => this.handleClick(event, 3)}  className="box"> 
                        <span> {this.state.B[3]===1 ? cross : (this.state.B[3]===2?circle:plane) } </span>
                    </button>
                    <button onClick={(event) => this.handleClick(event, 4)}  className="box"> 
                        <span> {this.state.B[4]===1 ? cross : (this.state.B[4]===2?circle:plane) } </span>
                    </button>
                    <button onClick={(event) => this.handleClick(event, 5)}  className="box"> 
                        <span> {this.state.B[5]===1 ? cross : (this.state.B[5]===2?circle:plane) } </span>
                    </button>
                </div>
                <div>
                    <button onClick={(event) => this.handleClick(event, 6)}  className="box"> 
                        <span> {this.state.B[6]===1 ? cross : (this.state.B[6]===2?circle:plane) } </span>
                    </button>
                    <button onClick={(event) => this.handleClick(event, 7)}  className="box"> 
                        <span> {this.state.B[7]===1 ? cross : (this.state.B[7]===2?circle:plane) } </span>
                    </button>
                    <button onClick={(event) => this.handleClick(event, 8)}  className="box"> 
                        <span> {this.state.B[8]===1 ? cross : (this.state.B[8]===2?circle:plane) } </span>
                    </button>
                </div>
                
            </div>
         );
    }

}
 
export default Board;