import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Business & Financial Technology Student",
                    "Ladies in Tech - Head of Publicity",
                    "Cloud Computing - Head of Publicity",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
