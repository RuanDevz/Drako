import React, { useEffect, useRef } from 'react';
import { UserCheck, Clock, Target, Calendar } from 'lucide-react';

const Consultoria = () => {
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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white opacity-0 transition-opacity duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Consultoria <span className="text-primary">Pessoal</span> com Drako
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Análise individual da sua performance e estratégias personalizadas para acelerar seus resultados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl">
              <UserCheck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atendimento Personalizado</h3>
              <p className="text-gray-700">
                Sessão individual com Drako para análise completa do seu perfil de trader e identificação de pontos de melhoria.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Análise de Performance</h4>
                  <p className="text-gray-600">Revisão detalhada das suas operações e resultados</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ajustes Estratégicos</h4>
                  <p className="text-gray-600">Adaptação de métodos baseada no seu perfil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Consultoria Individual</h3>
              <p className="text-gray-600">Sessão personalizada de 1 hora</p>
            </div>

            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-primary mb-2">R$ 500</div>
              <p className="text-gray-600">Investimento único</p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Análise individual da sua rotina</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Revisão de performance detalhada</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Plano de ação personalizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Suporte pós-consultoria</span>
              </div>
            </div>

            <button className="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Agendar Consultoria
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultoria;