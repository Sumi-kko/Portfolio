import React, { useRef, useCallback } from "react";
import Particles from "react-tsparticles";

const MAX = 50;
const MAX_ORIGINAL_DELETES = 10;

function Particle() {
    const containerRef = useRef(null);

    // Track originals + added
    const originalSetRef = useRef(new Set());
    const addedQueueRef = useRef([]); // FIFO of added particle references
    const originalDeletedRef = useRef(0);

    // Capture count BEFORE tsParticles click-push runs
    const lenBeforeClickRef = useRef(null);

    const removeParticleSafe = useCallback((container, particle) => {
        const p = container?.particles;
        const arr = p?.array;
        if (!p || !arr || !particle) return false;

        const idx = arr.indexOf(particle);
        if (idx < 0) return false;

        if (p.removeAt) {
            p.removeAt(idx, 1);
            return true;
        }

        arr.splice(idx, 1);
        return true;
    }, []);

    const trimToMax = useCallback(() => {
        const c = containerRef.current;
        const p = c?.particles;
        const arr = p?.array;
        if (!c || !p || !arr) return;

        let extra = arr.length - MAX;
        if (extra <= 0) return;

        while (extra > 0 && arr.length > 0) {
            let removed = false;

            // 1) Remove ADDED first (your clicked ones)
            while (addedQueueRef.current.length > 0 && !removed) {
                const cand = addedQueueRef.current.shift(); // oldest added
                removed = removeParticleSafe(c, cand);
            }

            if (removed) {
                extra--;
                continue;
            }

            // 2) Allow deleting ORIGINAL only up to 10 total
            if (originalDeletedRef.current < MAX_ORIGINAL_DELETES) {
                const originalSet = originalSetRef.current;
                const originalCand = arr.find((pt) => originalSet.has(pt));

                if (originalCand) {
                    const ok = removeParticleSafe(c, originalCand);
                    if (ok) {
                        originalSet.delete(originalCand);
                        originalDeletedRef.current += 1;
                        extra--;
                        continue;
                    }
                }
            }

            // 3) Last resort (should almost never happen)
            const fallback = arr[0];
            if (!fallback) break;

            const ok = removeParticleSafe(c, fallback);
            if (!ok) break;

            if (originalSetRef.current.has(fallback)) {
                originalSetRef.current.delete(fallback);
                if (originalDeletedRef.current < MAX_ORIGINAL_DELETES) {
                    originalDeletedRef.current += 1;
                }
            }

            extra--;
        }
    }, [removeParticleSafe]);

    const loaded = useCallback(
        (container) => {
            containerRef.current = container;

            // Mark initial particles as original
            const arr = container?.particles?.array;
            if (arr?.length) originalSetRef.current = new Set(arr);

            const el = container?.interactivity?.element || container?.canvas?.element;
            if (!el) return;

            // --- IMPORTANT: pointerdown CAPTURE runs before tsParticles handles click push ---
            const onPointerDownCapture = () => {
                const a = containerRef.current?.particles?.array;
                lenBeforeClickRef.current = a ? a.length : null;
            };

            // After click push happens, record newly added particles
            const onClick = () => {
                const beforeLen = lenBeforeClickRef.current;
                lenBeforeClickRef.current = null;

                // Next tick: tsParticles has already pushed particles
                setTimeout(() => {
                    const a = containerRef.current?.particles?.array;
                    if (!a || typeof beforeLen !== "number") return;

                    if (a.length > beforeLen) {
                        const newlyAdded = a.slice(beforeLen);
                        newlyAdded.forEach((pt) => addedQueueRef.current.push(pt));
                    }

                    trimToMax();
                }, 0);
            };

            // Prevent duplicate binding on re-renders / hot reload
            el.__particleOnPointerDownCapture && el.removeEventListener("pointerdown", el.__particleOnPointerDownCapture, true);
            el.__particleOnClick && el.removeEventListener("click", el.__particleOnClick);

            el.__particleOnPointerDownCapture = onPointerDownCapture;
            el.__particleOnClick = onClick;

            el.addEventListener("pointerdown", onPointerDownCapture, true); // capture = true
            el.addEventListener("click", onClick);

            trimToMax();
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
                        value: 45,
                        density: { enable: true, area: 1000 },
                    },
                    color: { value: ["#00bfff", "#4fa3ff", "#ffffff"] },
                    shape: { type: "circle" },
                    opacity: {
                        value: 0.25,
                        random: { enable: true, minimumValue: 0.12 },
                        animation: { enable: true, speed: 0.25, minimumValue: 0.1, sync: false },
                    },
                    size: { value: 8, random: { enable: true, minimumValue: 3.5 } },
                    stroke: { width: 2, color: "#7cc7ff", opacity: 0.12 },
                    shadow: { enable: true, color: "#3dbbff", blur: 10 },
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
                            size: 14,
                            duration: 1.5,
                            opacity: 0.85,
                            color: "#9fdcff",
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
