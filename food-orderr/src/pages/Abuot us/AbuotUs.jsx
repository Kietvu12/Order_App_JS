/* eslint-disable react/no-unescaped-entities */


export default function AboutUs() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    AYA Food - Nuôi dưỡng cuộc sống thuần tự nhiên
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Hành trình từ cảm hứng đến hiện thực
                </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                    <div>
                        <p className="text-gray-600 leading-relaxed">
                            Khi cuộc sống ngày càng hối hả, con người dần nhận ra rằng sức khỏe và tinh thần chỉ có thể thực sự bền vững khi trở về với những giá trị tự nhiên. Chính trong dòng chảy này, AYA Food ra đời như một lời nhắc nhở dịu dàng về việc yêu thương bản thân và nuôi dưỡng cơ thể bằng những thực phẩm thuần chay, tự nhiên và lành mạnh.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Cảm hứng từ thiên nhiên và triết lý sống thuần chay
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            AYA trong tiếng Nhật nghĩa là "màu sắc", biểu trưng cho sự đa dạng và hài hòa của thiên nhiên. Chúng tôi tin rằng cuộc sống khỏe mạnh và cân bằng bắt nguồn từ việc lựa chọn những gì tinh túy và lành mạnh nhất mà thiên nhiên ban tặng.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Nhìn lại những ngày đầu, ý tưởng hình thành AYA Food được thắp sáng khi nhận ra rằng ngày càng nhiều người tìm kiếm thực phẩm sạch, lành mạnh nhưng lại gặp khó khăn trong việc tiếp cận những sản phẩm đáng tin cậy.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Sứ mệnh "Nuôi dưỡng cuộc sống thuần tự nhiên"
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Với thông điệp "Nuôi dưỡng cuộc sống thuần tự nhiên", AYA Food không chỉ là một cửa hàng, mà còn là một hành trình cùng bạn trải nghiệm những lợi ích của việc ăn chay và lối sống lành mạnh.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Mỗi sản phẩm tại AYA Food đều được lựa chọn kỹ càng, từ các loại hạt dinh dưỡng, đậu hữu cơ, đến các món ăn chay chế biến sẵn. Tất cả đều được làm từ tình yêu và sự trân trọng dành cho sức khỏe của khách hàng.
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            Hành trình phía trước
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Không chỉ dừng lại ở việc cung cấp thực phẩm, AYA Food mong muốn trở thành một cộng đồng nơi mọi người có thể chia sẻ kiến thức, công thức nấu ăn, và cùng nhau lan tỏa lối sống thuần chay.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Trong năm 2025, chúng tôi sẽ phát triển thêm các nội dung trên mạng xã hội để cùng bạn khám phá những câu chuyện thú vị về thực phẩm và cảm hứng sống khỏe.
                        </p>
                    </div>

                    <div className="bg-green-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-semibold text-green-800 mb-4">
                            Cam kết của chúng tôi
                        </h3>
                        <ul className="space-y-4 text-green-700">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>Sản phẩm từ nguyên liệu tự nhiên nhất</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>Không hóa chất, không phụ gia</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>Bảo vệ môi trường trong từng quy trình sản xuất</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>Đồng hành cùng bạn trên hành trình sống khỏe</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-orange-50 p-8 rounded-2xl">
                        <p className="text-lg text-orange-700 italic">
                            "Đến với AYA Food, bạn không chỉ mua thực phẩm mà còn nhận được sự chăm sóc và khơi nguồn cảm hứng để sống một cuộc đời tràn đầy năng lượng và yêu thương."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

