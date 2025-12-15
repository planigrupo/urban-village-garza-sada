'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from './icons';

const NAV_LINKS = [
    { name: 'Tiendas', href: '/directorio?category=departamentales' },
    { name: 'Restaurantes', href: '/directorio?category=comidas' },
    { name: 'Eventos', href: '/#eventos' },
    { name: 'Cómo llegar', href: 'https://maps.app.goo.gl/RU2gWCwNAQQBVTPm6' },
    { name: 'Mapa', href: '/mapa' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerClasses = `sticky top-0 left-0 w-full transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-white/85 backdrop-blur-md z-10' : 'bg-white'}
    `;

    const handleSearch = (e) => {
        e.preventDefault();
        const value = e.target.query.value.trim();
        if (!value) return;
        window.location.href = `/directorio?search=${encodeURIComponent(value)}`;
    };

    return (
        <header className={headerClasses}>
            <div className="max-w-5xl mx-auto py-6 px-5 flex items-center justify-between">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo Urban Village" width={40} height={40} className="h-auto w-auto" priority />
                </Link>

                {/* NAV DESKTOP */}
                <nav className="hidden lg:flex grow justify-center">
                    <ul className="flex space-x-6 text-sm font-medium">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-gray-700 hover:text-pink-600 transition text-md">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* SEARCH (DESKTOP) */}
                <div className="hidden lg:flex items-center space-x-4">
                    <form className="relative" onSubmit={handleSearch}>
                        <input name="query"
                            placeholder="Search..."
                            type="text"
                            className="rounded-full text-md px-8 py-2 bg-white shadow-md border border-gray-200 focus:outline-none"
                        />

                        <button type="reset">
                            <Icon
                                name="close"
                                className="size-6 text-gray-700 absolute right-3 top-1/2 -translate-y-1/2 p-1 cursor-pointer"
                            />
                        </button>
                    </form>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                    <Icon name={isOpen ? 'close' : 'menu'} className="size-7 text-gray-800" />
                </button>
            </div>

            {/* MOBILE MENU */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-gray-200 ${isOpen ? 'max-h-96 py-5' : 'max-h-0'}`}>
                <nav className="px-6">
                    <ul className="flex flex-col space-y-4 text-lg font-medium">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="block text-gray-700 hover:text-pink-600 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* SEARCH MOBILE */}
                <div className="px-6 mt-6">
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            name="query"
                            className="w-full rounded-full text-md px-8 py-3 bg-white shadow border border-gray-200"
                            placeholder="Buscar..."
                            type="text"
                        />

                        <button type="reset">
                            <Icon
                                name="close"
                                className="size-6 text-gray-700 absolute right-3 top-1/2 -translate-y-1/2 p-1 cursor-pointer"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
}
