import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import AboutSection from './components/AboutSection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import DownloadSection from './components/DownloadSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import CookieConsent from './components/CookieConsent';
import SEO from './components/SEO';
import { Language } from './types';

function App() {
  // Initialize Lang from URL or LocalStorage
  const [lang, setLangState] = useState<Language>(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang') as Language;
    const savedLang = localStorage.getItem('vision_lang') as Language;
    return (['en', 'zh', 'es', 'ru', 'ar'].includes(urlLang) ? urlLang : savedLang) || 'en';
  });

  // Initialize Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('vision_theme');
    if (savedMode) return savedMode === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Custom setter to sync URL and LocalStorage
  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('vision_lang', newLang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url);
  };

  // Apply Dark Mode
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('vision_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('vision_theme', 'light');
    }
  }, [isDarkMode]);

  // Register Service Worker for PWA
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => console.log('SW registered: ', registration.scope),
          (err) => console.log('SW registration failed: ', err)
        );
      });
    }
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-industrial-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 antialiased selection:bg-brand-500 selection:text-white flex flex-col">
        <SEO lang={lang} />
        
        <Navbar lang={lang} setLang={setLang} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <main className="flex-grow">
          <Hero lang={lang} />
          <ProductSection />
          <AboutSection />
          <DownloadSection lang={lang} />
          <NewsSection />
          <FAQSection lang={lang} />
          <ContactSection lang={lang} />
        </main>
        
        <Footer lang={lang} />
        <ChatBot />
        <CookieConsent lang={lang} />
      </div>
    </HelmetProvider>
  );
}

export default App;