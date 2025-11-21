import React from 'react';
import { TargetIcon, LayersIcon } from './Icons';

const Origin: React.FC = () => {
  return (
    <section className="py-32 bg-brand-black border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-block p-3 bg-brand-gray border border-brand-border rounded-full mb-8">
                <LayersIcon className="text-white" />
            </div>
            
            <h2 className="text-sm font-bold text-brand-muted uppercase tracking-widest mb-4">A Origem</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-12">DE ONDE VEM ESSE MÉTODO</h3>
            
            <div className="space-y-8 text-lg text-brand-muted leading-relaxed">
                <p>
                    Sempre acelerei negócios com <strong className="text-white">Growth + IA</strong>.
                    Trabalhei com infoprodutos, pós-graduações, produtos físicos, consultorias e serviços.
                </p>
                
                <div className="flex items-center justify-center gap-4 py-6">
                    <div className="h-px w-12 bg-brand-border"></div>
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-xl">
                         <TargetIcon />
                         <span>Total: R$ 18MM+ movimentados</span>
                    </div>
                    <div className="h-px w-12 bg-brand-border"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
                    <div className="p-6 border border-brand-border rounded-xl bg-brand-gray">
                        <span className="text-emerald-500 font-bold block mb-2">O Insight</span>
                        <p className="text-sm">IA resolve lead desqualificado sistematicamente.</p>
                    </div>
                    <div className="p-6 border border-brand-border rounded-xl bg-brand-gray">
                        <span className="text-red-500 font-bold block mb-2">O Problema</span>
                        <p className="text-sm">1 IA fazendo tudo "alucina" e perde o foco.</p>
                    </div>
                    <div className="p-6 border border-brand-border rounded-xl bg-brand-gray">
                        <span className="text-white font-bold block mb-2">A Solução</span>
                        <p className="text-sm">4 IAs especializadas trabalhando em cadeia.</p>
                    </div>
                </div>
                
                <p className="text-sm uppercase tracking-widest pt-8">Esse conhecimento embasou os assistentes.</p>
            </div>
        </div>
    </section>
  );
};

export default Origin;