export type PageSpec = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  sections: { title: string; body: string }[];
  images: string[];
};

export const pages: Record<string, PageSpec> = {
  '린M충전': {
    slug: '린M충전',
    title: '린M 충전 | 다이아·상품 충전 안내',
    description: '린M 충전 관련 상품과 이용 정보를 확인하세요. 다이아 및 주요 린M 상품의 충전 방식과 구매 전 확인사항을 몽땅 다이아에서 안내합니다.',
    h1: '린M 충전 다이아·상품 이용 안내',
    eyebrow: 'LINM CHARGE',
    intro: '린M 충전 페이지는 충전 가능한 상품과 이용 흐름을 중심으로 안내합니다.',
    sections: [
      { title: '린M 충전 상품', body: '실제 판매 상품 자료가 확정되면 충전 가능한 항목과 구성 차이를 이 영역에 정리합니다.' },
      { title: '이용 전 확인사항', body: '상품명, 계정 정보, 처리 조건 등 충전 신청 전에 확인해야 할 내용을 별도로 안내합니다.' },
      { title: '관련 정보 연결', body: '세부 절차는 린M충전방법, 가격 비교는 린M가격 페이지로 분리해 중복을 줄입니다.' }
    ],
    images: ['linm-charge-hero.webp', 'linm-charge-product.webp', 'linm-charge-service.webp']
  },
  '린M다이아': {
    slug: '린M다이아',
    title: '린M 다이아 | 가격·충전·이용 정보',
    description: '린M 다이아의 가격과 충전, 이용 정보를 확인하세요. 다이아 구매 전 알아둘 내용과 상품 선택 정보를 몽땅 다이아에서 안내합니다.',
    h1: '린M 다이아 가격과 충전 이용정보',
    eyebrow: 'LINM DIAMOND',
    intro: '린M의 다이아 자체에 초점을 맞춰 용도, 상품 구성, 구매 판단 정보를 다룹니다.',
    sections: [
      { title: '린M 다이아 이해하기', body: '다이아의 실제 게임 내 역할과 사용처는 공식 자료를 확인해 정확하게 작성합니다.' },
      { title: '다이아 상품 구성', body: '실제 판매 단위와 상품 구성이 확보되면 별도 표와 설명으로 제공합니다.' },
      { title: '가격·충전 정보', body: '가격과 충전 절차의 상세 설명은 각각 전용 페이지로 연결해 검색 의도를 분리합니다.' }
    ],
    images: ['linm-diamond-hero.webp', 'linm-diamond-info.webp', 'linm-diamond-guide.webp']
  },
  '린M아이템': {
    slug: '린M아이템',
    title: '린M 아이템 | 상품 종류 및 구매 정보',
    description: '린M 아이템과 주요 상품 정보를 확인하세요. 상품별 특징과 선택 시 확인할 사항을 몽땅 다이아에서 안내합니다.',
    h1: '린M 아이템 종류와 상품 이용 안내',
    eyebrow: 'LINM ITEM',
    intro: '다이아와 분리해 실제 아이템·상품 종류와 선택 기준에 집중합니다.',
    sections: [
      { title: '아이템 종류', body: '실제 게임 자료를 기준으로 거래·구매 가능한 아이템을 용도별로 구분합니다.' },
      { title: '선택 기준', body: '아이템별 특징과 이용 목적을 비교해 선택에 필요한 정보를 제공합니다.' },
      { title: '구매 전 체크', body: '상품 조건과 적용 방식 등 구매 전에 필요한 확인사항을 별도로 구성합니다.' }
    ],
    images: ['linm-item-hero.webp', 'linm-item-list.webp', 'linm-item-guide.webp']
  },
  '린M패키지': {
    slug: '린M패키지',
    title: '린M 패키지 | 상품·가격 선택 가이드',
    description: '린M 패키지 상품의 구성과 가격 정보를 살펴보고 목적에 맞는 상품 선택 기준을 몽땅 다이아에서 확인하세요.',
    h1: '린M 패키지 상품과 선택 가이드',
    eyebrow: 'LINM PACKAGE',
    intro: '패키지 상품의 구성 차이와 선택 기준을 중심으로 다루는 전용 페이지입니다.',
    sections: [
      { title: '패키지 구성', body: '현재 판매 패키지가 확인되면 구성품과 핵심 차이를 고유 콘텐츠로 정리합니다.' },
      { title: '패키지 비교', body: '가격뿐 아니라 구성과 이용 목적을 함께 비교할 수 있도록 구성합니다.' },
      { title: '구매 전 확인', body: '기간 한정 여부와 적용 조건 등 실제 상품 기준 주의사항을 제공합니다.' }
    ],
    images: ['linm-package-hero.webp', 'linm-package-product.webp', 'linm-package-compare.webp']
  },
  '린M가격': {
    slug: '린M가격',
    title: '린M 가격 | 다이아·아이템·상품 가격 안내',
    description: '린M 가격을 확인하려는 이용자를 위해 다이아, 아이템 및 주요 상품의 가격 구성과 비교 기준을 안내합니다.',
    h1: '린M 다이아·아이템 상품 가격 안내',
    eyebrow: 'LINM PRICE',
    intro: '구매 의도가 강한 가격 검색자를 위해 가격 구조와 비교 기준에 집중합니다.',
    sections: [
      { title: '상품별 가격', body: '실제 가격표를 제공받으면 상품명, 정가, 판매가 등을 한눈에 볼 수 있게 구성합니다.' },
      { title: '가격 비교 기준', body: '상품 구성과 적용 조건을 함께 비교하도록 해 단순 숫자 나열과 차별화합니다.' },
      { title: '가격 변동 안내', body: '이벤트나 상품 변경에 따라 달라질 수 있는 내용을 최신 기준으로 관리합니다.' }
    ],
    images: ['linm-price-hero.webp', 'linm-price-table.webp', 'linm-price-guide.webp']
  },
  '린M충전방법': {
    slug: '린M충전방법',
    title: '린M 충전 방법 | 다이아 충전 이용절차',
    description: '린M 충전 방법이 궁금하다면 상품 선택부터 신청, 결제, 처리 확인까지 실제 이용 절차와 주의사항을 단계별로 확인하세요.',
    h1: '린M 충전 방법과 이용절차',
    eyebrow: 'HOW TO CHARGE',
    intro: '이 페이지는 린M 충전의 실제 단계와 체크포인트만 집중적으로 설명합니다.',
    sections: [
      { title: '1. 상품 확인', body: '충전하려는 상품과 수량, 가격을 먼저 확인합니다.' },
      { title: '2. 신청 및 결제', body: '실제 주문 방식이 확정되면 신청과 결제 절차를 단계별로 안내합니다.' },
      { title: '3. 처리 확인', body: '처리 완료 후 이용자가 확인해야 할 사항을 별도로 제공합니다.' }
    ],
    images: ['linm-charge-method-hero.webp', 'linm-charge-method-step.webp', 'linm-charge-method-check.webp']
  },
  '린M할인': {
    slug: '린M할인',
    title: '린M 할인 | 다이아·충전 할인 정보',
    description: '린M 할인 정보를 확인하세요. 다이아와 충전 상품의 할인 방식, 가격 차이와 구매 전 확인할 내용을 몽땅 다이아에서 안내합니다.',
    h1: '린M 다이아·충전 할인 정보',
    eyebrow: 'LINM DISCOUNT',
    intro: '가격 페이지와 달리 할인율, 적용 조건, 절약 기준에 초점을 맞춥니다.',
    sections: [
      { title: '할인 적용 상품', body: '실제 할인 대상과 적용 기준을 확인해 상품별로 정리합니다.' },
      { title: '할인 비교', body: '정상가와 판매가의 차이를 쉽게 이해할 수 있도록 비교 영역을 구성합니다.' },
      { title: '할인 이용 시 확인사항', body: '기간, 수량, 적용 조건 등 할인 구매 전 확인사항을 별도로 안내합니다.' }
    ],
    images: ['linm-discount-hero.webp', 'linm-discount-benefit.webp', 'linm-discount-guide.webp']
  },
  '린M자주묻는질문': {
    slug: '린M자주묻는질문',
    title: '린M 자주 묻는 질문 | 충전·다이아 FAQ',
    description: '린M 충전과 다이아, 상품 가격, 이용방법 등 구매 전 자주 궁금해하는 질문과 답변을 몽땅 다이아에서 확인하세요.',
    h1: '린M 충전·다이아 자주 묻는 질문',
    eyebrow: 'LINM FAQ',
    intro: '반복 설명 대신 실제 질문과 짧고 명확한 답변을 중심으로 구성합니다.',
    sections: [
      { title: '충전 관련 질문', body: '충전 가능 상품과 처리 방식에 관한 실제 질문을 축적합니다.' },
      { title: '가격·할인 질문', body: '가격과 할인 조건에 관한 질문은 전용 페이지와 함께 연결합니다.' },
      { title: '상담 및 이용 질문', body: '카카오톡과 전화 문의 전에 확인할 수 있는 이용 정보를 제공합니다.' }
    ],
    images: ['linm-faq-hero.webp', 'linm-faq-support.webp']
  },
  '린M이벤트': {
    slug: '린M이벤트',
    title: '린M 이벤트 | 최신 이벤트·상품 정보',
    description: '린M 이벤트와 관련 상품 정보를 확인하세요. 진행 중인 이벤트와 기간, 주요 혜택 및 관련 정보를 보기 쉽게 정리합니다.',
    h1: '린M 최신 이벤트와 상품 정보',
    eyebrow: 'LINM EVENT',
    intro: '시의성이 중요한 린M 이벤트만 모아 최신 정보 중심으로 운영합니다.',
    sections: [
      { title: '진행 중 이벤트', body: '현재 진행 중인 이벤트를 최신 날짜 기준으로 정리합니다.' },
      { title: '이벤트 핵심 내용', body: '기간과 혜택, 관련 상품 등 이용자에게 필요한 내용을 요약합니다.' },
      { title: '종료 이벤트', body: '지난 이벤트는 현재 진행 정보와 섞이지 않도록 별도로 관리합니다.' }
    ],
    images: ['linm-event-hero.webp', 'linm-event-current.webp', 'linm-event-guide.webp']
  },
  '린M업데이트': {
    slug: '린M업데이트',
    title: '린M 업데이트 | 최신 패치·변경사항 정보',
    description: '린M 업데이트와 최신 패치 내용을 확인하세요. 주요 변경사항과 신규 콘텐츠 등 알아둘 업데이트 정보를 정리합니다.',
    h1: '린M 최신 업데이트 및 주요 변경사항',
    eyebrow: 'LINM UPDATE',
    intro: '판매 페이지와 분리해 최신 패치와 변경사항을 정보성 콘텐츠로 다룹니다.',
    sections: [
      { title: '최신 업데이트', body: '공식 업데이트 날짜와 핵심 내용을 확인해 정리합니다.' },
      { title: '주요 변경사항', body: '신규 콘텐츠, 시스템 변경 등 이용자 영향이 큰 내용을 설명합니다.' },
      { title: '관련 상품 변화', body: '업데이트에 따라 변경된 상품이 있다면 판매 페이지와 자연스럽게 연결합니다.' }
    ],
    images: ['linm-update-hero.webp', 'linm-update-news.webp', 'linm-update-summary.webp']
  },
  '린M가이드': {
    slug: '린M가이드',
    title: '린M 가이드 | 게임 정보·이용 가이드',
    description: '린M 게임 정보와 이용 가이드를 확인하세요. 초보 이용자부터 기존 이용자까지 참고할 수 있는 린M 관련 정보를 정리합니다.',
    h1: '린M 게임 정보 및 이용 가이드',
    eyebrow: 'LINM GUIDE',
    intro: '앞으로 검색량이 확인된 정보형 키워드를 확장하는 콘텐츠 허브입니다.',
    sections: [
      { title: '초보 이용 가이드', body: '게임 이해에 필요한 기초 정보와 자주 찾는 주제를 정리합니다.' },
      { title: '린M 정보 모음', body: '키워드 조사 후 독립 페이지 가치가 있는 정보 콘텐츠를 연결합니다.' },
      { title: '상품 관련 가이드', body: '구매형 페이지를 반복하지 않고 선택에 도움이 되는 정보만 제공합니다.' }
    ],
    images: ['linm-guide-hero.webp', 'linm-guide-beginner.webp', 'linm-guide-content.webp']
  }
};

export const pageList = Object.values(pages);
