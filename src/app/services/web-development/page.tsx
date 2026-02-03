import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, Button, Card, CardContent } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Web Geliştirme Hizmetleri',
  description: 'En son teknolojilerle oluşturulan modern, responsive web uygulamaları. Landing page\'lerden karmaşık kurumsal platformlara kadar özel çözümler.',
};

const features = [
  {
    title: 'Custom Web Applications',
    description: 'Tailored solutions built from the ground up to meet your specific business requirements and workflows.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Progressive Web Apps',
    description: 'Web applications that work offline, load instantly, and feel like native apps on any device.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: 'E-commerce Platforms',
    description: 'High-performance online stores with seamless checkout, inventory management, and analytics.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    title: 'API Development',
    description: 'RESTful and GraphQL APIs designed for performance, security, and developer experience.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: 'CMS Integration',
    description: 'Headless CMS solutions that give your team full control over content without developer intervention.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Performance Optimization',
    description: 'Speed audits, Core Web Vitals optimization, and infrastructure tuning for maximum performance.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const techStack = [
  { name: 'Next.js', category: 'Framework' },
  { name: 'React', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Vercel', category: 'Deployment' },
];

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target users, and technical requirements. This phase includes user research, competitive analysis, and architecture planning.',
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Creating wireframes and interactive prototypes to visualize the solution before development begins. We iterate based on your feedback.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile development with 2-week sprints, regular demos, and continuous deployment. You have full visibility into progress at all times.',
  },
  {
    step: '04',
    title: 'Testing & QA',
    description: 'Comprehensive testing including unit tests, integration tests, and user acceptance testing to ensure quality and reliability.',
  },
  {
    step: '05',
    title: 'Launch & Support',
    description: 'Seamless deployment with monitoring, analytics, and ongoing support to ensure long-term success.',
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <Container>
          <div className="max-w-3xl">
            <Link href="/services" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to Services
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Web Development
            </h1>
            <p className="mt-6 text-lg text-secondary leading-relaxed">
              We build modern, responsive web applications that deliver exceptional 
              user experiences and drive business results. From simple landing pages 
              to complex enterprise platforms, we have the expertise to bring your 
              vision to life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">Start Your Project</Button>
              <Button href="/case-studies" variant="outline" size="lg">View Our Work</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Offer */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">What We Offer</h2>
            <p className="mt-4 text-secondary max-w-2xl mx-auto">
              Comprehensive web development services tailored to your needs.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-secondary text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-muted/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Our Tech Stack</h2>
              <p className="mt-4 text-secondary">
                We use modern, battle-tested technologies that ensure your application 
                is fast, secure, and maintainable. Our stack is chosen for developer 
                productivity and long-term sustainability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="font-semibold text-foreground mb-4">Why This Stack?</h3>
              <ul className="space-y-3 text-sm text-secondary">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Performance:</strong> Server-side rendering and edge caching for sub-second load times</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Type Safety:</strong> TypeScript catches errors before they reach production</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>SEO:</strong> Built-in SEO optimization with Next.js metadata API</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Scalability:</strong> Serverless architecture that scales automatically</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Process</h2>
            <p className="mt-4 text-secondary max-w-2xl mx-auto">
              A proven methodology that ensures quality delivery and clear communication.
            </p>
          </div>
          
          <div className="space-y-6">
            {process.map((item, index) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 pb-6 border-b border-border last:border-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to build your next web application?
            </h2>
            <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
              Let&apos;s discuss your project and explore how we can help you create 
              a modern, scalable web solution.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-6 py-3 font-medium hover:bg-blue-50 transition-colors"
              >
                Başlayalım
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
