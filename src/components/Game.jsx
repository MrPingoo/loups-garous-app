import React, { useState, useEffect } from "react";
import "../styles.css";
import Clock from "./Game/Clock";
import Player from "./Game/Player";
import Info from "./Game/Info";
import Board from "./Game/Board";
import Chat from "./Game/Chat";
import ModalQuestion from "./Game/ModalQuestion";
import { rolesConfig } from "./Game/rolesConfig";

const roleNames = {
    voleur: "Voleur",
    cupidon: "Cupidon",
    sorciere: "Sorcière",
    chasseur: "Chasseur",
    voyante: "Voyante",
    loup: "Loup-Garou",
    villageois: "Villageois"
};

const assignRoles = (playerNames, numPlayers) => {
    // Assurer que numPlayers est entre 8 et 12
    numPlayers = Math.max(8, Math.min(12, numPlayers));

    const availableRoles = [...rolesConfig[numPlayers]];

    // Mélange les rôles pour une attribution aléatoire
    availableRoles.sort(() => Math.random() - 0.5);

    return playerNames.slice(0, numPlayers).map((name, index) => {
        const roleIdentifier = availableRoles[index];
        return {
            name,
            role: roleNames[roleIdentifier], // Convertit l'identifiant en nom lisible
            roleIdentifier,
            alive: true,
            deathDay: null
        };
    });
};

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
    const [minSelectable, setMinSelectable] = useState(1);
    const [modalCallback, setModalCallback] = useState(null);
    const questionsList = [
        { label: "loup_kill", question: "Qui doit mourir cette nuit ?", minSelectable: 1, maxSelectable: 1 },
        { label: "villageois_kill", question: "Qui doit mourir aujourd'hui ?", minSelectable: 1, maxSelectable: 1 },
        { label: "voleur_swap", question: "Voleur veux-tu changer de carte avec un autre joueur ?", minSelectable: 0, maxSelectable: 1 },
        { label: "sorciere_kill", question: "Sorcière veut-tu utiliser ta option de mort sur un joueur ?", minSelectable: 0, maxSelectable: 1 },
        { label: "sorciere_save", question: "Sorcière veut-tu utiliser ta option de vie sur le joueur qui vient d'être tué ?", minSelectable: 0, maxSelectable: 1 },
        { label: "cupidon_love", question: "Cupidon choisis deux amoureux ?", minSelectable: 2, maxSelectable: 2 },
        { label: "voyante_peek", question: "Voyante, choisis une personne pour connaitre sa carte ?", minSelectable: 1, maxSelectable: 1 },
        { label: "chasseur_revenge", question: "Chasseur tu viens de mourir veut-tu tuer une personne ?", minSelectable: 0, maxSelectable: 1 }
    ];

    const openModal = (label, callback) => {
        const questionData = questionsList.find(q => q.label === label);

        if (!questionData) {
            console.error(`Question non trouvée pour le label : ${label}`);
            return;
        }

        setModalQuestion(questionData.question);
        setMaxSelectable(questionData.maxSelectable);
        setMinSelectable(questionData.minSelectable);
        setModalCallback(() => callback);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openNightModal = () => {
        openModal("sorciere_kill", (selected) => {
            console.log("Victime choisie :", selected);
            // Logique de suppression du joueur ici
        });
    }
    const [messages, setMessages] = useState([]);
    const [activeTab, setActiveTab] = useState("general");

    const addMessage = (message) => {
        setMessages(prev => [...prev, message]);
    };

    const startFirstPhase = async () => {
        setCurrentInfo("Distribution des rôles...");
        const numPlayers = 10; // Nombre de joueurs entre 8 et 12
        setPlayers(assignRoles(players.map(p => p.name), numPlayers));

        setTimeout(() => {
            setCurrentInfo("La nuit tombe sur le village...");
        }, 3000);

        setTimeout(() => {
            openModal("voleur_swap", (selected) => {
                console.log("Le voleur a choisi :", selected);
            });
        }, 6000);

        setTimeout(() => {
            openModal("cupidon_love", (selected) => {
                console.log("Cupidon a uni :", selected);
            });
        }, 9000);

        setTimeout(() => {
            openModal("voyante_peek", (selected) => {
                console.log("La voyante a regardé :", selected);
            });
        }, 12000);

        setTimeout(() => {
            setCurrentInfo("Les Loups-Garous se réveillent...");
        }, 15000);

        setTimeout(() => {
            openModal("loup_kill", (selected) => {
                console.log("Les Loups-Garous ont voté pour tuer :", selected);
            });
        }, 18000);

        setTimeout(() => {
            setCurrentInfo("Les Loups-Garous se rendorment...");
        }, 21000);

        setTimeout(() => {
            openModal("sorciere_kill", (selected) => {
                console.log("La sorcière a utilisé la potion de mort sur :", selected);
            });
            openModal("sorciere_save", (selected) => {
                console.log("La sorcière a sauvé :", selected);
            });
        }, 24000);

        setTimeout(() => {
            setCurrentInfo("Le jour se lève, les villageois découvrent qui est mort...");
        }, 27000);
    };

    return (
        <>
            <div className="game">
                <div className={"background " + (isNight ? 'background-night' : "")} id="background"></div>
                <Clock hours={hours} minutes={minutes} isNight={isNight} />
                <ModalQuestion
                    isOpen={isModalOpen}
                    question={modalQuestion}
                    players={players.filter(p => p.alive)} // Ne montrer que les vivants
                    minSelectable={minSelectable}
                    maxSelectable={maxSelectable}
                    onClose={closeModal}
                    onConfirm={(selected) => {
                        if (modalCallback) modalCallback(selected);
                        closeModal();
                    }}
                />
                <Info startFirstPhase={startFirstPhase} openNightModal={openNightModal} currentInfo={currentInfo}/>
                <Player me={me} />
                <Board players={players} setPlayers={setPlayers}/>
                <Chat messages={messages} addMessage={addMessage} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </>
    );
}

export default Jeu;