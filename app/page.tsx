import Link from 'next/link';
import { navigation, siteConfig } from '@/lib/site-config';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">MONGDDANG DIA · LINM</p>
            <h1>린M 다이아·아이템 할인 안내 몽땅 다이아</h1>
            <p className="lead">린M 충전, 다이아, 아이템, 패키지, 가격과 이용 정보를 한곳에서 확인할 수 있도록 구성한 전문 안내 사이트입니다.</p>
            <div className="hero-actions">
              <a className="button primary" href={siteConfig.phoneHref}>전화 상담</a>
              <a className="button ghost" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 상담</a>
            </div>
          </div>
          <div className="image-placeholder">linm-main-hero.webp</div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">LINM SERVICES</p>
          <h2>린M 핵심 정보 바로가기</h2>
          <div className="card-grid">
            {navigation.map((item) => (
              <Link className="card" href={item.href} key={item.href}>
                <h3>{item.label}</h3>
                <p>{item.label}에 필요한 핵심 정보와 이용 안내를 확인하세요.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split">
          <div className="image-placeholder">linm-main-service.webp</div>
          <div>
            <p className="eyebrow">WHY MONGDDANG DIA</p>
            <h2>페이지마다 검색 의도를 분리한 린M 정보 구조</h2>
            <p>충전은 충전 상품과 서비스, 가격은 가격 비교, 충전방법은 실제 절차, 할인은 할인 조건에 집중해 같은 내용을 반복하지 않도록 설계합니다.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split reverse-mobile">
          <div>
            <p className="eyebrow">LINM GUIDE</p>
            <h2>린M 정보와 구매 정보를 자연스럽게 연결</h2>
            <p>최신 이벤트와 업데이트, 이용 가이드는 정보 중심으로 운영하고 필요한 경우 관련 상품·충전 페이지로 내부링크를 연결합니다.</p>
          </div>
          <div className="image-placeholder">linm-main-guide.webp</div>
        </div>
      </section>
    </>
  );
}
