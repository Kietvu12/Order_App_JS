import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { food } from "../../../assets/assets";

export default function AboutSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.4, // Kích hoạt khi 20% phần tử nằm trong viewport
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`container mx-auto px-4 py-16 transition-opacity duration-1000 ${isVisible ? "animate-fade-up opacity-100" : "opacity-0"
                }`}
        >
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Left Column - Image */}
                <div className="relative">
                    <div className="relative">
                        <img
                            src={food.food_1}
                            alt="Fresh Greek Salad"
                            className="w-full rounded-full object-cover"
                        />
                        {/* Happy Client Card */}
                        <div className="absolute bottom-8 right-0 bg-white rounded-lg shadow-lg p-4 md:p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <Check className="w-5 h-5 text-green-600" />
                                <span className="text-sm font-medium">HAPPY CLIENT</span>
                            </div>
                            <div className="text-2xl font-bold text-green-700">20.022+</div>
                            <div className="text-xs text-gray-600 mt-1">THANKS VEGAN LOVERS</div>
                        </div>
                    </div>
                </div>


                <div className="space-y-6">
                    <span className="text-[#FF6B00] font-medium">Về chúng tôi</span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Nuôi dưỡng cuộc sống thuần tự nhiên:
                    </h2>


                    <div className="space-y-4 text-gray-600">
                        <p>
                            Hành trình từ cảm hứn  g đến hiện thực

                        </p>
                        <p>
                            Khi cuộc sống ngày càng hối hả, con người dần nhận ra rằng sức khỏe và tinh thần chỉ có thể thực sự bền vững khi trở về với những giá trị tự nhiên. Chính trong dòng chảy này, AYA Food ra đời như một lời nhắc nhở dịu dàng về việc yêu thương bản thân và nuôi dưỡng cơ thể bằng những thực phẩm thuần chay, tự nhiên và lành mạnh.

                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        <div>
                            <div className="text-4xl font-bold text-[#FF6B00]">108</div>
                            <div className="text-sm text-gray-600 mt-2">EXPERT CHEF</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">140</div>
                            <div className="text-sm text-gray-600 mt-2">MENU OF FOOD</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">32.000</div>
                            <div className="text-sm text-gray-600 mt-2">ORDER DELIVERED</div>
                        </div>
                    </div>

                    <button className="bg-[#8DC63F] text-white px-8 py-3 rounded-full hover:bg-[#7AB62F] transition-colors">
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
    );
}
