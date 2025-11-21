import React from 'react';
import { CheckIcon, CrossIcon } from './Icons';

const OfferDetails: React.FC = () => {
  return (
    <>
      {/* WHAT YOU GET */}
      <section className="py-32 bg-brand-black border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/2">
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-12">O QUE VOCÊ LEVA</h3>
                    <div className="space-y-10">
                        <div className="flex gap-6 items-start">
                            <div className="mt-1 p-1 bg-emerald-500/20 rounded"><CheckIcon className="text-emerald-500 w-5 h-5" /></div>
                            <div>
                                <h4 className="text-white font-bold text-xl mb-2">1 HORA de conteúdo direto</h4>
                                <p className="text-brand-muted leading-relaxed">Zero teoria. Aprende fazendo. Parte de formato validado + IAs configuradas.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="mt-1 p-1 bg-emerald-500/20 rounded"><CheckIcon className="text-emerald-500 w-5 h-5" /></div>
                            <div>
                                <h4 className="text-white font-bold text-xl mb-2">4 ASSISTENTES GPT prontos</h4>
                                <p className="text-brand-muted leading-relaxed">Configurados e testados. Usa hoje mesmo. Acesso vitalício aos prompts.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="mt-1 p-1 bg-emerald-500/20 rounded"><CheckIcon className="text-emerald-500 w-5 h-5" /></div>
                            <div>
                                <h4 className="text-white font-bold text-xl mb-2">Resultado Imediato</h4>
                                <p className="text-brand-muted leading-relaxed">Mínimo: 2 anúncios prontos pra rodar. Depois: Carrosséis completos em minutos.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 bg-brand-gray border border-brand-border p-10 rounded-2xl shadow-lg shadow-black/50">
                    <h4 className="text-2xl font-bold text-white mb-6">POR QUE 1 HORA?</h4>
                    <p className="text-brand-muted leading-relaxed mb-6 text-lg">
                        Você não parte do zero. Parte de formato validado + IAs configuradas + prompts testados.
                    </p>
                    <p className="text-brand-muted leading-relaxed mb-8 text-lg">
                        Não precisa aprender IA. Só executar. É como ter GPS ligado em vez de perguntar direção na rua. 
                    </p>
                    <div className="bg-emerald-900/10 border-l-4 border-emerald-500 pl-6 py-4">
                        <p className="text-emerald-100 font-bold text-lg">Eficiência, não velocidade.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="py-32 bg-brand-gray border-t border-brand-border">
         <div className="max-w-7xl mx-auto px-6">
             <h2 className="text-center text-4xl font-display font-bold text-white mb-20">PRA QUEM É / NÃO É</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 
                 {/* IS FOR */}
                 <div className="bg-emerald-900/5 border border-emerald-900/20 p-10 rounded-2xl hover:border-emerald-900/40 transition-colors">
                    <h3 className="text-emerald-400 font-bold text-2xl mb-8 flex items-center gap-3">
                        <CheckIcon className="w-8 h-8" /> É PRA VOCÊ:
                    </h3>
                    <ul className="space-y-4 text-gray-300 text-lg">
                        <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Já investe em marketing</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Cansou de lead desqualificado</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Quer otimizar tempo e conversão</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Vai aplicar o que aprender</li>
                    </ul>
                 </div>

                 {/* IS NOT FOR */}
                 <div className="bg-red-900/5 border border-red-900/20 p-10 rounded-2xl hover:border-red-900/40 transition-colors">
                    <h3 className="text-red-400 font-bold text-2xl mb-8 flex items-center gap-3">
                        <CrossIcon className="w-8 h-8" /> NÃO É PRA VOCÊ:
                    </h3>
                    <ul className="space-y-4 text-gray-300 text-lg">
                        <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-500"></span>Nunca fez anúncio</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-500"></span>Quer "milagre" sem trabalho</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-500"></span>Não vai implementar</li>
                        <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-500"></span>Acha que IA faz tudo sozinha</li>
                    </ul>
                    <p className="mt-8 text-sm text-red-300/60 uppercase tracking-wide border-t border-red-900/20 pt-6">
                        *Se não quer investir 1 hora pra ter centenas de leads mais qualificados, esse produto não é pra você.
                    </p>
                 </div>

             </div>
         </div>
      </section>
    </>
  );
};

export default OfferDetails;