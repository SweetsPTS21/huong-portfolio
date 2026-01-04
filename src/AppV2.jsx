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
    Award,
    CheckCircle,
    TrendingUp,
    Lightbulb,
    Search,
    Database,
    MessageSquare,
    Pencil,
    Lock,
    Star,
    AlertCircle,
    ArrowRight,
    Download,
    Eye,
    Upload,
} from "lucide-react";

import avatar from "./assets/avatar.jpg";
import Workfile from "./components/workfile";
import Chapter4 from "./components/chapter4";

const PortfolioV2 = () => {
    const [currentPage, setCurrentPage] = useState("about");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [expandedImage, setExpandedImage] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);
    const [showPdfViewer, setShowPdfViewer] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState({});

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
            chapter: "Bài tập 1 - Chương 1",
            description:
                "Tổng quan về máy tính, các thành phần cơ bản và thiết bị ngoại vi (bàn phím, chuột, máy in…), kèm minh chứng thực hành trong file đính kèm",
            icon: FileText,
            color: "from-blue-400 to-cyan-400",
            detailColor: "from-blue-50 to-cyan-50",
        },
        {
            id: 2,
            title: "Khai thác dữ liệu và thông tin",
            chapter: "Bài tập 2 - Chương 2",
            description:
                "Thực hành tìm kiếm, thu thập và tổ chức thông tin; biết cách đánh giá độ tin cậy của nguồn và trích dẫn phù hợp",
            icon: Database,
            color: "from-purple-400 to-pink-400",
            detailColor: "from-purple-50 to-pink-50",
        },
        {
            id: 3,
            title: "Tổng quan về trí tuệ nhân tạo",
            chapter: "Bài tập 2 - Chương 3",
            description:
                "Tổng quan về AI: khái niệm, ứng dụng phổ biến, lợi ích – rủi ro và ví dụ liên hệ thực tế trong học tập",
            icon: Lightbulb,
            color: "from-green-400 to-emerald-400",
            detailColor: "from-green-50 to-emerald-50",
        },
        {
            id: 4,
            title: "Giao tiếp và hợp tác trong môi trường số",
            chapter: "Bài tập 3 - Chương 4",
            description:
                "Rèn kỹ năng giao tiếp số và làm việc nhóm online: phân công, trao đổi, chia sẻ tài liệu và quy tắc ứng xử",
            icon: Users,
            color: "from-orange-400 to-red-400",
            detailColor: "from-orange-50 to-red-50",
            hasDetailedReport: true,
        },
        {
            id: 5,
            title: "Sáng tạo nội dung số",
            chapter: "Bài tập 2 - Chương 5",
            description:
                "Thực hành sáng tạo nội dung số: lên ý tưởng, lựa chọn công cụ, biên tập/thiết kế và lưu ý bản quyền khi sử dụng tài nguyên",
            icon: Palette,
            color: "from-pink-400 to-rose-400",
            detailColor: "from-pink-50 to-rose-50",
        },
        {
            id: 6,
            title: "An toàn và liêm chính học thuật trong môi trường số",
            chapter: "Bài tập 4 - Chương 6",
            description:
                "Tập trung vào an toàn số, bảo mật tài khoản, quyền riêng tư và liêm chính học thuật (tránh đạo văn, trích dẫn đúng, dùng AI minh bạch)",
            icon: Shield,
            color: "from-indigo-400 to-blue-400",
            detailColor: "from-indigo-50 to-blue-50",
        },
    ];

    const principles = [
        {
            icon: Search,
            title: "Lưu trữ có hệ thống",
            description:
                "Xây dựng cấu trúc thư mục logic, phân biệt rõ các phiên bản tài liệu để tránh nhầm lẫn",
        },
        {
            icon: CheckCircle,
            title: "Kiểm chứng thông tin",
            description:
                "Luôn đối chiếu và đánh giá độ tin cậy của nguồn trước khi sử dụng trong bài viết học thuật",
        },
        {
            icon: MessageSquare,
            title: "Prompting AI có định hướng",
            description:
                "Soạn yêu cầu rõ mục tiêu, có giới hạn và điều kiện nhằm đảm bảo AI trả lời đúng trọng tâm",
        },
    ];

    const workPrinciples = [
        {
            icon: Pencil,
            title: "Trình bày ưu tiên trải nghiệm đọc",
            description:
                "Nội dung được chia mục rõ ràng, có tiêu đề và khoảng cách hợp lý để dễ theo dõi",
        },
        {
            icon: Award,
            title: "Minh chứng minh bạch",
            description:
                "Hình ảnh/tài liệu đính kèm đảm bảo rõ nét, có thể phóng to khi cần kiểm tra",
        },
        {
            icon: Lock,
            title: "Sử dụng AI có trách nhiệm",
            description:
                "AI chỉ đóng vai trò hỗ trợ, người làm bài chịu trách nhiệm hoàn toàn về nội dung và bản chỉnh sửa cuối cùng",
        },
    ];

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
            description:
                "Theo quy tắc thống nhất (ví dụ: bai_x_trang_y, hinh_y)",
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

    const handleFileUpload = (projectId, event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            const fileUrl = URL.createObjectURL(file);
            setUploadedFiles((prev) => ({
                ...prev,
                [projectId]: { file, url: fileUrl, name: file.name },
            }));
        } else {
            alert("Vui lòng chọn file PDF");
        }
    };

    const handleDownload = (projectId) => {
        const fileData = uploadedFiles[projectId];
        if (fileData) {
            const link = document.createElement("a");
            link.href = fileData.url;
            link.download = fileData.name;
            link.click();
        }
    };

    const handleViewPdf = (projectId) => {
        const fileData = uploadedFiles[projectId];
        if (fileData) {
            setPdfFile(fileData.url);
            setShowPdfViewer(true);
        }
    };

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
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
                                <img
                                    src={avatar}
                                    alt="Avatar"
                                    className="rounded-full h-full w-full object-cover"
                                />
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

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

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
                                <div className="mt-6 flex flex-wrap justify-center gap-3">
                                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700">
                                        Phong cách: Gọn • Rõ • Có hệ thống
                                    </span>
                                </div>
                            </div>

                            {/* About Me Section */}
                            <div>
                                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
                                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                                        <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                                        <span>Về tôi</span>
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">
                                        Portfolio này được xây dựng theo nguyên
                                        tắc{" "}
                                        <span className="font-semibold text-purple-600">
                                            "mở ra là hiểu"
                                        </span>
                                        : mỗi bài có mục tiêu, nội dung đầy đủ
                                        và minh chứng (ảnh/tệp) để người xem đối
                                        chiếu nhanh.
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
                                                        {tool.items.map(
                                                            (item, i) => (
                                                                <li
                                                                    key={i}
                                                                    className="text-sm text-gray-600 flex items-start space-x-2"
                                                                >
                                                                    <ChevronRight
                                                                        size={
                                                                            16
                                                                        }
                                                                        className="text-orange-400 mt-0.5 flex-shrink-0"
                                                                    />
                                                                    <span>
                                                                        {item}
                                                                    </span>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Projects Page */}
                    {currentPage === "projects" && (
                        <div className="animate-fade-in">
                            <div className="text-center mb-12">
                                <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Projects
                                </h1>
                                <p className="text-lg text-gray-600 mb-2">
                                    Nội dung 6 bài được đưa vào đầy đủ (văn bản
                                    + hình ảnh)
                                </p>
                                <p className="text-base text-gray-500 mb-4">
                                    Có thể click ảnh để phóng to
                                </p>
                                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 max-w-2xl mx-auto">
                                    <p className="text-sm font-medium text-purple-700">
                                        💡{" "}
                                        <span className="font-bold">Mẹo:</span>{" "}
                                        mở bài → kéo xuống xem từng trang/ảnh →
                                        click để xem rõ chữ
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8 border border-blue-100">
                                <h2 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                                    <span>Chọn bài</span>
                                </h2>
                                <div className="space-y-3">
                                    {projects.map((project) => (
                                        <button
                                            key={project.id}
                                            onClick={() =>
                                                setSelectedProject(project)
                                            }
                                            className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                                                selectedProject?.id ===
                                                project.id
                                                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                                                    : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium">
                                                    {project.chapter}:{" "}
                                                    {project.title}
                                                </span>
                                                <ChevronRight
                                                    size={20}
                                                    className={
                                                        selectedProject?.id ===
                                                        project.id
                                                            ? "text-white"
                                                            : "text-gray-400"
                                                    }
                                                />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {!selectedProject ? (
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-200">
                                    <BookOpen
                                        size={64}
                                        className="mx-auto mb-4 text-purple-600"
                                    />
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        Chọn một bài để xem chi tiết
                                    </h3>
                                    <p className="text-gray-600">
                                        Sử dụng menu "Chọn bài" ở trên để xem
                                        nội dung đầy đủ từng bài tập
                                    </p>
                                </div>
                            ) : selectedProject.id === 4 ? (
                                /* Detailed Project View */
                                <Chapter4
                                    selectedProject={selectedProject}
                                    setSelectedProject={setSelectedProject}
                                />
                            ) : (
                                /* Other Projects - Simple Display */
                                <Workfile selectedProject={selectedProject} />
                            )}
                        </div>
                    )}

                    {/* Conclusion Page */}
                    {currentPage === "conclusion" && (
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
                                    Sau khi hoàn thành 6 bài trong portfolio, em
                                    nhận thấy rõ sự thay đổi trong cách tiếp cận
                                    việc học và tổ chức công việc. Quá trình này
                                    giúp tôi nhận diện được những điểm mình đã
                                    làm tốt, những mặt còn hạn chế, đồng thời
                                    định hướng cách áp dụng các kỹ năng đã học
                                    vào thực tế trong thời gian tới.
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
                                    <span>
                                        Điểm mạnh của phiên bản portfolio hiện
                                        tại
                                    </span>
                                </h2>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Portfolio được thiết kế với mục tiêu giúp
                                    người xem kiểm tra nhanh và dễ đối chiếu,
                                    không cần suy đoán về quy trình làm việc.
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
                                                {strength.items.map(
                                                    (item, i) => (
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
                                                    )
                                                )}
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
                                    Trong thời gian tới, tôi dự định áp dụng
                                    những kinh nghiệm này vào quá trình học Luật
                                    bằng cách:
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
                            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-indigo-100">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center space-x-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-blue-600 rounded-full"></span>
                                    <span>
                                        Kế hoạch cải thiện cho phiên bản tiếp
                                        theo
                                    </span>
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
                                                onClick={() =>
                                                    setCurrentPage(item.id)
                                                }
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
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="text-center md:text-left">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl font-bold mb-4 mx-auto md:mx-0">
                                H
                            </div>
                            <h3 className="font-bold text-xl mb-2">
                                Phạm Thu Hường
                            </h3>
                            <p className="text-blue-100 text-sm">
                                Sinh viên Luật Thương Mại Quốc Tế
                            </p>
                            <p className="text-blue-100 text-sm">
                                Đại học Luật – ĐHQGHN
                            </p>
                        </div>

                        <div className="text-center">
                            <h4 className="font-bold text-lg mb-3">Triết lý</h4>
                            <p className="text-blue-100 italic text-sm leading-relaxed">
                                "Mở ra là hiểu"
                            </p>
                            <p className="text-blue-100 text-sm mt-2">
                                Portfolio có hệ thống, minh bạch và dễ kiểm tra
                            </p>
                        </div>

                        <div className="text-center md:text-right">
                            <h4 className="font-bold text-lg mb-3">
                                Liên kết nhanh
                            </h4>
                            <div className="space-y-2">
                                {navigation.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                setCurrentPage(item.id);
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: "smooth",
                                                });
                                            }}
                                            className="flex items-center justify-center md:justify-end space-x-2 text-blue-100 hover:text-white transition-colors mx-auto md:mx-0"
                                        >
                                            <Icon size={16} />
                                            <span className="text-sm">
                                                {item.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/20 pt-8 text-center">
                        <p className="text-blue-100 text-sm">
                            © 2026 • Phạm Thu Hường • Digital Portfolio
                        </p>
                        <p className="text-blue-200 text-xs mt-2">
                            Được xây dựng với React, Tailwind CSS và ❤️
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PortfolioV2;
