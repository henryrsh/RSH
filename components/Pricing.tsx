import React from 'react';
import { ArrowRightIcon } from './Icons';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-brand-gray border-t border-brand-border relative overflow-hidden">
        {/* Glint Effect */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-8">Investimento</h2>
            
            <div className="bg-brand-black border border-brand-border p-12 rounded-3xl relative shadow-2xl shadow-emerald-900/20 hover:border-emerald-500/30 transition-colors duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-black font-bold px-6 py-2 text-sm uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    Oferta Limitada
                </div>

                <div className="flex items-center justify-center gap-4 mb-6 mt-4">
                    <span className="text-2xl text-brand-muted line-through decoration-red-500 decoration-2">R$ 197</span>
                </div>
                <div className="text-8xl md:text-9xl font-display font-bold text-white mb-6 tracking-tighter">
                    <span className="text-4xl align-top mr-2 text-brand-muted">R$</span>19,90
                </div>
                <p className="text-brand-muted mb-10 text-lg">Menos que você gasta errando lead por 1 mês.</p>

                <a href="#" className="group relative block w-full py-6 bg-white hover:bg-emerald-400 hover:text-black text-black font-bold text-lg uppercase tracking-widest transition-all mb-8 overflow-hidden hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:scale-[1.02]">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        QUERO OS 4 ASSISTENTES AGORA <ArrowRightIcon />
                    </span>
                </a>

                <div className="text-sm text-brand-muted space-y-3 pt-6 border-t border-brand-border/50">
                    <p>Por que tão barato? Faz parte do plano de ter a maior escola de Growth IA do Brasil.</p>
                    <p>Você gera mais lucro pra investir nas próximas soluções. <span className="text-white font-bold">Win-win.</span></p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Pricing;