import React, { useEffect, useRef } from 'react';
import { TrendingUp, Users, Calendar } from 'lucide-react';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 opacity-0 transition-opacity duration-1000 relative overflow-hidden">
      {/* Football Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
          <span className="text-white text-2xl">⚽</span>
        </div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
          <span className="text-white text-lg">⚽</span>
        </div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-primary/50 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">⚽</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Quem é <span className="text-primary">Drako</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Trader esportivo com experiência real no mercado, Drako opera todos os dias com consistência e disciplina. 
              Sua abordagem direta e sem enrolação conquistou milhares de seguidores que buscam resultados práticos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Compartilha entradas e análises detalhadas no Telegram e Discord, ajudando traders iniciantes e experientes 
              a desenvolverem uma mentalidade vencedora no trading esportivo.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Consistência</p>
                <p className="text-sm text-gray-600">Operações diárias</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Comunidade</p>
                <p className="text-sm text-gray-600">Milhares de seguidores</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Experiência</p>
                <p className="text-sm text-gray-600">Anos no mercado</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center relative">
            {/* Football Stadium Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-gradient-to-b from-green-600 to-green-800 rounded-full"></div>
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
            </div>
            
            <div className="w-80 h-80 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-2xl relative z-10">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">D</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Drako</h3>
                  <p className="text-primary font-semibold">Trader Esportivo</p>
                </div>
              </div>
            </div>
            
            {/* Floating Football Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
              <span className="text-sm">⚽</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full shadow-lg flex items-center justify-center animate-pulse">
              <span className="text-white text-xs">⚽</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;