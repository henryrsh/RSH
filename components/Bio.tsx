import React from 'react';

const Bio: React.FC = () => {
  return (
    <section className="py-32 bg-brand-black border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/3">
                    <div className="aspect-square bg-brand-gray rounded-2xl border border-brand-border flex items-center justify-center text-brand-muted relative overflow-hidden group">
                         {/* Placeholder for Image */}
                         <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                         <span className="relative z-10">[FOTO DO SPECIALISTA]</span>
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">QUEM SOU EU</h4>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">SEU NOME AQUI</h2>
                    <p className="text-brand-muted text-lg leading-relaxed mb-6">
                        Especialista em Growth & IA com track record comprovado.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-8">
                        Criei este produto porque cansei de ver empresários bons queimando dinheiro com tráfego ruim. 
                        Acredito que a tecnologia deve servir ao lucro, não ao hype.
                    </p>
                    <div className="p-6 bg-brand-gray border border-brand-border rounded-xl">
                        <p className="text-sm text-gray-400 italic">
                            "Meu objetivo não é te vender curso. É te dar ROI para que você compre minhas consultorias high-ticket no futuro. <strong className="text-white not-italic">ROI SEM HYPE.</strong>"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Bio;