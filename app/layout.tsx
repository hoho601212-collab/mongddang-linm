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
  const organizationJsonLd = { '@context':'https://schema.org', '@type':'Organization', name:siteConfig.brand, url:siteConfig.domain, contactPoint:{ '@type':'ContactPoint', telephone:'+82-10-6289-3810', contactType:'customer service', availableLanguage:'Korean' } };
  return <html lang="ko"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteJsonLd)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd)}} />
    <AutoImageLoader />
    <header className="site-header"><div className="wrap header-inner"><Link className="brand" href="/">몽땅 다이아</Link><nav aria-label="주요 메뉴">{navigation.slice(0,7).map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></div></header>
    <main>{children}</main>
    <footer className="site-footer"><div className="wrap"><strong>{siteConfig.brand}</strong><p>린M: 잊혀진 유산 관련 상품·충전·이용 정보를 안내합니다.</p><p>전화 {siteConfig.phone} · 카카오톡 {siteConfig.kakaoId}</p></div></footer>
    <div className="contact-bar"><a href={siteConfig.phoneHref}>전화 상담</a><a href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 상담</a></div>
  </body></html>;
}