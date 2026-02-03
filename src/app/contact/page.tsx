import { Metadata } from 'next';
import { Container, Section, Card, CardContent } from '@/components/ui';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Madware Solutions ile iletişime geçin. Projenizi konuşalım ve size nasıl akıllı, ölçeklenebilir yazılım çözümleri sunabileceğimizi keşfedelim.',
};

const contactInfo = [
  {
    title: 'E-posta',
    value: 'madwaresolutions@email.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: 'Yanıt Süresi',
    value: '24 saat içinde',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Lokasyon',
    value: 'Uzaktan Çalışma, Global',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Hadi Konuşalım
            </h1>
            <p className="mt-6 text-lg text-secondary leading-relaxed">
              Aklınızda bir proje mi var? Bunu duymak isteriz. Bize bir mesaj gönderin, 
              en kısa sürede size geri dönüş yapalım.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-foreground mb-6">
                    Bize mesaj gönderin
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">
                İletişim Bilgileri
              </h2>
              
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-secondary">{info.title}</div>
                    <div className="text-foreground font-medium">{info.value}</div>
                  </div>
                </div>
              ))}

              {/* Additional Info */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Bundan sonra ne olacak?
                  </h3>
                  <ol className="space-y-3 text-sm text-secondary">
                    <li className="flex gap-3">
                      <span className="font-medium text-primary">1.</span>
                      Mesajınızı ve proje detaylarınızı inceleyeceğiz
                    </li>
                    <li className="flex gap-3">
                      <span className="font-medium text-primary">2.</span>
                      İhtiyaçlarınızı anlamak için bir keşif görüşmesi planlayacağız
                    </li>
                    <li className="flex gap-3">
                      <span className="font-medium text-primary">3.</span>
                      Detaylı bir teklif ve zaman çizelgesi sunacağız
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-muted/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
              Sıkça Sorulan Sorular
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: 'Tipik bir proje ne kadar sürer?',
                  answer: 'Proje süreleri kapsam ve karmaşıklığa göre değişir. Basit bir web sitesi 2-4 hafta sürebilirken, karmaşık bir SaaS platformu 3-6 ay alabilir. Keşif görüşmemizden sonra detaylı bir zaman çizelgesi sunacağız.',
                },
                {
                  question: 'Geliştirme süreciniz nasıl işliyor?',
                  answer: 'Düzenli sprint\'ler, demolar ve kontrol toplantıları ile çevik bir metodoloji izliyoruz. İlerlemeyi tam olarak görebilecek ve geliştirme sürecinin her aşamasında geri bildirim sağlayabileceksiniz.',
                },
                {
                  question: 'Sürekli destek sağlıyor musunuz?',
                  answer: 'Evet! Yazılımınızın optimum performansını sürdürmesi için bakım ve destek paketleri sunuyoruz. Uzun vadeli başarınıza yatırım yapıyoruz.',
                },
                {
                  question: 'Hangi teknolojilerle çalışıyorsunuz?',
                  answer: 'Ana teknoloji yığınımız React, Next.js, Node.js, TypeScript ve PostgreSQL içerir. AI için OpenAI ve çeşitli ML framework\'leri kullanıyoruz. Her projenin özel ihtiyaçları için en iyi araçları seçiyoruz.',
                },
              ].map((faq) => (
                <Card key={faq.question}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
