import React from "react";

function Info({currentInfo}) {
    return (
        <>
            {/* Zone d'info */}
            <div className="container">
                <p>{currentInfo}.</p>
            </div>
        </>
    );
}

export default Info;