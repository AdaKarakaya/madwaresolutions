'use client';

import { useState } from 'react';
import Image from 'next/image';

interface NewsletterFormProps {
  source?: string;
  variant?: 'default' | 'inline' | 'footer';
  className?: string;
}

export default function NewsletterForm({ 
  source = 'website', 
  variant = 'default',
  className = '' 
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Geçerli bir e-posta adresi giriniz');
      return;
    }
    
    setStatus('loading');
    
    // Simulate submission (static site için gerçek backend yok)
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setStatus('success');
    setMessage('Bültene başarıyla kaydoldunuz!');
    setEmail('');
  };

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta adresiniz"
          className="flex-1 px-4 py-2 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          disabled={status === 'loading'}
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? '...' : 'Kayıt Ol'}
        </button>
      </form>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={className}>
        <h4 className="text-sm font-semibold text-foreground mb-3">Güncel Kalın</h4>
        {status === 'success' ? (
          <p className="text-sm text-accent">✓ {message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@email.com"
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              disabled={status === 'loading'}
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-3 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Kaydediliyor...' : 'Kayıt Ol'}
            </button>
            {status === 'error' && (
              <p className="text-xs text-red-500">{message}</p>
            )}
          </form>
        )}
      </div>
    );
  }

  // Default variant - full card
  return (
    <div className={`bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <Image src="/images/madware.png" alt="" width={32} height={32} className="w-8 h-8" />
        <h3 className="text-xl font-bold text-foreground">Bültenimize Katılın</h3>
      </div>
      
      <p className="text-secondary mb-6">
        Yazılım geliştirme, AI ve teknoloji hakkında en güncel içerikleri e-postanızda alın.
      </p>
      
      {status === 'success' ? (
        <div className="flex items-center gap-3 p-4 bg-accent/20 rounded-lg">
          <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <span className="text-foreground">{message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresinizi girin"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              disabled={status === 'loading'}
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'loading' ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Kaydediliyor...
                </span>
              ) : (
                'Kayıt Ol'
              )}
            </button>
          </div>
          
          {status === 'error' && (
            <p className="text-sm text-red-500">{message}</p>
          )}
          
          <p className="text-xs text-secondary">
            Spam yok, istediğiniz zaman abonelikten çıkabilirsiniz. Gizliliğinize saygı duyuyoruz.
          </p>
        </form>
      )}
    </div>
  );
}
