'use client'
import { useState } from 'react';

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Icon from './icons';


const HERO_OPTIONS = [
    {
        title: 'Ver directorio',
        description: '',
        link: '/directorio',
        image: 'https://placehold.co/600x600.svg',
        background: '/hero_backgrounds/urban-navidad.png'
    },
    /*     {
            title: 'Rentar un local',
            description: '',
            link: '/rentar-local',
            image: 'https://placehold.co/600x600.svg'
        },
        {
            title: 'Explorar novedades',
            description: '',
            link: '#eventos',
            image: 'https://placehold.co/600x600.svg'
        } */
];

// Definición de las animaciones para Framer Motion
const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),

    center: { zIndex: 1, x: 0, opacity: 1 },

    exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};

// Duración de la animación y gestión del arrastre (opcional)
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => { return Math.abs(offset) * velocity };

export default function HeroSlider() {
    const [[page, direction], setPage] = useState([0, 0]);

    const currentOption = HERO_OPTIONS[page];

    const paginate = (newDirection) => {
        const newPage = (page + newDirection + HERO_OPTIONS.length) % HERO_OPTIONS.length;
        setPage([newPage, newDirection]);
    };

    return (
        <motion.div
            className="max-w-7xl mx-auto relative overflow-hidden bg-no-repeat bg-cover h-[30vh] lg:h-[50vh] xl:h-[70vh] lg:bg-center"
            style={{
                backgroundImage: `url(${currentOption.background})`,
                /* backgroundSize: 'cover' */
                /* backgroundPosition: 'center' */
            }}
        >
            <AnimatePresence initial={true} custom={direction}>
                <motion.div
                    className="absolute inset-0 px-10 py-16 grid justify-center lg:flex lg:justify-between"
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                >
                    <div className="flex flex-col justify-end translate-y-8 gap-8 z-10 items-center text-center lg:text-start lg:items-start lg:pl-16">
                        {/* <h1 className="font-medium font-montserrat text-white text-4xl md:text-5xl lg:text-6xl lg:max-w-sm"> {currentOption.title} </h1> */}

                        {currentOption.description && (
                            <p className="text-lg max-w-sm">{currentOption.description}</p>
                        )}

                        <Link
                            href={currentOption.link}
                            className="bg-urban-pink text-white px-6 py-2 rounded-full hover:bg-white hover:text-urban-pink border border-urban-pink transition duration-300"
                        >
                            Ver más
                        </Link>
                    </div>

                    {/* <div className="grid justify-self-center place-items-center">
                        <Image
                            src={currentOption.image}
                            alt={currentOption.title}
                            width={600}
                            height={600}
                            className="object-cover pointer-events-none rounded-xl shadow-2xl"
                        />
                    </div> */}
                </motion.div>
            </AnimatePresence>


            {HERO_OPTIONS.length > 1 && (
                <>
                    <Icon
                        name={'arrow'}
                        className={'hidden size-12 text-pink-600 absolute bottom-0 right-4 transform -translate-y-1/2 z-20 p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition lg:block'}
                        onClick={() => paginate(1)}
                    />
                    <Icon
                        name={'arrow'}
                        className={'hidden size-12 rotate-180 text-pink-600 absolute bottom-0 left-4 transform -translate-y-1/2 z-20 p-3 bg-white/70 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition lg:block'}
                        onClick={() => paginate(-1)}
                    />

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                        {HERO_OPTIONS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setPage([index, index > page ? 1 : -1])}
                                className={`size-3 rounded-full transition-all duration-300 
                            ${index === page ? 'bg-pink-600 w-6' : 'bg-gray-400'}`
                                }
                            />
                        ))}
                    </div>
                </>
            )}
        </motion.div>
    );
}
