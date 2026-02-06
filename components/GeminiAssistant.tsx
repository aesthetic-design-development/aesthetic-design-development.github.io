
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';
import { PROJECTS, CONTACT_CONFIG } from '../constants';

export const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: `Greetings. I am ${CONTACT_CONFIG.fullName}'s Technical AI Assistant. I have analyzed our current working plans, electrical legends, and structural elevations. How can I assist with your engineering inquiry?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const context = JSON.stringify(PROJECTS.map(p => ({ title: p.title, category: p.category, details: p.details })));
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: `
          System Role: You are the Senior AI Technical Consultant for ${CONTACT_CONFIG.fullName}. 
          Your tone is highly professional, technical, and confident.
          
          Portfolio Context:
          - The engineer is expert in AutoCAD, Revit, and Structural Analysis.
          - Current showcased works: ${context}
          - Key expertise: Floor Plans (Scale 1:100), Electrical Legend compliance, Facade Elevations.
          
          Instructions:
          - Use engineering terminology (MEP, Seismic Loads, GFRC, BIM, Load-bearing).
          - Be concise.
          - If asked about fees, suggest "requesting a formal proposal" via the contact section.
          
          User Query: ${input}` }] }
        ],
        config: {
          temperature: 0.6,
        },
      });

      const assistantMessage: ChatMessage = { 
        role: 'assistant', 
        content: response.text || "Technical connection error. Please re-state your query." 
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Connection to the intelligence hub failed. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-[450px] h-[600px] glass border border-amber-500/30 rounded-3xl flex flex-col overflow-hidden shadow-2xl animate-fade-in-up">
          <div className="p-6 bg-amber-500 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-amber-500 shadow-inner">
                <i className="fas fa-microchip"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-950 font-black text-xs uppercase tracking-widest">Project Consultant</span>
                <span className="text-slate-950/60 text-[8px] font-bold uppercase tracking-tighter">Powered by Gemini Intelligence</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-950 hover:scale-110 transition-transform">
              <i className="fas fa-times-circle text-xl"></i>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950/60 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-amber-500 text-slate-950 font-medium rounded-tr-none' 
                    : 'glass text-slate-200 rounded-tl-none border-white/5'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass p-4 rounded-2xl rounded-tl-none border-white/5 text-[10px] text-slate-400 flex items-center gap-3 font-bold uppercase tracking-widest">
                  <span className="flex gap-1">
                    <span className="w-1 h-1 bg-amber-500 rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1 h-1 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </span>
                  Processing technical data...
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-white/10 flex gap-3 bg-slate-900/40">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Inquire about structural specs..."
              className="flex-1 bg-slate-950/80 border border-white/5 px-5 py-3 text-xs text-white outline-none focus:border-amber-500/50 rounded-xl transition-all"
            />
            <button 
              onClick={handleSend}
              className="w-12 h-12 bg-amber-500 text-slate-950 rounded-xl flex items-center justify-center hover:bg-white transition-all shadow-lg"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center shadow-2xl shadow-amber-500/20 hover:scale-105 hover:-rotate-3 transition-all duration-500"
        >
          <i className="fas fa-microchip text-2xl group-hover:hidden"></i>
          <i className="fas fa-headset text-2xl hidden group-hover:block animate-pulse"></i>
          <div className="absolute -top-2 -right-2 bg-white text-[8px] px-2 py-1 rounded-full text-slate-950 font-black uppercase shadow-lg">
            Online
          </div>
        </button>
      )}
    </div>
  );
};
