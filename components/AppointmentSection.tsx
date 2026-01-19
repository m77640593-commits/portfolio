
import React, { useState, useEffect, useMemo } from 'react';
import { Section } from '../types';

const AppointmentSection: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    date: '',
    time: '',
    timezone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  // Detect timezone and human-friendly location name
  const detectTimezone = () => {
    setIsSyncing(true);
    try {
      const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setFormData(prev => ({ ...prev, timezone: zone }));
    } catch (e) {
      setFormData(prev => ({ ...prev, timezone: 'UTC' }));
    }
    setTimeout(() => setIsSyncing(false), 600);
  };

  useEffect(() => {
    detectTimezone();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.username && formData.date && formData.time && formData.timezone) {
      setSubmitted(true);
    }
  };

  // Format the location name for the UI (e.g., "New York" instead of "America/New_York")
  const locationLabel = useMemo(() => {
    if (!formData.timezone) return 'Detecting...';
    const parts = formData.timezone.split('/');
    return parts[parts.length - 1].replace(/_/g, ' ');
  }, [formData.timezone]);

  return (
    <section id={Section.APPOINTMENT} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
              Global Scheduling System
            </div>
            <h2 className="font-brand text-3xl md:text-5xl font-bold mb-6 tracking-tight uppercase">Book a Call</h2>
            <p className="text-purple-200/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Our system has automatically detected your location in <span className="text-purple-400 font-bold underline decoration-purple-500/30 underline-offset-4">{locationLabel}</span>. 
              Pick a time that works for your local schedule.
            </p>
          </div>

          <div className="glass-purple p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-purple-500/20 relative overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-fuchsia-600/5 rounded-full blur-3xl pointer-events-none"></div>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="md:col-span-2 space-y-4">
                    <label className="flex justify-between items-end text-[10px] md:text-xs font-bold text-purple-400 uppercase tracking-[0.2em] ml-1">
                      <span>Roblox Identity</span>
                      <span className="opacity-40 font-normal">Step 1 of 2</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      placeholder="Enter your username"
                      className="w-full bg-white/5 border border-purple-500/20 rounded-2xl px-6 py-4 md:py-5 text-white focus:outline-none focus:border-purple-500 transition-all placeholder:text-purple-500/20 text-lg"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <label className="block text-[10px] md:text-xs font-bold text-purple-400 uppercase tracking-[0.2em] ml-1">
                      Pick Date
                    </label>
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-2xl px-6 py-4 md:py-5 text-white focus:outline-none focus:border-purple-500 transition-all [color-scheme:dark] text-lg"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-[10px] md:text-xs font-bold text-purple-400 uppercase tracking-[0.2em] ml-1">
                      Local Time
                    </label>
                    <input 
                      type="time" 
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-2xl px-6 py-4 md:py-5 text-white focus:outline-none focus:border-purple-500 transition-all [color-scheme:dark] text-lg"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-4">
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-[10px] md:text-xs font-bold text-purple-400 uppercase tracking-[0.2em] ml-1">
                        Detected Timezone
                      </label>
                      <button 
                        type="button" 
                        onClick={detectTimezone}
                        className={`text-[9px] font-bold text-purple-500/60 uppercase tracking-widest hover:text-purple-400 transition-colors flex items-center gap-2 ${isSyncing ? 'animate-pulse' : ''}`}
                      >
                        <span className={isSyncing ? 'animate-spin' : ''}>🔄</span> {isSyncing ? 'Syncing...' : 'Sync with Browser'}
                      </button>
                    </div>
                    <div className="relative group">
                      <input 
                        type="text" 
                        required
                        value={formData.timezone}
                        onChange={(e) => setFormData({...formData, timezone: e.target.value})}
                        className="w-full bg-purple-900/10 border border-purple-500/20 rounded-2xl px-6 py-4 md:py-5 text-purple-200/80 focus:outline-none focus:border-purple-500 transition-all cursor-default"
                        readOnly
                      />
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-3">
                         <span className="text-[10px] font-bold text-purple-500/50 uppercase hidden sm:block tracking-widest">Auto-Detected</span>
                         <span className="text-xl">🌎</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-500/10">
                  <button 
                    type="submit"
                    className="w-full py-5 md:py-7 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-extrabold rounded-2xl md:rounded-[2rem] transition-all shadow-xl shadow-purple-900/40 active:scale-95 uppercase tracking-[0.2em] text-sm md:text-base flex items-center justify-center gap-3"
                  >
                    Confirm Appointment <span>✨</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-10 animate-in fade-in zoom-in duration-500 relative z-10">
                <div className="w-24 h-24 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-purple-500/30 soft-glow">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="font-brand text-2xl md:text-4xl text-white mb-6 uppercase tracking-tight">Request Logged</h3>
                <div className="inline-block bg-white/5 border border-purple-500/10 p-6 md:p-8 rounded-[2rem] mb-10 text-left w-full max-w-md mx-auto">
                  <p className="text-purple-200/50 text-xs font-bold uppercase tracking-widest mb-4 opacity-60">Meeting Details</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-400/80 text-sm">Developer</span>
                      <span className="text-white font-bold">{formData.username}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-400/80 text-sm">Date</span>
                      <span className="text-white font-bold">{formData.date}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-400/80 text-sm">Local Time</span>
                      <span className="text-fuchsia-400 font-bold">{formData.time}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-400/80 text-sm">Zone</span>
                      <span className="text-purple-300/60 text-xs font-medium">{formData.timezone}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-6">
                  <p className="text-purple-200/50 text-sm max-w-xs">We have synchronized your request across our cloud. Vortex will contact you on Roblox soon.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-purple-400 font-bold uppercase tracking-widest text-[10px] hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Schedule another session
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
