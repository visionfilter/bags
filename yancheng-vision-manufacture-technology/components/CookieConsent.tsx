import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface CookieConsentProps {
  lang: Language;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('vision_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('vision_cookie_consent', 'true');
    setIsVisible(false);
  };

  const t = {
    en: { text: "We use cookies to ensure you get the best experience on our website.", btn: "Accept" },
    zh: { text: "我们使用 Cookie 以确保您获得最佳的网站体验。", btn: "接受" },
    es: { text: "Utilizamos cookies para asegurar que obtenga la mejor experiencia en nuestro sitio web.", btn: "Aceptar" },
    ru: { text: "Мы используем файлы cookie для улучшения работы сайта.", btn: "Принять" },
    ar: { text: "نستخدم ملفات تعريف الارتباط لضمان حصولك على أفضل تجربة على موقعنا.", btn: "قبول" }
  };

  const content = t[lang] || t.en;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] bg-industrial-900/95 text-white p-4 backdrop-blur-sm border-t border-gray-700 shadow-2xl transition-transform duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 text-center sm:text-left">
          {content.text}
        </p>
        <button
          onClick={handleAccept}
          className="px-6 py-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-brand-500"
        >
          {content.btn}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;