import React from 'react';
import { ArrowRightIcon } from './Icons';

const Closing: React.FC = () => {
  return (
    <section className="py-32 bg-brand-black border-t border-brand-border relative overflow-hidden">
         <div className="absolute inset-0 opacity-30" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at center, #10b981 1px, transparent 1px)', 
             backgroundSize: '40px 40px'
           }} 
        />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-10 leading-tight tracking-tighter">
                1 HORA. <br/>
                4 ASSISTENTES. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">R$ 19,90.</span>
            </h2>
            
            <p className="text-xl text-brand-muted mb-12 max-w-2xl mx-auto">
                Sua SDR, secretária ou IA de agendamentos vão agradecer.
            </p>
            
            <div className="flex flex-col items-center gap-6">
                <a href="#pricing" className="inline-flex px-10 py-5 bg-white hover:bg-emerald-400 text-black font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] items-center gap-3">
                    QUERO OS 4 ASSISTENTES AGORA <ArrowRightIcon />
                </a>
                <p className="text-xs text-brand-muted uppercase tracking-[0.3em]">
                    ROI SEM HYPE. SEMPRE.
                </p>
            </div>
        </div>
    </section>
  );
};

export default Closing;