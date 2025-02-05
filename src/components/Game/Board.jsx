import React from "react";

function Board({players, setPlayers}) {
    return (
        <>
            {/* Tableau des joueurs */}
            <div className="player-table">
                <table>
                    <thead>
                        <tr>
                            <th>Nom du Joueur</th>
                            <th>Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>
                                <div className={`status-icon ${!player.alive ? "eliminated" : ""}`}></div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Board;