'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { STORES } from "@/public";
import Link from 'next/link';

export default function FoodCourt() {

    const topFiveLocales = STORES.comidas.slice(0, 5);

    return (
        <motion.section
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, type: 'spring' }}
        >
            <div className="max-w-7xl flex flex-col justify-center items-center gap-6 mx-auto px-10 py-16">
                <h2 className="text-center font-semibold text-3xl lg:text-4xl"> Área de comidas 🍽️ </h2>

                <div className="justify-self-center gap-16 place-items-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                    {topFiveLocales.map((local, index) => (
                        <div
                            key={local.local}
                            className={`grid justify-center items-end mx-8 lg:h-60 ${index === 4 ? 'justify-self-center col-span-2 sm:col-span-4 md:col-span-0 lg:col-span-1' : ''}`}
                        >
                            <div className="relative pointer-events-none size-32 rounded-full overflow-hidden">
                                <Image src={local.image} alt={local.name} fill style={{ objectFit: 'contain' }} />
                            </div>

                            <div>
                                <h3 className=""> {local.name} </h3>
                                <p className=""> 11:00 - 23:00 </p>
                            </div>
                        </div>
                    ))}
                </div>

                <Link
                    href={'/directorio?category=comidas'}
                    className="bg-pink-600 mt-6 text-white px-6 w-fit py-2 rounded-full hover:bg-white hover:text-pink-600 border border-pink-600 transition duration-300"
                >
                    Visita nuestro directorio
                </Link>
            </div>
        </motion.section>

    );
}