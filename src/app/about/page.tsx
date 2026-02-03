import { Metadata } from 'next';
import { Container, Section, Card, CardContent, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Madware Solutions hakkında - vizyonumuz, misyonumuz ve iş süreçlerini dijitalleştiren çözümlerimiz.',
};

const values = [
  {
    title: 'Çevik ve Çözüm Odaklı',
    description: 'Sorunları hızlı analiz eden, etkili çözümler üreten deneyimli ekibimizle çalışın.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Proje Bazlı Hızlı Geliştirme',
    description: 'MVP ve pilot çözümlerle hızla başlayın. İteratif geliştirme yaklaşımımızla projenizi adım adım büyütüyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Doğrudan İletişim',
    description: 'Aracı olmadan, doğrudan ekiple çalışın. Şeffaf ve açık iletişim anlayışımızla projelerinizi yönetin.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: 'Esnek ve Sürdürülebilir',
    description: 'Bugünün ihtiyaçlarını karşılayan, yarının değişimlerine hazır sistemler geliştiriyoruz.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Hakkımızda
            </h1>
            <p className="mt-6 text-lg text-secondary leading-relaxed">
              İş süreçlerini kolaylaştıran ve dijital dönüşümü destekleyen yazılım çözümleri geliştiren bir teknoloji girişimiyiz.
            </p>
          </div>
        </Container>
      </Section>

      {/* Vision & Mission */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-primary text-white border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-4">Vizyonumuz</h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  İş süreçlerini dijitalleştiren, inovatif ve sürdürülebilir yazılım çözümleriyle 
                  işletmelere değer katan güvenilir teknoloji ortağı olmak.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Misyonumuz</h2>
                <p className="text-secondary text-lg leading-relaxed">
                  Proje odaklı, esnek ve sürdürülebilir sistemler üreterek, ihtiyaca özel geliştirilen 
                  gerçek kullanım senaryolarına sahip projeler sunmak.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Our Story */}
      <Section className="bg-muted/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-8">
              Madware Solutions Kimdir?
            </h2>
            <div className="prose prose-lg max-w-none text-secondary">
              <p className="text-lg leading-relaxed mb-6">
                Madware Solutions, iş süreçlerini kolaylaştıran ve dijital dönüşümü destekleyen 
                yazılım çözümleri geliştiren bir teknoloji girişimidir. 2026 yılında kurulan 
                şirketimiz, proje odaklı, esnek ve sürdürülebilir sistemler üretir.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Yazılımı yalnızca kod değil, iş değeri olarak ele alırız. İhtiyaca özel geliştirilen, 
                gerçek kullanım senaryolarına sahip projeler üretiyoruz. Web tabanlı yazılım çözümleri, 
                otomasyon & süreç yönetimi, özel yazılım geliştirme ve ölçeklenebilir sistem 
                mimarileri konularında hizmet veriyoruz.
              </p>
              <p className="text-lg leading-relaxed">
                TaskMind, NoteIt ve UpYKS gibi projelerimiz, kullanıcı odaklı arayüzlere sahip, 
                güncel teknolojilerle geliştirilmiş sistemlerdir. Her biri iş süreçlerini 
                dijitalleştiren gerçek çözümler sunmaktadır.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Neden Madware Solutions?
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
              Bizi farklı kılan değerlerimiz ve yaklaşımımız.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-secondary">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/50">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Birlikte Çalışalım
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
              Projelerinize özel çözümler üretmek için birlikte çalışalım. 
              Proje bazlı geliştirme, MVP & pilot çözümler ve uzun vadeli yazılım partnerliği için iletişime geçin.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                İletişime Geçin
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
