import React, { useState, useEffect } from "react";
import "../styles.css";
import Clock from "./Game/Clock";
import Player from "./Game/Player";
import Info from "./Game/Info";
import Board from "./Game/Board";
import Chat from "./Game/Chat";

function Jeu() {
    // État des joueurs : { nom, rôle, vivant, jourDeMort }
    const [players, setPlayers] = useState([
        { name: "Alice", role: "Loup-Garou", roleIdentifier: "loup", alive: true, deathDay: null },
        { name: "Bob", role: "Sorcière", roleIdentifier: "sorciere", alive: true, deathDay: null },
        { name: "Charlie", role: "Voyante", roleIdentifier: "voyante", alive: false, deathDay: null },
        { name: "David", role: "Chasseur", roleIdentifier: "chasseur", alive: true, deathDay: null }
    ]);
    const me = { name: "Me", role: "Loup-Garou", roleIdentifier: "loup",alive: true, deathDay: null,
        options: {
            "major" : true,
            "lovers" : true,
            "deathPotion": true,
            "lifePotion": true
        }
    };

    // État du temps de jeu
    const [gameTime, setGameTime] = useState(6); // 00:00 au début
    const [isRunning, setIsRunning] = useState(true); // Timer actif par défaut
    const [currentInfo, setCurrentInfo] = useState("Le jour se lève, sur le village ..."); // Info courante

    useEffect(() => {
        if (!isRunning) return; // Pause du timer

        const interval = setInterval(() => {
            setGameTime(prevTime => prevTime + 1); // Ajoute 1 unité = 10 sec (1h IG)
        }, 10000); // 10 sec = 1h IG

        return () => clearInterval(interval); // Nettoyage
    }, [isRunning]);

    // Calculer l'heure et les minutes IG
    const hours = Math.floor(gameTime % 24);
    const minutes = Math.floor((gameTime * 60) % 60);
    const isNight = hours >= 18 || hours < 6;

    return (
        <>
            <div className="game">
                <div className={"background " + (isNight ? 'background-night' : "")} id="background"></div>
                <Clock hours={hours} minutes={minutes} isNight={isNight} />
                <Info currentInfo={currentInfo}/>
                <Player me={me} />
                <Board players={players} setPlayers={setPlayers}/>
                <Chat/>
            </div>
        </>
    );
}

export default Jeu;