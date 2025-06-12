import React, { useState } from 'react';
import { Code, Database, Cloud, Sparkles, Zap, Star, CurlyBraces } from 'lucide-react';

const About = () => {
    const [activeStack, setActiveStack] = useState<number | null>(null);

    const stacks = [
        {
            title: 'Programming Languages',
            icon: Code,
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            skills: [
                'Java', 'Spring', 'Spring Boot', 'Groovy', 'Grails',
                'Node.js', 'Vue.js', 'Python', 'Express.js', 'JavaScript', 'jQuery',
                'TypeScript', 'Angular', 'React', 'HTML, Bootstrap, CSS, & Sass'
            ]
        },
        {
            title: 'DevOps',
            icon: Cloud,
            color: 'from-green-500 to-green-600',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
            skills: [
                'AWS Cloud', 'CI/CD (Github, Jenkins, Rio, Spinnaker)', 'Docker',
                'Kubernetes', 'SonarQube/SonarCloud', 'Grafana', 'Kibana', 'Zipkin'
            ]
        },
        {
            title: 'Database',
            icon: Database,
            color: 'from-emerald-500 to-emerald-600',
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-200',
            skills: [
                'Oracle', 'MySQL', 'PostgreSQL', 'PL/SQL',
                'NoSQL (MongoDB)', 'IBM Db2', 'Sybase'
            ]
        }
    ];

    return (
        <section id="about" className="py-20 bg-white relative overflow-hidden">
            {/* Professional Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center mb-6">
                        <Code className="w-8 h-8 text-blue-400 mr-3 animate-bounce" />
                        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                            About Me
                        </h2>
                        <Code className="w-8 h-8 text-green-400 ml-3 animate-bounce" style={{animationDelay: '0.5s'}} />
                    </div>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Content first (left) */}
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                                    Software Engineer/Designer
                                </span>
                            </h3>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Hello! I'm Bikash, an experienced full-stack software engineer with over 8 years
                                    of extensive expertise serving key roles on elite technical teams developing enterprise
                                    software for banking, healthcare, advertisement, and e-commerce.
                                </p>
                                <p>
                                    I enjoy creating things that live on the internet, whether that be websites, applications,
                                    or anything in between. My goal is to always build products that provide pixel-perfect,
                                    performant experiences with beautiful, modern designs.
                                </p>
                            </div>
                        </div>

                        {/* Tech Stacks */}
                        <div>
                            <h4 className="text-2xl font-semibold mb-8 text-slate-800 flex items-center">
                                <Sparkles className="w-6 h-6 mr-3 text-blue-600" />
                                Stacks:
                            </h4>

                            <div className="grid grid-cols-1 gap-6">
                                {stacks.map((stack, index) => {
                                    const Icon = stack.icon;
                                    const isActive = activeStack === index;

                                    return (
                                        <div
                                            key={index}
                                            className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl
                                                ${isActive ? `${stack.borderColor} shadow-xl` : 'border-slate-200 hover:border-blue-300'}`}
                                            onMouseEnter={() => setActiveStack(index)}
                                            onMouseLeave={() => setActiveStack(null)}
                                        >
                                            <div className={`relative p-8 bg-gradient-to-r ${stack.color} text-white overflow-hidden`}>
                                                <div className="absolute top-0 right-0 w-32 h-32 transform rotate-45 translate-x-16 -translate-y-16 bg-white opacity-10"></div>
                                                <div className="relative flex items-center space-x-4">
                                                    <div className="p-3 bg-white bg-opacity-20 rounded-xl">
                                                        <Icon className="w-8 h-8" />
                                                    </div>
                                                    <h5 className="text-2xl font-bold">{stack.title}</h5>
                                                </div>
                                            </div>

                                            {isActive && (
                                                <div className={`p-8 ${stack.bgColor} border-t-2 ${stack.borderColor}`}>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {stack.skills.map((skill, skillIndex) => (
                                                            <div
                                                                key={skillIndex}
                                                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-colors duration-200"
                                                            >
                                                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${stack.color}`}></div>
                                                                <span className="text-slate-700 font-medium">{skill}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Profile Image on right */}
                    <div className="space-y-6 flex justify-center px-6 relative">
                        <div className="relative w-full max-w-lg">
                            {/* <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-green-200 rounded-3xl blur opacity-30"></div> */}
                            {/* <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-green-500 p-2 shadow-2xl"> */}
                                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                                    <div className="text-center">
                                        <img
                                            src="/img.png"
                                            alt="Bikash Mainali"
                                            className="w-96 h-96 object-cover object-center rounded-full border"
                                        />
                        
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Stats Section */}
                <div className="mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { number: '7', label: 'Projects Accomplished', icon: Code },
                            { number: '8+', label: 'Years Experience', icon: Zap },
                            { number: '1', label: 'Project in Progress', icon: Sparkles }
                        ].map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="group relative">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-green-200 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                    <div className="relative bg-white rounded-2xl p-8 text-center border border-slate-200 group-hover:border-blue-300 transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl">
                                        <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                                        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-3">
                                            {stat.number}
                                        </div>
                                        <div className="text-slate-600 font-medium">{stat.label}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
