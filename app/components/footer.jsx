import Image from "next/image";
import Icon from "./icons";
import Link from "next/link";

const PLANIGRUPO = [
    { name: 'Nosotros', href: 'https://planigrupo.com.mx/nosotros/' },
    { name: 'Portafolio', href: 'https://planigrupo.com.mx/portafolio/' },
    { name: 'Comercialización', href: 'https://planigrupo.com.mx/comercializacion/' },
    { name: 'Contacto', href: 'https://planigrupo.com.mx/contacto/' },
];

const MAP_SITE = [
    { name: 'Tiendas', href: '/directorio?category=departamentales' },
    { name: 'Restaurantes', href: '/directorio?departamentales=comidas' },
    { name: 'Eventos', href: '/#eventos' },
    { name: 'Cómo llegar', href: 'https://maps.app.goo.gl/RU2gWCwNAQQBVTPm6' },
    { name: 'Mapa', href: '/mapa' },
];

const CONTACT_US = [
    { description: 'Av. Eugenio Garza Sada Sur 3431, Sin Nombre de Col 42, 64845 Monterrey, N.L.' },
    { description: '+52 81 8387 3888' },
    { description: 'Lunes a Domingo: 9:00 AM - 10:00 PM' }
];

const SOCIALS = [
    { icon: 'facebook', href: 'https://www.facebook.com/UrbanVillageOficial' },
    { icon: 'instagram', href: 'https://www.instagram.com/urbanvillage_gs/' },
    { icon: 'linkedin', href: 'https://www.linkedin.com/company/planigrupo' },
];

export default function Footer() {
    return (
        <footer className="relative mt-16 bg-urban-pink text-white">
            <svg
                className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-urban-pink"
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
            >
                <path
                    fill="currentColor"
                    d="M0 22L120 16.7C240 11 480 1 720 .7C960 1 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 0 54H0V22Z"
                />
            </svg>

            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">

                    {/* Logos */}
                    <div className="md:max-w-md lg:col-span-2">
                        <div className="gap-8 flex justify-center lg:grid">
                            <Image src="/logo.png" alt="Urban Village Logo" width={100} height={60} className="object-contain" />
                            <Image src="/logo-pg.png" alt="Planigrupo Logo" width={150} height={60} className="object-contain" />
                        </div>
                    </div>

                    {/* Categorías */}
                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">

                        {/* PLANIGRUPO */}
                        <div>
                            <p className="font-semibold tracking-wide text-lg mb-3">Planigrupo</p>
                            <ul className="space-y-2">
                                {PLANIGRUPO.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} target="_blank" className="hover:underline">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mapa del sitio */}
                        <div>
                            <p className="font-semibold tracking-wide text-lg mb-3">Sitio</p>
                            <ul className="space-y-2">
                                {MAP_SITE.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="hover:underline">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contacto */}
                        <div className="md:col-span-2">
                            <p className="font-semibold tracking-wide text-lg mb-3">Contacto</p>
                            <ul className="space-y-2">
                                {CONTACT_US.map((item, i) => (
                                    <li key={i}>{item.description}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Fondo */}
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-pink-300 sm:flex-row">
                    <p className="text-sm">© {new Date().getFullYear()} planigrupo.com.mx</p>

                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        {SOCIALS.map((social) => (
                            <Link
                                key={social.icon}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-100 hover:text-white"
                            >
                                <Icon name={social.icon} className="size-6" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
