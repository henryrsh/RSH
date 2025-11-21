import React, { useState } from 'react';

const FAQ: React.FC = () => {
  return (
      <section className="py-32 bg-brand-gray border-t border-brand-border">
          <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 text-center">PERGUNTAS FREQUENTES</h2>
              <div className="space-y-4">
                  <FAQItem q="Funciona com GPT gratuito?" a="Sim. Totalmente compatível com a versão gratuita do ChatGPT." />
                  <FAQItem q="Preciso saber IA ou programação?" a="Não. Os prompts já estão prontos. É só copiar, colar e preencher com seus dados." />
                  <FAQItem q="Tem suporte?" a="Sim. Temos a assistente Silvia para dúvidas de acesso e um grupo de alunos." />
                  <FAQItem q="Cria anúncios magicamente?" a="Não existe mágica. Você direciona com as informações do seu negócio, a IA estrutura a persuasão baseada no método." />
                  <FAQItem q="Serve para qualquer nicho?" a="Sim. Já testamos de tickets de R$ 19,90 a contratos B2B de R$ 200 mil. O princípio humano é o mesmo." />
                  <FAQItem q="E se eu não aplicar?" a="Então não compre. Esse produto é para quem executa e quer resultado." />
              </div>
          </div>
      </section>
  );
};

const FAQItem = ({ q, a }: { q: string, a: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className="border border-brand-border bg-brand-black p-6 hover:border-emerald-500/30 transition-all cursor-pointer rounded-lg group"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center">
                <h4 className="text-white font-bold text-lg flex items-center gap-3 group-hover:text-emerald-400 transition-colors">
                    <span className="text-emerald-500 text-sm font-normal">0{Math.floor(Math.random() * 9) + 1}</span> {q}
                </h4>
                <span className={`text-brand-muted transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-brand-muted leading-relaxed pl-8 border-l border-brand-border">
                    {a}
                </p>
            </div>
        </div>
    );
};

export default FAQ;