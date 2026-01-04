import React from "react";
import {
    ArrowRight,
    CheckCircle,
    TrendingUp,
    AlertCircle,
    Lightbulb,
    Star,
} from "lucide-react";

const Chapter4 = ({ selectedProject, setSelectedProject }) => {
    const collaborationTools = [
        {
            name: "Trello",
            role: "Quản lý nhiệm vụ",
            implementation:
                "Lập bảng theo dõi tiến độ với ba trạng thái: việc cần làm, việc đang thực hiện và việc đã hoàn thành. Các đầu việc được chia nhỏ và gán người phụ trách, thời hạn cũng như danh sách kiểm tra",
            benefits: [
                "Tiến độ dự án được kiểm soát rõ ràng",
                "Hạn chế trùng lặp công việc",
                "Tăng ý thức trách nhiệm cá nhân",
                "Dễ nhận biết các nhiệm vụ bị chậm tiến độ",
            ],
            challenges:
                "Một số thành viên ban đầu chưa quen thao tác trên Trello",
            solution:
                "Nhóm khắc phục bằng cách hướng dẫn nhanh qua cuộc gọi nhóm và chia sẻ video minh họa cách sử dụng",
            rating: "Hiệu quả cao",
            color: "from-blue-500 to-cyan-500",
        },
        {
            name: "Google Docs",
            role: "Soạn thảo cộng tác",
            implementation:
                "Dùng làm nơi soạn thảo nội dung chung. Tài liệu được chia rõ thành các phần: mở đầu, thực trạng, nguyên nhân và giải pháp. Các thành viên chỉnh sửa trực tiếp, để lại bình luận và đính kèm tài liệu tham khảo",
            benefits: [
                "Cho phép làm việc đồng thời theo thời gian thực",
                "Không cần gửi file qua lại nhiều lần",
                "Lịch sử chỉnh sửa giúp kiểm soát đóng góp của từng người",
                "Trao đổi nhanh thông qua bình luận",
            ],
            challenges:
                "Xung đột chỉnh sửa đôi lúc xảy ra khi nhiều người sửa cùng một đoạn",
            solution:
                "Nhóm thống nhất phân rõ mỗi người phụ trách một phần nội dung để hạn chế chồng chéo",
            rating: "Rất hiệu quả",
            color: "from-green-500 to-emerald-500",
        },
        {
            name: "Slack",
            role: "Giao tiếp nhóm",
            implementation:
                "Dùng làm kênh trao đổi chính với các phòng chat theo mục đích: thông báo chung, chia sẻ tài liệu nghiên cứu, thảo luận thiết kế slide và nhắn tin riêng. Nhóm cũng sử dụng tính năng gọi video để họp tổng kết",
            benefits: [
                "Thông tin không bị trôi, dễ tra cứu lại",
                "Phân luồng thảo luận rõ ràng",
                "Họp trực tuyến ổn định, thuận tiện",
            ],
            challenges:
                "Một số thành viên chưa có thói quen kiểm tra Slack thường xuyên",
            solution:
                "Nhóm thống nhất bật thông báo và quy định khung giờ check-in cố định mỗi ngày",
            rating: "Hiệu quả tốt",
            color: "from-purple-500 to-pink-500",
        },
    ];

    return (
        <div className="animate-fade-in">
            <button
                onClick={() => setSelectedProject(null)}
                className="mb-6 flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
                <ArrowRight size={20} className="rotate-180" />
                <span>Quay lại danh sách dự án</span>
            </button>

            <div
                className={`bg-gradient-to-r ${selectedProject.detailColor} rounded-2xl p-8 mb-8 shadow-xl border border-purple-200`}
            >
                <div className="flex items-center space-x-4 mb-6">
                    {React.createElement(selectedProject.icon, {
                        size: 48,
                        className: "text-purple-600",
                    })}
                    <div>
                        <p className="text-sm font-semibold text-purple-600">
                            {selectedProject.chapter}
                        </p>
                        <h1 className="text-3xl font-bold text-gray-800">
                            {selectedProject.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Detailed Report for Chapter 4 */}
            <div className="space-y-8">
                {/* Overview */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
                    <h2 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                        <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full"></span>
                        <span>1. Tổng quan</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Trong môi trường học tập hiện đại, các công cụ hợp tác
                        trực tuyến ngày càng trở thành yếu tố không thể thiếu
                        khi triển khai bài tập nhóm. Báo cáo này trình bày trải
                        nghiệm thực tế của nhóm tôi trong việc ứng dụng ba công
                        cụ phổ biến gồm{" "}
                        <span className="font-semibold text-blue-600">
                            Trello, Google Docs và Slack
                        </span>{" "}
                        để thực hiện một dự án nhóm kéo dài một tuần. Nội dung
                        tập trung phân tích cách phối hợp công việc, hiệu quả
                        mang lại, những khó khăn phát sinh và biện pháp xử lý.
                    </p>
                </div>

                {/* Project Info */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
                    <h2 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                        <span className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></span>
                        <span>2. Thông tin dự án và cách phối hợp</span>
                    </h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Nhóm gồm{" "}
                            <span className="font-semibold text-green-600">
                                4 thành viên
                            </span>
                            , thống nhất thực hiện bài thuyết trình với chủ đề{" "}
                            <span className="font-semibold">
                                "Bảo vệ môi trường"
                            </span>
                            .
                        </p>
                        <p>
                            Toàn bộ dự án được chia thành các mảng công việc
                            chính: phân công nhiệm vụ, xây dựng nội dung, trao
                            đổi ý tưởng và chia sẻ tài nguyên. Ngay từ đầu, nhóm
                            thiết lập không gian làm việc chung để đảm bảo tất
                            cả thành viên đều theo dõi được tiến độ và trách
                            nhiệm của mình.
                        </p>
                    </div>
                </div>

                {/* Tools Details */}
                {collaborationTools.map((tool, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100"
                    >
                        <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                            <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></span>
                            <span>
                                {idx + 3}. Công cụ {tool.role} – {tool.name}
                            </span>
                        </h2>

                        <div className="space-y-6">
                            {/* Implementation */}
                            <div>
                                <h3 className="font-bold text-purple-700 mb-3 flex items-center space-x-2">
                                    <CheckCircle size={20} />
                                    <span>Cách triển khai</span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                                    {tool.implementation}
                                </p>
                            </div>

                            {/* Benefits */}
                            <div>
                                <h3 className="font-bold text-green-700 mb-3 flex items-center space-x-2">
                                    <TrendingUp size={20} />
                                    <span>Hiệu quả</span>
                                </h3>
                                <ul className="space-y-2">
                                    {tool.benefits.map((benefit, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start space-x-2 text-gray-700"
                                        >
                                            <CheckCircle
                                                size={18}
                                                className="text-green-500 mt-0.5 flex-shrink-0"
                                            />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Challenges & Solutions */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-red-50 p-5 rounded-xl border border-red-100">
                                    <h3 className="font-bold text-red-700 mb-3 flex items-center space-x-2">
                                        <AlertCircle size={20} />
                                        <span>Khó khăn</span>
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        {tool.challenges}
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                                    <h3 className="font-bold text-blue-700 mb-3 flex items-center space-x-2">
                                        <Lightbulb size={20} />
                                        <span>Giải pháp</span>
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        {tool.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div
                                className={`bg-gradient-to-r ${tool.color} text-white p-4 rounded-xl font-semibold text-center`}
                            >
                                Đánh giá: {tool.rating}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Summary Table */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100 overflow-x-auto">
                    <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                        <span className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-blue-600 rounded-full"></span>
                        <span>Bảng tổng hợp đánh giá công cụ</span>
                    </h2>
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gradient-to-r from-indigo-100 to-blue-100">
                                <th className="px-6 py-4 text-left font-bold text-indigo-700">
                                    Công cụ
                                </th>
                                <th className="px-6 py-4 text-left font-bold text-indigo-700">
                                    Điểm mạnh
                                </th>
                                <th className="px-6 py-4 text-left font-bold text-indigo-700">
                                    Hạn chế
                                </th>
                                <th className="px-6 py-4 text-left font-bold text-indigo-700">
                                    Nhận xét chung
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b hover:bg-blue-50 transition-colors">
                                <td className="px-6 py-4 font-semibold text-gray-800">
                                    Trello
                                </td>
                                <td className="px-6 py-4 text-gray-700 text-sm">
                                    Quản lý nhiệm vụ trực quan, dễ theo dõi tiến
                                    độ
                                </td>
                                <td className="px-6 py-4 text-gray-700 text-sm">
                                    Cần thời gian làm quen
                                </td>
                                <td className="px-6 py-4 font-semibold text-green-600">
                                    Hiệu quả cao
                                </td>
                            </tr>
                            <tr className="border-b hover:bg-green-50 transition-colors">
                                <td className="px-6 py-4 font-semibold text-gray-800">
                                    Google Docs
                                </td>
                                <td className="px-6 py-4 text-gray-700 text-sm">
                                    Cộng tác thời gian thực, lưu phiên bản tự
                                    động
                                </td>
                                <td className="px-6 py-4 text-gray-700 text-sm">
                                    Có thể xung đột chỉnh sửa
                                </td>
                                <td className="px-6 py-4 font-semibold text-green-600">
                                    Rất hiệu quả
                                </td>
                            </tr>
                            <tr className="hover:bg-purple-50 transition-colors">
                                <td className="px-6 py-4 font-semibold text-gray-800">
                                    Slack
                                </td>
                                <td className="px-6 py-4 text-gray-700 text-sm">
                                    Giao tiếp mạch lạc, phân kênh rõ
                                </td>
                                <td className="px-6 py-4 text-gray-700 text-sm">
                                    Phụ thuộc vào kỷ luật người dùng
                                </td>
                                <td className="px-6 py-4 font-semibold text-green-600">
                                    Hiệu quả tốt
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Overall Assessment */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
                    <h2 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                        <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></span>
                        <span>6. Đánh giá tổng thể</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Việc kết hợp Trello, Google Docs và Slack giúp nhóm làm
                        việc có hệ thống, giảm đáng kể thời gian trao đổi không
                        cần thiết và nâng cao hiệu quả phối hợp. Mỗi công cụ đảm
                        nhận một vai trò riêng nhưng bổ trợ tốt cho nhau trong
                        toàn bộ quá trình thực hiện dự án.
                    </p>
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                        <Star size={28} />
                        <span>7. Kết luận</span>
                    </h2>
                    <p className="leading-relaxed">
                        Qua dự án ngắn hạn này, tôi nhận thấy việc lựa chọn đúng
                        công cụ và thống nhất cách sử dụng ngay từ đầu có ảnh
                        hưởng lớn đến hiệu quả làm việc nhóm. Các công cụ hợp
                        tác trực tuyến không chỉ hỗ trợ quản lý công việc mà còn
                        góp phần hình thành phong cách làm việc khoa học, minh
                        bạch. Những kinh nghiệm rút ra từ dự án sẽ tiếp tục được
                        tôi áp dụng trong các môn học và hoạt động nhóm sau này.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Chapter4;
