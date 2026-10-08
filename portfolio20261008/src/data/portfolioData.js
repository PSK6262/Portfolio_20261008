/**
 * 포트폴리오 원천 데이터 (Portfolio Master Data)
 * D:\PORTFOLIO_REFERENCE_MASTER.md 기반
 */

export const profileData = {
  name: "박성국",
  engName: "PARK SUNG KUK (PSK)",
  role: "Full-Stack Developer",
  headline: "실시간 데이터 파이프라인과 비즈니스 정합성을 집요하게 고민하는 풀스택 개발자",
  bio: [
    "실시간 데이터 연동(EPL 축구, 네이버 치지직 스트리밍, 네이버 지도)과 AI 파이프라인(Google Gemini)을 결합한 웹 서비스를 설계하고 개발했습니다.",
    "Spring MVC 백엔드 아키텍처와 React 19 기반의 최신 프론트엔드 환경을 두루 경험하며, 동시성 제어, 트랜잭션 무결성, 클린 코드(단일 책임 원칙)를 중시합니다.",
    "Git 기반 협업과 지속적인 리팩토링, 사용자 경험(UX) 개선을 주도적으로 이끌어갑니다."
  ],
  photoPlaceholder: {
    title: "프로필 사진 영역",
    subtitle: "src/assets/profile.jpg 로 대체 가능",
    hint: "추후 본인 사진 파일을 assets 폴더에 넣고 경로를 교체하세요."
  },
  contact: {
    email: "qkrxotn60@gmail.com",
    github: "https://github.com/PSK6262",
    blog: "https://psk6262.github.io",
    location: "충남 천안시 (Cheonan, Republic of Korea)"
  }
};

export const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "React 19", level: "Advanced", desc: "컴포넌트 라이프사이클, 훅(Hooks), 모듈화" },
      { name: "Redux Toolkit", level: "Advanced", desc: "전역 상태 관리, 슬라이스 설계, 세션 영속화" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "비동기 처리(Promise/async-await), 모던 문법" },
      { name: "Vite", level: "Intermediate", desc: "모던 번들러 구성, HMR, 최적화" },
      { name: "React Router v7", level: "Intermediate", desc: "SPA 라우팅, HashRouter 기반 404 방어" },
      { name: "PWA", level: "Intermediate", desc: "Service Worker, Web App Manifest, Standalone 앱" },
      { name: "Tailwind / CSS3", level: "Advanced", desc: "반응형 레이아웃, 모던 UI/UX, Framer Motion" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Java (11 / 17)", level: "Advanced", desc: "객체지향 설계, 컬렉션 프레임워크, 멀티스레딩" },
      { name: "Spring MVC 5.3", level: "Advanced", desc: "IoC/DI, AOP, HandlerInterceptor, Controller-Service-DAO" },
      { name: "MyBatis 3.5", level: "Advanced", desc: "Dynamic Query, ResultMap 매핑, 서브쿼리 최적화" },
      { name: "RESTful API", level: "Advanced", desc: "ApiResponse 표준화, HTTP 상태 코드 매핑" },
      { name: "JSP / JSTL", level: "Intermediate", desc: "서버 사이드 템플릿 렌더링, 태그 라이브러리" },
      { name: "Apache Tomcat", level: "Intermediate", desc: "서블릿 컨테이너 구성 및 WAR 배포" }
    ]
  },
  {
    category: "Database & Security",
    items: [
      { name: "Oracle Database 19c", level: "Intermediate", desc: "관계형 모델링, 트랜잭션 격리, 락 제어" },
      { name: "Commons DBCP2", level: "Intermediate", desc: "커넥션 풀 최적화 및 DataSource 설정" },
      { name: "SQL 튜닝", level: "Intermediate", desc: "서브쿼리 N+1 방어, 조인 최적화, 페이징" },
      { name: "JWT (JSON Web Token)", level: "Advanced", desc: "Stateless 인증/인가, 환경변수 비밀키 격리" },
      { name: "SHA-256 + Per-User Salt", level: "Advanced", desc: "키 스트레칭 기반 비밀번호 단방향 암호화" }
    ]
  },
  {
    category: "AI & External APIs",
    items: [
      { name: "Google Gemini AI API", level: "Advanced", desc: "프롬프트 엔지니어링, 포지션 정밀 분류, 유해성 모더레이션" },
      { name: "Football-Data.org API", level: "Advanced", desc: "EPL 실시간 데이터 수집, 스케줄러 동기화, UTC-KST 시차 보정" },
      { name: "Naver 치지직(CHZZK) API", level: "Advanced", desc: "실시간 라이브 방송 메타데이터 파싱 및 게임 매핑" },
      { name: "Naver Maps API", level: "Intermediate", desc: "지도 라이프사이클 제어, 커스텀 마커, LBS 연동" },
      { name: "HTML5 Geolocation API", level: "Intermediate", desc: "디바이스 좌표 획득 및 내 위치 기반 탐색" },
      { name: "JavaMail (SMTP)", level: "Intermediate", desc: "5분 만료 보안 인증 토큰 이메일 발송 파이프라인" }
    ]
  }
];

export const projectsData = [
  {
    id: "buildup",
    title: "BUILD UP (빌드업)",
    subtitle: "EPL 실시간 데이터 분석, Gemini AI 보조 및 승부예측 축구 커뮤니티 플랫폼",
    period: "2026.09 ~ 2026.10",
    role: "풀스택 아키텍처 총괄 / AI 파이프라인 / 데이터 동기화 / 승부예측 엔진 전담",
    teamSize: "팀 프로젝트 (4인)",
    category: "Full-Stack Web & Mobile PWA",
    badges: ["React 19", "Spring MVC", "Oracle 19c", "Google Gemini AI", "Redux Toolkit", "PWA", "MyBatis"],
    summary:
      "프리미어리그(EPL) 20개 구단의 경기 일정, 결과, 선수 스쿼드를 실시간 자동 수집하고, Google Gemini AI를 접목한 선수 포지션 분류 및 커뮤니티 유해성 모더레이션을 구현한 축구 종합 플랫폼입니다.",
    whatMade: [
      "EPL 20개 구단 및 경기 일정/결과 실시간 자동 동기화 (스프링 스케줄러 & UTC-KST 시차 보정)",
      "Google Gemini AI 기반 지능형 파이프라인 (비정형 선수 15개 세부 포지션 매핑, 한글화, 자동 모더레이션)",
      "승부예측 & 포인트 베팅 시스템 (실시간 배당률 계산, 킥오프 전 수정 지원, 트랜잭션 기반 중복 정산 방어)",
      "나만의 스쿼드 빌더 및 전술 시뮬레이션 (커스텀 포메이션, 유저 팀 간 가상 대결 및 쿨타임 제어)",
      "관리자(Admin) 통합 제어 콘솔 (더미 경기 시뮬레이터, 스코어-타임라인 정합성 2단계 보정 도구)",
      "Progressive Web App (PWA) 모바일 패키징 (오프라인 캐싱, 세로모드 고정, Standalone 전체화면)"
    ],
    whatDid: [
      {
        area: "풀스택 아키텍처 및 공통 규격 수립",
        details: [
          "Spring MVC 백엔드 및 React 19 + Redux Toolkit 프론트엔드 초기 환경 및 디렉토리 구조 전면 셋업",
          "ApiResponse<T>, ResultCode, CommonCode를 도입하여 프론트-백엔드 간 RESTful 통신 인터페이스 표준화",
          "글로벌 CORS 설정 일원화 및 환경변수 기반 JWT Secret Key 격리, local.properties 분리로 빌드 안정성 확보"
        ]
      },
      {
        area: "외부 축구 API(Football-Data.org) ETL 및 스케줄러 동기화",
        details: [
          "20개 구단 메타데이터, 경기 일정(Matches), 순위표, 선수 스쿼드 대량 적재 파이프라인 개발",
          "@Scheduled 기반 실시간 자동 갱신 및 HttpClient 커넥션 풀 재사용 적용",
          "UTC 기준 경기 시각을 KST로 자동 변환하고 주말 자정 전후 시차 왜곡을 보정하는 알고리즘 구현",
          "기존 Insecure TrustManager(SSL 우회)를 전면 제거하고 표준 SSL 핸드셰이크 체계 확립"
        ]
      },
      {
        area: "Google Gemini AI 지능형 파이프라인 구축",
        details: [
          "단순 4대 포지션(GK, DF, MF, FW)을 15개 세부 포지션(LWB, CDM, CAM, RW 등)으로 정밀 분류하는 프롬프트 엔지니어링 및 적재 파이프라인 구축",
          "영문 구단/선수명을 방송 표준 한국어로 자동 변환 및 구단 엠블럼 깨짐 자동 복구",
          "커뮤니티 악성 게시글/댓글 실시간 판별 및 자동 블라인드 처리, 관리자 검토 큐 연동"
        ]
      },
      {
        area: "승부예측 시스템 및 트랜잭션 무결성 방어",
        details: [
          "경기 시작 1분 전까지 자유로운 예측 수정을 지원하고 킥오프 시점에 자동 마감되는 시간 기반 가드 구현",
          "동시 투표 시 포인트 무결성을 보장하는 DB 트랜잭션 격리 및 정산 이력 테이블을 통한 중복 정산 멱등성(Idempotency) 이중 방어",
          "실시간 홈/무/원정 투표 비율 기반 배당 배율 산출 및 포인트 랭킹 Top 3 UI 구현"
        ]
      },
      {
        area: "관리자 시뮬레이터 & 스코어 정합성 보정 도구",
        details: [
          "테스트 및 시연을 위해 더미 경기 생성, 스코어 조작, 강제 종료/정산을 원클릭으로 수행하는 어드민 모달 및 API 구축",
          "외부 API 연동 시 발생하는 최종 스코어와 타임라인 상세 골 이벤트 불일치를 자동 감지하고 맞추는 2단계 정밀 보정 툴 개발"
        ]
      },
      {
        area: "PWA 모바일 패키징 & 앱 최적화",
        details: [
          "Web App Manifest 및 Service Worker(sw.js)를 구성하여 주소창 없는 Standalone 모바일 뷰 및 세로모드(Portrait) 고정",
          "GitHub Pages SPA 새로고침 404 방지를 위해 HashRouter 기반 라우팅 및 뒤로가기 링크 핫픽스 적용"
        ]
      }
    ],
    troubleshooting: [
      {
        issue: "외부 축구 API 연동 시 최종 스코어(2-1)와 타임라인 이벤트(골 기록 1개) 간 불일치 발생",
        solution: "어드민 콘솔에 스코어-타임라인 검증 알고리즘을 도입하고, 누락된 이벤트를 자동 생성/보정하는 2단계 동기화 파이프라인을 구축하여 데이터 정합성 100% 확보"
      },
      {
        issue: "승부예측 정산 시 동시 다발적 요청으로 인한 포인트 중복 지급 위험",
        solution: "DB 트랜잭션 락과 함께 경기 상태 플래그 및 예측 이력 테이블 복합 인덱스를 활용한 멱등성 가드를 구축하여 다중 스케줄러 환경에서도 1회만 안전하게 정산되도록 개선"
      }
    ]
  },
  {
    id: "oasis",
    title: "Team Oasis (오아시스)",
    subtitle: "네이버 치지직 라이브 스트리밍 방송 & Steam API 연동 게임 종합 커뮤니티 플랫폼",
    period: "2026.08 ~ 2026.09",
    role: "백엔드 코어 인프라 / 치지직 API 실시간 파싱 / 게임 게시판 / 보안 인증 전담",
    teamSize: "팀 프로젝트 (5인)",
    category: "Full-Stack Web (Spring MVC + JSP)",
    badges: ["Java 11", "Spring MVC 5.3", "MyBatis 3.5", "Oracle 19c", "Chzzk API", "JavaMail", "DBCP2"],
    summary:
      "네이버 치지직(CHZZK) 오픈 API를 실시간 연동하여 게임별 방송 중인 스트리머 정보를 제공하고, 스팀 게임 정보와 연계된 게임별/통합 게시판 및 안전한 계정 복구 시스템을 구현한 커뮤니티입니다.",
    whatMade: [
      "네이버 치지직(CHZZK) 오픈 API 기반 실시간 게임 방송 썸네일, 스트리머 정보, 시청자 수 연동 패널",
      "스팀(Steam) 게임 연동 및 개별 게임 게시판 / 전체 통합(All) 게시판 분기 시스템",
      "게시글 작성/수정/삭제, 댓글, 게시글 추천 이력(LikeHistory), 첨부파일 관리",
      "조회수/추천수 가중치 기반 실시간 인기 게시글 및 인기 게시판 랭킹 시스템",
      "다차원 검색 엔진 (통합/제목/본문/작성자) 및 고성능 페이지네이션(PagingPosts)",
      "이메일 인증 기반 5분 만료 일회용 보안 토큰을 활용한 안전한 비밀번호 재설정 파이프라인"
    ],
    whatDid: [
      {
        area: "백엔드 코어 아키텍처 및 Spring/MyBatis 인프라 구축",
        details: [
          "Java 11 기반 Spring MVC 5.3, MyBatis 3.5, Oracle JDBC, DBCP2 커넥션 풀 메이븐(pom.xml) 의존성 설계",
          "root-context.xml(DataSource, SqlSessionFactoryBean), servlet-context.xml, web.xml 전체 인프라 구성",
          "UserInfo, Post, GameList, Comments, PagingPosts 등 전 계층 DTO 표준화"
        ]
      },
      {
        area: "네이버 치지직(CHZZK) 오픈 API 연동 서비스 개발",
        details: [
          "치지직 API를 호출하여 JSON 응답에서 실시간 라이브 상태, 썸네일 URL, 채널명, 동시 시청자 수를 파싱하는 ChzzkApiService 개발",
          "GAME_LIST 테이블의 CHZZK_GAME_NAME과 치지직 카테고리를 동적 매핑하여 게임 게시판 상단에 실시간 방송 패널 렌더링"
        ]
      },
      {
        area: "게임 게시판 코어 백엔드/프론트엔드 개발",
        details: [
          "개별 게임 게시판 및 전체 통합 게시판(/board/all) 동적 라우팅 및 뷰 분기 로직 구현",
          "통합 게시판에서 특정 게시글 클릭 시 해당 게임 카테고리로 안전하게 이동하는 리다이렉트 핸들링",
          "현재 페이지, 블록 수, 한 번에 볼 개수를 동적 계산하고 파라미터를 보존하는 PagingPosts 엔진 구현",
          "MyBatis Dynamic Query(<if>, <choose>)를 활용한 다중 조건 검색 및 댓글 수 스칼라 서브쿼리 최적화로 N+1 방지"
        ]
      },
      {
        area: "이메일 인증 & 5분 만료 토큰 기반 계정 복구 보안 시스템",
        details: [
          "javax.mail 기반 SMTP 메일 발송 유틸(SendMail.java, UserMailService) 개발",
          "비밀번호 찾기 시 암호학적 난수 토큰을 생성하여 DB에 적재하고, 5분 타임아웃 만료 여부를 정밀 검증",
          "전용 보안 인터셉터(PwResetModeInterceptor, LoginInterceptor)를 제작하여 비정상 URL 접근 및 토큰 변조 원천 차단"
        ]
      },
      {
        area: "아키텍처 리팩토링 및 클린 코드 (SRP 원칙)",
        details: [
          "DAO에 혼재되어 있던 복잡한 비즈니스 로직을 Service 레이어로 전면 이관하여 단일 책임 원칙(SRP) 확립",
          "자주 사용되는 상수 및 세션 키를 CommonCode.java로 중앙 집중화하여 유지보수성 극대화"
        ]
      }
    ],
    troubleshooting: [
      {
        issue: "게시글 목록 조회 시 각 게시글의 댓글 개수를 가져오기 위해 N회 쿼리가 추가 호출되는 N+1 문제",
        solution: "게시글 목록 조회 메인 SQL 내에 스칼라 서브쿼리 (SELECT COUNT(*) FROM COMMENTS WHERE POST_ID = P.POST_ID)를 결합하여 단 1회의 쿼리로 댓글 수를 함께 수집하도록 최적화"
      },
      {
        issue: "비밀번호 찾기 링크 클릭 시 권한 검증 없이 URL로 재설정 페이지에 직접 접근 가능한 보안 취약점",
        solution: "Spring HandlerInterceptor(PwResetModeInterceptor)를 구현하여 이메일 토큰 유효성 검증을 통과한 세션에만 페이지 접근을 허용하고, 5분 초과 시 즉시 만료 처리"
      }
    ]
  },
  {
    id: "greenway",
    title: "GreenWay (그린웨이)",
    subtitle: "네이버 지도 & 실시간 기상 API 기반 도심 공원 및 산책로(Trail) 탐색 웰니스 웹 서비스",
    period: "2026.06 ~ 2026.07",
    role: "프론트엔드 환경 구축 / 네이버 지도 LBS 연동 / 날씨 위젯 / 플로팅 모달 / 배포 전담",
    teamSize: "팀 프로젝트 (3인)",
    category: "Frontend Web Application",
    badges: ["React 19", "Vite", "Naver Maps API", "OpenWeatherMap", "Geolocation", "react-rnd", "GitHub Pages"],
    summary:
      "도심 속 공원과 산책로 정보를 네이버 지도 위에 시각화하고, 사용자 현재 위치 및 실시간 날씨 정보를 결합하여 맞춤형 산책 코스를 추천하는 반응형 웹 서비스입니다.",
    whatMade: [
      "네이버 지도(Naver Maps API) 기반 서울/도심 공원 및 둘레길 마커 시각화 및 인터랙션",
      "HTML5 Geolocation API 기반 내 위치 중심 주변 산책로 탐색 기능",
      "OpenWeatherMap API 기반 실시간 날씨, 기온, 산책 지수 상단 네비게이션 위젯",
      "산책로 코스별 상세 제원(총 거리 km, 소요 시간, 난이도, 주요 경유지) 제공",
      "브라우저 localStorage를 활용한 나만의 산책 코스 즐겨찾기(Favorites) 관리",
      "지도 화면을 가리지 않고 자유롭게 드래그 및 크기 조절이 가능한 플로팅 뷰어(react-rnd)"
    ],
    whatDid: [
      {
        area: "프론트엔드 아키텍처 및 배포 파이프라인 구축",
        details: [
          "Vite + React 19 기반 프로젝트 보일러플레이트 구축 및 ESLint, 디렉토리 구조 표준화",
          "GitHub Pages 정적 호스팅 환경에서 새로고침 404 방지를 위해 HashRouter로 선제적 전환 및 gh-pages 배포 파이프라인 구성",
          "네이버 지도 API Key 등 외부 인증 키를 .env 환경변수로 안전하게 격리"
        ]
      },
      {
        area: "지도 및 위치 기반 서비스 (LBS) 개발",
        details: [
          "네이버 지도 객체 비동기 초기화 및 지도 중심점, 줌(Zoom), 드래그 라이프사이클 제어",
          "HTML5 Geolocation API를 연동하여 사용자 위/경도 좌표를 획득하고 원클릭으로 내 위치 중심 이동 구현",
          "산책로 데이터셋(parksData.js)을 파싱하여 지도 위 커스텀 마커 렌더링 및 팝업 이벤트 핸들링"
        ]
      },
      {
        area: "실시간 날씨 위젯 (WeatherWidget.jsx) 개발",
        details: [
          "OpenWeatherMap API 연동으로 위/경도 기반 실시간 기온 및 날씨 아이콘 비동기 수집",
          "글로벌 네비게이션 바 상단에 위젯 컴포넌트를 마운트하여 실시간 기상 상태 확인 가능하도록 구현"
        ]
      },
      {
        area: "인터랙티브 UI/UX 고도화 & 컴포넌트 모듈화",
        details: [
          "ListMain.jsx, Trail.jsx, ParkCard.jsx 컴포넌트 단위 분리 및 재사용성 향상",
          "react-rnd 라이브러리를 활용하여 지도 화면에서 자유롭게 이동 및 크기 조절이 가능한 플로팅 상세 정보 패널 개발",
          "ESC 키 입력 시 팝업 닫기, 검색창 원클릭 초기화('X') 버튼, 검색어 공백(trim) 제거 핫픽스 적용",
          "localStorage 기반 즐겨찾기 추가/삭제가 즉시 렌더링에 반영되는 반응형 상태 관리 구현"
        ]
      }
    ],
    troubleshooting: [
      {
        issue: "GitHub Pages 배포 후 서브 라우트 접속이나 새로고침 시 404 Not Found 에러 발생",
        solution: "정적 호스팅 환경의 한계를 극복하기 위해 BrowserRouter를 HashRouter로 교체하여 클라이언트 사이드 해시(#) 라우팅을 확립, 별도 서버 설정 없이 안정적인 배포 완성"
      },
      {
        issue: "지도 위의 고정형 인포윈도우가 주변 지도를 가려 탐색 흐름을 방해하는 UX 불편",
        solution: "react-rnd를 도입하여 사용자가 지도를 보면서 원하는 위치로 창을 드래그하여 옮기거나 크기를 변경할 수 있는 플로팅 윈도우 UI를 구축하여 사용자 경험 대폭 개선"
      }
    ]
  }
];

export const educationData = {
  education: [
    {
      institution: "대학교 (학력 틀)",
      major: "컴퓨터공학 / 관련 전공",
      period: "20XX.03 ~ 20XX.02 (졸업/예정)",
      description: "자료구조, 알고리즘, 데이터베이스, 네트워크 등 컴퓨터 사이언스 기초 이수 (필요 시 수정)"
    }
  ],
  trainings: [
    {
      program: "풀스택 웹 개발자 양성 과정 (교육 수료 틀)",
      institution: "전문 교육 기관 / 국비지원",
      period: "2026.XX ~ 2026.XX (수료)",
      description: "Java, Spring Framework, React, Oracle DB 기반의 웹 애플리케이션 프로젝트 3회 완수"
    }
  ],
  certifications: [
    {
      name: "정보처리기사 (자격증 틀)",
      issuer: "한국산업인력공단",
      date: "20XX.XX",
      status: "취득 / 준비중"
    },
    {
      name: "SQLD (SQL 개발자 자격증 틀)",
      issuer: "한국데이터산업진흥원",
      date: "20XX.XX",
      status: "취득 / 준비중"
    }
  ]
};
