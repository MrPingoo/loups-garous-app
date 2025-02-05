import React from "react";
import "../styles.css";
import Clock from "./Game/Clock";
import Player from "./Game/Player";
import Info from "./Game/Info";
import Board from "./Game/Board";
import Chat from "./Game/Chat";

function Jeu() {
    return (
        <>
            <div className="game">
                <div className="background" id="background"></div>
                <Clock/>
                <Info/>
                <Player/>
                <Board/>
                <Chat/>
            </div>
        </>
    );
}

export default Jeu;