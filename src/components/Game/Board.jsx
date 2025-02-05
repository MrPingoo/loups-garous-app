import React from "react";

function Board() {
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
                    <tr>
                        <td>Hugo</td>
                        <td>
                        <div className="status-icon eliminated"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Morgane</td>
                            <td>
                                <div className="status-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>LoupNoir</td>
                            <td>
                                <div className="status-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>OmbreSilencieuse</td>
                            <td>
                                <div className="status-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Hugo</td>
                            <td>
                                <div className="status-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Morgane</td>
                            <td>
                                <div className="status-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>LoupNoir</td>
                            <td>
                                <div className="status-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>OmbreSilencieuse</td>
                            <td>
                                <div className="status-icon"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Board;