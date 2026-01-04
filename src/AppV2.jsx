import React, { useState, useEffect } from "react";
import { User, Briefcase, Target } from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import ConclusionPage from "./components/ConclusionPage";

const PortfolioV2 = () => {
    const [currentPage, setCurrentPage] = useState("about");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            {/* Header */}
            <Header
                scrolled={scrolled}
                navigation={navigation}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />

            {/* Body */}
            <main className="pt-20 sm:pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* About Page */}
                    {currentPage === "about" && <AboutPage />}

                    {/* Projects Page */}
                    {currentPage === "projects" && (
                        <ProjectsPage
                            selectedProject={selectedProject}
                            setSelectedProject={setSelectedProject}
                        />
                    )}

                    {/* Conclusion Page */}
                    {currentPage === "conclusion" && (
                        <ConclusionPage
                            navigation={navigation}
                            setCurrentPage={setCurrentPage}
                        />
                    )}
                </div>
            </main>

            {/* Footer */}
            <Footer navigation={navigation} setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default PortfolioV2;
