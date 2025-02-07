import React, { useState } from "react";

function Chat({ messages, addMessage, activeTab, setActiveTab }) {
    return (
        <div className="chat-box">
            <div className="chat-tabs">
                <div onClick={() => setActiveTab("general")} className="tab active">Général</div>
                <div onClick={() => setActiveTab("village")} className="tab">Loups</div>
                <div onClick={() => setActiveTab("loups")} className="tab">Village</div>
            </div>
            <div className="chat-content">
                {/*
                    <p className="phase">* La nuit tombe, tout le monde ferme les yeux... *</p><br />
                    <p><span className="player">LoupNoir :</span> On attaque qui cette nuit ?</p><br />
                */}
                {messages
                    .filter(msg => msg.tab === activeTab)
                    .map((msg, i) => (
                        <p key={i}><strong>{msg.sender}:</strong> {msg.content}</p>
                    ))
                }
            </div>
            <div className="chat-input">
                <input type="text" onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addMessage({ sender: "Joueur", content: e.target.value, tab: activeTab });
                        e.target.value = "";
                    }
                }} placeholder="Écrivez un message..." />
                <button>Envoyer</button>
            </div>
        </div>
    );
}

export default Chat;