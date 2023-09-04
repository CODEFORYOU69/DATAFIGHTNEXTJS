
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function HowToUse() {

    const [selectedImage, setSelectedImage] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const imageModalVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
    };

    const steps = [
        { text: "1. Create your fighters.", image: "/uploads/fighters.png" },
        { text: "2. Analyze the fights using our advanced analytics tools to store data.", image: "/uploads/analyze.png" },
        { text: "3. Use the filter options to narrow down your search.", image: "/uploads/filter.png" },
        { text: "4. Enjoy with your data analyze.", image: "/uploads/charts.png" },
    ];

    return (
        <motion.div 
            className="p-4 min-h-screen flex flex-col items-center justify-center space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
             <motion.img 
                    src="/uploads/df.png" 
                    alt="DataFight Logo" 
                    className="mx-auto mb-4 w-32 h-32" // Adjust width and height as needed
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                />
            <motion.h1 
                className="text-2xl font-bold"
                variants={itemVariants}
            >
                How to Use DataFight
            </motion.h1>

            {steps.map((step, index) => (
                <motion.div key={index} className="flex items-center space-x-2" variants={itemVariants}>
                    <motion.p className="text-lg">
                        {step.text}
                    </motion.p>
                    <motion.button 
                        className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center"
                        onClick={() => setSelectedImage(step.image)}
                    >
                        i
                    </motion.button>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50" 
                        onClick={() => setSelectedImage(null)}
                        variants={imageModalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <motion.img 
                            src={selectedImage} 
                            alt="Step Visual" 
                            className="max-w-lg max-h-lg border-4 border-white rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default HowToUse;
