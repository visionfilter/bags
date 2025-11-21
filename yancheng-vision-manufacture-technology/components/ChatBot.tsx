import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Hello! I am the CleanFiltration AI Assistant. How can I help you with our filter bags, cages, or cloths today?',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      
      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${isOpen ? 'bg-red-500 rotate-90' : 'bg-brand-600 hover:bg-brand-700'} text-white`}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white dark:bg-industrial-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden max-h-[600px] h-[80vh] transition-colors duration-300">
          
          {/* Header */}
          <div className="bg-brand-600 p-4 flex items-center border-b border-brand-700">
            <div className="bg-white rounded-full p-1 mr-3">
              <MessageCircle size={20} className="text-brand-600" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">CleanFiltration Assistant</h3>
              <p className="text-brand-100 text-xs">Online - Powered by Gemini</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-industrial-900 space-y-4 scrollbar-thin">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-600 text-white rounded-br-none' 
                    : 'bg-white dark:bg-industrial-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white dark:bg-industrial-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 rounded-bl-none shadow-sm">
                   <Loader2 size={16} className="animate-spin text-brand-600 dark:text-brand-400" />
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-industrial-800 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center bg-gray-100 dark:bg-industrial-900 rounded-full px-4 py-2 border border-transparent dark:border-gray-700">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about filter bags..."
                className="bg-transparent flex-1 outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading || !input.trim()}
                className={`ml-2 p-1 rounded-full transition-colors ${input.trim() ? 'text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-industrial-800' : 'text-gray-400 dark:text-gray-600'}`}
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-gray-400 dark:text-gray-500">AI responses may vary. Contact sales for quotes.</span>
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default ChatBot;