import React, { useEffect, useRef } from 'react';
import { Zap, Bell, Rocket } from 'lucide-react';

const Under = () => {
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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 opacity-0 transition-opacity duration-1000">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🚨 Método <span className="text-primary">UNDER</span> em Desenvolvimento!
            </h2>
          </div>
          
          <div className="space-y-6 mb-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              Nova abordagem revolucionária para lucrar com segurança no mercado esportivo. 
              O Método UNDER está sendo desenvolvido com base em análises avançadas e backtests rigorosos.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="p-4">
                <Rocket className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Inovação</h4>
                <p className="text-sm text-gray-600">Abordagem totalmente nova</p>
              </div>
              <div className="p-4">
                <Bell className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Alertas</h4>
                <p className="text-sm text-gray-600">Notificações em tempo real</p>
              </div>
              <div className="p-4">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Eficiência</h4>
                <p className="text-sm text-gray-600">Resultados otimizados</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl mb-8">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Seja um dos primeiros a conhecer!
            </p>
            <p className="text-gray-700">
              Cadastre-se para receber notificações exclusivas sobre o lançamento do Método UNDER
            </p>
          </div>

          <button className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <Bell className="w-5 h-5 mr-2" />
            Quero ser Notificado
          </button>
        </div>
      </div>
    </section>
  );
};

export default Under;