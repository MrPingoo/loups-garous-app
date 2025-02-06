import React, { useState, useEffect } from "react";
import "../styles.css";
import Clock from "./Game/Clock";
import Player from "./Game/Player";
import Info from "./Game/Info";
import Board from "./Game/Board";
import Chat from "./Game/Chat";
import ModalQuestion from "./Game/ModalQuestion";

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
            "major" : false,
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

    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalQuestion, setModalQuestion] = useState("");
    const [maxSelectable, setMaxSelectable] = useState(1);
    const [modalCallback, setModalCallback] = useState(null);
    const questionsList = [
        { label: "loup_kill", question: "Qui doit mourir cette nuit ?", maxSelectable: 1 },
        { label: "voleur_swap", question: "Voleur veux-tu changer de carte avec un autre joueur ?", maxSelectable: 1 },
        { label: "sorciere_kill", question: "Sorcière veut-tu utiliser ta option de mort sur un joueur ?", maxSelectable: 1 },
        { label: "sorciere_save", question: "Sorcière veut-tu utiliser ta option de vie sur le joueur qui vient d'être tué ?", maxSelectable: 1 },
        { label: "cupidon_love", question: "Cupidon choisis deux amoureux ?", maxSelectable: 2 },
        { label: "voyante_peek", question: "Voyante, choisis une personne pour prendre sa carte ?", maxSelectable: 1 },
        { label: "chasseur_revenge", question: "Chasseur tu viens de mourir veut-tu tuer une personne ?", maxSelectable: 1 }
    ];

    const openModal = (label, callback) => {
        const questionData = questionsList.find(q => q.label === label);

        if (!questionData) {
            console.error(`Question non trouvée pour le label : ${label}`);
            return;
        }

        setModalQuestion(questionData.question);
        setMaxSelectable(questionData.maxSelectable);
        setModalCallback(() => callback);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openNightModal = () => {
        openModal("loup_kill", (selected) => {
            console.log("Victime choisie :", selected);
            // Logique de suppression du joueur ici
        });
    }

    return (
        <>
            <div className="game">
                <div className={"background " + (isNight ? 'background-night' : "")} id="background"></div>
                <Clock hours={hours} minutes={minutes} isNight={isNight} />
                <ModalQuestion
                    isOpen={isModalOpen}
                    question={modalQuestion}
                    players={players.filter(p => p.alive)} // Ne montrer que les vivants
                    maxSelectable={maxSelectable}
                    onClose={closeModal}
                    onConfirm={(selected) => {
                        if (modalCallback) modalCallback(selected);
                        closeModal();
                    }}
                />
                <Info openNightModal={openNightModal} currentInfo={currentInfo}/>
                <Player me={me} />
                <Board players={players} setPlayers={setPlayers}/>
                <Chat/>
            </div>
        </>
    );
}

export default Jeu;