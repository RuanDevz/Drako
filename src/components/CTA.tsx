import React, { useEffect, useRef } from 'react';
import { MessageCircle, Crown, Calendar } from 'lucide-react';

const CTA = () => {
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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 opacity-0 transition-opacity duration-1000">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Comece a operar com quem <span className="text-primary">vive do trading esportivo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Não perca mais tempo com estratégias que não funcionam. Junte-se à comunidade do Drako e transforme seus resultados hoje mesmo.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <a 
            href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHI1dkt2OF90WHFGNzJ2NGdWUEoxVmtXdlJmQXxBQ3Jtc0tuek9lNjUzQjRWWENrQ0s4YTZaektMWE1YX3c5UzBiQ2pNMEticjRzVm1MY2ZhSkMyUVUwaWRpaVZKMjdfOVAyUHRhNTFpeFVIdHlpVkxIaHFFSjJxcmJOZllCQk9XWkhNeGJLMTR4bmdxT3JLd1EwYw&q=https%3A%2F%2Ft.me%2Fcanaldodrako&v=WEAn6WoDM0o" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-bold text-gray-900 mb-2">Entrar no Telegram</h3>
            <p className="text-sm text-gray-600">Grátis • Análises diárias</p>
          </a>
          
          <a 
            href="#discord"
            className="group bg-primary p-6 rounded-xl hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Crown className="w-8 h-8 text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-bold text-white mb-2">Discord VIP</h3>
            <p className="text-sm text-primary-light">A partir de R$ 239/mês</p>
          </a>
          
          <a 
            href="#consultoria"
            className="group bg-white p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Calendar className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-bold text-gray-900 mb-2">Agendar Consultoria</h3>
            <p className="text-sm text-gray-600">R$ 500 • Personalizada</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;