import React from "react";
import { X, Download } from "lucide-react";

const PdfView = ({ pdfFile, setPdfFile, showPdfViewer, setShowPdfViewer }) => {
    return (
        showPdfViewer &&
        pdfFile && (
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in">
                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-2xl">
                        <h3 className="text-xl font-bold">Xem tài liệu PDF</h3>
                        <button
                            onClick={() => {
                                setShowPdfViewer(false);
                                setPdfFile(null);
                            }}
                            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* PDF Content */}
                    <div className="flex-1 overflow-hidden">
                        <iframe
                            src={pdfFile}
                            className="w-full h-full"
                            title="PDF Viewer"
                        />
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t bg-gray-50 rounded-b-2xl flex justify-center space-x-4">
                        <button
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = pdfFile;
                                link.download = "document.pdf";
                                link.click();
                            }}
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                        >
                            <Download size={20} />
                            <span>Tải xuống</span>
                        </button>
                        <button
                            onClick={() => {
                                setShowPdfViewer(false);
                                setPdfFile(null);
                            }}
                            className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
                        >
                            <X size={20} />
                            <span>Đóng</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default PdfView;
