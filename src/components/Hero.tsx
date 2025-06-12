import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight, Code, Zap, Star } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Software Engineer',
    'Web Developer',
    'Website Designer',
    'PL/SQL Developer',
    'Full Stack Engineer',
    'Sailpoint Supporter',
  ];

  useEffect(() => {
    const type = () => {
      const current = texts[currentIndex];
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-green-50"
    >
      {/* Fancy Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Blurry Color Blobs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-5"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {i % 3 === 0 ? <Code className="w-6 h-6 text-blue-600" /> :
               i % 3 === 1 ? <Zap className="w-5 h-5 text-green-600" /> :
               <Star className="w-4 h-4 text-emerald-600" />}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center px-6 relative">
          <div className="relative transform perspective-1000">
            {/* <div className="absolute top-4 left-4 w-96 h-96 rounded-full bg-gray-200 shadow-inner blur-sm -z-10"></div> */}
            {/* <div className="rounded-full shadow-xl transition-transform duration-500 hover:rotate-x-3 hover:rotate-y-3 hover:scale-105 bg-[linear-gradient(90deg,rgba(151,183,207,1)_34%,rgba(100,174,128,1)_100%)]"> */}
              <img
                src="/img.png"
                alt="Bikash Mainali"
                className="w-96 h-96 object-cover object-center rounded-full border"
              />
            {/* </div> */}
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Hey, I'm Bikash.
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-slate-700">
            I'm a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 font-semibold">
              {currentText}
            </span>
            <span className="animate-pulse text-blue-500">|</span>
          </h2>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
          Experienced Full Stack Software Engineer with over 8 years of expertise in Java, JavaScript, TypeScript and enterprise application development across banking, healthcare, advertisement, and e-commerce domains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button
              onClick={scrollToAbout}
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center">
                Discover My Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <a
              href="/resume.pdf"
              className="px-8 py-3 border-2 border-blue-500 text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        aria-label="scroll-btn"
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center shadow-lg">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </button>

      {/* Floating Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
