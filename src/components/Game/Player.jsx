import React from "react";

function Player() {
    return (
        <>
            {/* Player */}
            <div className="game-map">
                <div className="icons-container">
                    <div className="icon icon-werewolf" title="Loup-Garou"></div>
                    <div className="icon icon-villager" title="Villageois"></div>
                    <div className="icon icon-seer" title="Voyante"></div>
                    <div className="icon icon-hunter" title="Chasseur"></div>
                </div>
            </div>
        </>
    );
}

export default Player;