import React from 'react';
import { ArrowRightIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-black border-t border-brand-border pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                1 HORA. 4 ASSISTENTES. <br/>
                <span className="text-emerald-400">R$ 19,90.</span>
            </h2>
            <p className="text-xl text-brand-muted mb-12">
                Sua SDR, secretária ou IA de agendamentos vão agradecer.
            </p>
            
            <a href="#pricing" className="inline-flex px-8 py-4 bg-white hover:bg-emerald-400 text-black font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 items-center gap-3">
                QUERO OS 4 ASSISTENTES AGORA <ArrowRightIcon />
            </a>
            
            <p className="mt-6 text-xs text-brand-muted uppercase tracking-widest">
                ROI SEM HYPE. SEMPRE.
            </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-brand-border text-xs text-brand-muted flex flex-col md:flex-row justify-between items-center gap-4">
        <span>&copy; 2024 Brands Decoded AI. All rights reserved.</span>
        <div className="flex gap-6">
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;