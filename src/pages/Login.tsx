
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import SnowAnimation from '@/components/SnowAnimation';

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col">
      <SnowAnimation />
      
      <header className="relative z-10 p-4">
        <Link to="/" className="flex items-center group">
          <Logo className="transition-transform duration-300 group-hover:scale-110" />
          <span className="ml-2 text-xl font-bold tracking-wider">snowy.ai</span>
        </Link>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 p-4">
        <div className="w-full max-w-md bg-black bg-opacity-70 p-8 rounded-lg border border-white">
          <h1 className="text-3xl font-bold mb-8 text-center">Login to snowy.ai</h1>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="your@email.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="••••••••"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-black text-white border border-white hover:bg-gray-900"
            >
              Login
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p>Don't have an account? <Link to="/signup" className="text-blue-400 hover:text-blue-300">Sign up</Link></p>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
