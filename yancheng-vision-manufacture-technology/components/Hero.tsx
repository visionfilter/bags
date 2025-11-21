import React from 'react';
import { ChevronRight, Download } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  
  const t = {
    en: {
      headline: 'Clean Vision, Clear Skies',
      subHeadline: 'Zero Pollution Commitment',
      desc: 'Dedicated to industrial dust collection solutions that ensure emissions meet global standards. We protect the environment, one filter at a time.',
      btnSol: 'Our Solutions',
      btnDown: 'Catalog Download'
    },
    zh: {
      headline: '清洁视野，碧水蓝天',
      subHeadline: '零污染承诺',
      desc: '致力于工业除尘解决方案，确保排放符合全球标准。我们用心保护环境，从每一个滤袋开始。',
      btnSol: '产品中心',
      btnDown: '下载目录'
    },
    es: {
      headline: 'Visión Limpia, Cielos Claros',
      subHeadline: 'Compromiso de Cero Contaminación',
      desc: 'Dedicados a soluciones de recolección de polvo industrial que aseguran que las emisiones cumplan con los estándares globales.',
      btnSol: 'Soluciones',
      btnDown: 'Descargar Catálogo'
    },
    ru: {
      headline: 'Чистое Видение, Чистое Небо',
      subHeadline: 'Обязательство Нулевого Загрязнения',
      desc: 'Мы предлагаем решения для промышленного пылеулавливания, обеспечивающие соответствие выбросов мировым стандартам.',
      btnSol: 'Наши Решения',
      btnDown: 'Скачать Каталог'
    },
    ar: {
      headline: 'رؤية نظيفة، سماء صافية',
      subHeadline: 'الالتزام بصفر تلوث',
      desc: 'مكرسون لحلول جمع الغبار الصناعي التي تضمن تلبية الانبعاثات للمعايير العالمية.',
      btnSol: 'حلولنا',
      btnDown: 'تحميل الكتالوج'
    }
  };

  const text = t[lang];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Hero Section">
      {/* Background Image with Overlay - Optimized for LCP */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000&fm=webp" type="image/webp" />
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000" 
            alt="Clear Blue Sky above Industrial Plant - Vision Filter" 
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            // @ts-ignore - fetchpriority is a valid attribute but react types might lack it
            fetchpriority="high"
            decoding="async"
          />
        </picture>
        {/* Overlay - Dark mode adjustment mostly handled by opacity, but base bg helps transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/40 dark:from-black/80 dark:to-brand-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
          {text.headline} <br/>
          <span className="text-brand-300">{text.subHeadline}</span>
        </h1>
        <p className="mt-4 text-xl text-gray-100 max-w-2xl mb-8 font-light leading-relaxed">
          <strong>Vision Filter</strong> (Yancheng Vision Manufacture Technology Co., Ltd)
          <br/>
          {text.desc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a 
            href="#products" 
            className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-md transition-all shadow-lg flex items-center justify-center focus:ring-2 focus:ring-offset-2 focus:ring-brand-400"
            aria-label={text.btnSol}
          >
            {text.btnSol} <ChevronRight className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="#downloads" 
            className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-brand-800 transition-all flex items-center justify-center focus:ring-2 focus:ring-offset-2 focus:ring-white"
            aria-label={text.btnDown}
          >
            <Download className="mr-2 h-5 w-5" />
            {text.btnDown}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;