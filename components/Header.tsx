import React from 'react';
import { MenuIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-black/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-lg font-display">B</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight font-display hidden sm:block">ROI SEM HYPE</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#assistants" className="text-sm font-medium text-brand-muted hover:text-white transition-colors uppercase tracking-widest">O Método</a>
          <a href="#pricing" className="text-sm font-medium text-brand-muted hover:text-white transition-colors uppercase tracking-widest">Preço</a>
        </nav>

        <button className="md:hidden text-white">
            <MenuIcon />
        </button>

        <a href="#pricing" className="hidden md:flex px-6 py-2 bg-white text-black text-sm font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors">
          Comprar Agora
        </a>
      </div>
    </header>
  );
};

export default Header;