import React from "react";

function Info({currentInfo, openNightModal}) {
    return (
        <>
            {/* Zone d'info */}
            <div className="container">
                <p>{currentInfo}.</p>
                <button className="login-button" onClick={openNightModal}>Prochaine action</button>
            </div>
        </>
    );
}

export default Info;