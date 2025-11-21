import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Sun, Moon } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Translations
  const t = {
    en: { home: 'Home', products: 'Products', about: 'About Us', news: 'News', downloads: 'Downloads', contact: 'Contact' },
    zh: { home: '首页', products: '产品中心', about: '关于我们', news: '新闻动态', downloads: '下载中心', contact: '联系我们' },
    es: { home: 'Inicio', products: 'Productos', about: 'Nosotros', news: 'Noticias', downloads: 'Descargas', contact: 'Contacto' },
    ru: { home: 'Главная', products: 'Продукция', about: 'О нас', news: 'Новости', downloads: 'Загрузки', contact: 'Контакты' },
    ar: { home: 'الرئيسية', products: 'المنتجات', about: 'من نحن', news: 'أخبار', downloads: 'التحميلات', contact: 'اتصل بنا' }
  };

  const navLinks = [
    { name: t[lang].home, href: '#home' },
    { name: t[lang].products, href: '#products' },
    { name: t[lang].about, href: '#about' },
    { name: t[lang].news, href: '#news' },
    { name: t[lang].downloads, href: '#downloads' },
    { name: t[lang].contact, href: '#contact' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-industrial-900/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <div className="flex items-center gap-3">
                 <img 
                  src="https://placehold.co/200x80/e6f4ea/166534?text=Vision+Filter&font=roboto" 
                  alt="Vision Filter Logo" 
                  className="h-10 md:h-12 w-auto object-contain rounded" 
                />
                <div className={`flex flex-col ${isScrolled ? 'text-industrial-900 dark:text-white' : 'text-white'}`}>
                   <span className="text-xl font-bold tracking-tight leading-none hidden md:block">
                    Vision Filter
                  </span>
                </div>
              </div>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-brand-500 transition-colors ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-100'}`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center space-x-1 text-sm font-semibold focus:outline-none ${isScrolled ? 'text-industrial-900 dark:text-white' : 'text-white'}`}
                aria-expanded={isLangMenuOpen}
                aria-haspopup="true"
              >
                <Globe size={16} />
                <span className="uppercase">{lang}</span>
                <ChevronDown size={12} />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-industrial-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between"
                    >
                      <span>{l.label}</span>
                      <span>{l.flag}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
             {/* Mobile Dark Mode */}
             <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-1.5 rounded-full ${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'}`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

             {/* Mobile Language Toggle (Simple) */}
             <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center gap-1 text-xs font-bold border px-2 py-1 rounded ${isScrolled ? 'border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600' : 'border-white/30 text-white'}`}
              >
                {lang.toUpperCase()}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${isScrolled ? 'text-gray-700 dark:text-white' : 'text-white'}`}
              aria-label="Open Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Language Menu Dropdown */}
      {isLangMenuOpen && (
         <div className="md:hidden absolute top-16 right-4 w-48 bg-white dark:bg-industrial-800 rounded-md shadow-xl z-50 border border-gray-200 dark:border-gray-700">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setIsLangMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-0 flex justify-between items-center"
              >
                 <span>{l.label}</span>
                 <span className="text-lg">{l.flag}</span>
              </button>
            ))}
         </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-industrial-900 shadow-xl absolute w-full top-full left-0 border-t border-gray-100 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-600 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;