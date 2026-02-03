// CMS Data Structure - In production, this would come from a database
// For now, we use static data that can easily be replaced with API calls

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  excerpt: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  featured: boolean;
  publishedAt: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  icon: string;
}

// Blog Posts Data
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'yazilimi-yalnizca-kod-degil-is-degeri-olarak-ele-aliyoruz',
    title: 'Yazılımı Yalnızca Kod Değil, İş Değeri Olarak Ele Alıyoruz',
    excerpt: 'İhtiyaca özel geliştirilen, gerçek kullanım senaryolarına sahip projeler üretme yaklaşımımız.',
    content: `
# Yazılımı Yalnızca Kod Değil, İş Değeri Olarak Ele Alıyoruz

Madware Solutions olarak, yazılımı sadece teknik bir çözüm olarak değil, işletmelere katma değer sağlayan bir araç olarak görüyoruz.

## İhtiyaca Özel Geliştirme

Her işletme benzersizdir. Bu nedenle hazır şablonlar yerine, sizin iş süreçlerinize özel çözümler geliştiriyoruz.

### Yaklaşımımız

- **Gerçek Kullanım Senaryoları**: Teorik değil, pratik çözümler üretiyoruz
- **Proje Odaklı Çalışma**: Her proje için özel stratejiler belirliyoruz
- **Esnek Sistemler**: Değişen ihtiyaçlara kolayca uyum sağlayan yapılar
- **Sürdürülebilirlik**: Uzun vadeli kullanım için tasarlanmış sistemler

## Çözüm Alanlarımız

### Web Tabanlı Yazılım Çözümleri
Modern teknolojilerle geliştirilmiş, kullanıcı dostu web uygulamaları.

### Otomasyon & Süreç Yönetimi
İş süreçlerini dijitalleştiren ve otomatikleştiren çözümler.

### Özel Yazılım Geliştirme
Sizin ihtiyaçlarınıza özel, sıfırdan tasarlanmış sistemler.

### Ölçeklenebilir Sistem Mimarileri
Büyüyen işletmenizle birlikte büyüyen altyapılar.

İşinizi anlamak ve size en uygun çözümü sunmak için buradayız.
    `,
    category: 'Yaklaşım',
    author: { name: 'Madware Solutions' },
    publishedAt: '2026-01-15',
    readTime: '5 dakika',
    featured: true,
    tags: ['Yazılım', 'İş Değeri', 'Özel Geliştirme', 'Dijital Dönüşüm'],
  },
  {
    id: '2',
    slug: 'proje-portfoyumuz-taskmind-noteit-upyks',
    title: 'Proje Portföyümüz: TaskMind, NoteIt ve UpYKS',
    excerpt: 'İş süreçlerini dijitalleştiren ve kullanıcı odaklı çözümlerimiz hakkında.',
    content: `
# Proje Portföyümüz

Madware Solutions olarak geliştirdiğimiz projeler, gerçek ihtiyaçlara çözüm üretme misyonumuzun somut örnekleridir.

## TaskMind

Görev yönetimi ve ekip koordinasyonu için geliştirilmiş kapsamlı bir platform.

### Özellikler:
- Gelişmiş görev takibi ve önceliklendirme
- Ekip içi iş birliği araçları
- Zaman çizelgesi ve proje yönetimi
- Detaylı raporlama ve analitik

## NoteIt

Kullanıcı odaklı, hızlı ve güvenli not alma uygulaması.

### Özellikler:
- Sezgisel arayüz tasarımı
- Çoklu platform desteği
- Gelişmiş arama ve etiketleme
- Bulut senkronizasyonu

## UpYKS

Öğrenciler için özel olarak tasarlanmış YKS hazırlık platformu.

### Özellikler:
- Kişiselleştirilmiş çalışma planları
- Detaylı performans takibi
- Soru bankası ve deneme sınavları
- İlerleme raporları

Bu projeler, güncel teknolojilerle geliştirilmiş, kullanıcı odaklı arayüzlere sahip sistemlerdir. Her biri, iş süreçlerini dijitalleştiren gerçek çözümler sunmaktadır.
    `,
    category: 'Projeler',
    author: { name: 'Madware Solutions' },
    publishedAt: '2026-01-10',
    readTime: '6 dakika',
    featured: true,
    tags: ['Projeler', 'TaskMind', 'NoteIt', 'UpYKS', 'Portföy'],
  },
  {
    id: '3',
    slug: 'cagil-ve-cozum-odakli-ekip',
    title: 'Çevik ve Çözüm Odaklı Ekip',
    excerpt: 'Neden Madware Solutions? Esnek ve sürdürülebilir yazılım yaklaşımımız.',
    content: `
# Neden Madware Solutions?

Madware Solutions'ı farklı kılan özellikleri keşfedin.

## Çevik ve Çözüm Odaklı Ekip

Sorunları hızlı analiz eden, etkili çözümler üreten deneyimli ekibimizle çalışın.

### Ekip Avantajları:
- Hızlı karar alma ve uygulama
- Proaktif problem çözme
- Sürekli öğrenme ve gelişim
- Modern teknolojilere hakimiyet

## Proje Bazlı Hızlı Geliştirme

Uzun ve yorucu süreçler yerine, MVP ve pilot çözümlerle hızla başlayın.

### Geliştirme Süreci:
1. İhtiyaç analizi
2. Hızlı prototipleme
3. Kullanıcı geri bildirimleri
4. İteratif geliştirme

## Doğrudan İletişim

Aracı olmadan, doğrudan ekiple çalışın. Şeffaf ve açık iletişim anlayışımızla projelerinizi yönetin.

### İletişim Kanallarımız:
- E-posta: madwaresolutions@email.com
- Telefon: +90 543 591 11 11
- Web: www.madwaresolutions.com
- LinkedIn: madware-solutions

## Esnek ve Sürdürülebilir Yazılım Yaklaşımı

Bugünün ihtiyaçlarını karşılayan, yarının değişimlerine hazır sistemler geliştiriyoruz.

### Sürdürülebilirlik Prensipleri:
- Modüler mimari tasarımı
- Kolay güncellenebilir kod yapısı
- Kapsamlı dokümantasyon
- Uzun vadeli teknik destek

Projelerinize özel çözümler üretmek için birlikte çalışalım.
    `,
    category: 'Yaklaşım',
    author: { name: 'Madware Solutions' },
    publishedAt: '2026-01-05',
    readTime: '7 dakika',
    featured: false,
    tags: ['Madware', 'Ekip', 'Çözüm Odaklı', 'İletişim'],
  },
];

// Case Studies Data
export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'taskmind-gorev-yonetimi',
    title: 'TaskMind - Görev Yönetimi Platformu',
    client: 'TaskMind',
    industry: 'Proje Yönetimi',
    excerpt: 'Ekip koordinasyonu ve görev takibi için geliştirilmiş kapsamlı bir platform.',
    challenge: 'Ekipler, görevleri takip etmekte ve proje ilerlemelerini koordine etmekte zorlanıyordu. Karmaşık proje yönetimi araçları, kullanıcılar için fazla karmaşıktı.',
    solution: 'Kullanıcı dostu, sezgisel bir arayüz ile güçlü görev yönetimi özelliklerini birleştiren TaskMind\'ı geliştirdik. Gelişmiş görev takibi, önceliklendirme, zaman çizelgesi ve detaylı raporlama özellikleri sunuyoruz.',
    results: [
      { metric: '70%', value: 'Artış', description: 'Ekip verimliliğinde artış' },
      { metric: '90%', value: 'Kullanıcı', description: 'Kullanıcı memnuniyeti oranı' },
      { metric: '50%', value: 'Azalma', description: 'Proje gecikme oranında düşüş' },
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
    testimonial: {
      quote: 'TaskMind ile ekibimizin verimliliği inanılmaz derecede arttı. Artık tüm projelerimizi tek bir platformdan yönetiyoruz.',
      author: 'Çağın Arslan',
      role: 'Proje Müdürü',
    },
    featured: true,
    publishedAt: '2026-01-12',
  },
  {
    id: '2',
    slug: 'noteit-not-alma-uygulamasi',
    title: 'NoteIt - Akıllı Not Alma Uygulaması',
    client: 'NoteIt',
    industry: 'Verimlilik',
    excerpt: 'Hızlı, güvenli ve kullanıcı odaklı not alma deneyimi.',
    challenge: 'Kullanıcılar, hızlı not alabilen ancak aynı zamanda güvenli ve organize bir çözüm arıyordu. Mevcut uygulamalar ya çok karmaşık ya da yetersiz özellikler sunuyordu.',
    solution: 'Sezgisel arayüz tasarımı, gelişmiş arama ve etiketleme özellikleri ile bulut senkronizasyonu sunan NoteIt\'ı geliştirdik. Çoklu platform desteği ile her yerden erişilebilir.',
    results: [
      { metric: '85%', value: 'Benimseme', description: 'İlk hafta kullanıcı benimseme oranı' },
      { metric: '4.7/5', value: 'Puan', description: 'Kullanıcı değerlendirme puanı' },
      { metric: '60%', value: 'Artış', description: 'Not alma verimliliğinde artış' },
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Tailwind CSS'],
    testimonial: {
      quote: 'NoteIt, aradığım her şeyi sunuyor. Hızlı, güvenli ve kullanması çok kolay. Artık tüm notlarım düzenli ve her yerden erişilebilir.',
      author: 'Eleanor Fitzgerald',
      role: 'İçerik Oluşturucu',
    },
    featured: true,
    publishedAt: '2026-01-08',
  },
  {
    id: '3',
    slug: 'upyks-yks-hazirlik-platformu',
    title: 'UpYKS - YKS Hazırlık Platformu',
    client: 'UpYKS',
    industry: 'Eğitim Teknolojisi',
    excerpt: 'Öğrenciler için kişiselleştirilmiş YKS hazırlık deneyimi.',
    challenge: 'YKS\'ye hazırlanan öğrenciler, kişiselleştirilmiş çalışma planları ve detaylı performans takibi sunan bir platform ihtiyacı duyuyordu.',
    solution: 'Kişiselleştirilmiş çalışma planları, soru bankası, deneme sınavları ve detaylı ilerleme raporları sunan UpYKS platformunu geliştirdik. Öğrencilerin güçlü ve zayıf yönlerini analiz ederek optimize edilmiş çalışma stratejileri sunuyoruz.',
    results: [
      { metric: '45%', value: 'Artış', description: 'Öğrenci başarı oranında artış' },
      { metric: '10,000+', value: 'Öğrenci', description: 'Aktif kullanıcı sayısı' },
      { metric: '92%', value: 'Memnuniyet', description: 'Öğrenci memnuniyet oranı' },
    ],
    technologies: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
    testimonial: {
      quote: 'UpYKS sayesinde çalışmalarımı çok daha verimli hale getirdim. Kişiselleştirilmiş planlar ve detaylı analizler, hedeflerime ulaşmamda büyük rol oynadı.',
      author: 'Margarita Perez',
      role: 'YKS Öğrencisi',
    },
    featured: true,
    publishedAt: '2026-01-03',
  },
];

// Helper functions
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(study => study.featured);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map(post => post.category))];
}
