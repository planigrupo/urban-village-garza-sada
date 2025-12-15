import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Snow from "./components/seson-components/snow";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata = {
    title: {
        default: 'Urban Village Garza Sada',
        template: '%s | Urban Village Garza Sada',
    },

    description: '¡Ven a Urban Village Garza Sada en Monterrey! Tu destino ideal para compras, la mejor gastronomía y entretenimiento familiar en un solo lugar. ¡Visítanos hoy mismo!',

    icons: {
        icon: '/favicon.ico',
    },

    openGraph: {
        siteName: 'Urban Village Garza Sada',
        locale: 'es_ES',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={`scroll-smooth`}>
            <body
                className={`${manrope.variable} ${montserrat.variable} antialiased`}
            >
                <Snow />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
