import React, { useState, useEffect } from "react";

function Clock({isNight, hours, minutes}) {

    return (
        <div className="clock-outer">
            <div className="clock">
                {isNight ? "🌙" : "☀️"} - {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}
            </div>
        </div>
    );
}

export default Clock;