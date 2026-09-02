import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: '몽땅 다이아 개인정보처리방침입니다. 사이트 이용 중 개인정보 처리 원칙과 문의 방법을 안내합니다.',
  alternates: { canonical: '/개인정보처리방침' }
};

export default function PrivacyPage() {
  return (
    <section className="section policy-section">
      <div className="wrap policy-wrap">
        <p className="eyebrow">PRIVACY POLICY</p>
        <h1>개인정보처리방침</h1>
        <p className="policy-lead">몽땅 다이아는 사이트 이용자의 개인정보를 필요한 범위에서만 처리하며, 확인되지 않은 정보 수집이나 불필요한 저장을 최소화하는 것을 원칙으로 합니다.</p>

        <h2>1. 개인정보 처리 목적</h2>
        <p>전화 및 카카오톡 상담 과정에서 이용자가 직접 제공하는 정보는 문의 응대, 상품 확인, 상담 내용 확인을 위해 사용될 수 있습니다.</p>

        <h2>2. 사이트 내 직접 수집</h2>
        <p>현재 웹사이트 자체에는 이름, 전화번호, 계정정보 등을 입력받는 별도 신청 폼을 운영하지 않습니다. 상담은 전화 또는 카카오톡 등 외부 연락수단을 통해 진행됩니다.</p>

        <h2>3. 외부 서비스 이용</h2>
        <p>카카오톡 등 외부 서비스로 이동한 이후의 개인정보 처리에는 해당 서비스 제공자의 정책이 적용될 수 있습니다.</p>

        <h2>4. 개인정보 보유 및 이용</h2>
        <p>상담 과정에서 개인정보가 필요한 경우 상담 목적 달성에 필요한 범위에서 처리하며, 관계 법령상 보관 의무가 있는 경우를 제외하고 불필요하게 장기간 보유하지 않는 것을 원칙으로 합니다.</p>

        <h2>5. 이용자의 권리</h2>
        <p>이용자는 본인의 개인정보 처리와 관련해 열람, 정정, 삭제 또는 처리 중지를 요청할 수 있습니다. 요청 내용은 확인 후 가능한 범위에서 처리합니다.</p>

        <h2>6. 개인정보 관련 문의</h2>
        <p>개인정보 관련 문의는 전화 {siteConfig.phone} 또는 카카오톡 아이디 {siteConfig.kakaoId}를 통해 접수할 수 있습니다.</p>

        <h2>7. 방침 변경</h2>
        <p>서비스 구조나 관련 법령이 변경되는 경우 본 방침의 내용도 변경될 수 있으며, 중요한 변경사항은 사이트를 통해 안내합니다.</p>
      </div>
    </section>
  );
}
