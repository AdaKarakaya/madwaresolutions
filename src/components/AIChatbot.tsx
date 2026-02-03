'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const quickReplies = [
  'Hizmetleriniz nelerdir?',
  'Nasıl proje başlatabilirim?',
  'Hangi teknolojileri kullanıyorsunuz?',
  'Projelerinizi görebilir miyim?',
];

// Simulated AI responses - In production, this would call an AI API
const getAIResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hizmet') || lowerMessage.includes('servis') || lowerMessage.includes('ne yapıyor')) {
    return `Madware Solutions olarak sunduğumuz hizmetler:

**🌐 Web Tabanlı Yazılım Çözümleri** - Modern, kullanıcı dostu web uygulamaları.

**⚙️ Otomasyon & Süreç Yönetimi** - İş süreçlerini dijitalleştiren çözümler.

**💻 Özel Yazılım Geliştirme** - İhtiyacınıza özel, sıfırdan tasarlanmış sistemler.

**📈 Ölçeklenebilir Sistem Mimarileri** - Büyüyen işletmenizle birlikte büyüyen altyapılar.

Hangi hizmet hakkında daha fazla bilgi almak istersiniz?`;
  }
  
  if (lowerMessage.includes('başla') || lowerMessage.includes('proje') || lowerMessage.includes('iletişim')) {
    return `Bizimle proje başlatmak çok kolay:

1. **📞 İlk Görüşme** - İhtiyaçlarınızı anlayalım
2. **📋 Teklif** - Detaylı proje planı ve zaman çizelgesi sunalım
3. **🤝 Başlangıç** - Onay sonrası keşif aşamasıyla başlayalım
4. **🚀 Geliştirme** - Çevik metodoloji ile hızlı ilerleme

**İletişim Bilgileri:**
📧 madwaresolutions@email.com
📱 +90 543 591 11 11
🌐 www.madwaresolutions.com

[İletişim sayfamızı](/contact) ziyaret edebilirsiniz!`;
  }
  
  if (lowerMessage.includes('teknoloji') || lowerMessage.includes('stack') || lowerMessage.includes('dil')) {
    return `Kullandığımız güncel teknolojiler:

**Frontend:** Next.js, React, TypeScript, Tailwind CSS
**Backend:** Node.js, Python
**Veritabanı:** PostgreSQL, MongoDB, Redis
**Cloud:** AWS, Vercel
**AI/ML:** TensorFlow, OpenAI

Her proje için ihtiyaca en uygun teknolojileri seçiyoruz.`;
  }
  
  if (lowerMessage.includes('proje') || lowerMessage.includes('portföy') || lowerMessage.includes('çalışma') || lowerMessage.includes('örnek')) {
    return `Bazı öne çıkan projelerimiz:

**TaskMind** - Görev yönetimi ve ekip koordinasyon platformu (%70 verimlilik artışı)
**NoteIt** - Akıllı not alma uygulaması (4.7/5 kullanıcı puanı)
**UpYKS** - YKS hazırlık platformu (10,000+ aktif öğrenci)

Tüm projelerimizi [/case-studies](/case-studies) adresinden inceleyebilirsiniz 📊`;
  }
  
  if (lowerMessage.includes('fiyat') || lowerMessage.includes('ücret') || lowerMessage.includes('bütçe')) {
    return `Proje maliyetleri, kapsam ve karmaşıklığa göre değişir. 

Proje bazlı çalışma modelimizle:
- MVP & pilot çözümler
- Özel yazılım geliştirme
- Uzun vadeli yazılım partnerliği

Detaylı fiyat teklifi için iletişime geçelim! 
📧 madwaresolutions@email.com`;
  }
  
  if (lowerMessage.includes('merhaba') || lowerMessage.includes('selam') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return `Merhaba! 👋 Madware Solutions'a hoş geldiniz!

İş süreçlerinizi dijitalleştiren yazılım çözümlerimiz hakkında size yardımcı olmak için buradayım.

Ne öğrenmek istersiniz?`;
  }
  
  return `Mesajınız için teşekkürler! Madware Solutions hakkında genel sorularınızı yanıtlayabilirim.

**Hızlı Linkler:**
- 📧 [İletişim](/contact)
- 💼 [Hizmetlerimiz](/services)
- 📊 [Projelerimiz](/case-studies)

Hizmetlerimiz hakkında başka bir şey açıklamamı ister misiniz?`;
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Merhaba! 👋 Madware asistanıyım. Hizmetlerimiz, proje fikirleriniz veya çalışma şeklimiz hakkında sorularınızı yanıtlayabilirim.

Size nasıl yardımcı olabilirim?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const aiResponse = getAIResponse(messageText);
    
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: aiResponse,
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages(prev => [...prev, assistantMessage]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <Image src="/images/madware.png" alt="Chat" width={32} height={32} className="w-8 h-8" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Image src="/images/madware.png" alt="Madware" width={28} height={28} className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">Madware Asistan</h3>
              <p className="text-xs text-white/70">Anında yanıt veriyor</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Sohbeti kapat"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px] min-h-[300px]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    message.role === 'user'
                      ? 'bg-primary text-white rounded-br-md'
                      : 'bg-muted text-foreground rounded-bl-md'
                  }`}
                >
                  <div className="text-sm whitespace-pre-wrap leading-relaxed">
                    {message.content.split(/(\[.*?\]\(.*?\))/).map((part, i) => {
                      const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                      if (linkMatch) {
                        return (
                          <a
                            key={i}
                            href={linkMatch[2]}
                            className={`underline ${message.role === 'user' ? 'text-white' : 'text-primary'}`}
                          >
                            {linkMatch[1]}
                          </a>
                        );
                      }
                      return part;
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleSend(reply)}
                  className="text-xs px-3 py-1.5 bg-muted hover:bg-primary/10 text-foreground rounded-full transition-colors border border-border hover:border-primary/30"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Mesajınızı yazın..."
                className="flex-1 px-4 py-2.5 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={isTyping}
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Mesaj gönder"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
