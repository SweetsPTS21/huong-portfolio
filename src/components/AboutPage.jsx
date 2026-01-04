import React from "react";
import {
    ChevronRight,
    Database,
    Search,
    MessageSquare,
    Pencil,
    FileText,
    BookOpen,
    Lightbulb,
    Palette,
    Users,
} from "lucide-react";
import avatar from "../assets/avatar.jpg";

const AboutPage = () => {
    const skills = [
        {
            name: "Tổ chức dữ liệu",
            desc: "Sắp xếp file/thư mục khoa học, quy ước tên rõ ràng, dễ tra cứu theo từng mục đích sử dụng",
            icon: Database,
        },
        {
            name: "Tìm kiếm tài liệu học thuật",
            desc: "Khai thác hiệu quả nguồn học thuật, biết lọc theo tác giả, nhà xuất bản và mức độ cập nhật",
            icon: Search,
        },
        {
            name: "Prompting AI",
            desc: "Xây dựng yêu cầu có ngữ cảnh cụ thể, xác định rõ đầu ra mong muốn và tiêu chí đánh giá kết quả",
            icon: MessageSquare,
        },
        {
            name: "Trình bày nội dung",
            desc: "Tái cấu trúc thông tin thành bố cục mạch lạc, phù hợp để đăng tải trên website hoặc nền tảng số",
            icon: Pencil,
        },
    ];

    const tools = [
        {
            category: "Quản lý tệp",
            items: [
                "File Explorer",
                "Công cụ nén file",
                "Quản lý phiên bản tài liệu",
            ],
            icon: FileText,
        },
        {
            category: "Nguồn học thuật",
            items: ["Google Scholar", "Cơ sở dữ liệu trực tuyến đáng tin cậy"],
            icon: BookOpen,
        },
        {
            category: "Hỗ trợ AI",
            items: [
                "ChatGPT",
                "Gemini (phát triển ý tưởng và rà soát nội dung)",
            ],
            icon: Lightbulb,
        },
        {
            category: "Thiết kế & sáng tạo",
            items: ["Canva", "Midjourney/DALL·E (nội dung sáng tạo)"],
            icon: Palette,
        },
        {
            category: "Làm việc nhóm",
            items: [
                "Trello",
                "Google Docs",
                "Slack (dự án học tập và hợp tác)",
            ],
            icon: Users,
        },
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="text-center mb-12 sm:mb-16">
                <div className="inline-block mb-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-4xl sm:text-5xl shadow-2xl animate-bounce-slow">
                        <img
                            src={avatar}
                            alt="Avatar"
                            className="rounded-full h-full w-full object-cover"
                        />
                    </div>
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Phạm Thu Hường
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-2">
                    Sinh viên ngành Luật Thương Mại Quốc Tế
                </p>
                <p className="text-base sm:text-lg text-gray-600">
                    Trường Đại học Luật – ĐHQGHN
                </p>
            </div>

            {/* About Me Section */}
            <div>
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                        <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                        <span>Về tôi</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                        Portfolio này được xây dựng theo nguyên tắc{" "}
                        <span className="font-semibold text-purple-600">
                            "mở ra là hiểu"
                        </span>
                        : mỗi bài có mục tiêu, nội dung đầy đủ và minh chứng
                        (ảnh/tệp) để người xem đối chiếu nhanh.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        {[
                            "Chơi thể thao",
                            "Đọc sách",
                            "Xem phim khoa học",
                            "Du lịch",
                        ].map((hobby, idx) => (
                            <div
                                key={idx}
                                className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:scale-105 transition-transform duration-300"
                            >
                                <p className="text-sm font-medium text-gray-700">
                                    {hobby}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 hover:shadow-2xl transition-all duration-300 border border-purple-100">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                        <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></span>
                        <span>Kỹ năng nổi bật</span>
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {skills.map((skill, idx) => {
                            const Icon = skill.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-purple-100"
                                >
                                    <div className="flex items-start space-x-4">
                                        <Icon
                                            className="text-purple-600 flex-shrink-0 mt-1"
                                            size={28}
                                        />
                                        <div>
                                            <h3 className="font-bold text-purple-700 mb-2 text-lg">
                                                {skill.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {skill.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tools Section */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border border-orange-100">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                        <span className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></span>
                        <span>Công cụ đã sử dụng</span>
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tools.map((tool, idx) => {
                            const Icon = tool.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-orange-100"
                                >
                                    <div className="flex items-center space-x-3 mb-4">
                                        <Icon
                                            className="text-orange-600"
                                            size={28}
                                        />
                                        <h3 className="font-bold text-orange-700 text-lg">
                                            {tool.category}
                                        </h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {tool.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-sm text-gray-600 flex items-start space-x-2"
                                            >
                                                <ChevronRight
                                                    size={16}
                                                    className="text-orange-400 mt-0.5 flex-shrink-0"
                                                />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
