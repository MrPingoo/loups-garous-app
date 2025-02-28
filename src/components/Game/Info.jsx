import React from "react";

function Info({currentStep, startFirstPhase, currentInfo, openNightModal}) {
    return (
        <>
            {/* Zone d'info */}
            <div className="container">
                <p>{currentInfo}.</p>
                {/*<button className="login-button" onClick={openNightModal}>Prochaine action</button>*/}
                <button className="login-button small-button" onClick={startFirstPhase}>
                    {currentStep == 0 ? "Lancer la partie" : "Suivant"}
                </button>
            </div>
        </>
    );
}

export default Info;