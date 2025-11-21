import React, { useState } from 'react';
import { FileText, Download, X, Lock, CheckCircle, Loader2 } from 'lucide-react';
import { Language } from '../types';

const downloads = [
  {
    title: 'Product Catalog 2024',
    description: 'Comprehensive guide to our filter bags, cages, and accessories.',
    size: '4.2 MB',
    type: 'PDF',
    id: 'cat2024'
  },
  {
    title: 'Filter Media Technical Data',
    description: 'Detailed specifications for Polyester, PPS, PTFE, and Nomex felts.',
    size: '1.8 MB',
    type: 'PDF',
    id: 'tech_data'
  },
  {
    title: 'ISO 9001 Certificate',
    description: 'Our quality management system certification.',
    size: '0.5 MB',
    type: 'PDF',
    id: 'iso'
  },
  {
    title: 'Company Presentation',
    description: 'Introduction to Yancheng Vision Manufacture Technology.',
    size: '3.5 MB',
    type: 'PDF',
    id: 'ppt'
  }
];

interface DownloadSectionProps {
  lang: Language;
}

const DownloadSection: React.FC<DownloadSectionProps> = ({ lang }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<{title: string} | null>(null);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDownloadClick = (file: typeof downloads[0]) => {
    setSelectedFile(file);
    setIsModalOpen(true);
    setIsSuccess(false);
    setEmail('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // Simulate download start by redirecting or opening file
      console.log(`Downloading ${selectedFile?.title} for ${email}`);
      setTimeout(() => {
        setIsModalOpen(false);
      }, 2500);
    }, 1500);
  };

  // Simple translation for modal
  const t = {
    title: lang === 'zh' ? '需要邮箱验证' : 'Email Required',
    subtitle: lang === 'zh' ? '请输入您的邮箱地址以解锁下载:' : 'Please enter your email address to unlock the download for:',
    placeholder: lang === 'zh' ? '您的邮箱地址' : 'your-email@company.com',
    button: lang === 'zh' ? '验证并下载' : 'Verify & Download',
    success: lang === 'zh' ? '验证成功！正在开始下载...' : 'Verified! Starting download...',
    privacy: lang === 'zh' ? '我们保护您的隐私。无垃圾邮件。' : 'We respect your privacy. No spam.',
    sectionTitle: lang === 'zh' ? '下载中心 & 技术参数' : 'Downloads & Technical Specs',
    sectionDesc: lang === 'zh' ? '下载我们最新的目录和数据表。' : 'Download our latest catalogs and data sheets to help you choose the right filtration solution.'
  };

  return (
    <section id="downloads" className="py-16 bg-brand-50 dark:bg-industrial-950 relative scroll-mt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm">Resources</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-industrial-900 dark:text-white sm:text-4xl">
            {t.sectionTitle}
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400 mx-auto">
            {t.sectionDesc}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {downloads.map((item, index) => (
            <article 
              key={index} 
              onClick={() => handleDownloadClick(item)}
              className="bg-white dark:bg-industrial-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all group cursor-pointer relative overflow-hidden flex flex-col"
              role="button"
              aria-label={`Download ${item.title}`}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleDownloadClick(item)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-brand-100 dark:bg-brand-900/50 p-3 rounded-lg group-hover:bg-brand-600 transition-colors">
                  <FileText className="h-6 w-6 text-brand-600 dark:text-brand-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-medium text-gray-400 uppercase">{item.type}</span>
              </div>
              <h4 className="text-lg font-bold text-industrial-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow line-clamp-2">{item.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                <span className="text-xs text-gray-400">{item.size}</span>
                <span className="text-sm font-medium text-brand-600 dark:text-brand-400 flex items-center group-hover:underline">
                  <Lock size={12} className="mr-1" /> Download
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Email Gate Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[70] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              {/* Background overlay */}
              <div 
                className="fixed inset-0 bg-gray-900/75 dark:bg-black/80 transition-opacity backdrop-blur-sm" 
                aria-hidden="true" 
                onClick={() => setIsModalOpen(false)}
              ></div>

              {/* Centering trick */}
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

              {/* Modal panel */}
              <div className="inline-block align-bottom bg-white dark:bg-industrial-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full relative border border-gray-200 dark:border-gray-700">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
                
                <div className="bg-white dark:bg-industrial-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-brand-100 dark:bg-brand-900/50 sm:mx-0 sm:h-10 sm:w-10">
                      <Download className="h-6 w-6 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">
                        {t.title}
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                          {t.subtitle} <span className="font-semibold text-gray-800 dark:text-gray-200">{selectedFile?.title}</span>
                        </p>
                        
                        {isSuccess ? (
                          <div className="rounded-md bg-green-50 dark:bg-green-900/30 p-4 mb-4 animate-pulse border border-green-200 dark:border-green-800">
                            <div className="flex">
                              <div className="flex-shrink-0">
                                <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" aria-hidden="true" />
                              </div>
                              <div className="ml-3">
                                <p className="text-sm font-medium text-green-800 dark:text-green-200">{t.success}</p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <form onSubmit={handleSubmit} className="mt-4">
                            <div className="mb-4">
                              <label htmlFor="email" className="sr-only">Email</label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm border-gray-300 dark:border-gray-600 bg-white dark:bg-industrial-900 text-gray-900 dark:text-white rounded-md p-3 border placeholder-gray-400 dark:placeholder-gray-500"
                                placeholder={t.placeholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <button
                              type="submit"
                              disabled={isLoading}
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-3 bg-brand-600 text-base font-medium text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 sm:text-sm disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                            >
                              {isLoading ? (
                                <>
                                  <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" /> Processing...
                                </>
                              ) : (
                                t.button
                              )}
                            </button>
                          </form>
                        )}
                         <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 text-center flex items-center justify-center gap-1">
                          <Lock size={10} /> {t.privacy}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </section>
  );
};

export default DownloadSection;