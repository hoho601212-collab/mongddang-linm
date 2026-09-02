import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

const coreServices = [
  { number:'01', title:'린M 다이아', description:'실제 상점 화면에서 확인되는 일반 다이아·귀속 다이아와 주요 사용처를 구분해 안내합니다.', href:'/린M다이아', link:'다이아 정보 보기' },
  { number:'02', title:'린M 충전', description:'60~6,480 다이아의 실제 충전 구간과 원화 가격, 첫 충전 혜택 표시를 정리합니다.', href:'/린M충전', link:'충전 가격 보기' },
  { number:'03', title:'린M 아이템', description:'신기석·성석 가루·마법석·보물지도·탈것 영혼 등 실제 상점 상품과 해금 조건을 확인합니다.', href:'/린M아이템', link:'아이템 정보 보기' }
];

const facts = [
  ['60 다이아','1,500원'],['300 다이아','7,500원'],['680 다이아','15,000원'],['980 다이아','22,000원'],['1,280 다이아','30,000원'],['1,980 다이아','45,000원'],['3,280 다이아','75,000원'],['6,480 다이아','149,000원']
];

const infoLinks = [
  { title:'린M 가격', text:'실제 다이아 충전 가격과 상점 재화별 가격 예시', href:'/린M가격' },
  { title:'린M 충전 방법', text:'게임 상점에서 충전 메뉴로 이동하는 실제 흐름', href:'/린M충전방법' },
  { title:'린M 할인', text:'한정 할인 화면과 종료된 원스토어 프로모션 구분', href:'/린M할인' },
  { title:'린M 가이드', text:'다이아·귀속 다이아·미네랄·포인트 재화 구조', href:'/린M가이드' },
  { title:'린M 이벤트', text:'공식 라운지 기준 최근 이벤트의 기간과 종료 여부', href:'/린M이벤트' },
  { title:'린M 업데이트', text:'8월 28일 점검·귀속 다이아 200 보상·표기 오류 수정', href:'/린M업데이트' }
];

const faqs = [
  ['린M 다이아 충전 가격은?', '실제 충전 화면 기준 60 다이아 1,500원부터 6,480 다이아 149,000원까지 8개 구간이 확인됩니다.'],
  ['일반 다이아와 귀속 다이아는 같은가요?', '아닙니다. 실제 상점에서 다이아와 귀속 다이아 메뉴 및 사용 재화가 별도로 구분되어 있습니다.'],
  ['상점 상품은 모두 바로 구매할 수 있나요?', '일부 상품에는 레벨 달성 해금 조건과 일일·주간·월간 구매 제한이 표시됩니다.']
];

export default function HomePage() {
  return <>
    <section className="hero home-hero"><div className="wrap hero-grid"><div className="hero-copy"><div className="trust-chip"><span className="trust-dot" /> 실제 상점·공식 공지 기준</div><p className="eyebrow">MONGDDANG DIA · LINM</p><h1>린M 다이아·충전·상점 정보를<br/><em>실제 자료 기준으로</em></h1><p className="lead">몽땅 다이아는 린M: 잊혀진 유산의 실제 게임 내 상점 스크린샷과 공식 라운지 공지를 바탕으로 다이아 가격, 재화, 아이템, 할인, 이벤트와 업데이트 정보를 정리합니다.</p><div className="hero-actions"><a className="button primary" href={siteConfig.phoneHref}>할인충전문의: {siteConfig.phone}</a><a className="button ghost" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카톡 문의: {siteConfig.kakaoId}</a></div><div className="hero-trust-row"><span>실제 충전 화면</span><span>공식 라운지 공지</span><span>2026-09-02 자료 기준</span></div></div><div className="hero-visual"><div className="visual-frame"><div className="visual-badge">LINM</div><div className="diamond-mark">◇</div><strong>몽땅 다이아</strong><span>linm-diamond-charge-price.webp</span></div></div></div></section>

    <section className="trust-strip"><div className="wrap trust-strip-inner"><div><strong>8개</strong><span>다이아 충전 구간</span></div><div><strong>4종+</strong><span>주요 재화 구분</span></div><div><strong>레벨</strong><span>상품 해금 조건</span></div><div><strong>제한</strong><span>일일·주간 구매 횟수</span></div></div></section>

    <section className="section intro-section"><div className="wrap section-heading centered"><p className="eyebrow">VERIFIED INFORMATION</p><h2>추정이 아니라 확인된 화면으로<br/>핵심 정보를 정리합니다</h2><p>가격·재화·아이템·할인·업데이트 정보를 페이지별 검색 의도에 맞게 나눴습니다.</p></div><div className="wrap service-grid">{coreServices.map(item=><Link className="service-card" href={item.href} key={item.href}><span className="service-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><span className="text-link">{item.link} →</span></Link>)}</div></section>

    <section className="section dark-panel-section"><div className="wrap split trust-section"><div className="image-placeholder premium-placeholder"><span className="placeholder-kicker">CHARGE PRICE</span><strong>실제 다이아 충전<br/>가격 구간</strong><small>linm-diamond-charge-price.webp</small></div><div className="content-block"><p className="eyebrow">DIAMOND PRICE</p><h2>실제 충전 화면에서 확인한<br/>다이아 원화 가격</h2><p className="body-copy">아래 가격은 2026년 9월 2일 제공된 실제 게임 충전 화면 기준입니다. 이후 게임 업데이트에 따라 달라질 수 있습니다.</p><div className="check-list">{facts.slice(0,4).map(([q,p])=><div key={q}><b>◇</b><span><strong>{q}</strong><small>{p}</small></span></div>)}</div><div className="process-link"><Link href="/린M가격">8개 전체 가격 구간 보기 →</Link></div></div></div></section>

    <section className="section info-hub-section"><div className="wrap info-hub-grid"><div className="info-hub-intro"><p className="eyebrow">LINM INFORMATION HUB</p><h2>실제 상점과 공식 공지를<br/>주제별로 확인하세요</h2><p>게임 내 화면에서 확인되는 정보와 기간이 있는 공식 이벤트·업데이트 정보를 구분해 제공합니다.</p><div className="image-placeholder compact-placeholder">linm-store-materials-overview.webp</div></div><div className="info-link-grid">{infoLinks.map(item=><Link href={item.href} className="info-link-card" key={item.href}><h3>{item.title}</h3><p>{item.text}</p><span>자세히 보기 →</span></Link>)}</div></div></section>

    <section className="section faq-section"><div className="wrap faq-grid"><div className="section-heading"><p className="eyebrow">FACT FAQ</p><h2>실제 자료에서<br/>확인되는 핵심 질문</h2><p>확인되지 않은 내용을 임의로 보완하지 않고 게임 화면과 공식 공지 범위에서 답합니다.</p><Link className="text-link standalone" href="/린M자주묻는질문">전체 FAQ 보기 →</Link></div><div className="faq-list">{faqs.map(([q,a],index)=><div className="faq-item" key={q}><span>0{index+1}</span><div><h3>{q}</h3><p>{a}</p></div></div>)}</div></div></section>

    <section className="final-cta-section"><div className="wrap final-cta"><div><p className="eyebrow">CONTACT MONGDDANG DIA</p><h2>현재 게임 화면과 조건을 확인한 뒤<br/>문의하세요</h2><p>가격·혜택·구매 가능 여부는 계정 상태와 업데이트에 따라 달라질 수 있습니다.</p></div><div className="final-cta-actions"><a className="button primary" href={siteConfig.phoneHref}>전화 {siteConfig.phone}</a><a className="button light" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 {siteConfig.kakaoId}</a></div></div></section>
  </>;
}