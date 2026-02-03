import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Section, Card, CardContent } from '@/components/ui';
import { blogPosts, getAllCategories } from '@/lib/data';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Yazılım geliştirme, teknoloji ve dijital dönüşüm üzerine görüşler, deneyimler ve düşüncelerimiz.',
};

const categories = ['Ümü', ...getAllCategories()];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/madware.png" alt="" width={32} height={32} className="w-8 h-8" />
              <span className="text-sm font-medium text-primary">Madware Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              İçerikler & Mühendislik
            </h1>
            <p className="text-xl text-secondary">
              Modern yazılım geliştirme, teknoloji ve önemli mühendislik kararları üzerine düşünceler. Uygulaması yapanlar tarafından, uygulaması yapanlar için yazılıyor.
            </p>
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section className="py-6 border-b border-border">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-muted text-secondary hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <Section>
          <Container>
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Image src="/images/madware.png" alt="" width={24} height={24} className="w-6 h-6" />
              Öne Çıkan Yazılar
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Image 
                        src="/images/madware.png" 
                        alt="" 
                        width={64} 
                        height={64} 
                        className="w-16 h-16 opacity-50 group-hover:opacity-80 transition-opacity" 
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-secondary">Öne Çıkan</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-secondary text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-secondary">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* All Posts */}
      <Section className="bg-muted/30">
        <Container>
          <h2 className="text-2xl font-bold text-foreground mb-8">Tüm Yazılar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="group"
              >
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-secondary text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-secondary">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter Section */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            <NewsletterForm source="blog-page" />
          </div>
        </Container>
      </Section>
    </>
  );
}
