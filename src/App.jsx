import { useState, useEffect } from 'react';
import { 
  Send, 
  Flame, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  Star, 
  Trophy, 
  Activity 
} from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [liveUsers, setLiveUsers] = useState(1402);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const target = new Date();
      target.setHours(23, 59, 59);
      const diff = target - now;
      
      setTimeLeft({
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
      // Randomly fluctuate live users for "hype"
      setLiveUsers(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900 flex flex-col items-center p-4 font-sans selection:bg-purple-200">
      
      {/* 50% CHANGE: Floating "Live" Badge */}
      <div className="mb-4 flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
          {liveUsers} Players Online
        </span>
      </div>

      <div className="w-full max-w-md bg-white rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-white relative">
        
        {/* TOP SECTION: Visual Header */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src="/jpg1.jpeg" 
            className="w-full h-full object-cover scale-105"
            alt="Elite VIP"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          <div className="absolute top-6 left-6">
            <div className="bg-black/80 backdrop-blur-md text-yellow-400 px-3 py-1 rounded-lg text-[10px] font-black tracking-tighter uppercase border border-white/10">
              Verified Mod Tool v4.0
            </div>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="px-8 pb-10 -mt-12 relative z-10">
          
          {/* Main Headline with Highlight */}
          <div className="text-center space-y-2 mb-8">
             <h2 className="text-purple-600 font-black text-xs uppercase tracking-[0.3em]">7 Lottery Elite</h2>
             <h1 className="text-4xl font-[1000] leading-[0.95] tracking-tighter italic uppercase text-black">
                Color <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500">HACK</span> <br/>
                Prediction
             </h1>
          </div>

          {/* 50% CHANGE: Interactive Prediction Box */}
          <div className="bg-slate-900 rounded-3xl p-6 mb-8 text-center border-b-4 border-purple-800 shadow-xl">
            <div className="flex justify-between items-center mb-4 opacity-50">
              <Activity className="w-4 h-4 text-purple-400" />
              <span className="text-[8px] font-bold text-white uppercase tracking-widest">System Status: Active</span>
            </div>
            <p className="text-gray-400 text-xs font-bold uppercase mb-1">Today's Profit Target</p>
            <h3 className="text-3xl font-black text-white italic">₹2,500 — ₹5,000</h3>
            <div className="mt-4 flex justify-center gap-2">
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-red-500 w-[85%] animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* New Grid Layout for Benefits */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center">
              <Zap className="w-6 h-6 text-yellow-500 mb-1" />
              <span className="text-[9px] font-black uppercase text-gray-400">Accuracy</span>
              <span className="text-sm font-black italic">99.8%</span>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center">
              <ShieldCheck className="w-6 h-6 text-green-500 mb-1" />
              <span className="text-[9px] font-black uppercase text-gray-400">Security</span>
              <span className="text-sm font-black italic">Anti-Ban</span>
            </div>
          </div>

          {/* MAIN CTA */}
          <button 
            onClick={() => window.open('https://telegram.me/+uEWhmljkjB1jYWI1', '_blank')}
            className="group w-full bg-[#A020F0] hover:bg-black text-white py-6 rounded-[2rem] flex items-center justify-center gap-4 transition-all duration-500 shadow-2xl hover:-translate-y-1"
          >
            <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <span className="text-xl font-black uppercase tracking-tighter italic">Get Telegram Hack</span>
            <ChevronRight className="w-5 h-5 opacity-50" />
          </button>

          {/* Countdown Area */}
          <div className="mt-8 flex items-center justify-between px-2">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Next signal in:</span>
            <div className="flex gap-2 text-purple-600 font-black italic text-lg">
              <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
              <span className="animate-pulse">:</span>
              <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
              <span className="animate-pulse">:</span>
              <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>
        </div>

        {/* Footer Credit */}
        <div className="bg-gray-50 py-4 text-center">
          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
            Ads Managed by <span className="text-purple-600 underline">Bazigar ads</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;