export default function SearchQuery({
    searchQuery,
    setSearchQuery,
    categoryFromFilter,
    updateUrlParams,
    handleMap
}) {

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        updateUrlParams(categoryFromFilter, value);
    };

    return (
        <div className="w-full gap-3 items-center justify-center grid lg:flex">
            <input
                type="text"
                placeholder="Buscar tienda por nombre..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full max-w-xl px-5 py-2 rounded-full border border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-urban-pink"
            />

            <button
                onClick={() => handleMap()}
                className="bg-urban-pink px-6 py-2 rounded-full text-white hover:border hover:border-urban-pink hover:bg-white hover:text-urban-pink cursor-pointer"
            >
                Mostrar mapa
            </button>
        </div>
    );
}
