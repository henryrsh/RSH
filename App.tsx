import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/Services';
import TheAssistants from './components/DecoderTool';
import OfferDetails from './components/OfferDetails';
import Origin from './components/Origin';
import Pricing from './components/Pricing';
import Bio from './components/Bio';
import FAQ from './components/AuthorityFAQ';
import Closing from './components/Closing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="bg-brand-black min-h-screen text-white selection:bg-emerald-400 selection:text-black">
      <Header />
      <Hero />
      <ProblemSolution />
      <TheAssistants />
      <OfferDetails />
      <Origin />
      <Pricing />
      <Bio />
      <FAQ />
      <Closing />
      <Footer />
    </main>
  );
};

export default App;