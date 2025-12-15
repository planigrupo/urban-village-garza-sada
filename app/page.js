import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';

import HeroSlider from "./components/hero-slider";
import StoreCarousel from './components/store-carousel';
import FoodCourt from './components/food-court';
import Location from './components/location';
import EventsActivities from './components/events-activities';

// Función para leer las imágenes desde el directorio público
const IMAGES_DIR = path.join(process.cwd(), 'public', 'stores');
async function getLocalImagePaths() {
    try {
        const fileNames = await fs.readdir(IMAGES_DIR);
        const imagePaths = fileNames.filter(name => /\.(jpe?g|png|svg|webp)$/i.test(name)).map(name => `/stores/${name}`);
        return imagePaths;
    } catch (error) {
        console.error('Error al leer el directorio de imágenes:', error);
        return [];
    }
}

const EVENTS_AND_ACTIVITIES = [{
    events: [
        { image: '/events/Fotoc_Santa_Urban.jpg' },
        { image: '/events/show Grinch_Urban.jpg' }
    ],
    activities: [
        { image: '/activities/expo-shoping.jpeg' },
    ]
}]

export default async function Home() {
    const imagePaths = await getLocalImagePaths();

    return (
        <>
            <HeroSlider />
            <StoreCarousel imagePaths={imagePaths} />
            <FoodCourt />
            {/* <ServicesAvilable /> */}

            <div>
                <Image src={'/wave_1.png'} width={1000} height={1000} alt='ilustration' className='right-0 w-1/2 absolute -z-10' />
            </div>

            <EventsActivities EVENTS_AND_ACTIVITIES={EVENTS_AND_ACTIVITIES} />

            <div>
                {/* <Image src={'/wave_1.png'} width={1000} height={1000} alt='ilustration' className='right-0 w-1/2 absolute -z-10' /> */}
                <Image src={'/wave_2.png'} width={700} height={700} alt='ilustration' className='left-0 -translate-y-36 w-140 absolute -z-10' />
            </div>

            <Location />
        </>
    );
}