import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pages } from '@/lib/pages';
import { siteConfig } from '@/lib/site-config';
import './seo.module.css';

type Props = { params: Promise<{ slug: string }> };

type CoreExtra = {
  kicker: string;
  summary: string;
  facts: { label: string; value: string; note: string }[];
  checks: string[];
  links: { href: string; label: string; text: string }[];
};

const coreExtras: Record<string, CoreExtra> = {
  '린M다이아': {
    kicker: 'DIAMOND REFERENCE',
    summary: '린M: 잊혀진 유산의 다이아를 알아볼 때는 단순히 수량만 보는 것보다 공식 스토어 기준 가격, 필요한 수량, 패키지 포함 여부를 함께 확인하는 것이 좋습니다. 몽땅 다이아는 공식 기준 정보와 별도의 상담·구매 안내를 구분해 보여주는 방식으로 구성합니다.',
    facts: [
      { label: '60 다이아', value: '공식 스토어 1,500원', note: 'App Store 공개 인앱 구매 기준' },
      { label: '300 다이아', value: '공식 스토어 7,500원', note: 'App Store 공개 인앱 구매 기준' },
      { label: '6480 다이아', value: '공식 스토어 149,000원', note: 'App Store 공개 인앱 구매 기준' }
    ],
    checks: [
      '구매하려는 수량과 실제 필요한 사용 목적을 먼저 확인합니다.',
      '다이아 단품과 패키지 상품은 구성과 체감 가치가 다를 수 있으므로 분리해 비교합니다.',
      '표시된 공식 스토어 가격과 몽땅 다이아 상담 가격은 같은 의미가 아니므로 상담 시 최종 조건을 확인합니다.'
    ],
    links: [
      { href: '/린M가격', label: '린M 가격', text: '공식 기준 가격과 상품별 비교 포인트 확인' },
      { href: '/린M충전', label: '린M 충전', text: '충전 가능한 상품과 이용 전 확인사항 보기' },
      { href: '/린M패키지', label: '린M 패키지', text: '다이아 단품과 패키지 상품의 차이 살펴보기' }
    ]
  },
  '린M충전': {
    kicker: 'CHARGE GUIDE',
    summary: '린M 충전 페이지는 “얼마인가”보다 “무엇을 충전할 수 있고 무엇을 확인해야 하는가”에 초점을 맞춥니다. 린M: 잊혀진 유산에는 다이아와 다양한 인앱 패키지가 존재하므로 상품명을 정확히 확인한 뒤 상담하는 것이 중요합니다.',
    facts: [
      { label: '다이아', value: '수량형 인앱 상품', note: '60·300·6480 다이아 등 공개 상품 확인' },
      { label: '육성 패키지', value: '목적형 구성 상품', note: '성석 육성 패키지 등 공개 상품 확인' },
      { label: '장비·혜택 패키지', value: '구성 확인 필수', note: '윤회 장비 패키지·엔젤 블레스 등 공개 상품 확인' }
    ],
    checks: [
      '정확한 게임명인 린M: 잊혀진 유산 상품인지 먼저 확인합니다.',
      '다이아인지 패키지인지, 패키지라면 정확한 상품명을 확인합니다.',
      '신청 전 가격·수량·처리 방식·필요 정보를 상담 화면에서 다시 확인합니다.'
    ],
    links: [
      { href: '/린M충전방법', label: '린M 충전방법', text: '상품 확인부터 완료 확인까지 단계별 절차' },
      { href: '/린M다이아', label: '린M 다이아', text: '다이아 수량과 공식 스토어 기준 정보 확인' },
      { href: '/린M가격', label: '린M 가격', text: '상품 가격을 비교할 때 봐야 할 기준 확인' }
    ]
  },
  '린M가격': {
    kicker: 'PRICE REFERENCE',
    summary: '린M 가격 검색자는 숫자만 빨리 보고 싶어 하는 경우가 많지만, 다이아 단품과 패키지는 같은 기준으로 비교하면 오해하기 쉽습니다. 이 페이지는 린M: 잊혀진 유산의 공식 스토어 공개 가격을 기준점으로 제시하고, 실제 상담 가격은 별도로 확인하도록 구분합니다.',
    facts: [
      { label: '60 다이아', value: '1,500원', note: '공식 App Store 공개 가격' },
      { label: '300 다이아', value: '7,500원', note: '공식 App Store 공개 가격' },
      { label: '6480 다이아', value: '149,000원', note: '공식 App Store 공개 가격' },
      { label: '실버 훈장 패키지', value: '15,000원', note: '공식 App Store 공개 가격' }
    ],
    checks: [
      '다이아는 수량 대비 가격을, 패키지는 구성품과 목적을 함께 비교합니다.',
      '이벤트·스토어 정책에 따라 공개 가격이나 상품 구성이 바뀔 수 있습니다.',
      '몽땅 다이아의 실제 판매·상담 조건은 공식 스토어 가격과 별개이므로 문의 시 최종 금액을 확인합니다.'
    ],
    links: [
      { href: '/린M다이아', label: '린M 다이아', text: '다이아 자체의 용도와 구매 판단 정보' },
      { href: '/린M할인', label: '린M 할인', text: '할인 조건과 비교 기준을 별도로 확인' },
      { href: '/린M패키지', label: '린M 패키지', text: '패키지별 구성과 선택 기준 살펴보기' }
    ]
  }
};

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
  const extra = coreExtras[decodedSlug];

  return (
    <>
      <div className="breadcrumb-wrap">
        <div className="wrap breadcrumb"><Link href="/">홈</Link><span>›</span><span>{page.h1}</span></div>
      </div>

      <section className="hero sub-hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.h1}</h1>
            <p className="lead">{extra?.summary ?? page.intro}</p>
            <div className="trust-chips">
              <span>린M: 잊혀진 유산 기준</span>
              <span>상품별 정보 분리</span>
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
              <h2>먼저 확인할 기준 정보</h2>
              <p className="section-copy">아래 가격과 상품명은 공식 App Store에 공개된 린M: 잊혀진 유산 인앱 구매 정보를 참고용으로 정리한 것입니다. 몽땅 다이아의 판매가는 상담 시 별도로 확인합니다.</p>
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
