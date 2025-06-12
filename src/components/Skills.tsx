import React, { useEffect, useState, useRef } from 'react';
import { Code, Zap, Star } from 'lucide-react';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'JAVA', level: 85, color: 'from-emerald-500 via-blue-500 to-purple-500' },
    { name: 'Groovy', level: 60, color: 'from-blue-500 via-green-500 to-teal-500' },
    { name: 'JavaScript', level: 75, color: 'from-green-400 via-emerald-500 to-blue-500' },
    { name: 'TypeScript', level: 80, color: 'from-blue-600 via-indigo-600 to-purple-600' },
    { name: 'Angular', level: 90, color: 'from-purple-500 via-blue-500 to-green-500' },
    { name: 'React', level: 75, color: 'from-cyan-400 via-blue-500 to-emerald-500' },
    { name: 'PL/SQL', level: 70, color: 'from-indigo-500 via-purple-500 to-blue-500' },
    { name: 'AWS', level: 40, color: 'from-green-400 via-teal-500 to-blue-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setAnimatedSkills(new Set(skills.map(skill => skill.name)));
            }, 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 relative overflow-hidden" ref={sectionRef}>
      {/* Professional Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {i % 3 === 0 ? <Code className="w-6 h-6 text-blue-600" /> :
              i % 3 === 1 ? <Zap className="w-5 h-5 text-green-600" /> :
                <Star className="w-4 h-4 text-emerald-600" />}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Code className="w-8 h-8 text-blue-400 mr-3 animate-bounce" />

            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-emerald-600">
              Skills
            </h2>
            <Code className="w-8 h-8 text-green-400 ml-3 animate-bounce" style={{ animationDelay: '0.5s' }} />

          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-green-500 to-emerald-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto font-light">
            A comprehensive overview of the technical skills I’ve developed over the years.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group space-y-4 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-slate-800 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-blue-600" />
                    {skill.name}
                  </span>
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                    {skill.level}%
                  </span>
                </div>

                <div className="relative">
                  {/* Background Track */}
                  <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                    {/* Progress Bar */}
                    <div
                      className={`relative h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-md`}
                      style={{
                        width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 150}ms`
                      }}
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    </div>
                  </div>

                  {/* Skill Level Indicator */}
                  <div
                    className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-blue-500 transition-all duration-1000 ease-out shadow-md"
                    style={{
                      left: animatedSkills.has(skill.name) ? `calc(${skill.level}% - 6px)` : '-6px',
                      transitionDelay: `${index * 150}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
