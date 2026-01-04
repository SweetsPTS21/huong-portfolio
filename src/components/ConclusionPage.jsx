import React from "react";
import {
    TrendingUp,
    Database,
    Lightbulb,
    CheckCircle,
    FileText,
    Search,
    MessageSquare,
    Lock,
    User,
    Star,
} from "lucide-react";

const ConclusionPage = ({ navigation, setCurrentPage }) => {
    const keyChanges = [
        {
            icon: TrendingUp,
            title: "Tư duy làm việc có hệ thống hơn",
            description:
                "Tài liệu được lưu trữ có cấu trúc, tên file thống nhất và có lý do rõ ràng cho từng cách sắp xếp",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Database,
            title: "Khả năng xử lý thông tin được cải thiện",
            description:
                "Biết đặt câu hỏi đúng trọng tâm, tìm đúng nguồn và thực hiện kiểm tra chéo trước khi sử dụng",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: Lightbulb,
            title: "Sử dụng AI hiệu quả hơn",
            description:
                "Tập trung vào việc thiết kế yêu cầu và kiểm chứng kết quả, thay vì phụ thuộc vào câu trả lời sẵn có",
            color: "from-green-500 to-emerald-500",
        },
    ];

    const coreLessons = [
        {
            number: 1,
            title: "Xác định mục tiêu ngay từ đầu",
            description:
                "Làm rõ sản phẩm cần tạo ra là gì (bảng tổng hợp, dàn ý, bản tóm tắt, infographic…)",
            color: "from-orange-500 to-red-500",
        },
        {
            number: 2,
            title: "Thiết lập tiêu chí đánh giá",
            description:
                'Xác định rõ thế nào là "đạt" về độ dài, cấu trúc, nguồn tài liệu và cách trình bày',
            color: "from-pink-500 to-rose-500",
        },
        {
            number: 3,
            title: "Lưu giữ minh chứng đầy đủ",
            description:
                "Đảm bảo người xem có thể theo dõi và hiểu được toàn bộ quá trình thực hiện",
            color: "from-blue-500 to-indigo-500",
        },
    ];

    const portfolioStrengths = [
        {
            category: "Về trình bày",
            items: [
                "Giao diện gọn gàng, dễ đọc",
                "Nội dung chia theo từng bài, có mục lục rõ ràng",
                "Hình ảnh minh chứng được nhóm theo cụm, bố trí khoảng cách hợp lý",
            ],
        },
        {
            category: "Về minh chứng",
            items: [
                "Hình ảnh rõ nét, dễ đọc nội dung",
                "Tất cả ảnh đều có thể phóng to, phù hợp cho việc kiểm tra chi tiết",
            ],
        },
        {
            category: "Về khả năng mở rộng",
            items: [
                "Dễ dàng bổ sung bài mới",
                "Cấu trúc theo mô hình: bài → nội dung → minh chứng → tệp đính kèm",
                "Thuận tiện để nhân bản và phát triển lâu dài",
            ],
        },
    ];

    const lawApplications = [
        {
            icon: FileText,
            title: "Tổ chức thư mục theo môn học",
            description:
                "Phân loại theo môn học, tuần học và loại tài liệu (bài giảng, án lệ, ghi chú)",
        },
        {
            icon: Search,
            title: "Tra cứu văn bản pháp luật",
            description:
                "Dựa trên checklist nguồn gồm: tác giả, nơi công bố, năm xuất bản và mức độ trích dẫn",
        },
        {
            icon: MessageSquare,
            title: "Sử dụng prompt có cấu trúc",
            description:
                "Tạo khung phân tích theo hướng vấn đề – quy định – phân tích – kết luận",
        },
        {
            icon: Lock,
            title: "Ghi chú mức độ sử dụng AI",
            description:
                "Hỗ trợ dàn ý, gợi ý diễn đạt, kiểm tra lỗi nhằm đảm bảo tính minh bạch",
        },
    ];

    const improvementPlan = [
        {
            icon: FileText,
            title: "Chuẩn hóa tên file minh chứng",
            description: "Theo quy tắc thống nhất (ví dụ: bai_x_trang_y, hinh_y)",
        },
        {
            icon: TrendingUp,
            title: "Tối ưu tốc độ tải",
            description:
                'Chuyển một số hình ảnh sang định dạng WebP và bổ sung tùy chọn "xem trang lớn"',
        },
        {
            icon: User,
            title: "Thêm mục Liên hệ",
            description:
                "Nếu portfolio được sử dụng cho mục đích cá nhân dài hạn",
        },
        {
            icon: Star,
            title: "Bổ sung bài học rút ra",
            description:
                "Thêm 1–2 dòng ngay dưới tiêu đề mỗi bài để tăng tính kết nối",
        },
    ];

    return (
        <div className="animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Conclusion
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                    Những thay đổi và bài học sau 6 bài tập
                </p>
                <p className="text-base text-gray-500">
                    Định hướng phát triển và ứng dụng thực tế
                </p>
            </div>

            {/* Introduction */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mb-8 shadow-xl border border-purple-200">
                <p className="text-gray-800 leading-relaxed text-lg">
                    Sau khi hoàn thành 6 bài trong portfolio, em nhận thấy rõ sự
                    thay đổi trong cách tiếp cận việc học và tổ chức công việc.
                    Quá trình này giúp tôi nhận diện được những điểm mình đã làm
                    tốt, những mặt còn hạn chế, đồng thời định hướng cách áp
                    dụng các kỹ năng đã học vào thực tế trong thời gian tới.
                </p>
            </div>

            {/* Key Changes */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 border border-green-100">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></span>
                    <span>Những thay đổi nổi bật</span>
                </h2>
                <div className="space-y-6">
                    {keyChanges.map((change, idx) => {
                        const Icon = change.icon;
                        return (
                            <div
                                key={idx}
                                className={`p-6 bg-gradient-to-r ${change.color} bg-opacity-10 rounded-xl hover:shadow-lg transition-all duration-300 border-l-4`}
                                style={{
                                    borderColor: `var(--tw-gradient-from)`,
                                }}
                            >
                                <div className="flex items-start space-x-4">
                                    <Icon
                                        className="flex-shrink-0 mt-1"
                                        size={32}
                                        style={{
                                            color: `var(--tw-gradient-from)`,
                                        }}
                                    />
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2 text-lg">
                                            {change.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {change.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Core Lessons */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 border border-orange-100">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></span>
                    <span>Ba bài học cốt lõi rút ra</span>
                </h2>
                <div className="grid sm:grid-cols-3 gap-6">
                    {coreLessons.map((lesson) => (
                        <div
                            key={lesson.number}
                            className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl hover:scale-105 transition-transform duration-300 border border-orange-100"
                        >
                            <div
                                className={`w-20 h-20 bg-gradient-to-r ${lesson.color} rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6 shadow-lg`}
                            >
                                {lesson.number}
                            </div>
                            <h3 className="font-bold text-gray-800 mb-3 text-lg">
                                {lesson.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {lesson.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Portfolio Strengths */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 border border-blue-100">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full"></span>
                    <span>Điểm mạnh của phiên bản portfolio hiện tại</span>
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Portfolio được thiết kế với mục tiêu giúp người xem kiểm tra
                    nhanh và dễ đối chiếu, không cần suy đoán về quy trình làm
                    việc.
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                    {portfolioStrengths.map((strength, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100"
                        >
                            <h3 className="font-bold text-blue-700 mb-4 text-lg">
                                {strength.category}
                            </h3>
                            <ul className="space-y-3">
                                {strength.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start space-x-2 text-gray-700 text-sm"
                                    >
                                        <CheckCircle
                                            size={18}
                                            className="text-blue-500 mt-0.5 flex-shrink-0"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Law Applications */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 border border-purple-100">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></span>
                    <span>Ứng dụng vào việc học Luật</span>
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Trong thời gian tới, tôi dự định áp dụng những kinh nghiệm
                    này vào quá trình học Luật bằng cách:
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                    {lawApplications.map((app, idx) => {
                        const Icon = app.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-purple-100"
                            >
                                <div className="flex items-start space-x-4">
                                    <Icon
                                        className="text-purple-600 flex-shrink-0 mt-1"
                                        size={28}
                                    />
                                    <div>
                                        <h3 className="font-bold text-purple-700 mb-2 text-lg">
                                            {app.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {app.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Improvement Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 border border-indigo-100">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-blue-600 rounded-full"></span>
                    <span>Kế hoạch cải thiện cho phiên bản tiếp theo</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    {improvementPlan.map((plan, idx) => {
                        const Icon = plan.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-indigo-100"
                            >
                                <div className="flex items-start space-x-4">
                                    <Icon
                                        className="text-indigo-600 flex-shrink-0 mt-1"
                                        size={28}
                                    />
                                    <div>
                                        <h3 className="font-bold text-indigo-700 mb-2 text-lg">
                                            {plan.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {plan.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Quick Navigation */}
            <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white rounded-2xl shadow-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-6">
                    Đi tới phần bạn muốn xem
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {navigation.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setCurrentPage(item.id)}
                                className="flex items-center space-x-2 px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ConclusionPage;
