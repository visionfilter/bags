import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang?: Language; // Optional to avoid breaking if not passed, but we will pass it
}

const Footer: React.FC<FooterProps> = ({ lang = 'en' }) => {
  return (
    <footer className="bg-industrial-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
                {/* Small Version of Logo in Footer */}
                <img 
                  src="https://placehold.co/150x60/111827/22c55e?text=Vision+Filter&font=roboto" 
                  alt="Vision Filter Logo" 
                  className="h-8 w-auto object-contain" 
                />
            </div>
            <div className="mb-6">
                 <span className="block text-lg font-bold text-white leading-tight">Vision Filter</span>
                 <span className="text-xs text-gray-400">Yancheng Vision Manufacture Technology Co., Ltd</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Professional industrial filtration manufacturer. <br/>
              Yiyun town kecheng street yannan high-tech zone, Tinghu, Yancheng, Jiangsu China.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.linkedin.com/in/dustfilterbag/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/jijingwang" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/wangjijing626/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="Instagram">
                <Instagram size={20} />
              </a>
               <a href="https://twitter.com/gigiwang26500" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="X (Twitter)">
                <Twitter size={20} />
              </a>
              <a href="https://www.pinterest.com/wangjijing626/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-bold text-sm" title="Pinterest">
                P
              </a>
              <a href="https://www.tiktok.com/@dustfilterbagsupplier" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-bold text-sm" title="TikTok">
                T
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-brand-400">Filter Bags</a></li>
              <li><a href="#products" className="hover:text-brand-400">Filter Cages</a></li>
              <li><a href="#products" className="hover:text-brand-400">Filter Cartridges</a></li>
              <li><a href="#products" className="hover:text-brand-400">Woven Cloth</a></li>
              <li><a href="#products" className="hover:text-brand-400">Accessories</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-brand-400">About Us</a></li>
              <li><a href="#news" className="hover:text-brand-400">Industry News</a></li>
              <li><a href="#downloads" className="hover:text-brand-400">Downloads & Catalog</a></li>
              <li><a href="#contact" className="hover:text-brand-400">Contact Sales</a></li>
            </ul>
          </div>

          {/* Contact Small */}
          <div>
             <h4 className="text-white font-semibold mb-4">Contact</h4>
             <p className="text-sm text-gray-400 mb-2">
               <span className="block text-xs uppercase text-gray-500">Sales Manager</span>
               <span className="text-white font-medium">Gigi</span>
             </p>
             <p className="text-sm text-gray-400 mb-2">
               <span className="block text-xs uppercase text-gray-500">Phone / WhatsApp / WeChat</span>
               <span className="text-white font-medium">+86 139 2180 7310</span>
             </p>
             <div className="pt-4 border-t border-gray-800">
                <p className="text-xs text-gray-500">Making the sky cleaner.</p>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vision Filter (Yancheng Vision Manufacture Technology Co., Ltd). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;