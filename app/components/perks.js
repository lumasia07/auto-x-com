import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';

export default function Perks() {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.1 }); // Trigger when 10% of the component is visible

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 20 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center border-t-8 w-full max-w-3xl mx-auto mt-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
                Why sell or buy with us?
            </h1>
        </motion.div>
    );
}
