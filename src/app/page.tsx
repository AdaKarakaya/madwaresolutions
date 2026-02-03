import { Container, Section, Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { FadeIn, CountUp } from '@/components/ui/Animations';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Web Tabanlı Yazılım Çözümleri',
    description: 'Modern, kullanıcı dostu web uygulamaları. İhtiyaca özel geliştirilen, gerçek kullanım senaryolarına sahip projeler.',
    href: '/services/web-development',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Otomasyon & Süreç Yönetimi',
    description: 'İş süreçlerini dijitalleştiren ve kolaylaştıran otomasyon çözümleri. Verimliliği artıran akıllı sistemler.',
    href: '/services',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: 'Özel Yazılım Geliştirme',
    description: 'İşletmenizin ihtiyaçlarına özel, sıfırdan tasarlanmış yazılım çözümleri. Proje odaklı çalışma modeli.',
    href: '/services',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: 'Ölçeklenebilir Sistem Mimarileri',
    description: 'Büyüyen işletmenizle birlikte büyüyen, esnek ve sürdürülebilir altyapı çözümleri.',
    href: '/services',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
];

const clients = [
  'İnovatif şirketler tarafından tercih ediliyoruz',
];

const stats = [
  { value: 3, suffix: '', label: 'Aktif Proje' },
  { value: 95, suffix: '%', label: 'Müşteri Memnuniyeti' },
  { value: 2026, suffix: '', label: 'Kuruluş Yılı' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        {/* Background decoration with brand icon watermark */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          {/* Subtle brand watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
            <Image src="/images/madware.png" alt="" width={600} height={600} className="w-[600px] h-[600px]" />
          </div>
        </div>
        
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Hero brand icon */}
            <FadeIn>
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/30 blur-2xl rounded-full scale-150" />
                  <Image 
                    src="/images/madware.png" 
                    alt="Madware Solutions" 
                    width={96} 
                    height={96} 
                    className="w-24 h-24 relative drop-shadow-2xl"
                    priority 
                  />
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={50}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                2026'da yeni projeler için başvurularınızı bekliyoruz
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Akıllı yazılım.{' '}
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Gerçek çözümler.
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={150}>
              <p className="mt-6 text-lg sm:text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
                İş süreçlerini kolaylaştıran ve dijital dönüşümü destekleyen yazılım çözümleri geliştiren bir teknoloji girişimiyiz.
                Proje odaklı, esnek ve sürdürülebilir sistemler üretiriz.
              </p>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" size="lg">
                  <Image src="/images/madware.png" alt="" width={20} height={20} className="w-5 h-5 mr-2" />
                  Projenizi Başlatın
                </Button>
                <Button href="/case-studies" variant="outline" size="lg">
                  Projelerimizi İnceleyin
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Button>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={250}>
              <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-foreground">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs sm:text-sm text-secondary mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section>
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <Image src="/images/madware.png" alt="" width={40} height={40} className="w-10 h-10" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Çözüm Alanlarımız
              </h2>
              <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
                İhtiyacınıza özel geliştirilen, iş süreçlerinizi dijitalleştiren yazılım çözümleri.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 100}>
                <Link href={service.href} className="block h-full">
                  <Card className="hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{service.description}</CardDescription>
                      <span className="inline-flex items-center text-sm text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        Daha fazla
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={400}>
            <div className="text-center mt-10">
              <Button href="/services" variant="secondary">
                Tüm Hizmetleri Görün →
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Featured Case Study */}
      <Section className="bg-muted/30">
        <Container>
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 text-primary font-medium mb-2">
                  <Image src="/images/madware.png" alt="" width={20} height={20} className="w-5 h-5" />
                  <span className="text-sm">Öne Çıkan Proje</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  TaskMind - Görev Yönetimi Platformu
                </h2>
                <p className="text-secondary mb-6">
                  Ekip koordinasyonu ve görev takibi için geliştirilmiş kapsamlı bir platform. 
                  Kullanıcı odaklı arayüz ve güçlü özelliklerle ekip verimliliğini %70 artırdık.
                </p>
                <div className="flex gap-6 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-primary">70%</div>
                    <div className="text-sm text-secondary">Verimlilik artışı</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">90%</div>
                    <div className="text-sm text-secondary">Memnuniyet</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">50%</div>
                    <div className="text-sm text-secondary">Gecikme azalması</div>
                  </div>
                </div>
                <Button href="/case-studies" variant="outline">
                  Tüm Projeleri İncele →
                </Button>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <p className="text-secondary text-sm">TaskMind Dashboard</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-muted/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Neden Madware Solutions?
                </h2>
                <p className="mt-4 text-lg text-secondary">
                  Sadece yazılım geliştiricileri değil, teknoloji ortaklarınızız. Çevik ve çözüm odaklı 
                  ekibimizle, her proje için performans, ölçeklenebilirlik ve uzun vadeli başarıya odaklanıyoruz.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    'Çevik ve çözüm odaklı ekip',
                    'Proje bazlı hızlı geliştirme',
                    'Doğrudan ve şeffaf iletişim',
                    'Esnek ve sürdürülebilir yazılım yaklaşımı',
                  ].map((item, index) => (
                    <FadeIn key={item} delay={index * 100} direction="left">
                      <li className="flex items-start gap-3">
                        <Image src="/images/madware.png" alt="" width={20} height={20} className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/about">Hakkımızda Daha Fazla →</Button>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={200}>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary">
                      <CountUp end={95} suffix="%" />
                    </div>
                    <div className="text-secondary mt-1">Müşteri Memnuniyeti</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">MVP</div>
                    <div className="text-secondary mt-1">Hızlı Prototipleme</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">Çevik</div>
                    <div className="text-secondary mt-1">Geliştirme Süreci</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Latest from Blog */}
      <Section>
        <Container>
          <FadeIn>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Son İçerikler</h2>
                <p className="mt-2 text-secondary">Yazılım, teknoloji ve proje yönetimi üzerine düşüncelerimiz.</p>
              </div>
              <Button href="/blog" variant="outline" className="hidden sm:inline-flex">
                Tüm Yazılar →
              </Button>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Yazılımı İş Değeri Olarak Ele Alıyoruz',
                excerpt: 'İhtiyaca özel geliştirilen projeler üretme yaklaşımımız.',
                category: 'Yaklaşım',
                date: '15 Ocak 2026',
              },
              {
                title: 'Proje Portföyümüz: TaskMind, NoteIt ve UpYKS',
                excerpt: 'İş süreçlerini dijitalleştiren çözümlerimiz hakkında.',
                category: 'Projeler',
                date: '10 Ocak 2026',
              },
              {
                title: 'Çevik ve Çözüm Odaklı Ekip',
                excerpt: 'Neden Madware Solutions? Esnek yaklaşımımız.',
                category: 'Yaklaşım',
                date: '5 Ocak 2026',
              },
            ].map((post, index) => (
              <FadeIn key={post.title} delay={index * 100}>
                <Card className="hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-6">
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-secondary text-sm mb-4">{post.excerpt}</p>
                    <span className="text-xs text-secondary">{post.date}</span>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:hidden">
            <Button href="/blog" variant="outline">Tüm Yazılar →</Button>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <FadeIn>
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
              {/* Background pattern with brand icon */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-60 h-60 border border-white rounded-full translate-x-1/3 translate-y-1/3" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image src="/images/madware.png" alt="" width={200} height={200} className="w-[200px] h-[200px] brightness-0 invert opacity-20" />
                </div>
              </div>
              
              <div className="relative">
                {/* CTA Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Image src="/images/madware.png" alt="" width={40} height={40} className="w-10 h-10" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Ready to build something great?
                </h2>
                <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
                  Let&apos;s discuss your project and explore how we can help you achieve 
                  your goals with smart, scalable software solutions.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-6 py-3 font-medium hover:bg-blue-50 transition-colors"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
