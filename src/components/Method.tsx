import React, { useEffect, useRef } from 'react';
import { Target, BookOpen, Play } from 'lucide-react';

const Method = () => {
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
    <section id="method" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white opacity-0 transition-opacity duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Método <span className="text-primary">Drakito</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estratégia exclusiva criada por Drako para leitura de jogo no trading esportivo
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Método Drakito</h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Uma abordagem simplificada e direta para análise de jogos esportivos, focada em disciplina e consistência. 
                O método foi desenvolvido através de anos de experiência prática no mercado.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Simples de aplicar, mesmo para iniciantes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Focado em disciplina e gestão de risco</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Estratégia testada e comprovada</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
                <h4 className="text-xl font-bold text-gray-900 mb-4">Aprenda o Método</h4>
                <p className="text-gray-600 mb-6">
                  Vídeo explicativo completo sobre como aplicar o Método Drakito em suas operações
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5 mr-2" />
                  Ver Método em Vídeo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;