import hotel from "@/assets/stay-hotel.jpg";
import motel from "@/assets/stay-motel.jpg";
import pension from "@/assets/stay-pension.jpg";
import pool from "@/assets/stay-pool.jpg";
import type { Stay } from "@/components/site/StayCard";

export interface Room {
  name: string;
  capacity: string;
  bed: string;
  size: string;
  price: number;
  originalPrice?: number;
  benefits: string[];
}

export interface Review {
  user: string;
  rating: number;
  date: string;
  roomType: string;
  content: string;
}

export interface StayDetail extends Stay {
  id: string;
  images: string[];
  description: string;
  address: string;
  checkIn: string;
  checkOut: string;
  amenities: string[];
  rooms: Room[];
  reviewList: Review[];
  ratingBreakdown: { label: string; score: number }[];
}

export const stays: StayDetail[] = [
  {
    id: "signiel-seoul",
    image: hotel,
    images: [hotel, pool, pension, motel],
    badge: "특가",
    type: "5성급 호텔",
    name: "그랜드 시그니엘 서울",
    location: "서울 송파",
    address: "서울특별시 송파구 올림픽로 300",
    rating: 4.9,
    reviews: 2841,
    price: 289000,
    originalPrice: 420000,
    description:
      "롯데월드타워 76~101층에 자리한 럭셔리 호텔. 한강과 도심 스카이라인을 한눈에 담는 파노라마 뷰와 미쉐린 다이닝, 시그니엘 스파를 경험할 수 있습니다.",
    checkIn: "15:00",
    checkOut: "11:00",
    amenities: [
      "무료 Wi-Fi",
      "발렛 주차",
      "수영장",
      "피트니스",
      "스파",
      "조식 뷔페",
      "비즈니스 라운지",
      "24시간 룸서비스",
    ],
    rooms: [
      {
        name: "디럭스 시티뷰",
        capacity: "기준 2인 / 최대 3인",
        bed: "킹베드 1개",
        size: "42㎡",
        price: 289000,
        originalPrice: 420000,
        benefits: ["조식 2인 포함", "레이트 체크아웃", "웰컴 드링크"],
      },
      {
        name: "프리미어 한강뷰",
        capacity: "기준 2인 / 최대 3인",
        bed: "킹베드 1개",
        size: "48㎡",
        price: 359000,
        originalPrice: 510000,
        benefits: ["조식 2인 포함", "클럽 라운지 이용", "스파 1회 무료"],
      },
      {
        name: "시그니엘 스위트",
        capacity: "기준 2인 / 최대 4인",
        bed: "킹베드 + 소파베드",
        size: "92㎡",
        price: 689000,
        benefits: ["전용 버틀러", "리무진 픽업", "다이닝 크레딧"],
      },
    ],
    reviewList: [
      {
        user: "민지***",
        rating: 5.0,
        date: "2025.04.10",
        roomType: "프리미어 한강뷰",
        content: "한강 뷰가 정말 환상적이에요. 직원분들도 친절하시고 조식도 훌륭했습니다.",
      },
      {
        user: "수현***",
        rating: 4.8,
        date: "2025.04.05",
        roomType: "디럭스 시티뷰",
        content: "객실이 깨끗하고 침구가 정말 편안했어요. 다음에도 또 방문하고 싶습니다.",
      },
      {
        user: "지훈***",
        rating: 4.9,
        date: "2025.03.28",
        roomType: "시그니엘 스위트",
        content: "기념일에 방문했는데 특별한 서비스를 받았어요. 평생 기억에 남을 것 같습니다.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.9 },
      { label: "서비스", score: 4.9 },
      { label: "편의시설", score: 4.8 },
      { label: "위치", score: 5.0 },
    ],
  },
  {
    id: "sky-motel-gangnam",
    image: motel,
    images: [motel, hotel, pool, pension],
    badge: "HOT",
    type: "프리미엄 모텔",
    name: "더 스카이 모텔 강남",
    location: "서울 강남",
    address: "서울특별시 강남구 역삼로 123",
    rating: 4.7,
    reviews: 1523,
    price: 79000,
    originalPrice: 120000,
    description:
      "강남역 도보 5분 거리, 감성 인테리어와 넷플릭스/플레이스테이션이 완비된 프리미엄 모텔. 커플 여행에 최적화된 공간을 제공합니다.",
    checkIn: "16:00",
    checkOut: "12:00",
    amenities: ["무료 Wi-Fi", "주차 가능", "넷플릭스", "PS5", "스파 욕조", "조식 제공"],
    rooms: [
      {
        name: "스탠다드 더블",
        capacity: "기준 2인",
        bed: "퀸베드 1개",
        size: "22㎡",
        price: 79000,
        originalPrice: 120000,
        benefits: ["넷플릭스 무료", "조식 쿠폰"],
      },
      {
        name: "스파 스위트",
        capacity: "기준 2인",
        bed: "킹베드 1개",
        size: "32㎡",
        price: 119000,
        originalPrice: 165000,
        benefits: ["월풀 스파", "PS5 + 빔프로젝터", "와인 1병"],
      },
    ],
    reviewList: [
      {
        user: "하늘***",
        rating: 4.7,
        date: "2025.04.12",
        roomType: "스파 스위트",
        content: "강남에서 이 가격에 이 시설은 진짜 가성비 끝판왕이에요!",
      },
      {
        user: "예린***",
        rating: 4.5,
        date: "2025.04.02",
        roomType: "스탠다드 더블",
        content: "깔끔하고 위치도 좋아요. 다만 주차장이 조금 좁은 편이에요.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.7 },
      { label: "서비스", score: 4.6 },
      { label: "편의시설", score: 4.8 },
      { label: "위치", score: 4.9 },
    ],
  },
  {
    id: "gapyeong-starlight",
    image: pension,
    images: [pension, pool, hotel, motel],
    type: "독채 펜션",
    name: "가평 별빛정원 풀빌라펜션",
    location: "경기 가평",
    address: "경기도 가평군 청평면 호반로 555",
    rating: 4.8,
    reviews: 942,
    price: 189000,
    originalPrice: 250000,
    description:
      "북한강이 보이는 프라이빗 독채 풀빌라. 야외 자쿠지와 바비큐 시설이 완비되어 있어 가족·친구 모임에 완벽한 공간입니다.",
    checkIn: "15:00",
    checkOut: "11:00",
    amenities: ["야외 자쿠지", "BBQ 시설", "넷플릭스", "주차장", "주방 풀옵션", "노래방"],
    rooms: [
      {
        name: "스탠다드 독채",
        capacity: "기준 4인 / 최대 6인",
        bed: "퀸 + 더블",
        size: "82㎡",
        price: 189000,
        originalPrice: 250000,
        benefits: ["BBQ 그릴 무료", "조식 재료 제공"],
      },
      {
        name: "프리미엄 풀빌라",
        capacity: "기준 6인 / 최대 10인",
        bed: "킹 + 퀸 + 더블",
        size: "132㎡",
        price: 329000,
        originalPrice: 420000,
        benefits: ["전용 수영장", "노래방 무료", "BBQ 풀세트"],
      },
    ],
    reviewList: [
      {
        user: "준영***",
        rating: 4.9,
        date: "2025.04.08",
        roomType: "프리미엄 풀빌라",
        content: "가족 여행으로 갔는데 아이들이 너무 좋아했어요. 수영장이 정말 깨끗합니다.",
      },
      {
        user: "혜진***",
        rating: 4.7,
        date: "2025.03.30",
        roomType: "스탠다드 독채",
        content: "조용하고 뷰가 좋아요. 별 보기 정말 좋았습니다.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.8 },
      { label: "서비스", score: 4.7 },
      { label: "편의시설", score: 4.9 },
      { label: "위치", score: 4.6 },
    ],
  },
  {
    id: "jeju-oceanview",
    image: pool,
    images: [pool, hotel, pension, motel],
    badge: "신규",
    type: "프라이빗 풀빌라",
    name: "제주 오션뷰 풀빌라",
    location: "제주 서귀포",
    address: "제주특별자치도 서귀포시 안덕면 산방로 100",
    rating: 4.9,
    reviews: 612,
    price: 359000,
    originalPrice: 480000,
    description:
      "산방산과 형제섬이 한눈에 들어오는 오션뷰 프라이빗 풀빌라. 인피니티 풀과 야외 라운지에서 제주의 노을을 만끽하세요.",
    checkIn: "16:00",
    checkOut: "11:00",
    amenities: ["인피니티 풀", "오션뷰", "전용 BBQ", "조식 제공", "전기차 충전"],
    rooms: [
      {
        name: "오션 스위트",
        capacity: "기준 2인 / 최대 4인",
        bed: "킹베드 1개",
        size: "76㎡",
        price: 359000,
        originalPrice: 480000,
        benefits: ["조식 2인", "웰컴 와인", "스파 이용권"],
      },
      {
        name: "패밀리 풀빌라",
        capacity: "기준 4인 / 최대 6인",
        bed: "킹 + 트윈",
        size: "118㎡",
        price: 589000,
        originalPrice: 720000,
        benefits: ["프라이빗 풀", "BBQ 풀세트", "공항 픽업"],
      },
    ],
    reviewList: [
      {
        user: "서윤***",
        rating: 5.0,
        date: "2025.04.14",
        roomType: "오션 스위트",
        content: "노을 뷰 진짜 미쳤어요. 평생 기억에 남을 여행이 됐습니다.",
      },
      {
        user: "도현***",
        rating: 4.8,
        date: "2025.04.01",
        roomType: "패밀리 풀빌라",
        content: "가족과 함께 갔는데 모두 만족했어요. 풀이 너무 좋아요.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.9 },
      { label: "서비스", score: 4.8 },
      { label: "편의시설", score: 5.0 },
      { label: "위치", score: 4.9 },
    ],
  },
  {
    id: "lotte-myeongdong",
    image: hotel,
    images: [hotel, motel, pool, pension],
    type: "비즈니스 호텔",
    name: "롯데시티호텔 명동",
    location: "서울 중구",
    address: "서울특별시 중구 삼일대로 362",
    rating: 4.6,
    reviews: 3210,
    price: 159000,
    originalPrice: 210000,
    description:
      "명동 한복판에 위치한 비즈니스 호텔. 쇼핑·관광 모두 도보 이동 가능하며 깔끔한 객실과 합리적 가격으로 사랑받는 곳입니다.",
    checkIn: "15:00",
    checkOut: "12:00",
    amenities: ["무료 Wi-Fi", "피트니스", "비즈니스 센터", "조식 뷔페", "세탁 서비스"],
    rooms: [
      {
        name: "스탠다드 더블",
        capacity: "기준 2인",
        bed: "더블베드 1개",
        size: "26㎡",
        price: 159000,
        originalPrice: 210000,
        benefits: ["조식 1인 포함"],
      },
      {
        name: "디럭스 트윈",
        capacity: "기준 2인 / 최대 3인",
        bed: "트윈베드",
        size: "32㎡",
        price: 199000,
        originalPrice: 260000,
        benefits: ["조식 2인 포함", "레이트 체크아웃"],
      },
    ],
    reviewList: [
      {
        user: "민수***",
        rating: 4.6,
        date: "2025.04.11",
        roomType: "스탠다드 더블",
        content: "위치가 정말 좋아요. 명동 어디든 도보로 이동 가능합니다.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.7 },
      { label: "서비스", score: 4.6 },
      { label: "편의시설", score: 4.5 },
      { label: "위치", score: 4.9 },
    ],
  },
  {
    id: "hongdae-mood-inn",
    image: motel,
    images: [motel, hotel, pension, pool],
    badge: "특가",
    type: "디자인 모텔",
    name: "홍대 무드인 호텔",
    location: "서울 마포",
    address: "서울특별시 마포구 와우산로 78",
    rating: 4.5,
    reviews: 1820,
    price: 69000,
    originalPrice: 95000,
    description: "홍대입구역 도보 3분, 감각적인 인테리어로 MZ세대에게 인기 있는 디자인 호텔.",
    checkIn: "16:00",
    checkOut: "12:00",
    amenities: ["넷플릭스", "블루투스 스피커", "무료 Wi-Fi", "스파 욕조"],
    rooms: [
      {
        name: "무드 스탠다드",
        capacity: "기준 2인",
        bed: "퀸베드 1개",
        size: "20㎡",
        price: 69000,
        originalPrice: 95000,
        benefits: ["넷플릭스 무료"],
      },
    ],
    reviewList: [
      {
        user: "지민***",
        rating: 4.5,
        date: "2025.04.09",
        roomType: "무드 스탠다드",
        content: "인테리어가 진짜 예뻐요. 사진 찍기 좋습니다.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.5 },
      { label: "서비스", score: 4.4 },
      { label: "편의시설", score: 4.6 },
      { label: "위치", score: 4.8 },
    ],
  },
  {
    id: "paradise-busan",
    image: pool,
    images: [pool, hotel, pension, motel],
    type: "오션뷰 리조트",
    name: "파라다이스 호텔 부산",
    location: "부산 해운대",
    address: "부산광역시 해운대구 해운대해변로 296",
    rating: 4.8,
    reviews: 2103,
    price: 245000,
    originalPrice: 320000,
    description: "해운대 해변 바로 앞, 노천 온천 씨메르(Cimer)와 함께하는 럭셔리 리조트.",
    checkIn: "15:00",
    checkOut: "11:00",
    amenities: ["노천 온천", "수영장", "키즈 클럽", "조식 뷔페", "발렛 주차"],
    rooms: [
      {
        name: "디럭스 오션",
        capacity: "기준 2인 / 최대 3인",
        bed: "킹베드 1개",
        size: "44㎡",
        price: 245000,
        originalPrice: 320000,
        benefits: ["씨메르 2인 무료", "조식 포함"],
      },
      {
        name: "패밀리 스위트",
        capacity: "기준 4인",
        bed: "킹 + 트윈",
        size: "78㎡",
        price: 459000,
        benefits: ["키즈 어메니티", "씨메르 4인", "조식 4인"],
      },
    ],
    reviewList: [
      {
        user: "유진***",
        rating: 4.9,
        date: "2025.04.13",
        roomType: "디럭스 오션",
        content: "씨메르 노천 온천이 정말 좋아요. 바다 보면서 즐기는 온천 최고!",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.8 },
      { label: "서비스", score: 4.8 },
      { label: "편의시설", score: 4.9 },
      { label: "위치", score: 4.9 },
    ],
  },
  {
    id: "yangyang-surf-house",
    image: pension,
    images: [pension, pool, hotel, motel],
    badge: "HOT",
    type: "감성 펜션",
    name: "양양 서피비치 하우스",
    location: "강원 양양",
    address: "강원도 양양군 현북면 하조대해안길 119",
    rating: 4.7,
    reviews: 580,
    price: 145000,
    originalPrice: 195000,
    description: "서피비치 도보 5분, 서퍼들의 감성을 담은 부티크 펜션.",
    checkIn: "15:00",
    checkOut: "11:00",
    amenities: ["서프보드 대여", "야외 샤워실", "BBQ", "조식 제공"],
    rooms: [
      {
        name: "오션 더블",
        capacity: "기준 2인",
        bed: "퀸베드 1개",
        size: "28㎡",
        price: 145000,
        originalPrice: 195000,
        benefits: ["서프보드 1개", "조식 2인"],
      },
    ],
    reviewList: [
      {
        user: "태양***",
        rating: 4.7,
        date: "2025.04.06",
        roomType: "오션 더블",
        content: "서핑하기 정말 좋은 위치에요. 사장님도 친절하십니다.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.7 },
      { label: "서비스", score: 4.8 },
      { label: "편의시설", score: 4.6 },
      { label: "위치", score: 4.9 },
    ],
  },
];

export function getStayById(id: string): StayDetail | undefined {
  return stays.find((s) => s.id === id);
}
