import React, { useState } from 'react';
import { ExternalLink, Eye, Sparkles, Code, Globe } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Creative Brows',
      category: 'web',
      image: '/placeholder.svg',
      link: 'https://creativebrows.com/',
      description: 'A modern web application for beauty services with elegant design and seamless user experience',
      tech: ['HTML', 'CSS', 'BootStrap', 'JavaScript', 'JQuery']
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      category: 'web',
      image: '/placeholder.svg',
      link: 'http://bikashmainali.com.np/',
      description: 'Personal portfolio website showcasing professional experience and projects',
      tech: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 4,
      title: 'Music App',
      category: 'app',
      image: '/placeholder.svg',
      link: 'https://github.com/Bikash-Mainali/Music-APP-Express-JavaScript',
      description: 'Express.js music streaming application with modern features and clean interface',
      tech: ['Express.js', 'Node.js', 'JavaScript']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filterOptions = [
    { value: 'all', label: 'All Projects', icon: Sparkles },
    { value: 'app', label: 'Applications', icon: Code },
    { value: 'web', label: 'Websites', icon: Globe }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Code className="w-8 h-8 text-blue-400 mr-3 animate-bounce" />
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
              Portfolio
            </h2>
            <Code className="w-8 h-8 text-green-400 ml-3 animate-bounce" style={{animationDelay: '0.5s'}} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light">
            Discover the projects that showcase my passion for creating beautiful, functional applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-16">
          <div className="flex space-x-2 bg-slate-800 rounded-2xl p-2 border border-slate-700">
            {filterOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.value}
                  onClick={() => setFilter(option.value)}
                  className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    filter === option.value
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white shadow-lg transform scale-105'
                      : 'text-blue-200 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative"
              style={{animationDelay: `${index * 200}ms`}}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="relative bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 group-hover:border-purple-500 transition-all duration-500 transform group-hover:scale-105">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-all duration-200 transform hover:scale-110"
                    >
                      <Eye className="w-5 h-5" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center text-white transition-all duration-200 transform hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
                      project.category === 'app' 
                        ? 'bg-blue-600 text-white'
                        : 'bg-green-600 text-white'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-blue-200 text-sm mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-blue-300 rounded-full text-xs font-medium border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
