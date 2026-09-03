export const siteConfig = {
  name: '몽땅 다이아',
  brand: '몽땅 다이아',
  mainKeyword: '린M',
  businessName: '지브이페이(GV페이)',
  representative: '신용황',
  address: '대구광역시 서구 북비산로 382-2 (비산동)',
  phone: '010-6289-3810',
  phoneHref: 'tel:01062893810',
  businessNumber: '798-96-01263',
  privacyOfficer: '신용황',
  email: 'buyman1@naver.com',
  emailHref: 'mailto:buyman1@naver.com',
  kakaoId: 'pay3810',
  kakaoUrl: 'http://qr.kakao.com/talk/i2upgpbu1am6frQeVqvvHamKNWg-',
  domain: 'https://pumasy.co.kr',
  description: '몽땅 다이아는 린M: 잊혀진 유산의 다이아 충전, 아이템, 패키지, 가격과 할인 정보를 주제별로 안내합니다. 린M 다이아 수량별 충전 가격부터 일반·귀속 다이아 사용처, 상점 상품과 구매 제한, 이벤트·업데이트까지 필요한 정보를 한곳에서 살펴보세요.',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION ?? 'zWqlsjw-Gbd-I615Hfp8ZTsbwXLuoFQxHg7kF6gcgVI',
    naver: process.env.NAVER_SITE_VERIFICATION ?? '87d824674be1fefa4a05609389037cb23e5c9f95'
  }
} as const;

export const navigation = [
  { label: '린M충전', href: '/린M충전' },
  { label: '린M다이아', href: '/린M다이아' },
  { label: '린M아이템', href: '/린M아이템' },
  { label: '린M패키지', href: '/린M패키지' },
  { label: '린M가격', href: '/린M가격' },
  { label: '린M충전방법', href: '/린M충전방법' },
  { label: '린M할인', href: '/린M할인' },
  { label: 'FAQ', href: '/린M자주묻는질문' },
  { label: '린M이벤트', href: '/린M이벤트' },
  { label: '린M업데이트', href: '/린M업데이트' },
  { label: '린M가이드', href: '/린M가이드' }
] as const;
