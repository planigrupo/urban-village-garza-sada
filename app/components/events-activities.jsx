'use client';

import { motion } from "motion/react";
import Image from "next/image";

export default function EventsActivities({ EVENTS_AND_ACTIVITIES }) {
    return (
        <motion.div
            id='eventos' className='max-w-7xl mx-auto px-10 py-16'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, type: 'spring' }}
        >
            {EVENTS_AND_ACTIVITIES.map((item, index) => (
                <div key={index} className='grid gap-16 place-items-center lg:place-items-start'>
                    <div className='space-y-3.5'>
                        <h2 className='text-4xl font-medium'>Eventos</h2>
                        <div className='gap-6 grid lg:flex'>
                            {item.events.map((event, idx) => (
                                <Image key={idx} src={event.image} alt={`Evento ${idx + 1}`} width={400} height={400} />
                            ))}
                        </div>
                    </div>

                    <div className='space-y-3.5'>
                        <h2 className='text-4xl font-medium'>Actividades</h2>
                        <div className='gap-6 grid lg:flex'>
                            {item.activities.map((activity, idx) => (
                                <Image key={idx} src={activity.image} alt={`Actividad ${idx + 1}`} width={400} height={400} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}