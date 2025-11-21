import React from 'react';
import { NewsItem } from '../types';
import { Calendar } from 'lucide-react';

const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'CleanFiltration Attends Filtech Germany 2024',
    date: 'Oct 12, 2023',
    summary: 'Visit our booth at Hall 4 to see our latest high-temperature PTFE membrane filter bags designed for waste incineration plants.',
    imageUrl: 'https://picsum.photos/400/250?random=6',
    category: 'Company News'
  },
  {
    id: '2',
    title: 'Understanding Hydrolysis in Polyester Filter Bags',
    date: 'Sep 28, 2023',
    summary: 'A technical guide on how to prevent premature failure of filter bags in high-humidity environments.',
    imageUrl: 'https://picsum.photos/400/250?random=7',
    category: 'Industry Insight'
  },
  {
    id: '3',
    title: 'Shipping Update: 4 Containers to South America',
    date: 'Sep 15, 2023',
    summary: 'Successfully delivered a full set of filter cages and bags for a large-scale cement plant project in Brazil.',
    imageUrl: 'https://picsum.photos/400/250?random=8',
    category: 'Company News'
  }
];

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-white dark:bg-industrial-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm">Latest Updates</h2>
            <h3 className="mt-2 text-3xl font-extrabold text-industrial-900 dark:text-white">News & Technical Insights</h3>
          </div>
          <a href="#news" className="hidden sm:block text-brand-600 hover:text-brand-800 dark:text-brand-400 dark:hover:text-brand-300 font-medium">
            View All News &rarr;
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((item) => (
            <article key={item.id} className="flex flex-col bg-white dark:bg-industrial-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                  width="400"
                  height="250"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="px-2 py-1 bg-brand-50 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 rounded-full text-xs font-medium mr-3">
                    {item.category}
                  </span>
                  <Calendar size={14} className="mr-1" />
                  {item.date}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 line-clamp-3">
                  {item.summary}
                </p>
                <a href="#" className="text-brand-600 dark:text-brand-400 font-medium hover:underline mt-auto">
                  Read Article
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;