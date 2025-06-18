import React, { useEffect, useRef } from 'react';
import { Play, MessageCircle, Crown, TrendingUp, BarChart3 } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-primary-light rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-primary rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 border-2 border-primary-light rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Football Field Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-full h-1 bg-primary"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-primary-light"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-1 bg-primary"></div>
        <div className="absolute top-1/4 left-1/4 w-1 h-1/2 bg-primary"></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1/2 bg-primary"></div>
      </div>

      {/* Football/Trading Elements */}
      <div className="absolute inset-0 opacity-8">
        {/* Football Icons */}
        <div className="absolute top-32 left-1/4 transform -rotate-12 animate-bounce">
          <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl">⚽</span>
          </div>
        </div>
        
        <div className="absolute top-1/3 right-1/5 transform rotate-12 animate-pulse">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
            <span className="text-white text-lg">⚽</span>
          </div>
        </div>

        <div className="absolute bottom-1/3 left-1/5 transform -rotate-6 animate-bounce delay-1000">
          <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">⚽</span>
          </div>
        </div>

        {/* Stadium Elements */}
        <div className="absolute top-1/4 left-1/6 opacity-30">
          <div className="w-8 h-16 bg-gradient-to-t from-primary/40 to-transparent rounded-t-lg"></div>
        </div>
        <div className="absolute top-1/4 left-1/5 opacity-30">
          <div className="w-6 h-20 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg"></div>
        </div>
        <div className="absolute top-1/4 left-1/4 opacity-30">
          <div className="w-10 h-14 bg-gradient-to-t from-primary/50 to-transparent rounded-t-lg"></div>
        </div>

        {/* Goal Posts */}
        <div className="absolute bottom-1/4 right-1/6 opacity-20">
          <div className="relative">
            <div className="w-16 h-2 bg-primary rounded"></div>
            <div className="absolute left-0 top-0 w-2 h-12 bg-primary rounded"></div>
            <div className="absolute right-0 top-0 w-2 h-12 bg-primary rounded"></div>
          </div>
        </div>

        {/* Trading Charts */}
        <div className="absolute top-32 right-1/4 transform rotate-12">
          <BarChart3 className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute top-1/2 left-1/4 transform -rotate-12">
          <TrendingUp className="w-20 h-20 text-primary-light" />
        </div>

        {/* Football Tactics Board */}
        <div className="absolute bottom-1/3 right-1/3 opacity-20">
          <div className="w-20 h-16 bg-green-800 rounded border-2 border-white">
            <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-1 bg-white rounded"></div>
          </div>
        </div>

        {/* Floating Numbers (Odds/Stats) */}
        <div className="absolute top-1/3 left-1/3 opacity-30 animate-pulse">
          <div className="bg-primary/20 px-3 py-1 rounded-full text-primary font-bold text-sm">
            2.50
          </div>
        </div>
        <div className="absolute bottom-1/2 right-1/4 opacity-30 animate-pulse delay-500">
          <div className="bg-primary-light/20 px-3 py-1 rounded-full text-primary-light font-bold text-sm">
            1.85
          </div>
        </div>
        <div className="absolute top-2/3 left-1/6 opacity-30 animate-pulse delay-1000">
          <div className="bg-primary/20 px-3 py-1 rounded-full text-primary font-bold text-sm">
            3.20
          </div>
        </div>
      </div>

      {/* Trading Dashboard Mockup */}
      <div className="absolute top-1/4 right-8 hidden lg:block opacity-15">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-primary/30">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <div className="text-xs text-primary font-semibold">LIVE MATCH</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-white/70">Over 2.5</span>
              <span className="text-xs text-primary font-bold">1.85</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-white/70">Under 2.5</span>
              <span className="text-xs text-primary-light font-bold">2.10</span>
            </div>
            <div className="w-full h-1 bg-gray-600 rounded-full mt-2">
              <div className="w-3/4 h-1 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Person Trading Silhouette with Football Context */}
      <div className="absolute bottom-0 left-8 hidden lg:block opacity-15">
        <div className="relative">
          <div className="w-32 h-40 bg-gradient-to-t from-primary/30 to-transparent rounded-t-full"></div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary/40 rounded-full"></div>
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-primary/30 rounded"></div>
          {/* Laptop/Phone in hands */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-5 bg-white/20 rounded border border-primary/30"></div>
          {/* Football at feet */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-x-4 w-4 h-4 bg-white rounded-full flex items-center justify-center">
            <span className="text-xs">⚽</span>
          </div>
        </div>
      </div>

      {/* Floating Football Jerseys */}
      <div className="absolute top-1/5 right-1/5 opacity-10 animate-float">
        <div className="w-12 h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-t-lg rounded-b-sm">
          <div className="w-full h-3 bg-white/20 mt-2 rounded"></div>
          <div className="text-center text-white text-xs font-bold mt-1">10</div>
        </div>
      </div>

      <div className="absolute bottom-1/5 left-1/3 opacity-10 animate-float delay-1000">
        <div className="w-12 h-16 bg-gradient-to-b from-red-600 to-red-800 rounded-t-lg rounded-b-sm">
          <div className="w-full h-3 bg-white/20 mt-2 rounded"></div>
          <div className="text-center text-white text-xs font-bold mt-1">9</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Domine o <span className="text-primary">Trading Esportivo</span> com Drako
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Aprenda estratégias reais, participe de uma comunidade forte e opere com segurança todos os dias.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHI1dkt2OF90WHFGNzJ2NGdWUEoxVmtXdlJmQXxBQ3Jtc0tuek9lNjUzQjRWWENrQ0s4YTZaektMWE1YX3c5UzBiQ2pNMEticjRzVm1MY2ZhSkMyUVUwaWRpaVZKMjdfOVAyUHRhNTFpeFVIdHlpVkxIaHFFSjJxcmJOZllCQk9XWkhNeGJLMTR4bmdxT3JLd1EwYw&q=https%3A%2F%2Ft.me%2Fcanaldodrako&v=WEAn6WoDM0o" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Entrar no Telegram (Grátis)
            </a>
            <a 
              href="#discord" 
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20"
            >
              <Crown className="w-5 h-5 mr-2" />
              Assinar Discord VIP
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/_74qPf4-zzM"
                title="Vídeo do Drako"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-2xl font-bold text-primary mb-1">+30000</div>
            <div className="text-sm text-gray-300">Seguidores</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-2xl font-bold text-primary mb-1">10+</div>
            <div className="text-sm text-gray-300">Anos de Experiência</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-2xl font-bold text-primary mb-1">365</div>
            <div className="text-sm text-gray-300">Dias Operando</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-gray-300">Transparência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;