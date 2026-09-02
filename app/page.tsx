import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

const coreServices = [
  { number:'01', title:'린M 다이아', description:'일반 다이아·귀속 다이아의 차이와 주요 상점 사용처를 구분해 안내합니다.', href:'/린M다이아', link:'린M 다이아 사용처 확인' },
  { number:'02', title:'린M 충전', description:'60~6,480 다이아 충전 상품의 원화 가격과 첫 충전 혜택을 정리합니다.', href:'/린M충전', link:'린M 충전 상품 확인' },
  { number:'03', title:'린M 아이템', description:'신기석·성석 가루·마법석·보물지도·탈것 영혼 등 상점 상품과 해금 조건을 안내합니다.', href:'/린M아이템', link:'린M 아이템 정보 확인' }
];

const facts = [
  ['60 다이아','1,500원'],['300 다이아','7,500원'],['680 다이아','15,000원'],['980 다이아','22,000원'],['1,280 다이아','30,000원'],['1,980 다이아','45,000원'],['3,280 다이아','75,000원'],['6,480 다이아','149,000원']
];

const infoLinks = [
  { title:'린M 가격표', text:'다이아 충전 금액과 상점 재화별 가격 비교', href:'/린M가격', anchor:'린M 가격표·충전 금액 비교' },
  { title:'린M 충전방법', text:'게임 상점에서 충전 메뉴로 이동해 결제 전 확인하는 순서', href:'/린M충전방법', anchor:'린M 충전방법 순서 보기' },
  { title:'린M 할인', text:'한정 할인 상품과 기간형 원스토어 프로모션 구분', href:'/린M할인', anchor:'린M 한정 할인 확인' },
  { title:'린M 초보 가이드', text:'다이아·귀속 다이아·미네랄·포인트와 상점 이용 기본', href:'/린M가이드', anchor:'린M 초보 가이드 보기' },
  { title:'린M 이벤트', text:'공식 이벤트의 진행 기간과 종료 여부 확인', href:'/린M이벤트', anchor:'린M 이벤트 기간 확인' },
  { title:'린M 업데이트', text:'점검 일정·보상·변경사항을 날짜별로 확인', href:'/린M업데이트', anchor:'린M 업데이트·점검 확인' }
];

const faqs = [
  ['린M 다이아 충전 가격은?', '충전 화면 기준 60 다이아 1,500원부터 6,480 다이아 149,000원까지 8개 구간이 있습니다.'],
  ['일반 다이아와 귀속 다이아는 같은가요?', '아닙니다. 상점에서 다이아와 귀속 다이아 메뉴 및 사용 재화가 별도로 구분되어 있습니다.'],
  ['상점 상품은 모두 바로 구매할 수 있나요?', '일부 상품에는 레벨 달성 해금 조건과 일일·주간·월간 구매 제한이 표시됩니다.']
];

export default function HomePage() {
  return <>
    <section className="hero home-hero"><div className="wrap hero-grid"><div className="hero-copy"><div className="trust-chip"><span className="trust-dot" /> 린M 상점·공식 공지 정보</div><p className="eyebrow">MONGDDANG DIA · LINM</p><h1>린M 다이아·충전·상점 정보를<br/><em>한곳에서 쉽게 확인</em></h1><p className="lead">몽땅 다이아는 린M: 잊혀진 유산의 다이아 충전 가격, 일반·귀속 다이아 사용처, 아이템, 할인, 이벤트와 업데이트 정보를 검색 목적에 맞게 나눠 안내합니다.</p><div className="hero-actions"><a className="button primary" href={siteConfig.phoneHref}>할인충전문의: {siteConfig.phone}</a><a className="button ghost" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카톡 문의: {siteConfig.kakaoId}</a></div><div className="hero-trust-row"><span>다이아 충전 가격</span><span>상점·재화 정보</span><span>이벤트·업데이트</span></div></div><div className="hero-visual"><div className="visual-frame"><div className="visual-badge">LINM</div><div className="diamond-mark">◇</div><strong>몽땅 다이아</strong><span>linm-diamond-charge-price.webp</span></div></div></div></section>

    <section className="trust-strip"><div className="wrap trust-strip-inner"><div><strong>8개</strong><span>다이아 충전 구간</span></div><div><strong>4종+</strong><span>주요 재화 구분</span></div><div><strong>레벨</strong><span>상품 해금 조건</span></div><div><strong>제한</strong><span>일일·주간 구매 횟수</span></div></div></section>

    <section className="section intro-section"><div className="wrap section-heading centered"><p className="eyebrow">LINM INFORMATION</p><h2>찾는 정보에 맞춰<br/>린M 페이지를 선택하세요</h2><p>충전·다이아·아이템처럼 서로 다른 검색 목적을 페이지별로 나눠 필요한 정보를 빠르게 찾을 수 있습니다.</p></div><div className="wrap service-grid">{coreServices.map(item=><Link className="service-card" href={item.href} key={item.href}><span className="service-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><span className="text-link">{item.link} →</span></Link>)}</div></section>

    <section className="section dark-panel-section"><div className="wrap split trust-section"><div className="image-placeholder premium-placeholder"><span className="placeholder-kicker">CHARGE PRICE</span><strong>린M 다이아 충전<br/>가격 구간</strong><small>linm-diamond-charge-price.webp</small></div><div className="content-block"><p className="eyebrow">DIAMOND PRICE</p><h2>린M 다이아 충전 금액을<br/>수량별로 비교하세요</h2><p className="body-copy">다이아 충전은 수량에 따라 원화 결제 금액이 달라집니다. 필요한 수량을 정한 뒤 각 충전 구간의 가격과 계정에 표시되는 혜택을 함께 살펴보세요.</p><div className="check-list">{facts.slice(0,4).map(([q,p])=><div key={q}><b>◇</b><span><strong>{q}</strong><small>{p}</small></span></div>)}</div><div className="process-link"><Link href="/린M가격">린M 다이아 전체 가격표 보기 →</Link></div></div></div></section>

    <section className="section info-hub-section"><div className="wrap info-hub-grid"><div className="info-hub-intro"><p className="eyebrow">LINM INFORMATION HUB</p><h2>가격·충전방법·할인부터<br/>이벤트와 업데이트까지</h2><p>원하는 정보의 검색 목적에 맞는 페이지로 이동해 린M 정보를 주제별로 살펴보세요.</p><div className="image-placeholder compact-placeholder">linm-store-materials-overview.webp</div></div><div className="info-link-grid">{infoLinks.map(item=><Link href={item.href} className="info-link-card" key={item.href}><h3>{item.title}</h3><p>{item.text}</p><span>{item.anchor} →</span></Link>)}</div></div></section>

    <section className="section faq-section"><div className="wrap faq-grid"><div className="section-heading"><p className="eyebrow">LINM FAQ</p><h2>린M 다이아·충전·상점<br/>자주 묻는 질문</h2><p>재화 차이, 충전 가격, 상품 구매 조건처럼 이용자가 자주 찾는 내용을 질문별로 정리했습니다.</p><Link className="text-link standalone" href="/린M자주묻는질문">린M 자주 묻는 질문 전체 보기 →</Link></div><div className="faq-list">{faqs.map(([q,a],index)=><div className="faq-item" key={q}><span>0{index+1}</span><div><h3>{q}</h3><p>{a}</p></div></div>)}</div></div></section>

    <section className="final-cta-section"><div className="wrap final-cta"><div><p className="eyebrow">CONTACT MONGDDANG DIA</p><h2>린M 다이아·충전 관련<br/>궁금한 내용을 문의하세요</h2><p>가격·혜택·구매 가능 여부는 계정 상태와 게임 업데이트에 따라 달라질 수 있습니다.</p></div><div className="final-cta-actions"><a className="button primary" href={siteConfig.phoneHref}>전화 {siteConfig.phone}</a><a className="button light" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 {siteConfig.kakaoId}</a></div></div></section>
  </>;
}