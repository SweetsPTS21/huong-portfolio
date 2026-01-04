import React from "react";
import { Menu, X } from "lucide-react";
import avatar from "../assets/avatar.jpg";

const Header = ({
    scrolled,
    navigation,
    currentPage,
    setCurrentPage,
    isMenuOpen,
    setIsMenuOpen,
}) => {
    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
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
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === item.id
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
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${currentPage === item.id
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
    );
};

export default Header;
