import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

const coreServices = [
  {
    number: '01',
    title: '린M 다이아',
    description: '린M: 잊혀진 유산의 핵심 재화인 다이아 정보를 중심으로 가격과 이용 전 확인사항을 정리합니다.',
    href: '/린M다이아',
    link: '다이아 정보 보기'
  },
  {
    number: '02',
    title: '린M 충전',
    description: '충전 관련 상품과 이용 정보를 한곳에서 확인하고 필요한 내용을 빠르게 비교할 수 있습니다.',
    href: '/린M충전',
    link: '충전 안내 보기'
  },
  {
    number: '03',
    title: '린M 패키지',
    description: '패키지별 구성과 목적을 살펴보고 본인에게 필요한 상품인지 판단할 수 있도록 안내합니다.',
    href: '/린M패키지',
    link: '패키지 정보 보기'
  }
];

const steps = [
  ['01', '상품 확인', '다이아·아이템·패키지 등 필요한 상품 정보를 먼저 확인합니다.'],
  ['02', '가격 확인', '구매 전 가격과 구성, 적용 조건을 충분히 비교합니다.'],
  ['03', '상담 및 신청', '궁금한 내용은 전화 또는 카카오톡으로 확인 후 진행합니다.'],
  ['04', '완료 확인', '진행 후 신청 내용과 처리 결과를 다시 한번 확인합니다.']
];

const infoLinks = [
  { title: '린M 가격', text: '다이아와 주요 상품의 가격 정보를 비교합니다.', href: '/린M가격' },
  { title: '린M 충전 방법', text: '상품 선택부터 완료 확인까지 순서대로 살펴봅니다.', href: '/린M충전방법' },
  { title: '린M 할인', text: '할인 방식과 이용 전에 확인할 조건을 정리합니다.', href: '/린M할인' },
  { title: '린M 가이드', text: '초보 이용자도 이해하기 쉬운 게임 정보와 이용 팁을 제공합니다.', href: '/린M가이드' },
  { title: '린M 이벤트', text: '진행 중인 이벤트와 관련 정보를 보기 쉽게 정리합니다.', href: '/린M이벤트' },
  { title: '린M 업데이트', text: '최신 패치와 주요 변경사항을 빠르게 확인합니다.', href: '/린M업데이트' }
];

const faqs = [
  ['린M은 어떤 게임인가요?', '이 사이트에서 안내하는 린M은 Ujoy Games의 모바일 RPG ‘린M: 잊혀진 유산’을 기준으로 합니다.'],
  ['어떤 정보를 확인할 수 있나요?', '다이아, 충전, 아이템, 패키지, 가격, 할인, 이벤트와 업데이트 등 이용 전 필요한 정보를 주제별로 확인할 수 있습니다.'],
  ['상담은 어떻게 하나요?', `전화 ${siteConfig.phone} 또는 카카오톡 아이디 ${siteConfig.kakaoId}로 문의할 수 있습니다.`]
];

export default function HomePage() {
  return (
    <>
      <section className="hero home-hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="trust-chip"><span className="trust-dot" /> 린M: 잊혀진 유산 전문 안내</div>
            <p className="eyebrow">MONGDDANG DIA · LINM</p>
            <h1>린M 다이아부터 충전 정보까지<br /><em>한눈에, 정확하게</em></h1>
            <p className="lead">몽땅 다이아는 린M 다이아·아이템·패키지·가격 정보를 목적별로 정리해, 구매 전에 필요한 내용을 빠르게 확인할 수 있도록 구성한 전문 안내 사이트입니다.</p>
            <div className="hero-actions">
              <a className="button primary" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 상담하기</a>
              <Link className="button ghost" href="/린M다이아">다이아 정보 확인</Link>
            </div>
            <div className="hero-trust-row">
              <span>상품별 정보 분리</span><span>구매 전 확인사항 안내</span><span>전화·카톡 상담</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-frame">
              <div className="visual-badge">LINM</div>
              <div className="diamond-mark">◇</div>
              <strong>몽땅 다이아</strong>
              <span>linm-main-hero.webp</span>
            </div>
            <div className="floating-card"><small>QUICK CONTACT</small><strong>{siteConfig.phone}</strong><span>카카오톡 {siteConfig.kakaoId}</span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="wrap trust-strip-inner">
          <div><strong>린M</strong><span>게임 정보</span></div>
          <div><strong>다이아</strong><span>재화 안내</span></div>
          <div><strong>충전</strong><span>이용 정보</span></div>
          <div><strong>패키지</strong><span>상품 비교</span></div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="wrap section-heading centered">
          <p className="eyebrow">CORE SERVICE</p>
          <h2>찾는 정보에 바로 도달하도록<br />핵심 서비스를 나눴습니다</h2>
          <p>같은 내용을 반복하기보다, 검색 목적에 따라 필요한 정보만 깊이 있게 확인할 수 있도록 구성합니다.</p>
        </div>
        <div className="wrap service-grid">
          {coreServices.map((item) => (
            <Link className="service-card" href={item.href} key={item.href}>
              <span className="service-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="text-link">{item.link} →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section dark-panel-section">
        <div className="wrap split trust-section">
          <div className="image-placeholder premium-placeholder">
            <span className="placeholder-kicker">INFORMATION FIRST</span>
            <strong>확인하고 선택할 수 있는<br />정보 구조</strong>
            <small>linm-main-service.webp</small>
          </div>
          <div className="content-block">
            <p className="eyebrow">WHY MONGDDANG DIA</p>
            <h2>충전보다 먼저,<br />확인해야 할 정보를 보여드립니다</h2>
            <p className="body-copy">가격만 강조하는 페이지보다 어떤 상품인지, 어떤 차이가 있는지, 이용 전에 무엇을 확인해야 하는지를 먼저 이해할 수 있어야 합니다.</p>
            <div className="check-list">
              <div><b>01</b><span><strong>상품 정보를 구분</strong><small>다이아·아이템·패키지의 목적과 정보를 분리합니다.</small></span></div>
              <div><b>02</b><span><strong>가격과 조건을 함께 확인</strong><small>숫자만 보여주지 않고 확인해야 할 기준을 같이 안내합니다.</small></span></div>
              <div><b>03</b><span><strong>관련 정보까지 연결</strong><small>이벤트·업데이트·가이드 페이지와 자연스럽게 연결합니다.</small></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="wrap section-heading">
          <p className="eyebrow">HOW TO USE</p>
          <h2>복잡하지 않은 이용 흐름</h2>
          <p>필요한 정보를 확인한 뒤 상담과 신청까지 자연스럽게 이어질 수 있도록 단계별로 안내합니다.</p>
        </div>
        <div className="wrap process-grid">
          {steps.map(([num, title, text]) => (
            <div className="process-card" key={num}>
              <span>{num}</span><h3>{title}</h3><p>{text}</p>
            </div>
          ))}
        </div>
        <div className="wrap process-link"><Link href="/린M충전방법">린M 충전 방법 자세히 보기 →</Link></div>
      </section>

      <section className="section info-hub-section">
        <div className="wrap info-hub-grid">
          <div className="info-hub-intro">
            <p className="eyebrow">LINM INFORMATION HUB</p>
            <h2>구매 정보와 게임 정보를<br />한곳에서 연결합니다</h2>
            <p>필요한 순간에 필요한 페이지로 이동할 수 있도록 정보 구조를 단순하고 명확하게 구성했습니다.</p>
            <div className="image-placeholder compact-placeholder">linm-main-guide.webp</div>
          </div>
          <div className="info-link-grid">
            {infoLinks.map((item) => (
              <Link href={item.href} className="info-link-card" key={item.href}>
                <h3>{item.title}</h3><p>{item.text}</p><span>자세히 보기 →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="wrap faq-grid">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>처음 방문하셨다면<br />이것부터 확인하세요</h2>
            <p>더 자세한 내용은 자주 묻는 질문 페이지에서 주제별로 확인할 수 있습니다.</p>
            <Link className="text-link standalone" href="/린M자주묻는질문">전체 FAQ 보기 →</Link>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a], index) => (
              <div className="faq-item" key={q}><span>0{index + 1}</span><div><h3>{q}</h3><p>{a}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="wrap final-cta">
          <div><p className="eyebrow">CONTACT MONGDDANG DIA</p><h2>궁금한 내용은 확인한 뒤<br />편하게 문의하세요</h2><p>린M 다이아·충전·상품 관련 문의를 전화와 카카오톡으로 안내합니다.</p></div>
          <div className="final-cta-actions"><a className="button primary" href={siteConfig.phoneHref}>전화 {siteConfig.phone}</a><a className="button light" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 {siteConfig.kakaoId}</a></div>
        </div>
      </section>
    </>
  );
}
