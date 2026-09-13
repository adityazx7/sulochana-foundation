import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { foundationData } from '../data/foundationData';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-surface-50 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-peace-100 text-peace-800 text-xs font-bold tracking-wider uppercase mb-3 border border-peace-200">
            <Sparkles className="w-3.5 h-3.5 text-sun-600" />
            <span>Voices of Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 mt-1 tracking-tight">
            Stories from the Communities We Walk Beside
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-peace-600 to-sun-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real experiences reflecting the heartfelt change brought into everyday lives across Mumbai chawls, schools, and hospitals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {foundationData.testimonials.map(item => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-soft-card hover:shadow-soft-hover border border-slate-200 hover:border-peace-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-0.5 rounded-full bg-peace-50 text-peace-800 border border-peace-200">
                    {item.domain}
                  </span>
                </div>

                <div className="text-peace-200 mb-2">
                  <Quote className="w-8 h-8 rotate-180" />
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed mb-6 font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-sans">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
