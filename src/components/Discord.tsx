import React, { useEffect, useRef } from 'react';
import { Crown, Users, MessageSquare, Shield, Check } from 'lucide-react';

const Discord = () => {
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
    <section id="discord" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 opacity-0 transition-opacity duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Comunidade <span className="text-primary">Discord VIP</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Junte-se aos traders sérios e tenha acesso exclusivo às análises e entradas diárias do Drako
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-gray-900">Benefícios Exclusivos</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Acesso a entradas diárias e análises detalhadas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Discussões de jogos ao vivo em tempo real</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Comunidade de traders sérios, sem distrações</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Suporte direto da equipe do Drako</span>
                </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <MessageSquare className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Chat Exclusivo</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Ambiente Sério</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Crown className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Acesso VIP</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-primary">
              <div className="text-center mb-6">
                <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Planos VIP</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-gray-900">Mensal</span>
                    <span className="text-2xl font-bold text-primary">R$ 239</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Acesso completo por 30 dias</p>
                  <a 
                    href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UK7NSUMF5HPDW" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-block text-center bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
                  >
                    Assinar Mensal
                  </a>
                </div>
                
                <div className="p-6 bg-primary/5 rounded-xl border-2 border-primary">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-gray-900">Anual</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">R$ 1.800</span>
                      <p className="text-sm text-primary font-semibold">Economia de R$ 1.068</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Acesso completo por 12 meses</p>
                  <a 
                    href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YYET3MENQE49E" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-block text-center bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
                  >
                    Assinar Anual
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discord;