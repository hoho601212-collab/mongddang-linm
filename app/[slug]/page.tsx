import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pages } from '@/lib/pages';
import { pageExtras } from '@/lib/page-extras';
import { siteConfig } from '@/lib/site-config';
import './seo.module.css';

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
  const decodedSlug = decodeURIComponent(slug);
  const page = pages[decodedSlug];
  if (!page) notFound();
  const extra = pageExtras[decodedSlug];

  return (
    <>
      <div className="breadcrumb-wrap">
        <div className="wrap breadcrumb">
          <Link href="/">홈</Link><span>›</span><span>{page.h1}</span>
        </div>
      </div>

      <section className="hero sub-hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.h1}</h1>
            <p className="lead">{extra?.summary ?? page.intro}</p>
            <div className="trust-chips">
              <span>린M: 잊혀진 유산 기준</span>
              <span>검색 목적별 정보 분리</span>
              <span>전화·카카오 상담</span>
            </div>
            <div className="hero-actions">
              <a className="button primary" href={siteConfig.phoneHref}>전화로 확인하기</a>
              <a className="button ghost" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 상담</a>
            </div>
          </div>
          <div className="image-placeholder">{page.images[0]}</div>
        </div>
      </section>

      {extra && (
        <section className="section compact-top">
          <div className="wrap">
            <div className="section-heading narrow">
              <p className="eyebrow">{extra.kicker}</p>
              <h2>{extra.referenceTitle}</h2>
              <p className="section-copy">{extra.referenceNote}</p>
            </div>
            <div className="fact-grid">
              {extra.facts.map((fact) => (
                <article className="fact-card" key={fact.label}>
                  <span className="fact-label">{fact.label}</span>
                  <strong>{fact.value}</strong>
                  <small>{fact.note}</small>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.sections.map((section, index) => (
        <section className={`section ${index % 2 ? 'alt' : ''}`} key={section.title}>
          <div className="wrap split">
            <div className={index % 2 ? 'order-two' : ''}>
              <p className="eyebrow">{page.eyebrow}</p>
              <h2>{section.title}</h2>
              <p className="section-copy">{section.body}</p>
              {extra && index === 1 && (
                <ul className="check-list">
                  {extra.checks.map((check) => <li key={check}>{check}</li>)}
                </ul>
              )}
            </div>
            {page.images[index + 1] ? (
              <div className="image-placeholder">{page.images[index + 1]}</div>
            ) : (
              <div className="info-panel">
                <span className="panel-overline">DIRECT SUPPORT</span>
                <strong>몽땅 다이아 상담</strong>
                <p>전화 {siteConfig.phone}</p>
                <p>카카오톡 {siteConfig.kakaoId}</p>
              </div>
            )}
          </div>
        </section>
      ))}

      {extra && (
        <section className="section related-section">
          <div className="wrap">
            <div className="section-heading narrow">
              <p className="eyebrow">RELATED GUIDE</p>
              <h2>함께 보면 좋은 린M 정보</h2>
            </div>
            <div className="related-grid">
              {extra.links.map((item) => (
                <Link className="related-card" href={item.href} key={item.href}>
                  <strong>{item.label}</strong>
                  <p>{item.text}</p>
                  <span>자세히 보기 →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section final-cta-section">
        <div className="wrap final-cta">
          <div>
            <p className="eyebrow">MONGDDANG DIA</p>
            <h2>상품명과 수량을 확인한 뒤 문의하세요</h2>
            <p>상담 전에 원하는 상품과 수량을 정리하면 더 빠르게 확인할 수 있습니다.</p>
          </div>
          <div className="hero-actions">
            <a className="button primary" href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <a className="button ghost" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 {siteConfig.kakaoId}</a>
          </div>
        </div>
      </section>
    </>
  );
}
