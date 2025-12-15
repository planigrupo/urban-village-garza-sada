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
        <div className="w-full flex gap-3 items-center justify-center">
            <input
                type="text"
                placeholder="Buscar tienda por nombre..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full max-w-xl px-5 py-2 rounded-full border border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <button
                onClick={() => handleMap()}
                className="bg-pink-500 px-6 py-2 rounded-full text-white hover:border hover:border-pink-600 hover:bg-white hover:text-pink-600 cursor-pointer"
            >
                Mostrar mapa
            </button>
        </div>
    );
}
