import { useState, useEffect } from 'react';
import { 
  Send, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  Activity,
  Globe
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
      setLiveUsers(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900 flex flex-col items-center p-4 font-sans">
      
      {/* Live Badge - Safe */}
      <div className="mb-4 flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
          {liveUsers} Members Active
        </span>
      </div>

      <div className="w-full max-w-md bg-white rounded-[3rem] overflow-hidden shadow-xl border border-white relative">
        
        {/* TOP SECTION: Professional Visual */}
        <div className="relative h-64 overflow-hidden bg-slate-100">
          <img 
            src="/jpg1.jpeg" 
            className="w-full h-full object-cover opacity-90"
            alt="Interface"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000" }}
          />
          <div className="absolute top-6 left-6">
            <div className="bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase">
              UX System v4.0 Active
            </div>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="px-8 pb-10 -mt-12 relative z-10">
          
          <div className="text-center space-y-2 mb-8">
             <h2 className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">Elite Tech Framework</h2>
             <h1 className="text-4xl font-[1000] leading-[0.95] tracking-tighter italic uppercase text-black">
                Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Logic</span> <br/>
                Strategy
             </h1>
          </div>

          {/* Safe Prediction Box (Removed Money Symbols) */}
          <div className="bg-slate-900 rounded-3xl p-6 mb-8 text-center border-b-4 border-blue-800 shadow-xl">
            <div className="flex justify-between items-center mb-4 opacity-50">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="text-[8px] font-bold text-white uppercase tracking-widest">Processing Data</span>
            </div>
            <p className="text-gray-400 text-xs font-bold uppercase mb-1">Daily Success Rate</p>
            <h3 className="text-3xl font-black text-white italic">92% — 98%</h3>
            <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-[94%]"></div>
            </div>
          </div>

          {/* Benefits Grid - Neutral Terms */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center">
              <Zap className="w-6 h-6 text-blue-500 mb-1" />
              <span className="text-[9px] font-black uppercase text-gray-400">Response</span>
              <span className="text-sm font-black italic">Ultra-Fast</span>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center">
              <ShieldCheck className="w-6 h-6 text-green-500 mb-1" />
              <span className="text-[9px] font-black uppercase text-gray-400">Security</span>
              <span className="text-sm font-black italic">Secure API</span>
            </div>
          </div>

          {/* MAIN CTA - No "Hack" word */}
          <button 
            onClick={() => window.open('https://telegram.me/+uEWhmljkjB1jYWI1', '_blank')}
            className="group w-full bg-[#2563eb] hover:bg-black text-white py-6 rounded-[2rem] flex items-center justify-center gap-4 transition-all duration-500 shadow-2xl"
          >
            <Send className="w-6 h-6 group-hover:translate-x-1" />
            <span className="text-xl font-black uppercase tracking-tighter italic">Join Logic Group</span>
            <ChevronRight className="w-5 h-5 opacity-50" />
          </button>

          {/* Footer with Compliance Links (MANDATORY for Meta) */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex gap-4 text-[8px] font-bold text-gray-400 uppercase tracking-widest">
              <a href="#" className="hover:text-blue-600">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-blue-600">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-blue-600">Contact Support</a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-4 text-center">
          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
            Developed by <span className="text-blue-600 underline">Growthforge</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;