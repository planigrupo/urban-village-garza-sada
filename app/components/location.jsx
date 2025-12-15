'use client';

import { motion } from 'motion/react';
import Link from "next/link";
import Icon from "./icons";
import Image from 'next/image';

const LOCATION_DATA = [
    {
        title: 'Dirección',
        description: 'Av. Eugenio Garza Sada Sur 3431, Sin Nombre de Col 42, 64845 Monterrey, N.L.',
        icon: 'map',
    },
    {
        title: 'Contacto',
        description: '+52 81 8387 3888',
        icon: 'phone',
    },
    {
        title: 'Horario',
        description: 'Lunes a Domingo: 9:00 AM - 10:00 PM',
        icon: 'calendar',
    }
];

export default function Location() {

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className='px-10 py-16 max-w-7xl mx-auto space-y-16'>
                <div className='text-center space-y-6'>
                    <span className='text-pink-600 font-semibold tracking-widest text-sm uppercase'> Encuéntranos </span>

                    {/* <h3 className='text-4xl font-bold tracking-tight flex justify-center items-center gap-3'>
                        <Icon name="map" className="size-9 text-red-600 hidden lg:block" /> Nuestra Ubicación
                    </h3> */}
                    <h3 className='text-4xl font-bold tracking-tight'> Nuestra Ubicación </h3>

                    <Link
                        href="https://maps.app.goo.gl/M1VkChyQ2196L8kT9"
                        target="_blank"
                        rel="noreferrer nofollow"
                        className="inline-block bg-pink-600 text-white px-7 py-2.5 rounded-full font-medium border border-pink-600 hover:bg-white hover:text-pink-600 transition-all duration-300"
                    >
                        Ver en Google Maps
                    </Link>
                </div>

                <div className='grid gap-16 grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1755.3328656641654!2d-100.28605223804377!3d25.64221849692956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bfa2a04cf255%3A0x62521eefd919c5c2!2sUrban%20Village%20Garza%20Sada!5e0!3m2!1ses-419!2smx!4v1765388249609!5m2!1ses-419!2smx"
                            className='rounded-2xl shadow-xl border-0 w-full h-[400px]'
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className='space-y-10'>
                        {LOCATION_DATA.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4 border-b border-gray-400 pb-6"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.1 + index * 0.2,
                                    duration: 0.5,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true, amount: 0.8 }}
                            >
                                <div className="">
                                    <Icon name={item.icon} className="size-6" />
                                </div>

                                <div>
                                    <h4 className="text-xl font-medium">{item.title}</h4>
                                    <p className="text-gray-700">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </motion.section>
    );
}
