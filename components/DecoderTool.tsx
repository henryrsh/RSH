import React from 'react';
import { BrainIcon, RobotIcon, PenIcon, ImageIcon, ArrowRightIcon } from './Icons';

const TheAssistants: React.FC = () => {
  return (
    <section id="assistants" className="py-32 bg-brand-gray relative border-t border-brand-border overflow-hidden">
       {/* Background subtle glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full filter blur-[100px] pointer-events-none" />

       <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
                <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">O Segredo</h2>
                <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">OS 4 ASSISTENTES</h3>
                <p className="text-brand-muted max-w-2xl mx-auto text-lg">
                    Fluxo: FAUSTO → DENIS → ANDREW → JESSICA = Pronto.<br/>
                    Cada IA especializada numa tarefa. Por isso funciona.
                </p>
            </div>

            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                    
                    {/* FAUSTO */}
                    <div className="bg-brand-black border border-brand-border p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group relative">
                        <div className="absolute hidden md:block -right-6 top-1/2 -translate-y-1/2 z-20 text-brand-border">
                            <ArrowRightIcon className="w-6 h-6 opacity-50" />
                        </div>
                        <div className="w-14 h-14 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ring-1 ring-purple-500/20 group-hover:ring-purple-500/50">
                           <BrainIcon />
                        </div>
                        <h4 className="text-white font-bold text-xl mb-2">1. FAUSTO</h4>
                        <p className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-6">Mapeador de Avatar</p>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            DNA completo do seu cliente ideal: perfil psicológico, dores ocultas e linguagem nativa.
                        </p>
                    </div>

                    {/* DENIS */}
                    <div className="bg-brand-black border border-brand-border p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group relative">
                        <div className="absolute hidden md:block -right-6 top-1/2 -translate-y-1/2 z-20 text-brand-border">
                            <ArrowRightIcon className="w-6 h-6 opacity-50" />
                        </div>
                        <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ring-1 ring-blue-500/20 group-hover:ring-blue-500/50">
                           <RobotIcon />
                        </div>
                        <h4 className="text-white font-bold text-xl mb-2">2. DENIS</h4>
                        <p className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-6">Analista de Produto</p>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Entende profundamente qual problema você resolve e como sua solução é única.
                        </p>
                    </div>

                    {/* ANDREW */}
                    <div className="bg-brand-black border border-brand-border p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group relative">
                        <div className="absolute hidden md:block -right-6 top-1/2 -translate-y-1/2 z-20 text-brand-border">
                            <ArrowRightIcon className="w-6 h-6 opacity-50" />
                        </div>
                        <div className="w-14 h-14 bg-yellow-500/10 text-yellow-400 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ring-1 ring-yellow-500/20 group-hover:ring-yellow-500/50">
                           <PenIcon />
                        </div>
                        <h4 className="text-white font-bold text-xl mb-2">3. ANDREW</h4>
                        <p className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-6">Copywriter Magnético</p>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Transforma o DNA em roteiros de carrossel que atraem só quem importa e repelem curiosos.
                        </p>
                    </div>

                    {/* JESSICA */}
                    <div className="bg-brand-black border border-brand-border p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
                        <div className="w-14 h-14 bg-pink-500/10 text-pink-400 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ring-1 ring-pink-500/20 group-hover:ring-pink-500/50">
                           <ImageIcon />
                        </div>
                        <h4 className="text-white font-bold text-xl mb-2">4. JESSICA</h4>
                        <p className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-6">Designer Automática</p>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Estrutura o design e entrega o carrossel finalizado pronto para postar ou anunciar.
                        </p>
                    </div>

                </div>
            </div>
            
            <div className="mt-20 text-center">
                 <a href="#pricing" className="inline-flex items-center gap-3 text-emerald-400 hover:text-emerald-300 transition-colors font-bold uppercase tracking-widest text-sm border-b border-emerald-400 pb-1 hover:border-emerald-300">
                    Quero acesso aos 4 assistentes <ArrowRightIcon />
                 </a>
            </div>
       </div>
    </section>
  );
};

export default TheAssistants;