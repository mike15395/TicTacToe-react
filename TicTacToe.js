//import React, { useState } from "react";
import "./ttt.css"
//import { Container} from "reactstrap";
//import { Button } from "reactstrap";
import { useState } from "react";
import { Button } from "reactstrap";

const itemArray = Array(9).fill("");

export default function TicTacToe() {

    const [turn, setTurn] = useState("X");
    const [message, setMessage] = useState("");
    const [gameOver, setGame] = useState(false);
    const [cellCount, setCellCount] = useState(0);

    const setItem = (index) => {
        if (itemArray[index] !== "" || gameOver) {
            return;
        }
        else
        {
            if (turn === "X")
            {
                setTurn("O");
            }
            else {
                setTurn("X");
            }
            itemArray[index] = turn;
            setCellCount(cellCount + 1);
            if (cellCount === 8 ) { setMessage("Tie"); setGame(true)}
            
        }
        
        checkwinner();
    }
    
    const checkwinner = () => {
        if ((itemArray[0] !== "" &&
            itemArray[0] === itemArray[1] &&
            itemArray[1] === itemArray[2])
            ||(itemArray[3] !== "" &&
            itemArray[3] === itemArray[4] &&
                itemArray[4] === itemArray[5]) ||
            (itemArray[6] !== "" &&
            itemArray[6] === itemArray[7] &&
                itemArray[7] === itemArray[8]) ||
            (itemArray[0] !== "" &&
            itemArray[0] === itemArray[3] &&
                itemArray[3] === itemArray[6]) || 
            (itemArray[1] !== "" &&
            itemArray[1]=== itemArray[4] &&
                itemArray[4] === itemArray[7]) || 
            (itemArray[2] !== "" &&
            itemArray[2] === itemArray[5] &&
                itemArray[5] === itemArray[8]) || 
            (itemArray[0] !== "" &&
            itemArray[0] === itemArray[4] &&
                itemArray[4] === itemArray[8]) || 
            (itemArray[2] !== "" &&
            itemArray[2] === itemArray[4] &&
                itemArray[4] === itemArray[6]))
        {
            setMessage("Game Over "+turn+" Won");
            setGame(true);
        }
    }

    const reload = () => {
        setGame(false);
        setMessage("");
        setCellCount(0);
        itemArray.fill("");
    }
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Tic-Tac-Toe Game</h2>
            <div className="container" >
            {itemArray.map((item,index) => (
                <div className="button-container" key={index}
                    onClick={() => setItem(index)}>
                   {item}
                
                </div>
            ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center" ,alignItems:"center",flexDirection:"column"}}>
                <h2>{message} <br></br></h2>
                <div>
                {gameOver && <Button onClick={reload} color="success">Play Again</Button>}
                </div>
            </div>
            

        </div>
    );
}