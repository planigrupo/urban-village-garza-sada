"use client";

import { useState } from "react";

export default function CategoryFilter({ categories, onCategoryChange }) {

    const [activeCategory, setActiveCategory] = useState("");

    const handleClick = (cat) => {
        setActiveCategory(cat);
        onCategoryChange(cat);
    };

    return (
        <div className="flex justify-start gap-2 flex-wrap lg:justify-center">
            <button
                onClick={() => handleClick("")}
                className={`px-5 py-2 rounded-full border transition-all duration-300 
                    ${activeCategory === "" ?
                        "bg-pink-600 text-white border-pink-600" :
                        "bg-white text-gray-700 border-gray-300 hover:bg-pink-50"}`}
            >
                Todas
            </button>

            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => handleClick(cat)}
                    className={`px-5 py-2 rounded-full border transition-all duration-300
                        ${activeCategory === cat ?
                            "bg-pink-600 text-white border-pink-600" :
                            "bg-white text-gray-700 border-gray-300 hover:bg-pink-50"}`}
                >
                    {cat.charAt(0).toUpperCase() + cat.slice(1).replace(/_/g, " ")}
                </button>
            ))}
        </div>
    );
}
