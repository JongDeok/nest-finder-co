import thai from "@/assets/shop-thai.jpg";
import aroma from "@/assets/shop-aroma.jpg";
import sports from "@/assets/shop-sports.jpg";
import dry from "@/assets/shop-dry.jpg";
import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";
import therapist3 from "@/assets/therapist-3.jpg";
import therapist4 from "@/assets/therapist-4.jpg";
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

export interface Therapist {
  name: string;
  nickname: string;
  experience: string;
  specialty: string[];
  rating: number;
  reviews: number;
  intro: string;
  /** 대표 프로필 사진 (없으면 미등록 상태로 표시) */
  photo?: string;
  /** 추가 사진들 (모달에서 슬라이드로 노출). photo 1장만 등록된 경우 비워둘 수 있음 */
  photos?: string[];
  /** 키 (예: "165cm") */
  height?: string;
  /** MBTI / 성격 키워드 */
  personality?: string;
  /** 주요 자격/수상 */
  certifications?: string[];
  /** 가능 시간대 */
  availableHours?: string;
  /** 한 줄 캐치 카피 */
  catchphrase?: string;
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
  therapists: Therapist[];
  reviewList: Review[];
  ratingBreakdown: { label: string; score: number }[];
}

const defaultTherapists: Therapist[] = [
  {
    name: "김지유",
    nickname: "지유 관리사",
    experience: "경력 8년",
    specialty: ["아로마", "스웨디시", "림프 관리"],
    rating: 4.9,
    reviews: 892,
    intro: "부드럽지만 정확한 압으로 전신의 긴장을 풀어드립니다. 아로마 블렌딩 전문.",
  },
  {
    name: "이서아",
    nickname: "서아 관리사",
    experience: "경력 6년",
    specialty: ["딥티슈", "근막 이완", "어깨·목"],
    rating: 4.8,
    reviews: 654,
    intro: "운동 후 뭉친 근육과 만성 어깨 통증 케어가 전문입니다.",
  },
  {
    name: "박하늘",
    nickname: "하늘 관리사",
    experience: "경력 10년",
    specialty: ["타이마사지", "스트레칭", "체형 교정"],
    rating: 4.9,
    reviews: 1120,
    intro: "방콕 본점 출신, 정통 타이 테크닉으로 깊은 피로까지 풀어드립니다.",
  },
];

export const stays: StayDetail[] = [
  {
    id: "signature-spa-gangnam",
    image: aroma,
    images: [aroma, thai, sports, dry],
    badge: "특가",
    type: "프리미엄 아로마",
    name: "시그니처 스파 강남점",
    location: "서울 강남",
    address: "서울특별시 강남구 테헤란로 123 5층",
    rating: 4.9,
    reviews: 2841,
    price: 89000,
    originalPrice: 130000,
    description:
      "강남역 도보 3분, 프리미엄 아로마 오일과 1:1 전담 테라피스트가 함께하는 시그니처 스파. 호텔급 시설과 방음 완벽한 프라이빗 룸에서 진정한 휴식을 경험하세요.",
    checkIn: "11:00",
    checkOut: "23:00",
    amenities: [
      "무료 Wi-Fi",
      "발렛 주차",
      "샤워실",
      "탈의실",
      "라운지",
      "웰컴 티",
      "어메니티 제공",
      "프라이빗 룸",
    ],
    rooms: [
      {
        name: "아로마 릴렉싱 60분",
        capacity: "1인 코스",
        bed: "프라이빗 룸",
        size: "60분",
        price: 89000,
        originalPrice: 130000,
        benefits: ["전신 아로마", "족욕 서비스", "웰컴 티"],
      },
      {
        name: "딥 타이슈 90분",
        capacity: "1인 코스",
        bed: "프라이빗 룸",
        size: "90분",
        price: 129000,
        originalPrice: 170000,
        benefits: ["근막 이완", "어깨·목 집중", "스팀타올"],
      },
      {
        name: "시그니처 풀코스 120분",
        capacity: "1인 코스",
        bed: "프라이빗 스위트",
        size: "120분",
        price: 199000,
        benefits: ["전신+페이셜", "핫스톤 포함", "1:1 전담 케어"],
      },
    ],
    reviewList: [
      {
        user: "민지***",
        rating: 5.0,
        date: "2025.04.10",
        roomType: "시그니처 풀코스 120분",
        content: "관리사님 손길이 정말 좋았어요. 어깨 뭉친 게 다 풀렸습니다. 룸도 깔끔하고 향도 좋아요.",
      },
      {
        user: "수현***",
        rating: 4.8,
        date: "2025.04.05",
        roomType: "아로마 릴렉싱 60분",
        content: "강남에서 이 가격에 이런 퀄리티는 처음이에요. 재방문 의사 100%!",
      },
      {
        user: "지훈***",
        rating: 4.9,
        date: "2025.03.28",
        roomType: "딥 타이슈 90분",
        content: "운동 후 뭉친 근육이 시원하게 풀렸습니다. 압이 정말 좋아요.",
      },
    ],
    therapists: [
      {
        name: "정하린",
        nickname: "하린 관리사",
        experience: "경력 9년",
        specialty: ["아로마", "스웨디시", "페이셜"],
        rating: 4.9,
        reviews: 742,
        intro: "섬세한 손길과 따뜻한 압으로 깊은 이완을 선사합니다.",
        photo: therapist1,
        photos: [therapist1, therapist2, therapist3],
        height: "163cm",
        personality: "차분 · 꼼꼼 · ENFJ",
        certifications: ["국가공인 피부미용사", "아로마테라피 1급", "림프 드레나쥬 수료"],
        availableHours: "11:00 ~ 21:00",
        catchphrase: "오늘 하루의 긴장, 제가 풀어드릴게요.",
      },
      {
        name: "문서윤",
        nickname: "서윤 관리사",
        experience: "경력 7년",
        specialty: ["딥티슈", "근막 이완"],
        rating: 4.8,
        reviews: 531,
        intro: "어깨·등 만성 통증에 강한 1:1 맞춤 케어 전문.",
        photo: therapist2,
        photos: [therapist2, therapist4],
        height: "168cm",
        personality: "꼼꼼 · 강한 압 · ISTJ",
        certifications: ["스포츠마사지 1급", "근막이완 워크샵 수료"],
        availableHours: "13:00 ~ 23:00",
        catchphrase: "강한 압이 필요하시다면 저를 찾아주세요.",
      },
      {
        name: "강예나",
        nickname: "예나 관리사",
        experience: "경력 11년",
        specialty: ["아로마", "림프", "핫스톤"],
        rating: 4.9,
        reviews: 1024,
        intro: "호텔 스파 출신, 풀코스 시그니처 케어가 시그니처입니다.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.9 },
      { label: "관리사", score: 4.9 },
      { label: "시설", score: 4.8 },
      { label: "위치", score: 5.0 },
    ],
  },
  {
    id: "thai-royal-yeoksam",
    image: thai,
    images: [thai, aroma, sports, dry],
    badge: "HOT",
    type: "정통 타이마사지",
    name: "타이로얄 테라피 역삼점",
    location: "서울 강남",
    address: "서울특별시 강남구 역삼로 88 3층",
    rating: 4.7,
    reviews: 1523,
    price: 59000,
    originalPrice: 90000,
    description:
      "방콕 본점 출신 정통 타이 관리사가 직접 케어하는 프리미엄 타이마사지. 전통 스트레칭과 압점 자극으로 깊은 피로를 풀어드립니다.",
    checkIn: "10:00",
    checkOut: "24:00",
    amenities: ["무료 Wi-Fi", "주차 가능", "샤워실", "허브볼", "웰컴 티", "탈의실"],
    rooms: [
      {
        name: "타이 트래디셔널 60분",
        capacity: "1인 코스",
        bed: "프라이빗 룸",
        size: "60분",
        price: 59000,
        originalPrice: 90000,
        benefits: ["전통 스트레칭", "허브볼 1회", "웰컴 티"],
      },
      {
        name: "허브볼 디톡스 90분",
        capacity: "1인 코스",
        bed: "프라이빗 룸",
        size: "90분",
        price: 99000,
        originalPrice: 135000,
        benefits: ["뜨거운 허브볼", "전신 림프 관리", "발마사지 포함"],
      },
    ],
    reviewList: [
      {
        user: "하늘***",
        rating: 4.7,
        date: "2025.04.12",
        roomType: "허브볼 디톡스 90분",
        content: "역삼에서 이 정도 가성비는 진짜 최고예요. 관리사님 실력도 정말 좋습니다!",
      },
      {
        user: "예린***",
        rating: 4.5,
        date: "2025.04.02",
        roomType: "타이 트래디셔널 60분",
        content: "깔끔하고 친절해요. 다만 예약이 자주 차서 미리 잡아야 해요.",
      },
    ],
    therapists: [
      {
        name: "쏨차이",
        nickname: "Somchai 관리사",
        experience: "경력 12년",
        specialty: ["타이마사지", "스트레칭"],
        rating: 4.9,
        reviews: 1340,
        intro: "방콕 왓포 자격 보유, 정통 타이 테크닉으로 깊은 피로 해소.",
        photo: therapist4,
        height: "160cm",
        personality: "정직 · 강한 압 · ESTJ",
        certifications: ["방콕 왓포 마사지 자격", "타이전통의학 디플로마"],
        availableHours: "10:00 ~ 22:00",
        catchphrase: "정통 타이의 깊이를 느껴보세요.",
      },
      {
        name: "나린",
        nickname: "Narin 관리사",
        experience: "경력 8년",
        specialty: ["허브볼", "림프"],
        rating: 4.7,
        reviews: 612,
        intro: "뜨거운 허브볼로 부종과 냉증을 풀어드립니다.",
      },
      {
        name: "이수민",
        nickname: "수민 관리사",
        experience: "경력 6년",
        specialty: ["타이", "발마사지"],
        rating: 4.6,
        reviews: 498,
        intro: "발과 종아리 집중 케어가 특기입니다.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.7 },
      { label: "관리사", score: 4.6 },
      { label: "시설", score: 4.8 },
      { label: "위치", score: 4.9 },
    ],
  },
  {
    id: "healing-stone-bundang",
    image: dry,
    images: [dry, aroma, thai, sports],
    type: "핫스톤·건식 스파",
    name: "힐링스톤 스파 분당점",
    location: "경기 분당",
    address: "경기도 성남시 분당구 정자일로 99",
    rating: 4.8,
    reviews: 942,
    price: 99000,
    originalPrice: 140000,
    description:
      "현무암 핫스톤과 적외선 돔 사우나가 결합된 디톡스 스파. 건식 사우나 후 핫스톤 마사지로 몸 속 깊은 피로까지 풀어드립니다.",
    checkIn: "10:00",
    checkOut: "22:00",
    amenities: ["적외선 사우나", "핫스톤", "샤워실", "주차장", "라운지", "어메니티"],
    rooms: [
      {
        name: "핫스톤 릴렉싱 70분",
        capacity: "1인 코스",
        bed: "프라이빗 룸",
        size: "70분",
        price: 99000,
        originalPrice: 140000,
        benefits: ["현무암 핫스톤", "사우나 30분 무료"],
      },
      {
        name: "디톡스 풀케어 110분",
        capacity: "1인 코스",
        bed: "프라이빗 스위트",
        size: "110분",
        price: 159000,
        originalPrice: 210000,
        benefits: ["핫스톤+아로마", "사우나 무제한", "디톡스 티"],
      },
    ],
    reviewList: [
      {
        user: "준영***",
        rating: 4.9,
        date: "2025.04.08",
        roomType: "디톡스 풀케어 110분",
        content: "사우나부터 핫스톤까지 코스가 완벽해요. 몸이 정말 가벼워졌습니다.",
      },
      {
        user: "혜진***",
        rating: 4.7,
        date: "2025.03.30",
        roomType: "핫스톤 릴렉싱 70분",
        content: "조용하고 시설이 깨끗해요. 분당에서 최고인 듯합니다.",
      },
    ],
    therapists: [
      {
        name: "정유진",
        nickname: "유진 관리사",
        experience: "경력 10년",
        specialty: ["핫스톤", "아로마"],
        rating: 4.9,
        reviews: 820,
        intro: "현무암 핫스톤 케어 10년 경력, 디톡스 코스 전문.",
        photo: therapist2,
        height: "165cm",
        personality: "온화 · 섬세 · INFJ",
        certifications: ["스파 테라피 마스터", "핫스톤 트레이닝 수료"],
        availableHours: "10:00 ~ 20:00",
        catchphrase: "따뜻한 돌의 온기로 디톡스를 도와드릴게요.",
      },
      {
        name: "한도연",
        nickname: "도연 관리사",
        experience: "경력 7년",
        specialty: ["사우나 케어", "스웨디시"],
        rating: 4.7,
        reviews: 455,
        intro: "사우나와 핫스톤 조합으로 몸 속 노폐물까지 케어합니다.",
      },
      {
        name: "오세라",
        nickname: "세라 관리사",
        experience: "경력 5년",
        specialty: ["림프", "페이셜"],
        rating: 4.7,
        reviews: 332,
        intro: "얼굴 부종과 림프 순환에 특화된 케어 제공.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.8 },
      { label: "관리사", score: 4.7 },
      { label: "시설", score: 4.9 },
      { label: "위치", score: 4.6 },
    ],
  },
  {
    id: "ocean-spa-haeundae",
    image: aroma,
    images: [aroma, dry, thai, sports],
    badge: "신규",
    type: "오션뷰 럭셔리 스파",
    name: "오션 스파 해운대",
    location: "부산 해운대",
    address: "부산광역시 해운대구 해운대해변로 264 7층",
    rating: 4.9,
    reviews: 612,
    price: 119000,
    originalPrice: 170000,
    description:
      "해운대 바다가 한눈에 보이는 럭셔리 오션뷰 스파. 파도 소리와 함께하는 아로마 테라피로 잊지 못할 힐링을 선사합니다.",
    checkIn: "11:00",
    checkOut: "23:00",
    amenities: ["오션뷰", "프리미엄 라운지", "샤워실", "발렛 주차", "웰컴 샴페인"],
    rooms: [
      {
        name: "오션뷰 아로마 80분",
        capacity: "1인 코스",
        bed: "오션뷰 룸",
        size: "80분",
        price: 119000,
        originalPrice: 170000,
        benefits: ["오션뷰 룸 확정", "웰컴 샴페인", "족욕"],
      },
      {
        name: "커플 시그니처 100분",
        capacity: "2인 동시 코스",
        bed: "커플 스위트",
        size: "100분",
        price: 259000,
        originalPrice: 340000,
        benefits: ["커플룸 보장", "샴페인 1병", "꽃 데코"],
      },
    ],
    reviewList: [
      {
        user: "서윤***",
        rating: 5.0,
        date: "2025.04.14",
        roomType: "오션뷰 아로마 80분",
        content: "바다 보면서 받는 마사지 진짜 최고예요. 평생 잊지 못할 경험이었습니다.",
      },
      {
        user: "도현***",
        rating: 4.8,
        date: "2025.04.01",
        roomType: "커플 시그니처 100분",
        content: "기념일에 커플코스로 다녀왔는데 너무 만족했어요!",
      },
    ],
    therapists: [
      {
        name: "최서아",
        nickname: "서아 관리사",
        experience: "경력 9년",
        specialty: ["아로마", "커플 케어"],
        rating: 5.0,
        reviews: 512,
        intro: "오션뷰 룸의 분위기를 가장 잘 살리는 시그니처 관리사.",
        photo: therapist1,
        height: "167cm",
        personality: "친근 · 분위기 메이커 · ENFP",
        certifications: ["커플 스파 코스 수료", "아로마테라피 1급"],
        availableHours: "11:00 ~ 23:00",
        catchphrase: "특별한 날, 잊지 못할 시간을 만들어드릴게요.",
      },
      {
        name: "윤지호",
        nickname: "지호 관리사",
        experience: "경력 8년",
        specialty: ["딥티슈", "스포츠"],
        rating: 4.8,
        reviews: 389,
        intro: "바디 전체의 균형을 잡아주는 정밀 케어 전문.",
        photo: therapist3,
        height: "178cm",
        personality: "정확 · 듬직 · ISTP",
        certifications: ["스포츠마사지 1급", "체형분석사"],
        availableHours: "12:00 ~ 23:00",
        catchphrase: "정확한 압으로 바디 밸런스를 잡아드립니다.",
      },
      {
        name: "배하영",
        nickname: "하영 관리사",
        experience: "경력 6년",
        specialty: ["페이셜", "아로마"],
        rating: 4.9,
        reviews: 261,
        intro: "피부 진정과 페이셜 케어가 특기입니다.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.9 },
      { label: "관리사", score: 4.8 },
      { label: "시설", score: 5.0 },
      { label: "위치", score: 4.9 },
    ],
  },
  {
    id: "sports-care-jongno",
    image: sports,
    images: [sports, thai, aroma, dry],
    type: "스포츠·재활 마사지",
    name: "바디케어 스포츠 종로점",
    location: "서울 종로",
    address: "서울특별시 종로구 종로 44 2층",
    rating: 4.6,
    reviews: 3210,
    price: 69000,
    originalPrice: 95000,
    description:
      "운동 후 회복, 만성 통증 완화에 특화된 스포츠 마사지 전문샵. 국가공인 자격을 갖춘 관리사가 1:1 맞춤 케어를 제공합니다.",
    checkIn: "10:00",
    checkOut: "22:00",
    amenities: ["무료 Wi-Fi", "샤워실", "운동복 대여", "라운지", "정수기"],
    rooms: [
      {
        name: "스포츠 60분",
        capacity: "1인 코스",
        bed: "프라이빗 룸",
        size: "60분",
        price: 69000,
        originalPrice: 95000,
        benefits: ["근막 이완", "스트레칭 포함"],
      },
      {
        name: "재활·체형교정 90분",
        capacity: "1인 코스",
        bed: "전문 케어룸",
        size: "90분",
        price: 109000,
        originalPrice: 140000,
        benefits: ["체형 분석", "1:1 맞춤 케어", "사후 가이드"],
      },
    ],
    reviewList: [
      {
        user: "민수***",
        rating: 4.6,
        date: "2025.04.11",
        roomType: "스포츠 60분",
        content: "헬스 후에 가면 회복 속도가 진짜 빨라져요. 위치도 좋습니다.",
      },
    ],
    therapists: [
      {
        name: "김태웅",
        nickname: "태웅 관리사",
        experience: "경력 11년",
        specialty: ["스포츠", "재활"],
        rating: 4.8,
        reviews: 1820,
        intro: "국가공인 자격 보유, 운동선수 출신 재활 전문.",
        photo: therapist3,
        height: "180cm",
        personality: "신중 · 전문가 · INTJ",
        certifications: ["국가공인 물리치료사", "스포츠마사지 1급"],
        availableHours: "10:00 ~ 22:00",
        catchphrase: "회복이 필요한 순간, 가장 정확한 케어를 약속합니다.",
      },
      {
        name: "박정현",
        nickname: "정현 관리사",
        experience: "경력 9년",
        specialty: ["체형교정", "근막"],
        rating: 4.7,
        reviews: 1012,
        intro: "틀어진 체형과 만성 통증을 잡아드립니다.",
      },
      {
        name: "이도윤",
        nickname: "도윤 관리사",
        experience: "경력 6년",
        specialty: ["스트레칭", "근막"],
        rating: 4.6,
        reviews: 540,
        intro: "운동 후 회복 케어와 스트레칭 코칭을 함께 제공.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.7 },
      { label: "관리사", score: 4.6 },
      { label: "시설", score: 4.5 },
      { label: "위치", score: 4.9 },
    ],
  },
  {
    id: "mood-aroma-hongdae",
    image: aroma,
    images: [aroma, thai, sports, dry],
    badge: "특가",
    type: "감성 아로마 스파",
    name: "무드 아로마 홍대점",
    location: "서울 마포",
    address: "서울특별시 마포구 와우산로 78 4층",
    rating: 4.5,
    reviews: 1820,
    price: 49000,
    originalPrice: 75000,
    description: "홍대입구역 도보 5분, 감성 인테리어와 시그니처 블렌딩 오일로 MZ세대에게 인기 있는 아로마 스파.",
    checkIn: "12:00",
    checkOut: "24:00",
    amenities: ["블루투스 스피커", "샤워실", "무료 Wi-Fi", "어메니티"],
    rooms: [
      {
        name: "무드 아로마 50분",
        capacity: "1인 코스",
        bed: "프라이빗 룸",
        size: "50분",
        price: 49000,
        originalPrice: 75000,
        benefits: ["시그니처 블렌딩 오일"],
      },
    ],
    reviewList: [
      {
        user: "지민***",
        rating: 4.5,
        date: "2025.04.09",
        roomType: "무드 아로마 50분",
        content: "인테리어가 진짜 예뻐요. 향도 좋고 가격도 합리적입니다.",
      },
    ],
    therapists: [
      {
        name: "장지민",
        nickname: "지민 관리사",
        experience: "경력 5년",
        specialty: ["아로마", "감성 케어"],
        rating: 4.6,
        reviews: 612,
        intro: "시그니처 블렌딩 오일로 무드 있는 힐링 타임.",
        photo: therapist2,
        height: "162cm",
        personality: "감성 · 트렌디 · ENFP",
        certifications: ["아로마테라피 2급", "퍼퓨머리 베이직"],
        availableHours: "12:00 ~ 24:00",
        catchphrase: "오늘의 기분에 맞는 향, 함께 골라드릴게요.",
      },
      {
        name: "서나연",
        nickname: "나연 관리사",
        experience: "경력 4년",
        specialty: ["스웨디시", "페이셜"],
        rating: 4.5,
        reviews: 438,
        intro: "부드러운 압과 향으로 처음 마사지도 부담 없어요.",
      },
      {
        name: "권유리",
        nickname: "유리 관리사",
        experience: "경력 6년",
        specialty: ["림프", "두피"],
        rating: 4.5,
        reviews: 389,
        intro: "두피와 어깨 집중 케어가 특기입니다.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.5 },
      { label: "관리사", score: 4.4 },
      { label: "시설", score: 4.6 },
      { label: "위치", score: 4.8 },
    ],
  },
  {
    id: "paradise-spa-busan",
    image: dry,
    images: [dry, aroma, thai, sports],
    type: "스파·사우나 패키지",
    name: "파라다이스 스파 부산",
    location: "부산 해운대",
    address: "부산광역시 해운대구 해운대해변로 296",
    rating: 4.8,
    reviews: 2103,
    price: 145000,
    originalPrice: 200000,
    description: "해운대 호텔 내 럭셔리 스파. 노천 온천과 아로마 테라피를 함께 즐길 수 있는 프리미엄 패키지.",
    checkIn: "10:00",
    checkOut: "22:00",
    amenities: ["노천 온천", "사우나", "라운지", "조식 제공", "발렛 주차"],
    rooms: [
      {
        name: "온천+아로마 90분",
        capacity: "1인 코스",
        bed: "프라이빗 룸",
        size: "90분",
        price: 145000,
        originalPrice: 200000,
        benefits: ["씨메르 2시간", "아로마 60분"],
      },
      {
        name: "패밀리 풀패키지 150분",
        capacity: "최대 2인",
        bed: "패밀리 룸",
        size: "150분",
        price: 259000,
        benefits: ["온천+케어 2인", "조식 2인"],
      },
    ],
    reviewList: [
      {
        user: "유진***",
        rating: 4.9,
        date: "2025.04.13",
        roomType: "온천+아로마 90분",
        content: "노천 온천 후 받는 아로마 마사지 조합이 환상적이에요!",
      },
    ],
    therapists: [
      {
        name: "문재희",
        nickname: "재희 관리사",
        experience: "경력 13년",
        specialty: ["아로마", "스파 패키지"],
        rating: 4.9,
        reviews: 1230,
        intro: "호텔 스파 13년차, 온천+케어 풀패키지 전문.",
        photo: therapist1,
        height: "166cm",
        personality: "프로페셔널 · 따뜻함 · ISFJ",
        certifications: ["호텔 스파 마스터", "아로마테라피 1급", "온천요법사"],
        availableHours: "10:00 ~ 22:00",
        catchphrase: "온천 후의 시간, 가장 럭셔리하게 마무리해드릴게요.",
      },
      {
        name: "홍지아",
        nickname: "지아 관리사",
        experience: "경력 9년",
        specialty: ["림프", "바디"],
        rating: 4.8,
        reviews: 742,
        intro: "노천 온천 후 림프 케어로 디톡스 마무리.",
      },
      {
        name: "백서진",
        nickname: "서진 관리사",
        experience: "경력 7년",
        specialty: ["페이셜", "두피"],
        rating: 4.8,
        reviews: 512,
        intro: "피부와 두피 진정 케어 전문.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.8 },
      { label: "관리사", score: 4.8 },
      { label: "시설", score: 4.9 },
      { label: "위치", score: 4.9 },
    ],
  },
  {
    id: "surfer-aroma-yangyang",
    image: aroma,
    images: [aroma, sports, thai, dry],
    badge: "HOT",
    type: "서퍼 회복 아로마",
    name: "서퍼스 케어 양양",
    location: "강원 양양",
    address: "강원도 양양군 현북면 하조대해안길 119",
    rating: 4.7,
    reviews: 580,
    price: 75000,
    originalPrice: 100000,
    description: "서피비치 도보 5분, 서핑 후 뭉친 어깨와 등 근육을 풀어주는 스포츠 회복 전문 아로마 스파.",
    checkIn: "11:00",
    checkOut: "22:00",
    amenities: ["야외 샤워실", "라운지", "허브 티", "주차장"],
    rooms: [
      {
        name: "서퍼 회복 60분",
        capacity: "1인 코스",
        bed: "프라이빗 룸",
        size: "60분",
        price: 75000,
        originalPrice: 100000,
        benefits: ["어깨·등 집중", "허브 티"],
      },
    ],
    reviewList: [
      {
        user: "태양***",
        rating: 4.7,
        date: "2025.04.06",
        roomType: "서퍼 회복 60분",
        content: "서핑 후 들렀는데 진짜 회복이 빨라요. 사장님도 친절하십니다.",
      },
    ],
    therapists: [
      {
        name: "강해솔",
        nickname: "해솔 관리사",
        experience: "경력 6년",
        specialty: ["스포츠", "아로마"],
        rating: 4.8,
        reviews: 312,
        intro: "서퍼 출신, 어깨와 등 회복 케어가 시그니처.",
        photo: therapist4,
        height: "170cm",
        personality: "활발 · 액티브 · ESFP",
        certifications: ["스포츠마사지 2급", "서핑 인스트럭터"],
        availableHours: "11:00 ~ 22:00",
        catchphrase: "서핑 후 뭉친 어깨, 시원하게 풀어드릴게요!",
      },
      {
        name: "주민호",
        nickname: "민호 관리사",
        experience: "경력 5년",
        specialty: ["근막", "스트레칭"],
        rating: 4.7,
        reviews: 224,
        intro: "운동 후 근막 이완과 스트레칭 코칭을 함께.",
      },
      {
        name: "임수아",
        nickname: "수아 관리사",
        experience: "경력 4년",
        specialty: ["아로마", "페이셜"],
        rating: 4.6,
        reviews: 168,
        intro: "부드러운 손길로 여행 피로를 풀어드립니다.",
      },
    ],
    ratingBreakdown: [
      { label: "청결도", score: 4.7 },
      { label: "관리사", score: 4.8 },
      { label: "시설", score: 4.6 },
      { label: "위치", score: 4.9 },
    ],
  },
];

export function getStayById(id: string): StayDetail | undefined {
  return stays.find((s) => s.id === id);
}
