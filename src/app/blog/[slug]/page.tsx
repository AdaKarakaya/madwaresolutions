import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Section } from '@/components/ui';
import { blogPosts, getBlogPostBySlug } from '@/lib/data';
import NewsletterForm from '@/components/NewsletterForm';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-muted/50 to-background pt-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-secondary mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">{post.category}</span>
            </nav>

            {/* Category Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Image src="/images/madware.png" alt="" width={16} height={16} className="w-4 h-4" />
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-secondary mb-6">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-secondary pb-8 border-b border-border">
              <span>{post.author.name}</span>
              <span>•</span>
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-secondary prose-strong:text-foreground prose-a:text-primary prose-code:bg-muted prose-code:px-1 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-pre:border-border">
              {/* Render markdown content - in production use MDX or remark */}
              <div dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/^# (.*$)/gm, '<h1>$1</h1>')
                  .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                  .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/`([^`]+)`/g, '<code>$1</code>')
                  .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
                  .replace(/^- (.*$)/gm, '<li>$1</li>')
                  .replace(/\n\n/g, '</p><p>')
              }} />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-muted text-secondary rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="mt-12">
              <NewsletterForm source={`blog-${post.slug}`} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section className="bg-muted/30">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link 
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="block p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-colors"
                  >
                    <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-secondary line-clamp-2">{relatedPost.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Back to Blog */}
      <Section>
        <Container>
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
