import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Crown, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Drako Trader
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className={`font-medium transition-colors duration-300 hover:text-primary ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Sobre
            </a>
            <a 
              href="#method" 
              className={`font-medium transition-colors duration-300 hover:text-primary ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Método
            </a>
            <a 
              href="#discord" 
              className={`font-medium transition-colors duration-300 hover:text-primary ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Discord VIP
            </a>
            <a 
              href="#consultoria" 
              className={`font-medium transition-colors duration-300 hover:text-primary ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Consultoria
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://t.me/drakotelegram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Telegram
            </a>
            <a 
              href="#discord" 
              className="inline-flex items-center px-4 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <Crown className="w-4 h-4 mr-2" />
              VIP
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#method"
                className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Método
              </a>
              <a
                href="#discord"
                className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Discord VIP
              </a>
              <a
                href="#consultoria"
                className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Consultoria
              </a>
              <div className="flex flex-col space-y-2 px-3 pt-2">
                <a 
                  href="https://t.me/drakotelegram" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-semibold rounded-lg"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Telegram
                </a>
                <a 
                  href="#discord" 
                  className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white font-semibold rounded-lg"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Discord VIP
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;