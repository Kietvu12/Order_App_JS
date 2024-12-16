import React, { useEffect, useRef, useState } from 'react';
import { food } from '../../../assets/assets';

export default function SignatureMenu() {
    const menuItems = [
        { name: "Healthy Oatmeal", ingredients: "Salmon / Citrus / Honey / Spice", price: "14.10", image: food.food_1 },
        { name: "Healthy Oatmeal", ingredients: "Salmon / Citrus / Honey / Spice", price: "14.10", image: food.food_1 },
        { name: "Shrimp and Vegan", ingredients: "Salmon / Citrus / Honey / Spice", price: "15.30", image: food.food_1 },
        { name: "Tomato Cucumber", ingredients: "Salmon / Citrus / Honey / Spice", price: "14.10", image: food.food_1 },
        { name: "Chicken Galantine", ingredients: "Salmon / Citrus / Honey / Spice", price: "15.30", image: food.food_1 },
        { name: "Shrimp and Vegan", ingredients: "Salmon / Citrus / Honey / Spice", price: "15.30", image: food.food_1 },
        { name: "Sald Salmon", ingredients: "Salmon / Citrus / Honey / Spice", price: "16.30", image: food.food_1 },
        { name: "Sald Salmon", ingredients: "Salmon / Citrus / Honey / Spice", price: "16.30", image: food.food_1 },
    ];

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Observer để theo dõi khi phần tử lướt vào viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 } // Kích hoạt khi 30% phần tử xuất hiện
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <div ref={sectionRef} className="container mx-auto px-4 py-16">
            <div className={`text-center mb-12 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <span className="text-[#FF6B00] font-medium">Special Menu</span>
                <h2 className="text-4xl font-bold mt-2">Signature Dish.</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    All in good taste elementum integer enim neque volutpat ac.
                </p>
            </div>

            {/* Menu Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-lg shadow-md p-4 flex items-center justify-between relative overflow-hidden transition-transform duration-700 ease-out ${isVisible ? `translate-y-0 opacity-100 delay-[${index * 100}ms]` : "translate-y-10 opacity-0"
                            }`}
                    >
                        {/* Image và Nội Dung */}
                        <div className="flex items-center gap-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 rounded-full object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-gray-600 text-sm">{item.ingredients}</p>
                            </div>
                        </div>

                        {/* Price Tag */}
                        <div className="absolute right-0 top-0 h-full w-24 flex items-center justify-center">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6B00] transform rotate-45 translate-x-24 -translate-y-24"></div>
                            <span className="relative text-white font-medium z-10">${item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
