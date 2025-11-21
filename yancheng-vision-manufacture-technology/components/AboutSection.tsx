import React from 'react';
import { CheckCircle, ShieldCheck, Truck, Leaf } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-industrial-50 dark:bg-industrial-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-10 lg:mb-0">
             <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm mb-2">About Vision Filter</h2>
            <h3 className="text-3xl font-extrabold text-industrial-900 dark:text-white sm:text-4xl mb-6">
              Manufacturing for a Cleaner Tomorrow
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              <strong>Vision Filter</strong> (Yancheng Vision Manufacture Technology Co., Ltd) is located in the Yannan High-tech Zone, Yancheng, Jiangsu. 
              We are a specialized manufacturer of industrial filtration consumables, including dust collector filter bags, cages, and cartridges.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our mission is simple: <strong>Environmental Protection</strong>. We engineer our products to help factories achieve compliance with strict emission standards, ensuring zero pollution and a cleaner sky for future generations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Leaf className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h5 className="text-md font-bold text-industrial-900 dark:text-gray-100">Eco-Friendly Focus</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Reducing industrial emissions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Truck className="h-6 w-6 text-brand-600 dark:text-brand-400 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h5 className="text-md font-bold text-industrial-900 dark:text-gray-100">Global Export</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Professional logistics worldwide.</p>
                </div>
              </div>
               <div className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-brand-600 dark:text-brand-400 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h5 className="text-md font-bold text-industrial-900 dark:text-gray-100">Quality Assured</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Strict manufacturing standards.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-brand-600 dark:text-brand-400 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h5 className="text-md font-bold text-industrial-900 dark:text-gray-100">OEM/ODM Service</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Customized filtration solutions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              className="w-full rounded-lg shadow-xl" 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&fm=webp" 
              alt="Modern Manufacturing Facility" 
              loading="lazy"
              width="800"
              height="600"
              decoding="async"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-industrial-800 p-6 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="bg-brand-100 dark:bg-brand-900/50 p-3 rounded-full">
                  <FactoryIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-industrial-900 dark:text-white">Vision Filter</p>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Manufacture Technology</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FactoryIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M17 18h1" />
    <path d="M12 18h1" />
    <path d="M7 18h1" />
  </svg>
);

export default AboutSection;