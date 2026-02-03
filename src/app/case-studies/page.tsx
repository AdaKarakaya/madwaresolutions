import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Section, Button, Card, CardContent } from '@/components/ui';
import { caseStudies, getFeaturedCaseStudies } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projeler',
  description: 'Başarılı proje portföyümüzü keşfedin. Madware Solutions ile işletmelerin dijital dönüşümünü nasıl gerçekleştirdiğimizi görün.',
};

export default function CaseStudiesPage() {
  const featuredStudies = getFeaturedCaseStudies();
  const otherStudies = caseStudies.filter((study) => !study.featured);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/madware.png" alt="" width={32} height={32} className="w-8 h-8" />
              <span className="text-sm font-medium text-primary">Çalışmalarımız</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Projelerimiz
            </h1>
            <p className="text-xl text-secondary">
              Gerçek projeler, gerçek sonuçlar. İşletmelerin akıllı yazılım çözümleriyle 
              dönüşümüne nasıl yardımcı olduğumuzu keşfedin.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Case Studies */}
      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Image src="/images/madware.png" alt="" width={24} height={24} className="w-6 h-6" />
            Öne Çıkan Projeler
          </h2>
          <div className="space-y-12">
            {featuredStudies.map((study, index) => (
              <Card key={study.slug} className="overflow-hidden">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Placeholder */}
                  <div className={`bg-gradient-to-br from-primary/20 to-accent/20 min-h-[300px] lg:min-h-[400px] flex items-center justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="text-center p-8">
                      <Image 
                        src="/images/madware.png" 
                        alt={study.title} 
                        width={80} 
                        height={80} 
                        className="w-20 h-20 mx-auto mb-4 opacity-60" 
                      />
                      <p className="text-secondary text-sm">{study.industry}</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <CardContent className={`p-6 lg:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="text-sm text-primary font-medium mb-2">{study.client}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{study.title}</h3>
                    <p className="text-secondary mb-6">{study.excerpt}</p>
                    
                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, i) => (
                        <div key={i}>
                          <div className="text-2xl font-bold text-primary">{result.metric}</div>
                          <div className="text-xs text-secondary">{result.description}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs bg-muted rounded-full text-secondary">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Button href={`/case-studies/${study.slug}`} variant="outline" className="w-fit">
                      Detayları Görün →
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Other Case Studies */}
      {otherStudies.length > 0 && (
        <Section className="bg-muted/50">
          <Container>
            <h2 className="text-2xl font-bold text-foreground mb-8">Diğer Projeler</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherStudies.map((study) => (
                <Link 
                  key={study.slug} 
                  href={`/case-studies/${study.slug}`}
                  className="group"
                >
                  <Card className="hover:border-primary/50 transition-colors h-full">
                    <CardContent className="p-6">
                      <div className="text-sm text-primary font-medium mb-2">{study.industry}</div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-secondary text-sm mb-4">{study.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs bg-muted rounded-full text-secondary">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        {study.results.slice(0, 2).map((result, i) => (
                          <div key={i} className="text-sm">
                            <span className="font-bold text-primary">{result.metric}</span>
                            <span className="text-secondary ml-1 text-xs">{result.description}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src="/images/madware.png" alt="" width={200} height={200} className="w-[200px] h-[200px] brightness-0 invert" />
              </div>
            </div>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Bir sonraki başarı hikayemiz siz olmak ister misiniz?
              </h2>
              <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
                İşletmenizi akıllı, ölçeklenebilir yazılım çözümleriyle nasıl dönüştürebileceğimizi konuşalım.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-6 py-3 font-medium hover:bg-blue-50 transition-colors"
                >
                  <Image src="/images/madware.png" alt="" width={20} height={20} className="w-5 h-5 mr-2" />
                  Projenizi Başlatın
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
