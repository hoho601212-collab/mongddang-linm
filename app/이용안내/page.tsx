import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: '사이트 이용안내',
  description: '몽땅 다이아 사이트 이용안내입니다. 제공 정보의 기준과 상담 이용 방법을 안내합니다.',
  alternates: { canonical: '/이용안내' }
};

export default function UseGuidePage() {
  return (
    <section className="section policy-section">
      <div className="wrap policy-wrap">
        <p className="eyebrow">SITE INFORMATION</p>
        <h1>사이트 이용안내</h1>
        <p className="policy-lead">몽땅 다이아는 린M: 잊혀진 유산 관련 정보를 주제별로 정리하고 전화 및 카카오톡 상담으로 연결하는 안내 사이트입니다.</p>
        <h2>제공 정보</h2>
        <p>다이아, 충전, 아이템, 패키지, 가격, 할인, 이벤트, 업데이트 등 이용자가 자주 찾는 정보를 검색 목적별로 나누어 제공합니다.</p>
        <h2>최신 정보 확인</h2>
        <p>가격, 상품 구성, 이벤트와 업데이트는 시점에 따라 달라질 수 있으므로 중요한 내용은 상담 또는 공식 서비스 화면에서 다시 확인해 주세요.</p>
        <h2>상담 이용</h2>
        <p>상담 전 정확한 게임명, 원하는 상품명과 수량을 준비하면 필요한 내용을 더 빠르게 확인할 수 있습니다.</p>
        <h2>외부 서비스</h2>
        <p>카카오톡 등 외부 서비스로 이동한 이후에는 해당 서비스의 이용정책이 적용될 수 있습니다.</p>
        <h2>문의</h2>
        <p>사이트 이용 문의는 전화 {siteConfig.phone} 또는 카카오톡 아이디 {siteConfig.kakaoId}로 확인할 수 있습니다.</p>
      </div>
    </section>
  );
}
