import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './App.css';
import projdemon from './assets/projdemo.mp4';
import portvis from './assets/portvis.svg';
import fullstackapp from './assets/fullstackapp.png';
import softengvisual from './assets/softengvisual.png';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Check local storage for theme preference
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            document.body.classList.add(storedTheme);
            setIsDarkMode(storedTheme === 'dark');
        } else {
            // Default to dark mode
            document.body.classList.add('dark');
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const projects = [
        {
            id: 1,
            type: 'video',
            src: projdemon,
            title: 'Developing a Scalable Offline Server for Rural Schools in Panama',
            description: 'Collaborated with Fundesteam to develop a server which fit the constraints(low power, low cost, user friendly, offline, portable) of rural areas in latin America. Conducted Interviews and focus groups to gather data for the constraints.\nReduced video loading times by 85% (From 7 minutes to 55 seconds) and increased server capacity, supporting multiple users without latency.\nImplemented a plug-and-play system for seamless course uploads.\nAuthored a handbook for easy replicability of the server which serves as a proof of concept for further expansion of this project in panama in association with MEDUCA. Nominated for IQP Presendential Award'
        },
        {
            id: 2,
            type: 'image',
            src: fullstackapp,
            title: 'Full Stack Social Network',
            description: 'Built a CRUD application for a blog format social network.\nUtilized typescript for the frontend and MySQL for the backend database to store user uploaded posts.\nIntegrated Axios for seamless communication between the client and server, enabling real-time data updates.\nDeveloped RESTful APIs using Express.js to handle user posts, comments, and interactions efficiently.\nImplemented CORS to ensure secure and consistent data access across different web pages.\nEnsured secure user authentication and simplified account management through Auth0 integration'
        },
        {
            id: 3,
            type: 'image',
            src: portvis,
            title: 'Automated Trading Bot with a GUI',
            description: 'Built a fully functional automatic trading bot using python. Utilized pyautogui to automate trade execution and Pandas for data analysis. Additionally incorporated streamlit to visualize said analysis and trade execution'
        },
        {
            id: 4,
            type: 'image',
            src: softengvisual,
            title: 'Hospital Application - CS3733(Software Engineering)',
            description: 'Built an app to help users navigate the hospital, request services, and allow admins to manage schedules and analyze service data.\nRole: Project Manager/Frontend Engineer, used Agile methodologies with tools like Jira, UML, and ERD diagrams.\nTechnologies used:  AWS EC2, React, TypeScript, Docker, Postgres and Prisma ORM.'
        }
    ];

    const ProjectDescription = ({ description }: { description: string }) => {
        const bulletPoints = description
            .split('\n')
            .filter(line => line.trim() !== '');


        return (
            <div className="max-h-[32rem] overflow-y-auto pr-4">
                <ul className="space-y-4">
                    {bulletPoints.map((point, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-3 text-lg leading-relaxed"
                        >
                        <span
                            className={`flex-shrink-0 w-2 h-2 mt-2.5 rounded-full ${
                                isDarkMode
                                    ? 'gradient-bullet-dark'
                                    : 'gradient-bullet-light'
                            }`}
                        />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };


    return (
        <div className="w-screen">
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
                <div className="relative z-10">
                    <nav className="sticky top-0 z-50 backdrop-blur-sm">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center justify-between h-16 px-3">
                                <h1 className="text-2xl font-bold">AP</h1>
                                <div className="flex items-center space-x-8">
                                    <a href="https://github.com/anandpagnis" className="">Github</a>
                                    <a href="#projects" className="">Projects</a>
                                    <a href="https://www.linkedin.com/in/anand-pagnis-96927a24a" className="">Linkedin</a>
                                    <a href="#resume" className="">Resume</a>
                                    <div className="theme-switch-wrapper">
                                        <Sun className="theme-icon h-4 w-4"/>
                                        <label className="theme-switch">
                                            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme}/>
                                            <span className="slider"></span>
                                        </label>
                                        <Moon className="theme-icon h-4 w-4"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <section id="about" className="mt-24">
                        <div className="text-left mx-40">
                            <h1 className="text-5xl font-bold">Anand Pagnis</h1>
                            <br/>
                            <div className="grid grid-rows-4 grid-flow-col">
                                <div>I am a Junior at Worcester Polytechnic Institute, pursuing a bachelor's degree in Computer Science.</div>
                                <div>With a minor in Fintech, I have a strong interest in finance and high-frequency trading (HFT).</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <section id="projects" className="min-h-screen mt-24">
                <div className="w-screen">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1 className="text-5xl font-bold text-center ">PROJECTS</h1>
                    <br/>
                    <br/>
                </div>
                <div className="w-screen flex overflow-x-scroll snap-x snap-mandatory gap-0 no-scrollbar">
                    {projects.map((project) => (
                        <div key={project.id} className="flex-shrink-0 w-screen flex items-center snap-center flex-row">
                            <div className="w-full max-w-3xl rounded-lg p-8">
                                <h2 className="text-4xl font-bold mb-6">{project.title}</h2>
                                {project.type === 'video' ? (
                                    <video className="w-full rounded-lg shadow-lg" src={project.src} controls loop autoPlay muted></video>
                                ) : (
                                    <img src={project.src} alt={project.title} className="w-full rounded-lg shadow-lg"/>
                                )}
                            </div>
                            <div className="w-1/3 rounded-lg p-6 bg-opacity-10 backdrop-blur-sm ">
                                <ProjectDescription description={project.description} />
                            </div>
                            {project.id !== 4 && (
                                <div className="px-10  scroll-indicator">
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
