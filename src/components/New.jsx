import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../form.css"; // Assurez-vous que le fichier CSS est bien importé

const New = () => {
    // État pour le nombre de joueurs
    const [playerCount, setPlayerCount] = useState(5);
    const navigate = useNavigate();

    // Gestion du changement du slider
    const handleSliderChange = (event) => {
        setPlayerCount(event.target.value);
    };

    // Gestion du bouton "Démarrer la Partie"
    const handleStartGame = () => {
        console.log(`La partie commence avec ${playerCount} joueurs !`);
        // Ajoutez ici la logique pour lancer le jeu
        navigate("/jeu");
    };

    return (
        <div className="form">
            <div className="game-container">
                <h1 className="game-title">Lancer une Partie</h1>
                <label className="player-label">Nombre de joueurs :</label>
                <input
                    type="range"
                    min="5"
                    max="10"
                    value={playerCount}
                    className="player-slider"
                    id="playerRange"
                    onChange={handleSliderChange}
                />
                <div className="player-count">{playerCount} Joueurs</div>
                <button className="start-button" onClick={handleStartGame}>
                    Démarrer la Partie
                </button>
            </div>
        </div>
    );
};

export default New;