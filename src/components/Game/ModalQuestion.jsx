import React, { useState } from "react";

function ModalQuestion({ isOpen, question, players, minSelectable, maxSelectable, onClose, onConfirm }) {
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    if (!isOpen) return null; // Ne pas afficher si fermé


    // Fonction pour gérer la sélection d'un joueur
    const handleSelect = (player) => {
        if (selectedPlayers.includes(player)) {
            // Déselectionner si déjà sélectionné
            setSelectedPlayers(selectedPlayers.filter(p => p !== player));
        } else if (selectedPlayers.length < maxSelectable) {
            // Ajouter si pas encore sélectionné et qu'on n'a pas atteint la limite
            setSelectedPlayers([...selectedPlayers, player]);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{question}</h2>
                <div className="players-list">
                    {players.map((player, index) => (
                        <div
                            key={index}
                            className={`player-card ${selectedPlayers.includes(player) ? 'selected' : ''}`}
                            onClick={() => handleSelect(player)}
                        >
                            <div title={player.role} className={`status-icon ${!player.roleIdentifier ? " player-" + player.roleIdentifier : ""}`}></div>
                            <p>{player.name}{/* - {player.role}*/}</p>
                        </div>
                    ))}
                </div>
                <div className="modal-actions">
                    <button onClick={onClose}>Annuler</button>
                    <button
                        onClick={() => {
                            if (selectedPlayers.length >= minSelectable) {
                                onConfirm(selectedPlayers);
                            }
                        }}
                        disabled={selectedPlayers.length < minSelectable}
                    >
                        Valider
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalQuestion;