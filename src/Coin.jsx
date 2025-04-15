import { useState } from "react"; 
import './Coin.css'
import coin1 from "./assets/coins/coin-1.svg";
import coin2 from "./assets/coins/coin-2.svg";

const coinImages = [coin1, coin2];
function Coin() {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    const [coinValue, setCoinValue] = useState(randomNumber);
    function flipCoin() {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        setCoinValue(randomNumber);
        
    }
        return(
            <article className="coin">
                <h2>Monēta</h2>
                <button onClick={flipCoin}>Mest</button>
                <p>{coinValue == 1 ? "Heads" : "Tails"}</p>
                <img
                    src={coinImages[coinValue - 1]}
                    alt={"Monēta " + coinValue}
                />
                
            </article>
        ) 
  }

  export default Coin;