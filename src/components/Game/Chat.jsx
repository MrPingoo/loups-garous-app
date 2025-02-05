import React from "react";

function Chat() {
    return (
        <>
            {/* Zone de Chat */}
            <div className="chat-box">
                <div className="chat-tabs">
                    <div className="tab active">Général</div>
                    <div className="tab">Loups</div>
                    <div className="tab">Village</div>
                </div>
                <div className="chat-content" id="chat-general">
                    <p className="phase">* La nuit tombe, tout le monde ferme les yeux... *</p><br />
                    <p><span className="player">LoupNoir :</span> On attaque qui cette nuit ?</p><br />
                    <p><span className="player">OmbreSilencieuse :</span> J’hésite entre Alice et Hugo.</p><br />
                    <p className="phase">* Les loups-garous ont choisi leur cible... *</p><br />
                    <p className="phase">* Le jour se lève, le village découvre le corps d'Alice... *</p><br />
                    <p><span className="player">Hugo :</span> Oh non ! Alice était voyante !</p><br />
                    <p><span className="player">Morgane :</span> Qui avons-nous entendu cette nuit ?</p><br />
                    <p className="phase">* La nuit tombe, tout le monde ferme les yeux... *</p><br />
                    <p><span className="player">LoupNoir :</span> On attaque qui cette nuit ?</p><br />
                    <p><span className="player">OmbreSilencieuse :</span> J’hésite entre Alice et Hugo.</p><br />
                    <p className="phase">* Les loups-garous ont choisi leur cible... *</p><br />
                    <p className="phase">* Le jour se lève, le village découvre le corps d'Alice... *</p><br />
                    <p><span className="player">Hugo :</span> Oh non ! Alice était voyante !</p><br />
                    <p><span className="player">Morgane :</span> Qui avons-nous entendu cette nuit ?</p><br />

                </div>
                <div className="chat-content" id="chat-loups" style={{display: 'none'}}>
                    <p className="phase">* Conversation privée entre loups-garous *</p><br />
                    <p><span className="player">LoupNoir :</span> On doit éliminer les plus dangereux.</p><br />
                    <p><span className="player">OmbreSilencieuse :</span> Le chasseur peut poser problème...</p><br />
                </div>
                <div className="chat-content" id="chat-village" style={{display: 'none'}}>
                    <p className="phase">* Discussions entre villageois *</p><br />
                    <p><span className="player">Morgane :</span> Je pense que quelqu’un ment...</p><br />
                    <p><span className="player">Hugo :</span> Qui suspectes-tu ?</p><br />
                </div>
                <div className="chat-input">
                    <input type="text" id="chat-message" placeholder="Tapez un message..."/>
                        <button>Envoyer</button>
                </div>
            </div>
        </>
    );
}

export default Chat;