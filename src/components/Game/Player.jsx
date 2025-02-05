import React from "react";

function Player({me}) {
    return (
        <>
            {/* Player */}
            <div className={"game-map player-" + (me.roleIdentifier)}>
                <div className="icons-container">
                    <div className={"icon " + (me.options.major ? 'icon-major' : "")} title="Major"></div>
                    <div className={"icon " + (me.options.lovers ? 'icon-lovers' : "")} title="Lovers"></div>
                    <div className={"icon " + (me.options.deathPotion ? 'icon-death-potion' : "")} title="Death Potion"></div>
                    <div className={"icon " + (me.options.lifePotion ? 'icon-life-potion' : "")} title="Life Potion"></div>
                </div>
            </div>
        </>
    );
}

export default Player;