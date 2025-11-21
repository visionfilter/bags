import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Language } from '../types';

interface SEOProps {
  lang: Language;
}

const SEO: React.FC<SEOProps> = ({ lang }) => {
  // Define localized metadata
  const meta = {
    en: {
      title: "Vision Filter | Industrial Dust Collection Filter Bags & Cages",
      description: "Leading manufacturer of industrial dust collection filter bags, cages, and filter cloth. ISO 9001 certified factory exporting globally. Zero pollution commitment.",
      keywords: "filter bags, filter cages, dust collector, industrial filtration, filter cloth, Vision Filter"
    },
    zh: {
      title: "Vision Filter | 工业除尘滤袋与骨架制造商",
      description: "专业的工业除尘滤袋、除尘骨架及滤布制造商。ISO 9001认证工厂，全球出口。致力于零污染排放。",
      keywords: "除尘滤袋, 除尘骨架, 工业除尘, 滤布, Vision Filter, 盐城维森"
    },
    es: {
      title: "Vision Filter | Bolsas y Jaulas para Filtros de Polvo Industrial",
      description: "Fabricante líder de bolsas filtrantes, jaulas y telas filtrantes para la recolección de polvo industrial. Fábrica certificada ISO 9001.",
      keywords: "bolsas filtrantes, jaulas de filtro, colector de polvo, filtración industrial"
    },
    ru: {
      title: "Vision Filter | Промышленные Фильтровальные Рукава и Каркасы",
      description: "Ведущий производитель промышленных фильтровальных рукавов, каркасов и фильтровальной ткани. Завод сертифицирован по ISO 9001.",
      keywords: "фильтровальные рукава, каркасы фильтров, пылеуловитель"
    },
    ar: {
      title: "Vision Filter | أكياس وأقفاص فلاتر جمع الغبار الصناعي",
      description: "الشركة الرائدة في تصنيع أكياس فلاتر جمع الغبار الصناعي، والأقفاص، وقماش الفلتر. مصنع معتمد بشهادة ISO 9001.",
      keywords: "أكياس الفلتر, أقفاص الفلتر, مجمع الغبار"
    }
  };

  const currentMeta = meta[lang] || meta.en;
  const siteUrl = "https://www.visionfilter.com"; // Replace with actual domain

  // Organization Schema for EEAT
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vision Manufacture Technology Co., Ltd",
    "alternateName": "Vision Filter",
    "url": siteUrl,
    "logo": "https://placehold.co/200x80/e6f4ea/166534?text=Vision+Filter",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-139-2180-7310",
      "contactType": "sales",
      "areaServed": "World",
      "availableLanguage": ["en", "zh"]
    },
    "sameAs": [
      "https://www.linkedin.com/in/dustfilterbag/",
      "https://www.facebook.com/jijingwang",
      "https://twitter.com/gigiwang26500"
    ]
  };

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{currentMeta.title}</title>
      <meta name="description" content={currentMeta.description} />
      <meta name="keywords" content={currentMeta.keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={currentMeta.title} />
      <meta property="og:description" content={currentMeta.description} />
      <meta property="og:image" content="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200" />
      <meta property="og:locale" content={lang} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={currentMeta.title} />
      <meta property="twitter:description" content={currentMeta.description} />
      <meta property="twitter:image" content="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200" />

      {/* Canonical */}
      <link rel="canonical" href={`${siteUrl}/${lang === 'en' ? '' : lang}`} />
      
      {/* Alternate Languages (Hreflang simulation for SPA) */}
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/`} />
      <link rel="alternate" hrefLang="zh" href={`${siteUrl}/?lang=zh`} />
      <link rel="alternate" hrefLang="es" href={`${siteUrl}/?lang=es`} />
      <link rel="alternate" hrefLang="ru" href={`${siteUrl}/?lang=ru`} />
      <link rel="alternate" hrefLang="ar" href={`${siteUrl}/?lang=ar`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;