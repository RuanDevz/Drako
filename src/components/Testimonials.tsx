import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Carlos M.",
      role: "Trader há 2 anos",
      content: "Depois que entrei no Discord VIP do Drako, meus resultados melhoraram drasticamente. As análises são precisas e a comunidade é séria.",
      rating: 5
    },
    {
      name: "Ana P.",
      role: "Iniciante no trading",
      content: "O Método Drakito transformou minha forma de operar. Simples, direto e eficaz. A consultoria personalizada foi o diferencial para mim.",
      rating: 5
    },
    {
      name: "Roberto S.",
      role: "Trader experiente",
      content: "Sigo o Drako há mais de um ano. Consistência e disciplina são as palavras-chave. Recomendo para quem busca resultados reais.",
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white opacity-0 transition-opacity duration-1000">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            O que dizem nossos <span className="text-primary">Traders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de pessoas que transformaram seus resultados seguindo as estratégias do Drako
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/30 mb-2" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;