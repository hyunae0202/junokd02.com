// @section: site-data
export const SITE = {
  name: '준오헤어',
  branch: '건대역2호점',
  fullName: '준오헤어 건대역2호점',
  phone: '02-453-0220',
  naverBookingUrl: 'https://booking.naver.com/booking/13/bizes/search?keyword=%EC%A4%80%EC%98%A4%ED%97%A4%EC%96%B4',
  address: '서울 광진구 능동로 233 건대입구역 2호점',
  addressDetail: '지하철 2호선·7호선 건대입구역 2번 출구 도보 3분',
  mapEmbed: 'https://map.kakao.com/?q=%EC%A4%80%EC%98%A4%ED%97%A4%EC%96%B4+%EA%B1%B4%EB%8C%80%EC%97%AD',
  hours: [
    { day: '월~금', time: '10:00 – 20:00' },
    { day: '토요일', time: '09:00 – 19:00' },
    { day: '일요일', time: '10:00 – 18:00' },
    { day: '법정공휴일', time: '휴무' },
  ],
};

export const DESIGNERS = [
  {
    id: 1,
    name: '이수현',
    title: '수석 디자이너',
    career: '경력 12년',
    specialty: '커트 · 웨이브 · 볼륨매직',
    desc: '자연스러운 실루엣과 얼굴형을 살리는 커트가 특기입니다. 고객의 라이프스타일에 맞는 맞춤형 스타일을 제안합니다.',
    tag: 'SH',
    color: 'from-stone-300 to-amber-200',
  },
  {
    id: 2,
    name: '박지민',
    title: '컬러 전문 디자이너',
    career: '경력 9년',
    specialty: '염색 · 탈색 · 새치커버',
    desc: '트렌디한 컬러와 데미지 케어를 동시에. 섬세한 블리칭 기술로 원하는 발색을 완성해드립니다.',
    tag: 'JM',
    color: 'from-amber-200 to-yellow-100',
  },
  {
    id: 3,
    name: '최하은',
    title: '펌 전문 디자이너',
    career: '경력 7년',
    specialty: '파마 · 세팅 · 스트레이트',
    desc: '두피 친화적 약제 선택으로 건강한 펌을 추구합니다. 볼륨부터 웨이브까지 입체적인 질감을 만들어드립니다.',
    tag: 'HE',
    color: 'from-orange-100 to-stone-200',
  },
];

export const MENU_CATEGORIES = [
  {
    category: '커트',
    icon: '✂️',
    items: [
      { name: '여성 커트', price: '30,000~' },
      { name: '남성 커트', price: '20,000~' },
      { name: '아동 커트', price: '15,000~' },
      { name: '레이어드 커트', price: '35,000~' },
    ],
  },
  {
    category: '파마',
    icon: '〰️',
    items: [
      { name: '일반 파마', price: '70,000~' },
      { name: '매직 스트레이트', price: '100,000~' },
      { name: '볼륨매직', price: '120,000~' },
      { name: '엔믹스 파마', price: '130,000~' },
    ],
  },
  {
    category: '염색',
    icon: '🎨',
    items: [
      { name: '전체 염색', price: '60,000~' },
      { name: '탈색', price: '80,000~' },
      { name: '새치 커버', price: '50,000~' },
      { name: '이너/부분 컬러', price: '70,000~' },
    ],
  },
  {
    category: '트리트먼트',
    icon: '✨',
    items: [
      { name: '두피 스케일링', price: '40,000~' },
      { name: '케라틴 트리트먼트', price: '60,000~' },
      { name: '집중 영양 트리트먼트', price: '35,000~' },
      { name: '두피 앰플 케어', price: '45,000~' },
    ],
  },
];

export const FAQ_ITEMS = [
  {
    q: '예약 없이 방문해도 되나요?',
    a: '가능하지만, 대기 시간이 발생할 수 있습니다. 원활한 서비스 제공을 위해 네이버 예약을 통한 사전 예약을 권장드립니다.',
  },
  {
    q: '주차는 가능한가요?',
    a: '건물 자체 주차장이 없으며, 인근 공영주차장 이용을 안내해 드립니다. 대중교통 이용 시 지하철 2·7호선 건대입구역 2번 출구에서 도보 3분 거리입니다.',
  },
  {
    q: '시술 전 상담은 어떻게 진행되나요?',
    a: '방문 시 담당 디자이너와 1:1 사전 상담을 진행합니다. 모발 상태, 원하는 스타일, 생활 패턴 등을 파악하여 최적의 시술을 제안해드립니다.',
  },
  {
    q: '시술 후 A/S가 가능한가요?',
    a: '시술 후 7일 이내에 형태·컬러 등의 불만족 사항이 있으시면 담당 디자이너와 상담 후 무료로 수정해드립니다.',
  },
  {
    q: '어린 아이도 시술 가능한가요?',
    a: '네, 아동 커트 서비스를 제공하고 있습니다. 아이의 두피와 모발에 안전한 제품을 사용하며, 편안한 환경에서 진행됩니다.',
  },
  {
    q: '카드 결제가 가능한가요?',
    a: '모든 카드 결제가 가능합니다. 현금·계좌이체도 이용 가능하며, 네이버페이·카카오페이 등 간편결제도 지원합니다.',
  },
];
