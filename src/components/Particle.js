import React from "react";
import Particles from "react-tsparticles";

function Particle() {
    return (
        <Particles
            id="tsparticles"
            params={{
                particles: {
                    number: {
                        value: 40,
                        density: {
                            enable: true,
                            value_area: 1200,
                        },
                    },
                    color: {
                        // Array of colors for a white and blue mix
                        value: ["#ffffff", "#00bfff", "#add8e6"],
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.4, // Increased slightly for better visibility
                        random: true,
                    },
                    size: {
                        value: 7,
                        random: { enable: true, minimumValue: 1 },
                    },
                    stroke: {
                        width: 1,
                        color: "#ffffff",
                        opacity: 0.3,
                    },
                    shadow: {
                        enable: true,
                        color: "#00bfff", // Soft blue glow
                        blur: 8,
                    },
                    move: {
                        enable: true,
                        speed: 0.4,
                        direction: "top",
                        random: true,
                        straight: false,
                        out_mode: "out",
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "bubble",
                        },
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 150,
                            size: 10,
                            duration: 2,
                            opacity: 0.7,
                            // Ensure bubbles turn a bright blue/white on hover
                            color: "#ffffff",
                        },
                        push: {
                            quantity: 4,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}

export default Particle;