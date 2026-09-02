import type { MetadataRoute } from 'next';
import { pageList } from '@/lib/pages';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const trustPages = ['개인정보처리방침', '이용안내'];
  return [
    { url: siteConfig.domain, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...pageList.map((page) => ({
      url: `${siteConfig.domain}/${encodeURIComponent(page.slug)}`,
      lastModified: now,
      changeFrequency: page.slug === '린M이벤트' || page.slug === '린M업데이트' ? ('weekly' as const) : ('monthly' as const),
      priority: ['린M충전', '린M다이아', '린M가격', '린M할인'].includes(page.slug) ? 0.9 : 0.8
    })),
    ...trustPages.map((slug) => ({
      url: `${siteConfig.domain}/${encodeURIComponent(slug)}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3
    }))
  ];
}
