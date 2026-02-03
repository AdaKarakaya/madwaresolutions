import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, Button, Card, CardContent } from '@/components/ui';

export const metadata: Metadata = {
  title: 'AI Çözümleri',
  description: 'Yapay zeka gücünden yararlanın. Modern işletmeler için özel AI entegrasyonları, akıllı chatbot\'lar ve otomasyon çözümleri.',
};

const useCases = [
  {
    title: 'Intelligent Chatbots',
    description: 'AI-powered conversational agents that handle customer inquiries, qualify leads, and provide 24/7 support with human-like interactions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: 'Document Processing',
    description: 'Automated extraction, classification, and analysis of documents using AI. From invoices to contracts, we turn unstructured data into insights.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Predictive Analytics',
    description: 'Machine learning models that forecast trends, predict customer behavior, and optimize business decisions based on historical data.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Content Generation',
    description: 'AI-assisted content creation for marketing, documentation, and communications. Maintain brand voice while scaling output.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    title: 'Recommendation Engines',
    description: 'Personalized recommendations that increase engagement and conversions. From product suggestions to content curation.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: 'Process Automation',
    description: 'Intelligent automation that handles repetitive tasks, routes workflows, and makes decisions based on complex rules and patterns.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
  },
];

const techStack = [
  { name: 'OpenAI GPT-4', category: 'LLM' },
  { name: 'Claude', category: 'LLM' },
  { name: 'LangChain', category: 'Framework' },
  { name: 'Vercel AI SDK', category: 'Framework' },
  { name: 'Pinecone', category: 'Vector DB' },
  { name: 'Python', category: 'Language' },
  { name: 'TensorFlow', category: 'ML' },
  { name: 'Hugging Face', category: 'Models' },
];

export default function AISolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <Container>
          <div className="max-w-3xl">
            <Link href="/services" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Hizmetlere Dön
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              AI Çözümleri
            </h1>
            <p className="mt-6 text-lg text-secondary leading-relaxed">
              İşinizi akıllı AI çözümleriyle dönüştürün. Şirketlerin süreçlerini otomatikleştirmesine, 
              müşteri deneyimini geliştirmesine ve yeni yetenekler kazanmasına yardımcı oluyoruz.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">AI Projenizi Konuşalım</Button>
              <Button href="/case-studies" variant="outline" size="lg">Projelerimizi İnceleyin</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">What We Build</h2>
            <p className="mt-4 text-secondary max-w-2xl mx-auto">
              AI solutions designed for real business impact, not hype.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-secondary text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Approach */}
      <Section className="bg-muted/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Our Approach to AI</h2>
              <p className="mt-4 text-secondary">
                We believe in practical AI that solves real problems. Our approach focuses 
                on delivering measurable business value, not chasing the latest trends.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  {
                    title: 'Start with the Problem',
                    description: 'We identify specific business challenges before recommending AI solutions.',
                  },
                  {
                    title: 'Data-First Strategy',
                    description: 'Quality AI requires quality data. We help you prepare and structure your data for AI success.',
                  },
                  {
                    title: 'Build for Production',
                    description: 'Our solutions are designed for reliability, scalability, and real-world performance.',
                  },
                  {
                    title: 'Human in the Loop',
                    description: 'We design AI systems that augment human decision-making, not replace it blindly.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <div>
                      <span className="font-medium text-foreground">{item.title}:</span>
                      <span className="text-secondary ml-1">{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1.5 bg-muted rounded-lg text-sm text-foreground"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Not Sure Where to Start?</h3>
                  <p className="text-secondary text-sm mb-4">
                    We offer AI readiness assessments to help you identify the best 
                    opportunities for AI in your business.
                  </p>
                  <Button href="/contact" size="sm">Book a Consultation</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to explore AI for your business?
            </h2>
            <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
              Let&apos;s discuss how AI can transform your operations and create new 
              opportunities for growth.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-6 py-3 font-medium hover:bg-blue-50 transition-colors"
              >
                Start the Conversation
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
