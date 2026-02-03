import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Section, Button } from '@/components/ui';
import { caseStudies, getCaseStudyBySlug } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  
  if (!study) {
    return { title: 'Proje Bulunamadı' };
  }
  
  return {
    title: `${study.title} - Proje İncelemesi`,
    description: study.excerpt,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  
  if (!study) {
    notFound();
  }

  // Get other case studies
  const otherStudies = caseStudies.filter(s => s.id !== study.id).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-primary/5 to-background pt-12">
        <Container>
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-secondary mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link>
              <span>/</span>
              <span className="text-foreground">{study.industry}</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/madware.png" alt="" width={32} height={32} className="w-8 h-8" />
              <span className="text-sm font-medium text-primary">{study.industry}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {study.title}
            </h1>

            <p className="text-xl text-secondary mb-8">
              {study.excerpt}
            </p>

            {/* Results Summary */}
            <div className="grid grid-cols-3 gap-6">
              {study.results.map((result, index) => (
                <div key={index} className="text-center p-6 bg-background rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary">{result.metric}</div>
                  <div className="text-sm font-medium text-foreground">{result.value}</div>
                  <div className="text-xs text-secondary mt-1">{result.description}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenge & Solution */}
      <Section>
        <Container>
          <div className="max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Challenge */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-foreground">The Challenge</h2>
                </div>
                <p className="text-secondary leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Image src="/images/madware.png" alt="" width={20} height={20} className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Our Solution</h2>
                </div>
                <p className="text-secondary leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Technologies */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Image src="/images/madware.png" alt="" width={24} height={24} className="w-6 h-6" />
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {study.technologies.map(tech => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonial */}
      {study.testimonial && (
        <Section>
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <Image src="/images/madware.png" alt="" width={48} height={48} className="w-12 h-12 mx-auto mb-6 opacity-50" />
              <blockquote className="text-2xl font-medium text-foreground italic mb-6">
                "{study.testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-foreground">{study.testimonial.author}</div>
                <div className="text-secondary">{study.testimonial.role}</div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary to-primary-dark">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to achieve similar results?
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Let's discuss how we can help transform your business with 
              modern, scalable technology solutions.
            </p>
            <Button href="/contact" className="bg-white text-primary hover:bg-blue-50">
              Start Your Project
            </Button>
          </div>
        </Container>
      </Section>

      {/* Other Case Studies */}
      {otherStudies.length > 0 && (
        <Section>
          <Container>
            <h2 className="text-2xl font-bold text-foreground mb-8">More Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {otherStudies.map(otherStudy => (
                <Link 
                  key={otherStudy.id}
                  href={`/case-studies/${otherStudy.slug}`}
                  className="group p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <span className="text-xs text-primary font-medium">{otherStudy.industry}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                    {otherStudy.title}
                  </h3>
                  <p className="text-secondary text-sm line-clamp-2">{otherStudy.excerpt}</p>
                  <div className="flex gap-4 mt-4">
                    {otherStudy.results.slice(0, 2).map((result, i) => (
                      <div key={i} className="text-sm">
                        <span className="font-bold text-primary">{result.metric}</span>
                        <span className="text-secondary ml-1">{result.description}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Back to Case Studies */}
      <Section className="py-8">
        <Container>
          <div className="text-center">
            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to all case studies
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
