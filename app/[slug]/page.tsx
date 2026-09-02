import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pages } from '@/lib/pages';
import { siteConfig } from '@/lib/site-config';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[decodeURIComponent(slug)];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: `${page.title} - 몽땅 다이아`,
      description: page.description,
      url: `/${page.slug}`,
      type: 'website'
    }
  };
}

export default async function SeoPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[decodeURIComponent(slug)];
  if (!page) notFound();

  return (
    <>
      <section className="hero sub-hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.h1}</h1>
            <p className="lead">{page.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href={siteConfig.phoneHref}>전화 상담</a>
              <a className="button ghost" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 상담</a>
            </div>
          </div>
          <div className="image-placeholder">{page.images[0]}</div>
        </div>
      </section>

      {page.sections.map((section, index) => (
        <section className={`section ${index % 2 ? 'alt' : ''}`} key={section.title}>
          <div className="wrap split">
            <div className={index % 2 ? 'order-two' : ''}>
              <p className="eyebrow">{page.eyebrow}</p>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
            {page.images[index + 1] ? (
              <div className="image-placeholder">{page.images[index + 1]}</div>
            ) : (
              <div className="info-panel">
                <strong>몽땅 다이아 상담</strong>
                <p>전화 {siteConfig.phone}</p>
                <p>카카오톡 {siteConfig.kakaoId}</p>
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
