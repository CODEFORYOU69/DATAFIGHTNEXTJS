import React from 'react';
import { motion } from 'framer-motion';

function Home() {
    const fadeInUp = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1.5, ease: 'easeOut' }
    };

    return (
        <div className="p-4 min-h-screen flex items-center justify-center">
            <div className="container text-center">
                <motion.h1
                    id="dataFightTitle"
                    className="text-4xl font-bold mb-4"
                    initial="initial"
                    animate="animate"
                    transition="transition"
                    variants={fadeInUp}
                >
                    DATAFIGHT
                </motion.h1>
                
            </div>
        </div>
    );
}

export default Home;
