import React from "react";
import {
    ChevronRight,
    FileText,
    Database,
    Lightbulb,
    Users,
    Palette,
    Shield,
    BookOpen,
} from "lucide-react";
import Workfile from "./workfile";
import Chapter4 from "./chapter4";

const ProjectsPage = ({ selectedProject, setSelectedProject }) => {
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

    return (
        <div className="animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Projects
                </h1>
                <p className="text-lg text-gray-600 mb-2">
                    Nội dung 6 bài được đưa vào đầy đủ
                </p>
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
                            onClick={() => setSelectedProject(project)}
                            className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${selectedProject?.id === project.id
                                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                                    : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-medium">
                                    {project.chapter}: {project.title}
                                </span>
                                <ChevronRight
                                    size={20}
                                    className={
                                        selectedProject?.id === project.id
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
                        Sử dụng menu "Chọn bài" ở trên để xem nội dung đầy đủ
                        từng bài tập
                    </p>
                </div>
            ) : selectedProject.id === 4 ? (
                <Chapter4
                    selectedProject={selectedProject}
                    setSelectedProject={setSelectedProject}
                />
            ) : (
                <Workfile selectedProject={selectedProject} />
            )}
        </div>
    );
};

export default ProjectsPage;
