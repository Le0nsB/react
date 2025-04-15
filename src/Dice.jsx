import { useState } from "react"; 
import './Dice.css'
import dice1 from "./assets/dice/dice-1.svg";
import dice2 from "./assets/dice/dice-2.svg";
import dice3 from "./assets/dice/dice-3.svg";
import dice4 from "./assets/dice/dice-4.svg";
import dice5 from "./assets/dice/dice-5.svg";
import dice6 from "./assets/dice/dice-6.svg";
const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
const randomNumber = Math.floor(Math.random() * 6) + 1;
function Dice() {
    
    const [diceValue, setDiceValue] = useState(randomNumber);
    function rollDice() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setDiceValue(randomNumber);
        
    }
        return(
            <article className="dice">
                <h2>Metamais kauliņš</h2>
                <button onClick={rollDice}>Mest</button>
                <p>Jūs uzmetāt <strong>{diceValue}</strong></p>
                <img
                    src={diceImages[diceValue - 1]}
                    alt={"Metamais kauliņš " + diceValue}
                />
                
            </article>
        ) 
  }

  export default Dice;