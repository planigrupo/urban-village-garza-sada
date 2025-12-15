'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const variants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
};

export default function StoreCarousel({ imagePaths }) {
    const pages = useMemo(
        () => Array.from({ length: Math.ceil(imagePaths.length / 4) }, (_, i) =>
            imagePaths.slice(i * 4, i * 4 + 4)
        ),
        [imagePaths]
    );

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const id = setInterval(
            () => setCurrent((i) => (i + 1) % pages.length),
            3000
        );
        return () => clearInterval(id);
    }, [pages.length]);


    return (
        <div className="w-full max-w-5xl mx-auto py-10 overflow-hidden">
            <div className="relative w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-2 gap-8 justify-items-center place-items-center md:grid-cols-4"
                    >
                        {pages[current].map((src, i) => (
                            <div
                                key={i}
                                className="relative w-24 h-24 md:w-28 md:h-28"
                            >
                                <Image src={src} alt="" fill style={{ objectFit: 'contain' }} />
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
