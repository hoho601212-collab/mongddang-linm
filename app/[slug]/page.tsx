import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pages } from '@/lib/pages';
import { pageExtras } from '@/lib/page-extras';
import { siteConfig } from '@/lib/site-config';
import './seo.module.css';

type Props = { params: Promise<{ slug: string }> };

const faqItems = [
  ['이 사이트의 린M은 어떤 게임인가요?', '린M: 잊혀진 유산을 기준으로 안내하며, 리니지M과 구분합니다.'],
  ['린M 다이아 가격은 어떻게 확인하나요?', '원하는 상품과 수량을 확인한 뒤 최종 상담 조건을 신청 전에 다시 확인하는 방식으로 안내합니다.'],
  ['린M 충전 전에 무엇을 준비하면 되나요?', '정확한 게임명, 원하는 상품명과 수량을 먼저 정리하면 상담 내용을 빠르게 확인할 수 있습니다.'],
  ['문의는 어디로 하나요?', `전화 ${siteConfig.phone} 또는 카카오톡 아이디 ${siteConfig.kakaoId}로 문의할 수 있습니다.`]
];

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[decodeURIComponent(slug)];
  if (!page) return {};
  return { title: page.title, description: page.description, alternates: { canonical: `/${page.slug}` }, openGraph: { title: `${page.title} - 몽땅 다이아`, description: page.description, url: `/${page.slug}`, type: 'website' } };
}

export default async function SeoPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const page = pages[decodedSlug];
  if (!page) notFound();
  const extra = pageExtras[decodedSlug];
  const breadcrumbJsonLd = { '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:[{ '@type':'ListItem', position:1, name:'홈', item:siteConfig.domain },{ '@type':'ListItem', position:2, name:page.h1, item:`${siteConfig.domain}/${encodeURIComponent(page.slug)}` }] };
  const faqJsonLd = decodedSlug === '린M자주묻는질문' ? { '@context':'https://schema.org', '@type':'FAQPage', mainEntity:faqItems.map(([q,a]) => ({ '@type':'Question', name:q, acceptedAnswer:{ '@type':'Answer', text:a } })) } : null;

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
    <div className="breadcrumb-wrap"><div className="wrap breadcrumb"><Link href="/">홈</Link><span>›</span><span>{page.h1}</span></div></div>
    <section className="hero sub-hero"><div className="wrap hero-grid"><div><p className="eyebrow">{page.eyebrow}</p><h1>{page.h1}</h1><p className="lead">{extra?.summary ?? page.intro}</p><div className="trust-chips"><span>린M: 잊혀진 유산 기준</span><span>검색 목적별 정보 분리</span><span>전화·카카오 상담</span></div><div className="hero-actions"><a className="button primary" href={siteConfig.phoneHref}>전화로 확인하기</a><a className="button ghost" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 상담</a></div></div><div className="image-placeholder">{page.images[0]}</div></div></section>
    {extra && <section className="section compact-top"><div className="wrap"><div className="section-heading narrow"><p className="eyebrow">{extra.kicker}</p><h2>{extra.referenceTitle}</h2><p className="section-copy">{extra.referenceNote}</p></div><div className="fact-grid">{extra.facts.map(f => <article className="fact-card" key={f.label}><span className="fact-label">{f.label}</span><strong>{f.value}</strong><small>{f.note}</small></article>)}</div></div></section>}
    {decodedSlug === '린M자주묻는질문' && <section className="section alt"><div className="wrap"><div className="section-heading narrow"><p className="eyebrow">QUICK ANSWERS</p><h2>린M 자주 묻는 질문</h2></div><div className="faq-list">{faqItems.map(([q,a],i) => <div className="faq-item" key={q}><span>0{i+1}</span><div><h3>{q}</h3><p>{a}</p></div></div>)}</div></div></section>}
    {page.sections.map((section,index) => <section className={`section ${index%2?'alt':''}`} key={section.title}><div className="wrap split"><div className={index%2?'order-two':''}><p className="eyebrow">{page.eyebrow}</p><h2>{section.title}</h2><p className="section-copy">{section.body}</p>{extra && index===1 && <ul className="check-list">{extra.checks.map(c => <li key={c}>{c}</li>)}</ul>}</div>{page.images[index+1] ? <div className="image-placeholder">{page.images[index+1]}</div> : <div className="info-panel"><span className="panel-overline">DIRECT SUPPORT</span><strong>몽땅 다이아 상담</strong><p>전화 {siteConfig.phone}</p><p>카카오톡 {siteConfig.kakaoId}</p></div>}</div></section>)}
    {extra && <section className="section related-section"><div className="wrap"><div className="section-heading narrow"><p className="eyebrow">RELATED GUIDE</p><h2>함께 보면 좋은 린M 정보</h2></div><div className="related-grid">{extra.links.map(item => <Link className="related-card" href={item.href} key={item.href}><strong>{item.label}</strong><p>{item.text}</p><span>자세히 보기 →</span></Link>)}</div></div></section>}
    <section className="section final-cta-section"><div className="wrap final-cta"><div><p className="eyebrow">MONGDDANG DIA</p><h2>상품명과 수량을 확인한 뒤 문의하세요</h2><p>상담 전에 원하는 상품과 수량을 정리하면 더 빠르게 확인할 수 있습니다.</p></div><div className="hero-actions"><a className="button primary" href={siteConfig.phoneHref}>{siteConfig.phone}</a><a className="button ghost" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 {siteConfig.kakaoId}</a></div></div></section>
  </>;
}