import React, { useEffect, useState } from "react";
import { FileText, Upload, Eye, Download, CheckCircle } from "lucide-react";
import PdfView from "./pdfView";
import project1 from "../assets/chuong1.pdf";
import project2 from "../assets/chuong2.pdf";
import project3 from "../assets/chuong3.pdf";
import project4 from "../assets/chuong4.pdf";
import project5 from "../assets/chuong5.pdf";
import project6 from "../assets/chuong6.pdf";

const Workfile = ({ selectedProject }) => {
    const [uploadedFiles, setUploadedFiles] = useState({});
    const [pdfFile, setPdfFile] = useState(null);
    const [showPdfViewer, setShowPdfViewer] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const pdfFiles = [
        {
            id: 1,
            projectId: "project1",
            name: "Minh chứng dự án 1.pdf",
            file: project1,
        },
        {
            id: 2,
            projectId: "project2",
            name: "Minh chứng dự án 2.pdf",
            file: project2,
        },
        {
            id: 3,
            projectId: "project3",
            name: "Minh chứng dự án 3.pdf",
            file: project3,
        },
        {
            id: 4,
            projectId: "project4",
            name: "Minh chứng dự án 4.pdf",
            file: project4,
        },
        {
            id: 5,
            projectId: "project5",
            name: "Minh chứng dự án 5.pdf",
            file: project5,
        },
        {
            id: 6,
            projectId: "project6",
            name: "Minh chứng dự án 6.pdf",
            file: project6,
        },
    ];

    useEffect(() => {
        const fileData = pdfFiles.find((pdf) => pdf.id === selectedProject.id);
        if (fileData) {
            setUploadedFiles((prev) => ({
                ...prev,
                [selectedProject.fileKey]: {
                    file: fileData.file,
                    url: fileData.file,
                    name: fileData.name,
                },
            }));
        }
    }, [selectedProject]);

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
        <div className="animate-fade-in">
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
                <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedProject.description}
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="text-center py-12">
                    <FileText
                        size={64}
                        className="mx-auto mb-4 text-gray-400"
                    />
                    <h3 className="text-xl font-bold text-gray-700 mb-2">
                        Nội dung bài tập
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Bài tập này bao gồm các minh chứng và tài liệu đính kèm
                        đầy đủ
                    </p>

                    {/* File Upload and Actions */}
                    <div className="max-w-xl mx-auto">
                        {!uploadedFiles[selectedProject.fileKey] ? (
                            <div className="border-2 border-dashed border-purple-300 rounded-xl p-8 bg-purple-50">
                                <Upload
                                    size={48}
                                    className="mx-auto mb-4 text-purple-600"
                                />
                                <h4 className="font-bold text-gray-800 mb-2">
                                    Tải lên file PDF minh chứng
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    Chọn file PDF để đính kèm vào bài tập này
                                </p>
                                <label className="cursor-pointer inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                                    <Upload size={20} />
                                    <span>Chọn file PDF</span>
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={(e) =>
                                            handleFileUpload(
                                                selectedProject.fileKey,
                                                e
                                            )
                                        }
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        ) : (
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                                <div className="flex items-center justify-center space-x-3 mb-4">
                                    <CheckCircle
                                        size={32}
                                        className="text-green-600"
                                    />
                                    <div className="text-left">
                                        <p className="font-bold text-gray-800">
                                            File đã tải lên
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {
                                                uploadedFiles[
                                                    selectedProject.fileKey
                                                ].name
                                            }
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap justify-center gap-3">
                                    <button
                                        onClick={() =>
                                            handleViewPdf(
                                                selectedProject.fileKey
                                            )
                                        }
                                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                                    >
                                        <Eye size={20} />
                                        <span>Xem PDF</span>
                                    </button>

                                    <button
                                        onClick={() =>
                                            handleDownload(
                                                selectedProject.fileKey
                                            )
                                        }
                                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                                    >
                                        <Download size={20} />
                                        <span>Tải xuống</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <PdfView
                pdfFile={pdfFile}
                setPdfFile={setPdfFile}
                showPdfViewer={showPdfViewer}
                setShowPdfViewer={setShowPdfViewer}
            />
        </div>
    );
};

export default Workfile;
