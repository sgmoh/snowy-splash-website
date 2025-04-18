
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Bot, Settings } from 'lucide-react';
import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const user = {
    email: 'test@example.com',
    username: 'TestUser'
  };

  const handleBotCreation = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be implemented with Supabase later
    console.log('Bot creation form submitted');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <Logo className="transition-transform duration-300 group-hover:scale-110" />
            <span className="ml-2 text-xl font-bold tracking-wider">snowy.ai</span>
          </Link>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10"
            onClick={() => {
              // Logout functionality will be implemented with Supabase
              window.location.href = '/';
            }}
          >
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Hi @{user.username} 👋</h1>

        <Card className="bg-black border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-6 w-6" />
              Create Your Bot
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleBotCreation} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="botName">Bot Name</Label>
                  <Input
                    id="botName"
                    placeholder="My Awesome Bot"
                    className="bg-black border-white/20 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="botToken">Bot Token</Label>
                  <Input
                    id="botToken"
                    type="password"
                    placeholder="Enter your Discord bot token"
                    className="bg-black border-white/20 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Bot Description</Label>
                  <Input
                    id="description"
                    placeholder="Describe what your bot does"
                    className="bg-black border-white/20 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="prefix">Command Prefix</Label>
                  <Input
                    id="prefix"
                    placeholder="!"
                    className="bg-black border-white/20 text-white"
                  />
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full bg-black text-white border border-white hover:bg-gray-900"
              >
                Create Bot
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
