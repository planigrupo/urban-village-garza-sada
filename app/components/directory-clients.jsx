'use client';

import { useState, useMemo } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import Image from 'next/image';
import { STORES } from '@/public';
import SearchQuery from './filters/search-query';
import CategoryFilter from './filters/category-filter';
import Icon from './icons';

export default function DirectoryCliets() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const initialSearch = searchParams.get("search") || "";
    const initialCategory = searchParams.get("category") || "";

    const [categoryFromFilter, setCategoryFromFilter] = useState(initialCategory);
    const [searchQuery, setSearchQuery] = useState(initialSearch);
    const [showMap, setShowMap] = useState(false);

    const categories = Object.keys(STORES);

    const updateUrlParams = (category, search) => {
        const params = new URLSearchParams();

        if (category) params.set("category", category);
        if (search) params.set("search", search);

        const qs = params.toString();
        const url = qs ? `${pathname}?${qs}` : pathname;

        router.replace(url, { scroll: false });
    };

    const filteredStores = useMemo(() => {
        const list = categoryFromFilter === ""
            ? categories.flatMap((cat) => STORES[cat])
            : STORES[categoryFromFilter] || [];

        return list.filter((store) =>
            store.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

    }, [categoryFromFilter, searchQuery, categories]);

    const handleMap = () => {
        setShowMap(!showMap);
        console.log('toggle map');
    };

    return (
        <div className="py-16 px-10 grid gap-8">

            {/* HEADER */}
            <div className="text-center space-y-6">
                <h2 className="font-semibold font-montserrat text-4xl">Directorio de tiendas</h2>
                <p className="text-lg">
                    Explora el listado lateral o utiliza el mapa interactivo para ubicar cada tienda.
                </p>
            </div>

            {/* SEARCH */}
            <SearchQuery
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                categoryFromFilter={categoryFromFilter}
                updateUrlParams={updateUrlParams}
                handleMap={handleMap}
            />

            {/* CATEGORY FILTER */}
            <CategoryFilter
                categories={categories}
                onCategoryChange={(cat) => {
                    setCategoryFromFilter(cat);
                    updateUrlParams(cat, searchQuery);
                }}
            />

    {showMap && (
  <div
    className="fixed inset-0 z-50 bg-black/85 overflow-y-auto"
  >
    {/* Close button */}
    <div
      onClick={handleMap}
      className="fixed left-6 top-6 z-50 rounded-full bg-pink-50 cursor-pointer"
    >
      <Icon
        name="close"
        className="size-12 p-2 stroke-2 text-pink-500"
      />
    </div>

    {/* Image container */}
    <div className="flex justify-center pt-24 pb-12">
      <Image
        src="/mapa.png"
        alt="map"
        width={1400}
        height={2000}
        className="max-w-none"
      />
    </div>
  </div>
)}


            {/* STORES LIST */}
            <div>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredStores.map((store, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-between p-6 hover:shadow-lg"
                        >
                            <Image
                                src={store.image || '/404.png'}
                                alt={store.name}
                                width={120}
                                height={120}
                                className="object-contain"
                            />

                            <div className="text-center mt-4">
                                <h3 className="font-semibold text-lg text-gray-800">{store.name}</h3>
                                <p className="text-sm text-gray-500">
                                    Local: {Array.isArray(store.local) ? store.local.join(', ') : store.local}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {filteredStores.length === 0 && (
                        <p className="col-span-full text-center text-gray-500 text-lg">
                            No se encontraron tiendas con ese nombre.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
