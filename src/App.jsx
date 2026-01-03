import React, { useState, useEffect } from "react";
import {
    Menu,
    X,
    ChevronRight,
    FileText,
    User,
    Target,
    BookOpen,
    Briefcase,
    Shield,
    Palette,
    Users,
} from "lucide-react";

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState("about");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navigation = [
        { id: "about", label: "Giới thiệu", icon: User },
        { id: "projects", label: "Dự án", icon: Briefcase },
        { id: "conclusion", label: "Tổng kết", icon: Target },
    ];

    const projects = [
        {
            id: 1,
            title: "Máy tính và thiết bị ngoại vi",
            chapter: "Chương 1",
            description:
                "Tổng quan về máy tính, các thành phần cơ bản và thiết bị ngoại vi (bàn phím, chuột, máy in…)",
            icon: FileText,
            color: "from-blue-400 to-cyan-400",
        },
        {
            id: 2,
            title: "Khai thác dữ liệu và thông tin",
            chapter: "Chương 2",
            description:
                "Thực hành tìm kiếm, thu thập và tổ chức thông tin; đánh giá độ tin cậy của nguồn và trích dẫn phù hợp",
            icon: BookOpen,
            color: "from-purple-400 to-pink-400",
        },
        {
            id: 3,
            title: "Tổng quan về trí tuệ nhân tạo",
            chapter: "Chương 3",
            description:
                "Khái niệm AI, ứng dụng phổ biến, lợi ích – rủi ro và ví dụ liên hệ thực tế trong học tập",
            icon: Target,
            color: "from-green-400 to-emerald-400",
        },
        {
            id: 4,
            title: "Giao tiếp và hợp tác số",
            chapter: "Chương 4",
            description:
                "Rèn kỹ năng giao tiếp số và làm việc nhóm online: Trello, Google Docs và Slack",
            icon: Users,
            color: "from-orange-400 to-red-400",
        },
        {
            id: 5,
            title: "Sáng tạo nội dung số",
            chapter: "Chương 5",
            description:
                "Lên ý tưởng, lựa chọn công cụ, biên tập/thiết kế và lưu ý bản quyền",
            icon: Palette,
            color: "from-pink-400 to-rose-400",
        },
        {
            id: 6,
            title: "An toàn và liêm chính học thuật",
            chapter: "Chương 6",
            description:
                "An toàn số, bảo mật tài khoản, quyền riêng tư và liêm chính học thuật",
            icon: Shield,
            color: "from-indigo-400 to-blue-400",
        },
    ];

    const skills = [
        {
            name: "Tổ chức dữ liệu",
            desc: "Sắp xếp file/thư mục khoa học, quy ước tên rõ ràng",
        },
        {
            name: "Tìm kiếm học thuật",
            desc: "Khai thác hiệu quả nguồn học thuật, lọc theo tác giả",
        },
        {
            name: "Prompting AI",
            desc: "Xây dựng yêu cầu có ngữ cảnh cụ thể và rõ ràng",
        },
        {
            name: "Trình bày nội dung",
            desc: "Tái cấu trúc thông tin thành bố cục mạch lạc",
        },
    ];

    const tools = [
        {
            category: "Quản lý tệp",
            items: ["File Explorer", "Quản lý phiên bản"],
        },
        {
            category: "Nguồn học thuật",
            items: ["Google Scholar", "Cơ sở dữ liệu trực tuyến"],
        },
        { category: "Hỗ trợ AI", items: ["ChatGPT", "Gemini"] },
        { category: "Thiết kế", items: ["Canva", "Midjourney", "DALL·E"] },
        {
            category: "Làm việc nhóm",
            items: ["Trello", "Google Docs", "Slack"],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            {/* Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? "bg-white/90 backdrop-blur-md shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
                                H
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Phạm Thu Hường
                                </h1>
                                <p className="text-xs text-gray-600">
                                    Digital Portfolio
                                </p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-1">
                            {navigation.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setCurrentPage(item.id)}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                                            currentPage === item.id
                                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                                                : "text-gray-700 hover:bg-white/50"
                                        }`}
                                    >
                                        <Icon size={18} />
                                        <span className="font-medium">
                                            {item.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t shadow-lg animate-fade-in">
                        <nav className="px-4 py-2 space-y-1">
                            {navigation.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            setCurrentPage(item.id);
                                            setIsMenuOpen(false);
                                        }}
                                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                                            currentPage === item.id
                                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                                                : "text-gray-700 hover:bg-gray-50"
                                        }`}
                                    >
                                        <Icon size={20} />
                                        <span className="font-medium">
                                            {item.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </header>

            {/* Body */}
            <main className="pt-20 sm:pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* About Page */}
                    {currentPage === "about" && (
                        <div className="animate-fade-in">
                            {/* Hero Section */}
                            <div className="text-center mb-12 sm:mb-16">
                                <div className="inline-block mb-6">
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-4xl sm:text-5xl shadow-2xl animate-bounce-slow">
                                        H
                                    </div>
                                </div>
                                <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Phạm Thu Hường
                                </h1>
                                <p className="text-lg sm:text-xl text-gray-600 mb-2">
                                    Sinh viên ngành Luật Thương Mại Quốc Tế
                                </p>
                                <p className="text-base sm:text-lg text-gray-500">
                                    Đại học Luật – ĐHQGHN
                                </p>
                            </div>

                            {/* About Me Section */}
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
                                    : mỗi bài có mục tiêu, nội dung đầy đủ và
                                    minh chứng (ảnh/tệp) để người xem đối chiếu
                                    nhanh.
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
                            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></span>
                                    <span>Kỹ năng nổi bật</span>
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {skills.map((skill, idx) => (
                                        <div
                                            key={idx}
                                            className="p-5 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <h3 className="font-bold text-purple-700 mb-2">
                                                {skill.name}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {skill.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tools Section */}
                            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-pink-500 to-red-600 rounded-full"></span>
                                    <span>Công cụ đã sử dụng</span>
                                </h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {tools.map((tool, idx) => (
                                        <div
                                            key={idx}
                                            className="p-5 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300"
                                        >
                                            <h3 className="font-bold text-pink-700 mb-3">
                                                {tool.category}
                                            </h3>
                                            <ul className="space-y-2">
                                                {tool.items.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="text-sm text-gray-600 flex items-center space-x-2"
                                                    >
                                                        <ChevronRight
                                                            size={16}
                                                            className="text-pink-400"
                                                        />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Projects Page */}
                    {currentPage === "projects" && (
                        <div className="animate-fade-in">
                            <div className="text-center mb-12">
                                <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Dự án của tôi
                                </h1>
                                <p className="text-lg text-gray-600">
                                    6 bài tập thực hành với đầy đủ minh chứng
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects.map((project, idx) => {
                                    const Icon = project.icon;
                                    return (
                                        <div
                                            key={project.id}
                                            className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                            style={{
                                                animationDelay: `${
                                                    idx * 100
                                                }ms`,
                                            }}
                                        >
                                            <div
                                                className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden`}
                                            >
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                                                <Icon
                                                    size={48}
                                                    className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <div className="text-sm font-semibold text-purple-600 mb-2">
                                                    {project.chapter}
                                                </div>
                                                <h3 className="text-xl font-bold mb-3 text-gray-800">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Collaboration Tools Section */}
                            <div className="mt-12 bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></span>
                                    <span>Trải nghiệm công cụ hợp tác</span>
                                </h2>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Nhóm đã sử dụng ba công cụ chính trong dự án
                                    "Bảo vệ môi trường": Trello (quản lý nhiệm
                                    vụ), Google Docs (soạn thảo cộng tác) và
                                    Slack (giao tiếp nhóm).
                                </p>

                                <div className="grid sm:grid-cols-3 gap-6">
                                    <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                                        <h3 className="font-bold text-blue-700 mb-3">
                                            Trello
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li>✓ Quản lý tiến độ rõ ràng</li>
                                            <li>
                                                ✓ Hạn chế trùng lặp công việc
                                            </li>
                                            <li>✓ Tăng trách nhiệm cá nhân</li>
                                        </ul>
                                    </div>
                                    <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                                        <h3 className="font-bold text-purple-700 mb-3">
                                            Google Docs
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li>✓ Làm việc thời gian thực</li>
                                            <li>
                                                ✓ Lịch sử chỉnh sửa chi tiết
                                            </li>
                                            <li>✓ Trao đổi qua bình luận</li>
                                        </ul>
                                    </div>
                                    <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                                        <h3 className="font-bold text-orange-700 mb-3">
                                            Slack
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li>✓ Thông tin dễ tra cứu</li>
                                            <li>✓ Phân luồng rõ ràng</li>
                                            <li>✓ Họp trực tuyến ổn định</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Conclusion Page */}
                    {currentPage === "conclusion" && (
                        <div className="animate-fade-in">
                            <div className="text-center mb-12">
                                <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Tổng kết & Phát triển
                                </h1>
                                <p className="text-lg text-gray-600">
                                    Những thay đổi và bài học sau 6 bài tập
                                </p>
                            </div>

                            {/* Key Changes */}
                            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></span>
                                    <span>Những thay đổi nổi bật</span>
                                </h2>
                                <div className="space-y-4">
                                    <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                                        <h3 className="font-bold text-green-700 mb-2">
                                            Tư duy có hệ thống hơn
                                        </h3>
                                        <p className="text-gray-600">
                                            Tài liệu được lưu trữ có cấu trúc,
                                            tên file thống nhất và có lý do rõ
                                            ràng
                                        </p>
                                    </div>
                                    <div className="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                                        <h3 className="font-bold text-blue-700 mb-2">
                                            Xử lý thông tin tốt hơn
                                        </h3>
                                        <p className="text-gray-600">
                                            Biết đặt câu hỏi đúng trọng tâm, tìm
                                            đúng nguồn và kiểm tra chéo
                                        </p>
                                    </div>
                                    <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                                        <h3 className="font-bold text-purple-700 mb-2">
                                            Sử dụng AI hiệu quả
                                        </h3>
                                        <p className="text-gray-600">
                                            Tập trung thiết kế yêu cầu và kiểm
                                            chứng kết quả thay vì phụ thuộc
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Core Lessons */}
                            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></span>
                                    <span>Ba bài học cốt lõi</span>
                                </h2>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl hover:scale-105 transition-transform duration-300">
                                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                                            1
                                        </div>
                                        <h3 className="font-bold text-orange-700 mb-2">
                                            Xác định mục tiêu
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Làm rõ sản phẩm cần tạo ra ngay từ
                                            đầu
                                        </p>
                                    </div>
                                    <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl hover:scale-105 transition-transform duration-300">
                                        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                                            2
                                        </div>
                                        <h3 className="font-bold text-pink-700 mb-2">
                                            Thiết lập tiêu chí
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Xác định rõ thế nào là "đạt yêu cầu"
                                        </p>
                                    </div>
                                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:scale-105 transition-transform duration-300">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                                            3
                                        </div>
                                        <h3 className="font-bold text-blue-700 mb-2">
                                            Lưu giữ minh chứng
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Đảm bảo quá trình có thể kiểm tra
                                            lại
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Future Application */}
                            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-blue-600 rounded-full"></span>
                                    <span>Ứng dụng vào việc học Luật</span>
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4 p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-colors duration-300">
                                        <ChevronRight
                                            className="text-blue-500 mt-1 flex-shrink-0"
                                            size={20}
                                        />
                                        <p className="text-gray-700">
                                            Tổ chức thư mục theo môn học, tuần
                                            học và loại tài liệu
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-4 p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-colors duration-300">
                                        <ChevronRight
                                            className="text-purple-500 mt-1 flex-shrink-0"
                                            size={20}
                                        />
                                        <p className="text-gray-700">
                                            Tra cứu văn bản pháp luật dựa trên
                                            checklist nguồn đầy đủ
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-4 p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-colors duration-300">
                                        <ChevronRight
                                            className="text-pink-500 mt-1 flex-shrink-0"
                                            size={20}
                                        />
                                        <p className="text-gray-700">
                                            Sử dụng prompt để tạo khung phân
                                            tích theo hướng có cấu trúc
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-4 p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-colors duration-300">
                                        <ChevronRight
                                            className="text-orange-500 mt-1 flex-shrink-0"
                                            size={20}
                                        />
                                        <p className="text-gray-700">
                                            Ghi chú rõ mức độ sử dụng AI để đảm
                                            bảo tính minh bạch
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <h3 className="font-bold text-lg mb-1">
                                Phạm Thu Hường
                            </h3>
                            <p className="text-blue-100 text-sm">
                                Sinh viên Luật Thương Mại Quốc Tế
                            </p>
                            <p className="text-blue-100 text-sm">
                                Đại học Luật – ĐHQGHN
                            </p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-blue-100 text-sm mb-2">
                                "Mở ra là hiểu" – Portfolio có hệ thống
                            </p>
                            <p className="text-xs text-blue-200">
                                © 2026 • Digital Portfolio
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: linear-gradient(to bottom, #eff6ff, #faf5ff, #fce7f3);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #9333ea, #ec4899);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed, #db2777);
        }
      `}</style>
        </div>
    );
};

export default Portfolio;
