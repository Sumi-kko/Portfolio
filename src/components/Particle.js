import React from "react";
import Particles from "react-tsparticles";

function Particle() {
    return (
        <Particles
            id="tsparticles"
            params={{
                particles: {
                    number: {
                        value: 55, // Slightly more to account for variety
                        density: {
                            enable: true,
                            value_area: 1000,
                        },
                    },
                    color: {
                        value: ["#00bfff", "#8dc0f0", "#ffffff"],
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 0.4,
                            opacity_min: 0,
                            sync: false,
                        },
                    },
                    size: {
                        value: 6, // Increased by 1px from your previous 5
                        random: {
                            enable: true,
                            minimumValue: 1.5 // Better variety range
                        },
                    },
                    stroke: {
                        width: 1,
                        color: "#8dc0f0",
                        opacity: 0.3,
                    },
                    shadow: {
                        enable: true,
                        color: "#00bfff",
                        blur: 5,
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: "top",
                        random: true, // Movement variety
                        straight: false,
                        out_mode: "out",
                    },
                },
                interactivity: {
                    detect_on: "window",
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
                            distance: 180,
                            size: 10,
                            duration: 2,
                            opacity: 0.8,
                            color: "#ffffff",
                        },
                        push: {
                            // High variety on tap: 
                            // It will add a cluster, but the random logic above 
                            // ensures they are all different sizes/speeds
                            quantity: 7,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}

export default Particle;