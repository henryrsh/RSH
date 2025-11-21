import React from 'react';
import { ArrowRightIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-brand-black selection:bg-white selection:text-black">
      
      {/* --- Background Effects Layer --- */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', 
             backgroundSize: '60px 60px'
           }} 
      />
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-900/40 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-emerald-900/30 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[10%] w-[700px] h-[700px] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob animation-delay-4000" />
      </div>
      <div className="bg-noise z-10 mix-blend-overlay"></div>

      {/* --- Content Layer --- */}
      <div className="max-w-7xl mx-auto px-6 relative z-30">
        <div className="max-w-4xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80">
              Baseado em R$ 18MM+ em vendas
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tighter text-white mb-8 animate-slide-up">
            SUA SDR, SECRETÁRIA OU IA DE AGENDAMENTOS VÃO FICAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">LOUCAS</span>.
          </h1>
          
          <div className="flex flex-col md:flex-row items-start gap-12 mt-12 animate-slide-up">
            <p className="text-lg md:text-xl text-brand-muted max-w-lg leading-relaxed">
              Em 1 hora de conteúdo direto, você sai com anúncios prontos, feitos com <strong className="text-white">4 assistentes de IA</strong>, para espantar os curiosos e começar a encher seu negócio de leads qualificados.
            </p>

            <div className="flex flex-col gap-4 w-full md:w-auto">
               <a href="#pricing" className="group relative px-8 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:scale-105 text-center">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    QUERO OS 4 ASSISTENTES AGORA <ArrowRightIcon />
                  </span>
               </a>
               <span className="text-[10px] uppercase tracking-widest text-brand-muted text-center">
                  ROI SEM HYPE • Acesso Imediato
               </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 w-full z-30 border-t border-brand-border/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-brand-muted">
            <div className="flex gap-8">
                <span className="text-emerald-400">● DISPONÍVEL AGORA</span>
                <span className="hidden sm:inline text-white/50">///</span>
                <span className="hidden sm:inline">Para qualquer nicho</span>
            </div>
            <div className="flex items-center gap-2 animate-bounce">
                <span>Descubra o problema</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;