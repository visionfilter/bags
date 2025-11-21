import React from 'react';
import { Product, ProductCategory } from '../types';
import { ArrowRight } from 'lucide-react';

const products: Product[] = [
  {
    id: '1',
    title: 'Filter Bags',
    category: ProductCategory.FILTER_BAG,
    description: 'High-efficiency filter bags for dust collection. Materials: Polyester, Nomex, PPS, P84, PTFE, Fiberglass.',
    // Force WebP via URL param
    imageUrl: 'https://images.unsplash.com/photo-1617723726210-125a8e656d6b?auto=format&fit=crop&q=80&w=600&fm=webp', 
    features: ['High Temp Resistance', 'Chemical Resistance', 'Custom Sizes']
  },
  {
    id: '2',
    title: 'Filter Cages',
    category: ProductCategory.FILTER_CAGE,
    description: 'Carbon steel or stainless steel skeletons to support filter bags. Available with epoxy, organic silicon, or galvanized finish.',
    imageUrl: 'https://images.unsplash.com/photo-1535813547-99c4f1a33963?auto=format&fit=crop&q=80&w=600&fm=webp',
    features: ['Stainless Steel 304/316', 'Galvanized Finish', 'Robust Welding']
  },
  {
    id: '3',
    title: 'Filter Cloth',
    category: ProductCategory.FILTER_CLOTH,
    description: 'Woven and non-woven filter fabrics. Precision engineered for optimal air permeability and dust retention.',
    imageUrl: 'https://images.unsplash.com/photo-1598556876316-35ebf4775221?auto=format&fit=crop&q=80&w=600&fm=webp',
    features: ['Excellent Tensile Strength', 'Diverse Weave Patterns', 'Micron Precision']
  },
  {
    id: '4',
    title: 'Dust Filter Cartridges',
    category: ProductCategory.FILTER_CARTRIDGE,
    description: 'Pleated filter cartridges for powder coating, sandblasting, and fume welding applications.',
    imageUrl: 'https://images.unsplash.com/photo-1585219391668-05f2d92f522d?auto=format&fit=crop&q=80&w=600&fm=webp',
    features: ['Nanofiber Coating', 'Low Pressure Drop', 'Easy Installation']
  },
];

const ProductSection: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white dark:bg-industrial-900 scroll-mt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm">Our Products</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-industrial-900 dark:text-white sm:text-4xl">
            Industrial Filtration Consumables
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            We provide the essential components for your dust collector to run efficiently and cleanly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <article key={product.id} className="group relative bg-white dark:bg-industrial-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-xl dark:hover:shadow-brand-900/20 transition-all duration-300 flex flex-col h-full">
              <div className="aspect-w-3 aspect-h-2 bg-gray-100 dark:bg-gray-800 overflow-hidden h-56 relative">
                <img
                  src={product.imageUrl}
                  alt={`${product.title} - Vision Filter Industrial Solutions`}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width="600"
                  height="400"
                  decoding="async"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase mb-2">{product.category}</span>
                <h4 className="text-lg font-bold text-industrial-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {product.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">{product.description}</p>
                
                <div className="mt-auto">
                  <ul className="mb-4 space-y-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2 border border-brand-600 text-brand-600 dark:text-brand-400 dark:border-brand-400 text-sm font-medium rounded hover:bg-brand-600 hover:text-white dark:hover:bg-brand-500 dark:hover:text-white transition-colors flex items-center justify-center">
                    Details <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;