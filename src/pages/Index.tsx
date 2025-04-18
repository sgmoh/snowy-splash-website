
import React from 'react';
import SnowAnimation from '@/components/SnowAnimation';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col">
      <SnowAnimation />
      
      <header className="relative z-10 p-4">
        <a href="/" className="flex items-center group">
          <Logo className="transition-transform duration-300 group-hover:scale-110" />
          <span className="ml-2 text-xl font-bold tracking-wider">snowy.ai</span>
        </a>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 space-y-8">
        <Logo jumping size="large" className="mx-auto" />
        
        <h1 className="text-5xl font-bold tracking-wider animate-pulse-scale text-shadow-glow">snowy.ai</h1>
        
        <p className="text-xl max-w-lg mx-auto text-center opacity-90 px-4 text-shadow-sm">
          A powerful discord bot maker with no code powered by <a href="https://discord.gg/swoosh" className="text-blue-400 hover:text-blue-300 font-medium">.gg/swoosh</a>
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Button 
            variant="default" 
            className="bg-black text-white border border-white hover:bg-gray-900"
            onClick={() => window.open('https://discord.gg/swoosh', '_blank')}
          >
            <MessageCircle className="mr-2" /> Join support server
          </Button>
          <Button 
            variant="outline" 
            className="bg-black text-white border-white hover:bg-gray-900"
            onClick={() => window.open('https://discord.gg/swoosh', '_blank')}
          >
            Make yours now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
