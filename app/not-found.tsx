import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export default function NotFound() {
  return (
    <section className="not-found-section">
      <div className="wrap not-found-card">
        <p className="eyebrow">404 · PAGE NOT FOUND</p>
        <span className="not-found-code">404</span>
        <h1>요청하신 린M 페이지를 찾을 수 없습니다</h1>
        <p>주소가 변경되었거나 존재하지 않는 페이지입니다. 아래 주요 메뉴에서 린M: 잊혀진 유산 관련 정보를 다시 확인해 주세요.</p>
        <div className="not-found-links">
          <Link className="button primary" href="/">몽땅 다이아 홈</Link>
          <Link className="button ghost" href="/린M다이아">린M 다이아</Link>
          <Link className="button ghost" href="/린M충전">린M 충전</Link>
          <a className="button ghost" href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer">카카오톡 문의</a>
        </div>
      </div>
    </section>
  );
}
