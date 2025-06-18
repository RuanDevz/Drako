import React from 'react';
import { MessageCircle, Crown, Calendar, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Drako Trader</span>
            </div>
            <p className="text-gray-600 mb-4">
              Transformando traders através de estratégias reais e comunidade forte. 
              Opere com segurança e consistência no trading esportivo.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://t.me/drakotelegram" className="text-gray-600 hover:text-primary transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#discord" className="text-gray-600 hover:text-primary transition-colors">
                  Discord VIP
                </a>
              </li>
              <li>
                <a href="#consultoria" className="text-gray-600 hover:text-primary transition-colors">
                  Consultoria
                </a>
              </li>
              <li>
                <a href="https://youtube.com/drako" className="text-gray-600 hover:text-primary transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contato</h4>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/drakotelegram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/drako" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center">
          <p className="text-gray-600">
            © 2025 Drako Trader. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;