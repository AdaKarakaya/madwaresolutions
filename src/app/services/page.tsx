import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Hizmetler',
  description: 'Yazılım çözümlerimizi keşfedin: Web Tabanlı Yazılım, Otomasyon & Süreç Yönetimi, Özel Yazılım Geliştirme ve Ölçeklenebilir Sistem Mimarileri.',
};

const services = [
  {
    id: 'web',
    slug: 'web-development',
    title: 'Web Tabanlı Yazılım Çözümleri',
    description: 'Modern, kullanıcı dostu web uygulamaları. Güncel teknolojilerle geliştirilmiş sistemler.',
    details: [
      'Özel web uygulaması geliştirme',
      'Progressive Web Apps (PWA)',
      'E-ticaret platformları',
      'İçerik yönetim sistemleri',
      'API geliştirme ve entegrasyon',
      'Performans optimizasyonu',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    id: 'automation',
    slug: null,
    title: 'Otomasyon & Süreç Yönetimi',
    description: 'İş süreçlerini dijitalleştiren ve kolaylaştıran otomasyon çözümleri.',
    details: [
      'İş süreci otomasyonu',
      'Görev yönetimi sistemleri',
      'Akış yönetimi ve koordinasyon',
      'Veri entegrasyonu',
      'Raporlama ve analitik',
      'Süreç optimizasyonu',
    ],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'RabbitMQ'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    id: 'custom',
    slug: null,
    title: 'Özel Yazılım Geliştirme',
    description: 'İhtiyacınıza özel, sıfırdan tasarlanmış yazılım çözümleri.',
    details: [
      'İhtiyaç analizi ve danışmanlık',
      'Özel uygulama geliştirme',
      'Entegrasyon ve migrasyon',
      'Kullanıcı arayüzü tasarımı',
      'Test ve kalite güvence',
      'Bakım ve destek',
    ],
    technologies: ['React', 'TypeScript', 'Python', 'PostgreSQL', 'AWS'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    id: 'scalable',
    slug: null,
    title: 'Ölçeklenebilir Sistem Mimarileri',
    description: 'Büyüyen işletmenizle birlikte büyüyen, esnek ve sürdürülebilir altyapılar.',
    details: [
      'Mikroservis mimarileri',
      'Cloud altyapı kurulumu',
      'Performans ve ölçeklenebilirlik',
      'Güvenlik ve yetkilendirme',
      'DevOps ve CI/CD',
      'İzleme ve bakım',
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'MongoDB'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Hizmetlerimiz
            </h1>
            <p className="mt-6 text-lg text-secondary leading-relaxed">
              İhtiyaçlarınıza özel, uçtan uca yazılım çözümleri sunuyoruz. 
              Fikir aşamasından dağıtıma kadar, ekibimiz vizyonunuzu hayata geçirir.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services List */}
      <Section>
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg text-secondary">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {service.slug && (
                    <div className="mt-6">
                      <Button href={`/services/${service.slug}`} variant="outline" size="sm">
                        Daha Fazla Bilgi →
                      </Button>
                    </div>
                  )}
                </div>
                <Card className={`h-fit ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-base">Kullandığımız Teknolojiler</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-muted rounded-full text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="bg-muted/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Çalışma Sürecimiz
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
              Kaliteli teslimat ve açık iletişimi garanti eden yapılandırılmış yaklaşımımız.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Keşif', description: 'İhtiyaçlarınızı, hedeflerinizi ve kısıtlarınızı anlama.' },
              { step: '02', title: 'Planlama', description: 'Mimari tasarım, zaman çizelgesi ve kilometre taşı belirleme.' },
              { step: '03', title: 'Geliştirme', description: 'Düzenli güncellemeler ve demolarla çevik sprintler.' },
              { step: '04', title: 'Teslimat', description: 'Dağıtım, test ve sürekli destek.' },
            ].map((phase) => (
              <Card key={phase.step} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-sm text-secondary">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Aklınızda bir proje mi var?
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
              İşletmeniz için doğru çözümü nasıl oluşturabileceğimizi konuşalım.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Başlayın
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
