import React, { useRef, useCallback } from "react";
import Particles from "react-tsparticles";

const MAX = 70;

function Particle() {
    const containerRef = useRef(null);

    const trimToMax = useCallback(() => {
        const c = containerRef.current;
        if (!c?.particles) return;

        const p = c.particles;
        const count = typeof p.count === "number" ? p.count : (p.array?.length ?? 0);
        const extra = count - MAX;
        if (extra <= 0) return;

        if (p.removeAt) p.removeAt(0, extra);
        else if (p.removeQuantity) p.removeQuantity(extra);
    }, []);

    const loaded = useCallback(
        (container) => {
            containerRef.current = container;
            trimToMax();

            const el = container?.interactivity?.element;
            if (el) {
                const handler = () => setTimeout(trimToMax, 0);
                el.addEventListener("click", handler);
            }
        },
        [trimToMax]
    );

    return (
        <Particles
            id="tsparticles"
            loaded={loaded}
            options={{
                particles: {
                    number: {
                        value: 55,
                        density: { enable: true, area: 1000 },
                        limit: { value: MAX, mode: "delete" },
                    },

                    /* 🎨 COLOR WEIGHTING (less white, more blue contrast) */
                    color: {
                        value: ["#00bfff", "#4fa3ff", "#ffffff"],
                    },

                    shape: { type: "circle" },

                    /* 🫧 MORE TRANSPARENT BUT NOT INVISIBLE */
                    opacity: {
                        value: 0.25, // ↓ lighter overall
                        random: {
                            enable: true,
                            minimumValue: 0.12,
                        },
                        animation: {
                            enable: true,
                            speed: 0.25,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },

                    size: {
                        value: 8,
                        random: { enable: true, minimumValue: 3.5 },
                    },

                    /* helps color separation without opacity increase */
                    stroke: {
                        width: 2,
                        color: "#7cc7ff",
                        opacity: 0.1,
                    },

                    shadow: {
                        enable: true,
                        color: "#00bfff",
                        blur: 6,
                    },

                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: "top",
                        random: true,
                        straight: false,
                        outModes: { default: "out" },
                    },
                },

                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onHover: { enable: true, mode: "bubble" },
                        onClick: { enable: true, mode: "push" },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 180,
                            size: 12,
                            duration: 2,
                            opacity: 0.1, // hover contrast without killing transparency
                        },
                        push: { quantity: 1 },
                    },
                },

                retinaDetect: true,
            }}
        />
    );
}

export default Particle;
