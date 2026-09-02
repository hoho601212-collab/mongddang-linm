import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import './seo.css';
import { navigation, siteConfig } from '@/lib/site-config';
import { AutoImageLoader } from '@/components/AutoImageLoader';

export const metadata: Metadata = {
  title: { default: '린M | 다이아·아이템·충전 정보 - 몽땅 다이아', template: '%s - 몽땅 다이아' },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.domain),
  robots: { index: true, follow: true },
  openGraph: { type: 'website', locale: 'ko_KR', siteName: siteConfig.name, title: '린M | 몽땅 다이아', description: siteConfig.description }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteJsonLd = { '@context':'https://schema.org', '@type':'WebSite', name:siteConfig.name, url:siteConfig.domain, inLanguage:'ko-KR', description:siteConfig.description };
  const organizationJsonLd = {
    '@context':'https://schema.org', '@type':'Organization', name:siteConfig.brand, url:siteConfig.domain,
    address:{ '@type':'PostalAddress', streetAddress:siteConfig.address, addressCountry:'KR' },
    email:siteConfig.email,
    contactPoint:{ '@type':'ContactPoint', telephone:'+82-10-6289-3810', contactType:'customer service', availableLanguage:'Korean' }
  };
  return <html lang="ko"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteJsonLd)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd)}} />
    <AutoImageLoader />
    <header className="site-header"><div className="wrap header-inner"><Link className="brand" href="/">몽땅 다이아<small>린M: 잊혀진 유산</small></Link><nav aria-label="주요 메뉴">{navigation.slice(0,7).map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><div className="header-contact"><a href={siteConfig.phoneHref}>전화문의</a><a href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡</a></div></div><div className="mobile-nav" aria-label="모바일 주요 메뉴">{navigation.slice(0,7).map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div></header>
    <main>{children}</main>
    <footer className="site-footer"><div className="wrap footer-grid"><div className="footer-brand"><strong>{siteConfig.brand}</strong><p>린M: 잊혀진 유산의 다이아·충전·아이템·패키지 정보를 검색 목적에 맞게 안내합니다.</p><div className="business-info"><p><b>상호</b> {siteConfig.brand} <span>·</span> <b>대표</b> {siteConfig.representative}</p><p><b>주소</b> {siteConfig.address}</p><p><b>사업자등록번호</b> {siteConfig.businessNumber}</p><p><b>통신판매업신고</b> {siteConfig.mailOrderNumber}</p><p><b>개인정보관리책임자</b> {siteConfig.privacyOfficer}</p><p><b>전화</b> <a href={siteConfig.phoneHref}>{siteConfig.phone}</a> <span>·</span> <b>이메일</b> <a href={siteConfig.emailHref}>{siteConfig.email}</a></p></div><div className="footer-policy-links"><Link href="/개인정보처리방침">개인정보처리방침</Link><Link href="/이용안내">사이트 이용안내</Link></div></div><div><b>구매 정보</b><Link href="/린M다이아">린M 다이아</Link><Link href="/린M충전">린M 충전</Link><Link href="/린M가격">린M 가격</Link><Link href="/린M할인">린M 할인</Link></div><div><b>상품 정보</b><Link href="/린M아이템">린M 아이템</Link><Link href="/린M패키지">린M 패키지</Link><Link href="/린M충전방법">린M 충전방법</Link><Link href="/린M자주묻는질문">자주 묻는 질문</Link></div><div><b>린M 정보</b><Link href="/린M가이드">린M 가이드</Link><Link href="/린M이벤트">린M 이벤트</Link><Link href="/린M업데이트">린M 업데이트</Link></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</span><span>확정되지 않은 가격·할인율·이벤트 조건은 임의로 표시하지 않습니다.</span></div></footer>
    <div className="contact-bar"><a href={siteConfig.phoneHref}>전화 상담</a><a href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 상담</a></div>
  </body></html>;
}