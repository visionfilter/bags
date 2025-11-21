import React from 'react';
import { Language } from '../types';

interface FAQSectionProps {
  lang: Language;
}

const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  
  const faqData = [
    {
      question: lang === 'zh' ? '你们是工厂还是贸易公司？' : 'Are you a factory or a trading company?',
      answer: lang === 'zh' ? '我们是一家专业的生产工厂，位于中国江苏省盐城市。欢迎莅临参观！' : 'We are a professional manufacturer factory located in Yancheng, Jiangsu, China. Welcome to visit us!'
    },
    {
      question: lang === 'zh' ? '你们能否提供免费样品？' : 'Do you provide free samples?',
      answer: lang === 'zh' ? '是的，我们可以提供免费的滤料样品供您测试质量，您只需支付快递费用。' : 'Yes, we can provide free fabric samples for you to check the quality, you only need to pay the courier cost.'
    },
    {
      question: lang === 'zh' ? '交货期通常是多久？' : 'What is your typical delivery time?',
      answer: lang === 'zh' ? '标准产品通常为7-15天，定制订单取决于具体数量和规格。' : 'Standard products usually take 7-15 days. Custom orders depend on quantity and specifications.'
    },
    {
      question: lang === 'zh' ? '你们通过了哪些认证？' : 'What certifications do you have?',
      answer: lang === 'zh' ? '我们的工厂已通过 ISO 9001 质量管理体系认证。' : 'Our factory is ISO 9001 certified for Quality Management Systems.'
    }
  ];

  // Generate FAQPage Schema for Google SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-16 bg-white dark:bg-industrial-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      {/* Inject Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm">Common Questions</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-industrial-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h3>
        </div>

        <dl className="space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
          {faqData.map((faq, index) => (
            <div key={index} className="pt-6 md:grid md:grid-cols-12 md:gap-8">
              <dt className="text-base font-semibold text-industrial-900 dark:text-white md:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-2 md:mt-0 md:col-span-7">
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQSection;