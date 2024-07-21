'use client'
import { useScroll, useTransform, motion, useSpring } from "framer-motion"

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const background = useTransform(scrollYProgress, [0, 1], ["#ff008c", "#7700ff"])

    return (
        <motion.div
            style={{
                scaleX: scrollYProgress,
                background,
                transformOrigin: "left",
                position: "sticky",
                top: 0,
                left: 0,
                width: "100vw",
                height: "4px",
                borderRadius: "20px",
                marginInline: "-400px",
            }}
        >
        </motion.div>
    )
}

