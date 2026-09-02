import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: '몽땅 다이아 개인정보처리방침입니다. 개인정보 처리 원칙과 개인정보관리책임자 및 문의 방법을 안내합니다.',
  alternates: { canonical: '/개인정보처리방침' }
};

export default function PrivacyPage() {
  return (
    <section className="section policy-section">
      <div className="wrap policy-wrap">
        <p className="eyebrow">PRIVACY POLICY</p>
        <h1>개인정보처리방침</h1>
        <p className="policy-lead">몽땅 다이아는 사이트 이용자의 개인정보를 필요한 범위에서 처리하고, 개인정보 보호와 안전한 관리를 위해 노력합니다.</p>
        <h2>1. 개인정보 처리 목적</h2><p>전화 및 카카오톡 상담 과정에서 이용자가 직접 제공하는 정보는 문의 응대, 상품 확인, 상담 내용 확인을 위해 사용될 수 있습니다.</p>
        <h2>2. 사이트 내 직접 수집</h2><p>현재 웹사이트 자체에는 이름, 전화번호, 계정정보 등을 입력받는 별도 신청 폼을 운영하지 않습니다. 상담은 전화 또는 카카오톡 등 외부 연락수단을 통해 진행됩니다.</p>
        <h2>3. 외부 서비스 이용</h2><p>카카오톡 등 외부 서비스로 이동한 이후의 개인정보 처리에는 해당 서비스 제공자의 정책이 적용될 수 있습니다.</p>
        <h2>4. 개인정보 보유 및 이용</h2><p>상담 과정에서 개인정보가 필요한 경우 상담 목적 달성에 필요한 범위에서 처리하며, 관계 법령상 보관 의무가 있는 경우를 제외하고 불필요하게 장기간 보유하지 않는 것을 원칙으로 합니다.</p>
        <h2>5. 이용자의 권리</h2><p>이용자는 본인의 개인정보 처리와 관련해 열람, 정정, 삭제 또는 처리 중지를 요청할 수 있습니다. 요청 내용은 확인 후 가능한 범위에서 처리합니다.</p>
        <h2>6. 개인정보관리책임자</h2><div className="policy-info-box"><p><b>책임자</b> {siteConfig.privacyOfficer}</p><p><b>전화</b> <a href={siteConfig.phoneHref}>{siteConfig.phone}</a></p><p><b>이메일</b> <a href={siteConfig.emailHref}>{siteConfig.email}</a></p><p><b>사업자</b> {siteConfig.brand} · 대표 {siteConfig.representative}</p></div>
        <h2>7. 방침 변경</h2><p>서비스 구조나 관련 법령이 변경되는 경우 본 방침의 내용도 변경될 수 있으며, 중요한 변경사항은 사이트를 통해 안내합니다.</p>
      </div>
    </section>
  );
}
