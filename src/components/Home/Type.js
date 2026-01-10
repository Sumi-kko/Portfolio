import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Business & Financial Technology Student",
                    "Ladies in Tech - Publicity Sub-Committee",
                    "Cloud Computing - Publicity Sub-Committee",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
