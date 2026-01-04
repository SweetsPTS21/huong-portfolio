import React from "react";

const Footer = ({ navigation, setCurrentPage }) => {
    return (
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
                </div>
            </div>
        </footer>
    );
};

export default Footer;
