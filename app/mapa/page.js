import Image from "next/image";

export default function MapPage() {

    return (
        <div className="w-full flex justify-center items-center px-10">
            {<Image src={'/mapa.png'} alt="mapa" width={900} height={900} />}
        </div>
    );
}
