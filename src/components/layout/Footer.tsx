import Link from 'next/link';
import Image from 'next/image';
import { JSX } from 'react/jsx-dev-runtime';

const navigation = {
  company: [
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Hizmetler', href: '/services' },
    { name: 'Projeler', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/contact' },
  ],
  services: [
    { name: 'Web Yazılım Çözümleri', href: '/services/web-development' },
    { name: 'Otomasyon & Süreç Yönetimi', href: '/services' },
    { name: 'Özel Yazılım Geliştirme', href: '/services' },
    { name: 'Ölçeklenebilir Sistemler', href: '/services' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/madware-solutions', icon: 'linkedin' },
    { name: 'Email', href: 'mailto:madwaresolutions@email.com', icon: 'email' },
    { name: 'Website', href: 'https://www.madwaresolutions.com', icon: 'website' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/madware.png"
                alt="Madware Solutions"
                width={56}
                height={56}
                className="w-14 h-14"
              />
              <span className="text-2xl font-bold text-foreground">Madware<span className="font-light">Solutions</span></span>
            </Link>
            <p className="mt-6 text-sm text-secondary max-w-md leading-relaxed">
              İş süreçlerini kolaylaştıran ve dijital dönüşümü destekleyen yazılım çözümleri geliştiren bir teknoloji girişimiyiz. 
              Proje odaklı, esnek ve sürdürülebilir sistemler üretiriz.
            </p>
            {/* Brand tagline with icon */}
            <div className="mt-4 flex items-center gap-2 text-primary">
              <Image src="/images/madware.png" alt="" width={16} height={16} className="w-4 h-4" />
              <span className="text-sm font-medium">Akıllı Yazılım. Gerçek Çözümler.</span>
            </div>
            {/* Contact Info */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-secondary">
                <span>📧</span>
                <a href="mailto:madwaresolutions@email.com" className="hover:text-foreground transition-colors">
                  madwaresolutions@email.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <span>📱</span>
                <a href="tel:+905435911111" className="hover:text-foreground transition-colors">
                  +90 543 591 11 11
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Kurumsal</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Hizmetler</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary">
            © {currentYear} Madware Solutions. Tüm hakları saklıdır.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-secondary hover:text-foreground transition-colors"
                aria-label={item.name}
                target={item.icon !== 'email' ? '_blank' : undefined}
                rel={item.icon !== 'email' ? 'noopener noreferrer' : undefined}
              >
                <SocialIcon name={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    linkedin: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    email: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    website: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  };

  return icons[name] || null;
}
