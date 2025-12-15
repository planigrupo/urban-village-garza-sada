'use client';
import { motion } from "motion/react";
import Icon from "./icons";

const SERVICES = [

    {
        title: 'Wi-Fi Gratis',
        description: 'Mantente conectado en nuestras instalaciones con nuestra red Wi-Fi de alta velocidad.',
        icon: 'wifi'
    },
    {
        title: 'Zona de Juegos Infantiles',
        description: 'Un espacio seguro y divertido para que los más pequeños disfruten.',
        icon: 'pets'
    },
    {
        title: 'Estacionamiento amplio',
        description: 'Disfruta de la comodidad de nuestro amplio estacionamiento.',
        icon: 'parking'
    },
];

export default function ServicesAvailable() {
    return (
        <motion.section>
            <div className="max-w-7xl mx-auto px-10 py-16">
                <div className="grid gap-6 grid-cols-2 max-w-3xl justify-self-center place-items-center">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start gap-6"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: 0.1 + index * 0.2, // Retraso incremental
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <div>
                                <Icon name={service.icon} className={'w-11 h-11 text-gray-700'} />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-pink-600">{service.title}</h3>
                                <p className="text-gray-600 mt-1 text-sm">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}