import React from 'react';
import { CrossIcon, CheckIcon, UserIcon, ClockIcon, AlertIcon } from './Icons';

const comparisons = [
    {
        niche: "NEGÓCIOS QUE PRECISAM DE LEADS",
        ad: "Por que seu concorrente fecha 15 vendas com 30 leads e você fecha 2 com 200?"
    },
    {
        niche: "EMAGRECIMENTO",
        ad: "Por que algumas mulheres emagrecem comendo pizza e outras engordam comendo salada?"
    },
    {
        niche: "ADVOGADOS TRIBUTÁRIOS",
        ad: "Algumas manobras (que quase parecem ilegais) mas são apenas um bom planejamento tributário."
    },
    {
        niche: "ESTÉTICA",
        ad: "Por que mulheres de 50 anos parecem ter 35 e outras de 35 parecem ter 50?"
    },
    {
        niche: "CONTABILIDADE",
        ad: "Por que algumas práticas tributárias poderiam ser consideradas ilegais mas não são. (E acabam economizando muito imposto para os XYZ)"
    }
];

const ProblemSolution: React.FC = () => {
  return (
    <>
        {/* THE PROBLEM */}
        <section className="py-32 bg-brand-black border-t border-brand-border relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-4">O Problema Hoje</h2>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-12 leading-tight">
                        A REALIDADE QUE TODO <br/> EMPRESÁRIO CONHECE
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="mt-1 p-2 bg-brand-gray rounded-lg border border-brand-border group-hover:border-red-500/50 transition-colors">
                                    <UserIcon className="text-brand-muted group-hover:text-red-400" />
                                </div>
                                <p className="text-lg text-brand-muted">Sua secretária tá cansada de atender curioso que pergunta preço e desaparece.</p>
                            </div>
                            
                            <div className="flex items-start gap-4 group">
                                <div className="mt-1 p-2 bg-brand-gray rounded-lg border border-brand-border group-hover:border-red-500/50 transition-colors">
                                    <ClockIcon className="text-brand-muted group-hover:text-red-400" />
                                </div>
                                <p className="text-lg text-brand-muted">Sua SDR perdendo tempo com reunião que não fecha.</p>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="mt-1 p-2 bg-brand-gray rounded-lg border border-brand-border group-hover:border-red-500/50 transition-colors">
                                    <AlertIcon className="text-brand-muted group-hover:text-red-400" />
                                </div>
                                <p className="text-lg text-brand-muted">Sua agenda lotada de "interessado" que nunca compra.</p>
                            </div>

                            <div className="pl-4 border-l-4 border-red-500 py-2">
                                <p className="text-white font-bold text-xl">Muito contato, pouco contrato.</p>
                            </div>
                        </div>

                        <div className="p-10 border border-brand-border bg-white/5 backdrop-blur-sm rounded-2xl relative overflow-hidden">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
                            <p className="text-2xl text-gray-300 leading-relaxed italic relative z-10">
                                "Enquanto você explica serviço de R$ 5 mil pra quem ganha R$ 2 mil... tem empresário com orçamento de R$ 50 mil procurando exatamente sua solução. <br/><br/>
                                <span className="text-white not-italic font-bold bg-red-500/20 px-2">Mas ele não te encontra.</span> <br/>
                                Porque seu anúncio atrai qualquer um, menos quem pode pagar."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* THE TURN */}
        <section className="py-32 bg-brand-gray border-t border-brand-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">A Virada</h2>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">NÃO É FALTA DE ANÚNCIO.<br/> É FORMATO DE ANÚNCIO.</h3>
                    <p className="text-brand-muted max-w-2xl mx-auto text-lg">A diferença não é filtrar por renda. É filtrar por DOR e DESEJO visceral.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center mb-8">
                         <p className="text-white text-xl">Olha a diferença entre anúncio genérico e <span className="text-emerald-400 font-bold underline decoration-emerald-500/30 underline-offset-4">anúncio filtrador</span>:</p>
                    </div>
                    
                    {comparisons.map((item, idx) => (
                        <div key={idx} className="p-8 bg-brand-black border border-brand-border hover:border-emerald-500/50 transition-colors group rounded-xl">
                            <h4 className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                                {idx % 2 === 0 ? <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span> : <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>}
                                {item.niche}
                            </h4>
                            <p className="text-white font-display font-medium leading-snug group-hover:text-emerald-200 transition-colors text-lg">
                                "{item.ad}"
                            </p>
                        </div>
                    ))}
                    
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12 p-10 bg-emerald-900/10 border border-emerald-900/30 rounded-2xl text-center backdrop-blur-sm">
                        <p className="text-xl text-emerald-100 font-medium">
                            A diferença? Esses anúncios fazem o avatar ideal pensar: <br/>
                            <strong className="text-white text-2xl block mt-2">"Como ele sabe exatamente isso?"</strong>
                        </p>
                        <p className="text-sm text-brand-muted mt-4 uppercase tracking-widest">É exatamente isso que os 4 assistentes fazem automaticamente.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* IMPACT */}
        <section className="py-32 bg-brand-black border-t border-brand-border">
            <div className="max-w-7xl mx-auto px-6">
                 <h2 className="text-center text-3xl md:text-4xl font-display font-bold text-white mb-20">IMPACTO NA OPERAÇÃO</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-10 border border-red-900/30 bg-red-900/5 rounded-2xl hover:bg-red-900/10 transition-colors">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-red-500/20 rounded-full"><CrossIcon className="text-red-500 w-6 h-6" /></div>
                            <h3 className="text-2xl font-bold text-red-200">ANTES</h3>
                        </div>
                        <ul className="space-y-6 text-brand-muted text-lg">
                            <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> SDR gastando tempo com "interessado em saber mais"</li>
                            <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Reunião com gente sem orçamento</li>
                            <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Explicando preço pra quem não pode pagar</li>
                        </ul>
                    </div>

                    <div className="p-10 border border-emerald-900/30 bg-emerald-900/5 rounded-2xl relative overflow-hidden hover:bg-emerald-900/10 transition-colors group">
                         <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 blur-[60px] rounded-full group-hover:bg-emerald-500/20 transition-all"></div>
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-3 bg-emerald-500/20 rounded-full"><CheckIcon className="text-emerald-500 w-6 h-6" /></div>
                            <h3 className="text-2xl font-bold text-emerald-200">DEPOIS</h3>
                        </div>
                        <ul className="space-y-6 text-gray-300 relative z-10 text-lg">
                            <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></span> Equipe focando em quem realmente importa</li>
                            <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></span> Cliente perguntando "quando posso começar?"</li>
                            <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></span> Lead que pergunta mais e compra mais</li>
                        </ul>
                        <div className="mt-10 pt-8 border-t border-emerald-500/20">
                            <p className="text-base text-emerald-400 font-medium italic">
                                "Os melhores leads nem sempre são os mais baratos. Mas pagam mais, mais rápido e mais fácil."
                            </p>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
    </>
  );
};

export default ProblemSolution;