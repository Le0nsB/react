import { useState } from "react";  
import './Flower.css';
import flower from "./assets/flower/flower.svg";
import petal from "./assets/flower/petal.svg";

function Flower() {
    const initialPetals = Math.floor(Math.random() * 10) + 5;
    const [petalsLeft, setPetalsLeft] = useState(initialPetals);
    const [milValue, setMilValue] = useState(Math.floor(Math.random() * 2));
    const [fallenPetals, setFallenPetals] = useState([]);

    function removePetal() {
        if (petalsLeft > 0) {
            setPetalsLeft(prev => prev - 1);
            setMilValue(prev => (prev === 0 ? 1 : 0));

            // Add a fallen petal for animation
            setFallenPetals(prev => [...prev, petalsLeft - 1]);
        }
    }

    const maxVisiblePetals = 15;
    const visiblePetals = Math.min(petalsLeft, maxVisiblePetals);

    const petalElements = Array.from({ length: visiblePetals }, (_, i) => {
        const angle = (360 / visiblePetals) * i;
        return (
            <img
                key={`petal-${i}`}
                src={petal}
                alt="petal"
                className="petal"
                style={{
                    transform: `rotate(${angle}deg) translate(40px) rotate(45deg)`,
                }}
                
            />
        );
    });

    const fallingPetals = fallenPetals.map((_, i) => (
        <img
            key={`falling-${i}`}
            src={petal}
            alt="falling petal"
            className="petal falling"
            style={{
                left: `${50 + Math.random() * 10 - 5}%`,
                animationDelay: `${i * 0.1}s`,
            }}
        />
    ));

    return (
        <article className="flower">
            <h2>Mīl vai nemīl</h2>
            <button onClick={removePetal}>Noņemt</button>
            <p>Atlikuši ziedlapiņas: {petalsLeft}</p>
            <p>{milValue === 0 ? "Mīl" : "Nemīl"}</p>
            <div className="flower-container">
                <img src={flower} alt="flower center" className="center-flower" />
                {petalElements}
                {fallingPetals}
            </div>
        </article>
    );
}

export default Flower;
