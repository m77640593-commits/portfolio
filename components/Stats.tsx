
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Section } from '../types';

const data = [
  { name: 'Jan', v: 10 },
  { name: 'Feb', v: 25 },
  { name: 'Mar', v: 60 },
  { name: 'Apr', v: 120 },
  { name: 'May', v: 180 },
];

const Stats: React.FC = () => {
  return (
    <section id={Section.STATS} className="py-32">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-brand text-4xl font-bold mb-8 tracking-tight uppercase">OUR JOURNEY</h2>
            <p className="text-purple-200/60 mb-12 text-lg leading-relaxed">
              We started small, but our community grew faster than we ever imagined. We're grateful for every single player who visits our worlds.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="text-4xl font-brand font-bold text-white mb-1">180M+</div>
                <div className="text-[10px] font-bold text-purple-500 uppercase tracking-widest">Happy Visits</div>
              </div>
              <div>
                <div className="text-4xl font-brand font-bold text-purple-400 mb-1">450K</div>
                <div className="text-[10px] font-bold text-purple-500 uppercase tracking-widest">Friends in Group</div>
              </div>
            </div>
          </div>

          <div className="h-[350px] glass-purple p-8 rounded-[2.5rem] relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9333ea" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#9333ea" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a0b2e', borderRadius: '12px', border: '1px solid #3b0764', color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="v" 
                  stroke="#9333ea" 
                  strokeWidth={4}
                  fill="url(#purpleGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
