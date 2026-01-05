import React from "react";
import Particles from "react-tsparticles";

function Particle() {
    return (
        <Particles
            id="tsparticles"
            params={{
                particles: {
                    number: {
                        value: 40, // Much lower count to keep it professional
                        density: {
                            enable: true,
                            value_area: 1200,
                        },
                    },
                    color: {
                        value: "#ffffff", // Base color is white
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.2, // Very faint centers
                        random: true,
                    },
                    size: {
                        value: 7,
                        random: { enable: true, minimumValue: 1 }, // High variety, mostly small
                    },
                    // This "Stroke" creates the multi-color rim effect
                    stroke: {
                        width: 1,
                        color: "#ffffff",
                        opacity: 0.4,
                    },
                    // Shadow adds the "Oil Slick" shimmer without being saturated
                    shadow: {
                        enable: true,
                        color: "#7fffd4", // Aquamarine glint
                        blur: 10,
                    },
                    move: {
                        enable: true,
                        speed: 0.4, // Very slow, graceful floating
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
                            mode: "push", // This adds new bubbles on click
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 150,
                            size: 10,
                            duration: 2,
                            opacity: 0.6,
                        },
                        push: {
                            quantity: 6, // This is how many new bubbles appear per click
                        },
                    },
                },
                
                retina_detect: true,
            }}
        />
    );
}

export default Particle;