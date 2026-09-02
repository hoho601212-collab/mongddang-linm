import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pages } from '@/lib/pages';
import { pageExtras } from '@/lib/page-extras';
import { siteConfig } from '@/lib/site-config';
import { seoMeta } from '@/lib/seo-meta';
import './seo.module.css';

type Props = { params: Promise<{ slug: string }> };

const faqItems = [
  ['이 사이트의 린M은 어떤 게임인가요?', '린M: 잊혀진 유산을 기준으로 안내하며 리니지M과 구분합니다.'],
  ['린M 다이아 충전 가격은 어떻게 되나요?', '다이아 충전 상품은 60 다이아 1,500원부터 6,480 다이아 149,000원까지 여러 구간으로 구성됩니다. 가격은 게임 업데이트에 따라 달라질 수 있으므로 결제 전에 최신 화면을 확인하세요.'],
  ['일반 다이아와 귀속 다이아는 같은 재화인가요?', '아닙니다. 일반 다이아와 귀속 다이아는 상점 메뉴와 상품 구성이 구분됩니다.'],
  ['상점 상품은 모두 바로 구매할 수 있나요?', '아닙니다. 일부 상품에는 레벨 해금 조건과 일일·주간 구매 제한이 표시될 수 있습니다.']
];

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[decodeURIComponent(slug)];
  if (!page) return {};
  const optimized = seoMeta[page.slug];
  const title = optimized?.title ?? page.title;
  const description = optimized?.description ?? page.description;
  const socialImage = `/images/${page.images[0]}`;
  return {
    title,
    description,
    keywords: optimized?.keywords,
    alternates: { canonical: `/${page.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${title} - 몽땅 다이아`,
      description,
      url: `/${page.slug}`,
      type: 'website',
      locale: 'ko_KR',
      siteName: siteConfig.name,
      images: [{ url: socialImage, alt: optimized?.h1 ?? page.h1 }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - 몽땅 다이아`,
      description,
      images: [socialImage]
    }
  };
}

export default async function SeoPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const page = pages[decodedSlug];
  if (!page) notFound();
  const extra = pageExtras[decodedSlug];
  const optimized = seoMeta[decodedSlug];
  const pageTitle = optimized?.title ?? page.title;
  const pageDescription = optimized?.description ?? page.description;
  const pageH1 = optimized?.h1 ?? page.h1;
  const pageUrl = `${siteConfig.domain}/${encodeURIComponent(page.slug)}`;
  const breadcrumbJsonLd = { '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:[{ '@type':'ListItem', position:1, name:'홈', item:siteConfig.domain },{ '@type':'ListItem', position:2, name:pageH1, item:pageUrl }] };
  const webPageJsonLd = {
    '@context':'https://schema.org',
    '@type':'WebPage',
    name:pageTitle,
    description:pageDescription,
    url:pageUrl,
    inLanguage:'ko-KR',
    isPartOf:{ '@type':'WebSite', name:siteConfig.name, url:siteConfig.domain }
  };
  const faqJsonLd = decodedSlug === '린M자주묻는질문' ? { '@context':'https://schema.org', '@type':'FAQPage', mainEntity:faqItems.map(([q,a]) => ({ '@type':'Question', name:q, acceptedAnswer:{ '@type':'Answer', text:a } })) } : null;

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
    <div className="breadcrumb-wrap"><div className="wrap breadcrumb"><Link href="/">홈</Link><span>›</span><span>{pageH1}</span></div></div>
    <section className="hero sub-hero"><div className="wrap hero-grid"><div><p className="eyebrow">{page.eyebrow}</p><h1>{pageH1}</h1><p className="lead">{extra?.summary ?? page.intro}</p><div className="trust-chips"><span>린M: 잊혀진 유산 기준</span><span>상점 정보 반영</span><span>이벤트·업데이트 구분</span></div><div className="hero-actions"><a className="button primary" href={siteConfig.phoneHref}>전화로 확인하기</a><a className="button ghost" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 상담</a></div></div><div className="image-placeholder">{page.images[0]}</div></div></section>
    {extra && <section className="section compact-top"><div className="wrap"><div className="section-heading narrow"><p className="eyebrow">{extra.kicker}</p><h2>{extra.referenceTitle}</h2><p className="section-copy">{extra.referenceNote}</p></div><div className="fact-grid">{extra.facts.map(f => <article className="fact-card" key={f.label}><span className="fact-label">{f.label}</span><strong>{f.value}</strong><small>{f.note}</small></article>)}</div></div></section>}
    {decodedSlug === '린M자주묻는질문' && <section className="section alt"><div className="wrap"><div className="section-heading narrow"><p className="eyebrow">QUICK ANSWERS</p><h2>린M 자주 묻는 질문</h2></div><div className="faq-list">{faqItems.map(([q,a],i) => <div className="faq-item" key={q}><span>0{i+1}</span><div><h3>{q}</h3><p>{a}</p></div></div>)}</div></div></section>}
    {page.sections.map((section,index) => <section className={`section ${index%2?'alt':''}`} key={section.title}><div className="wrap split"><div className={index%2?'order-two':''}><p className="eyebrow">{page.eyebrow}</p><h2>{section.title}</h2><p className="section-copy">{section.body}</p>{extra && index===1 && <ul className="check-list">{extra.checks.map(c => <li key={c}>{c}</li>)}</ul>}</div>{page.images[index+1] ? <div className="image-placeholder">{page.images[index+1]}</div> : decodedSlug === '린M충전' && index === 2 ? <div className="image-placeholder">linm-charge-page-preview.webp</div> : <div className="info-panel"><span className="panel-overline">DIRECT SUPPORT</span><strong>몽땅 다이아 상담</strong><p>전화 {siteConfig.phone}</p><p>카카오톡 {siteConfig.kakaoId}</p></div>}</div></section>)}
    {extra && <section className="section related-section"><div className="wrap"><div className="section-heading narrow"><p className="eyebrow">RELATED GUIDE</p><h2>함께 보면 좋은 린M 정보</h2></div><div className="related-grid">{extra.links.map(item => <Link className="related-card" href={item.href} key={item.href}><strong>{item.label}</strong><p>{item.text}</p><span>{item.label} 보기 →</span></Link>)}</div></div></section>}
    <section className="section final-cta-section"><div className="wrap final-cta"><div><p className="eyebrow">MONGDDANG DIA</p><h2>현재 게임 화면과 조건을 확인한 뒤 문의하세요</h2><p>가격·할인·구매 가능 여부는 업데이트와 계정 상태에 따라 달라질 수 있습니다.</p></div><div className="hero-actions"><a className="button primary" href={siteConfig.phoneHref}>{siteConfig.phone}</a><a className="button ghost" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 {siteConfig.kakaoId}</a></div></div></section>
  </>;
}