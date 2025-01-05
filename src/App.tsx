import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './App.css';
import serverdesign from './assets/serverdesign.svg';
import projdemon from './assets/projdemo.mp4';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    };

    const projects = [
        {
            id: 1,
            type: 'video',
            src: projdemon,
            title: 'Offline Server Project',
            description: 'This project is a demonstration of how we developed a scalable offline server for rural schools in Latin America. It includes features like offline Moodle integration, content sneakernet uploads, and efficient low-power usage.'
        },
        {
            id: 2,
            type: 'image',
            src: serverdesign,
            title: 'Server Design',
            description: 'Detailed server architecture and design documentation for the offline server project.'
        },
        {
            id: 3,
            type: 'image',
            src: serverdesign,
            title: 'Project 3',
            description: 'Project 3 description goes here.'
        },
        {
            id: 4,
            type: 'image',
            src: serverdesign,
            title: 'Project 4',
            description: 'Project 4 description goes here.'
        }
    ];

    return (
        <div className="w-screen">
            {/* Navigation */}
            <div id="main" className="relative w-screen min-h-screen">
                <div className="">
                    <article id="lights">
                        <section id="one">
                            <section id="two">
                                <section id="three">
                                    <section id="four">
                                        <section id="five">
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </article>
                </div>
                {/* Navigation */}
                <div className="relative z-10">
                    <nav className="sticky top-0 z-50 backdrop-blur-sm">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center justify-between h-16 px-3">
                                <h1 className="text-2xl font-bold">AP</h1>

                                <div className="flex items-center space-x-8">
                                    <a href="https://github.com/anandpagnis" className="">
                                        Github
                                    </a>
                                    <a href="#projects" className="">
                                        Projects
                                    </a>
                                    <a href="https://www.linkedin.com/in/anand-pagnis-96927a24a" className="">
                                        Linkedin
                                    </a>
                                    <a href="#resume" className="">
                                        Resume
                                    </a>
                                    <div className="theme-switch-wrapper">
                                        <Sun className="theme-icon h-4 w-4"/>
                                        <label className="theme-switch">
                                            <input
                                                type="checkbox"
                                                checked={isDarkMode}
                                                onChange={toggleTheme}
                                            />
                                            <span className="slider"></span>
                                        </label>
                                        <Moon className="theme-icon h-4 w-4"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* About Section */}
                    <section id="about" className="mt-24">
                        <div className="text-left mx-40">
                            <h1 className="text-5xl font-bold">Anand Pagnis</h1>
                            <br/>
                            <div className="grid grid-rows-4 grid-flow-col">
                                <div>
                                    I am a Junior at Worcester Polytechnic Institute, pursuing a bachelor's degree in
                                    Computer Science.
                                </div>
                                <div>
                                    With a minor in Fintech, I have a strong interest in finance and high-frequency
                                    trading (HFT).
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen mt-24">
                {/* Projects Header */}
                <div className="w-screen">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1 className="text-5xl font-bold text-center text-white">PROJECTS</h1>
                    <br/>
                    <br/>
                </div>

                {/* Scrollable Projects Container */}
                <div className="w-screen flex overflow-x-scroll snap-x snap-mandatory gap-0 px-4 no-scrollbar">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="flex-shrink-0 w-screen px-11 flex items-center snap-center flex-row"
                        >
                            {/* Left Box: Project Content */}
                            <div className="w-full max-w-3xl rounded-lg p-8">
                                <h2 className="text-4xl font-bold mb-6">{project.title}</h2>
                                {project.type === 'video' ? (
                                    <video
                                        className="w-full rounded-lg"
                                        src={project.src}
                                        controls
                                        loop
                                        autoPlay
                                        muted
                                    ></video>
                                ) : (
                                    <img
                                        src={project.src}
                                        alt={project.title}
                                        className="w-full rounded-lg"
                                    />
                                )}
                            </div>

                            {/* Right Box: Text (Right Aligned, Fixed Height) */}
                            <div
                                className="w-1/3 h-80 rounded-lg pt-36 pl-36 flex justify-center items-center ">
                                <p className="text-lg mb-6">{project.description}</p>
                            </div>
                            {project.id !== 4 && (
                                <div className="px-10 mt-32 scroll-indicator">
                                    <KeyboardDoubleArrowRightIcon fontSize="large" />
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </section>
        </div>
    );
};

export default App;
