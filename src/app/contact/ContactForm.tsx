'use client';

import { useState } from 'react';
import { Button } from '@/components/ui';

type FormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [state, setState] = useState<FormState>({ success: false, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setState({ success: false, message: '' });

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Validation
    const errors: FormState['errors'] = {};

    if (!name || name.trim().length < 2) {
      errors.name = 'Ad en az 2 karakter olmalıdır';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Mesaj en az 10 karakter olmalıdır';
    }

    if (Object.keys(errors).length > 0) {
      setState({
        success: false,
        message: 'Lütfen hataları düzeltin',
        errors,
      });
      setIsPending(false);
      return;
    }

    // Simulate sending (statik sitede gerçek backend olmayacağı için)
    await new Promise((resolve) => setTimeout(resolve, 500));

    setState({
      success: true,
      message: 'Mesajınız alındı! Size en kısa sürede dönüş yapacağız.',
    });
    setIsPending(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {state.success && (
        <div className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4">
          <p className="text-green-800 dark:text-green-200">{state.message}</p>
        </div>
      )}

      {/* Error Message */}
      {!state.success && state.message && (
        <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4">
          <p className="text-red-800 dark:text-red-200">{state.message}</p>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Ad Soyad
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Adınız Soyadınız"
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{state.errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          E-posta
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="ornek@email.com"
        />
        {state.errors?.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{state.errors.email}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          placeholder="Projeniz hakkında bize bilgi verin..."
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{state.errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? 'Gönderiliyor...' : 'Mesaj Gönder'}
      </Button>
    </form>
  );
}
