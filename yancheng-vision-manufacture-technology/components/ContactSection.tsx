import React from 'react';
import { Phone, MapPin, Send, User, MessageCircle } from 'lucide-react';
import { Language } from '../types';

// WeChat Icon SVG Component
const WeChatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.76 11.44c0-3.68-3.63-6.68-8.12-6.68-4.49 0-8.12 3-8.12 6.68 0 2.02 1.1 3.83 2.82 5.06-.12.65-.45 2.32-.52 2.65-.07.41.36.47.52.25l2.29-1.27c.93.25 1.92.4 2.97.4 4.49 0 8.12-3 8.12-6.68z" opacity="0.5"/>
    <path d="M22.74 16.28c0-2.81-3.06-5.11-6.84-5.11-3.79 0-6.85 2.3-6.85 5.11 0 1.6.97 3.02 2.46 3.98-.09.49-.35 1.77-.41 2.02-.05.31.28.36.41.19l1.84-1c.7.19 1.45.29 2.23.29 3.77 0 6.83-2.3 6.83-5.11z"/>
  </svg>
);

interface ContactSectionProps {
  lang: Language;
}

const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  
  const t = {
    title: lang === 'zh' ? '联系我们' : 'Contact Us',
    subtitle: lang === 'zh' ? '联系 Gigi' : 'Get in Touch with Gigi',
    desc: lang === 'zh' ? '我们随时为您提供最佳过滤解决方案。直接联系我们的销售经理以获得快速响应。' : 'We are ready to help you find the best filtration solution. Contact our sales manager directly for a quick response.',
    person: lang === 'zh' ? '联系人' : 'Contact Person',
    phone: lang === 'zh' ? '电话 / WhatsApp' : 'Phone / WhatsApp',
    wechat: lang === 'zh' ? '微信' : 'WeChat',
    address: lang === 'zh' ? '工厂地址' : 'Factory Address',
    formName: lang === 'zh' ? '姓名' : 'Full Name',
    formEmail: lang === 'zh' ? '电子邮箱' : 'Email Address',
    formProduct: lang === 'zh' ? '感兴趣的产品' : 'Product Interest',
    formMessage: lang === 'zh' ? '留言' : 'Message',
    formSend: lang === 'zh' ? '发送咨询' : 'Send Inquiry',
    addrText: lang === 'zh' ? '中国江苏省盐城市亭湖区盐南高新区科城街道驿云小镇' : 'Yiyun Town, Kecheng Street, Yannan High-tech Zone, Tinghu District, Yancheng, Jiangsu, China 224000'
  };

  return (
    <section id="contact" className="py-20 bg-industrial-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm">{t.title}</h2>
            <h3 className="mt-2 text-3xl font-extrabold sm:text-4xl mb-6">
              {t.subtitle}
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              {t.desc}
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brand-900/50 p-3 rounded-lg border border-brand-900">
                  <User className="h-6 w-6 text-brand-400" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">{t.person}</p>
                  <p className="text-gray-400">Gigi</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-900/50 p-3 rounded-lg border border-brand-900">
                  <Phone className="h-6 w-6 text-brand-400" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">{t.phone}</p>
                  <p className="text-gray-400">+86 139 2180 7310</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-900/50 p-3 rounded-lg border border-brand-900">
                  <WeChatIcon className="h-6 w-6 text-brand-400" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">{t.wechat}</p>
                  <p className="text-gray-400">13921807310</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-900/50 p-3 rounded-lg border border-brand-900">
                  <MapPin className="h-6 w-6 text-brand-400" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">{t.address}</p>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    {t.addrText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-industrial-800 rounded-lg p-8 shadow-2xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t.formName}</label>
                <input type="text" id="name" className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-industrial-900 dark:text-white rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm h-10 px-3 border" placeholder="" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t.formEmail}</label>
                <input type="email" id="email" className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-industrial-900 dark:text-white rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm h-10 px-3 border" placeholder="email@company.com" />
              </div>

              <div>
                <label htmlFor="product" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t.formProduct}</label>
                <select id="product" className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-industrial-900 dark:text-white rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm h-10 px-3 border">
                  <option>Filter Bags</option>
                  <option>Filter Cages</option>
                  <option>Filter Cartridges</option>
                  <option>Filter Cloth</option>
                  <option>Accessories</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t.formMessage}</label>
                <textarea id="message" rows={4} className="mt-1 block w-full border-gray-300 dark:border-gray-600 dark:bg-industrial-900 dark:text-white rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm px-3 py-2 border" placeholder=""></textarea>
              </div>

              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500">
                <Send size={16} className="mr-2" /> {t.formSend}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;