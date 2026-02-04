import { useState, useEffect } from 'react';
import { Send, Shield, Zap, Activity, Globe } from 'lucide-react';

export default function App() {
  const [active, setActive] = useState(1402);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Dynamic Status Badge */}
      <div className="mb-6 flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-400/80">
          {active} Online Now
        </span>
      </div>

      <div className="w-full max-w-sm bg-gradient-to-b from-slate-900 to-black rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative">
        
        {/* Header Visual */}
        <div className="relative h-56 bg-slate-800">
          <img 
            src="/jpg1.jpeg" 
            className="w-full h-full object-cover opacity-60"
            alt="Data Analysis"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent"></div>
        </div>

        {/* Content */}
        <div className="px-8 pb-10 -mt-20 relative z-10">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-[900] tracking-tighter italic uppercase leading-none">
             <span className="text-cyan-400"></span><br/>
              
            </h1>
          </div>

          {/* Stats Card */}
          <div className="bg-white/5 border mt-20 border-white/10 rounded-3xl p-6 mb-8 text-center backdrop-blur-xl">
            <div className="flex justify-between items-center mb-4 opacity-40">
              <Activity size={14} className="text-cyan-400" />
              <span className="text-[8px] font-bold uppercase tracking-widest">v4.0 Live</span>
            </div>
            <p className="text-slate-400 text-[10px] font-bold uppercase mb-2 tracking-widest">Accuracy Rate</p>
            <div className="text-4xl font-black text-white italic tracking-tighter">94% — 98%</div>
            <div className="mt-5 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 w-[96%] shadow-[0_0_15px_#22d3ee]"></div>
            </div>
          </div>

          {/* Main Button */}
          <button 
            onClick={() => window.open('https://telegram.me/+uEWhmljkjB1jYWI1', '_blank')}
            className="group w-full bg-cyan-500 hover:bg-white text-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 font-black uppercase italic tracking-tighter shadow-[0_10px_20px_-5px_rgba(34,211,238,0.4)]"
          >
            <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            <span className="text-lg">Join Group</span>
          </button>

          {/* Minimal Footer */}
          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex gap-6 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Support</a>
            </div>
            <p className="text-[8px] text-slate-600 font-bold uppercase tracking-[0.3em]">
              Powered by <span className="text-slate-400">Growthforge</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}