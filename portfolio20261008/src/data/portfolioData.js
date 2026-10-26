/**
 * 포트폴리오 원천 데이터 (Portfolio Master Data)
 * D:\박성국 이력서.hwp (순수 텍스트 추출본) 및 D:\PORTFOLIO_REFERENCE_MASTER.md 기반
 */

export const profileData = {
  name: "박성국",
  engName: "PARK SUNG KUK",
  role: "Full-Stack Developer",
  headline: "새로운 환경에서도 원인과 구조를 집요하게 파악하고 끝까지 책임을 다하는 개발자",
  introTitle: "새로운 배움에 주저하지 않고, 맡은 일에 끝까지 책임을 다합니다",
  introText: [
    "저는 새로운 환경에서도 부족한 부분을 스스로 찾아 배우고, 맡은 일에 끝까지 책임을 가지고 결과를 만들어내려는 사람입니다.",
    "여러 프로젝트 경험과 시행착오를 겪으며 자신의 부족함을 인정하고 개선하는 법을 배웠고, 특히 한번 맡은 역할에 대해서는 책임감을 가지고 끝까지 완수해 왔습니다.",
    "실시간 외부 데이터 API(EPL 경기 데이터, 네이버 치지직 스트리밍, 네이버 지도 위치기반서비스(LBS)) 연동과 Google Gemini API 기반 생성형 AI 파이프라인을 결합한 웹 서비스를 주도적으로 설계·개발하며 탄탄한 백엔드 아키텍처와 사용자 중심 프론트엔드를 구축했습니다."
  ],
  coreCompetencies: [
    { title: "원인과 구조 파악", desc: "오류 및 이슈 발생 시 단순 코드 수정을 넘어 입력부터 처리, 결과까지의 데이터 흐름을 추적하여 근본 원인을 특정합니다." },
    { title: "우선순위 & 빠른 대응", desc: "해결 가능성과 우선순위를 명확히 판단하여 상황에 맞춰 유연하고 효율적으로 대응합니다." },
    { title: "책임감 있는 리더십", desc: "여러 차례 프로젝트 팀장 및 기술팀장을 맡아 전체 아키텍처 설계와 일정 관리를 주도하고 결과에 끝까지 책임졌습니다." },
    { title: "자기주도 학습 & 지속적 보완", desc: "새로운 기술이나 부족한 역량을 스스로 빠르게 파악하고 공식 문서와 실습을 통해 지속적으로 보완해 나갑니다." },
    { title: "협업과 방향 조율", desc: "어려움을 겪는 팀원들에게 개발 지식과 해결 방향을 적극적으로 공유하고 소통하며, 팀 전체가 한 방향으로 나아가도록 돕습니다." }
  ],
  bio: [
    "실시간 외부 데이터 API(EPL 경기 데이터, 네이버 치지직 스트리밍, 네이버 지도 위치기반서비스(LBS)) 연동과 Google Gemini API 기반 생성형 AI 파이프라인을 결합한 웹 서비스를 설계하고 개발했습니다.",
    "Spring MVC 백엔드와 React 프론트엔드를 활용해, 화면부터 데이터베이스까지 매끄럽게 연결되는 웹 서비스를 개발했습니다.",
    "여러 차례 팀장 및 기술팀장으로서 팀원들과 방향을 맞추고 책임감 있게 프로젝트를 완수해 왔습니다."
  ],
  profileImage: "/images/profile.jpg",
  photoNotice: "",
  photoPlaceholder: {
    title: "프로필 사진",
    subtitle: "박성국 (Full-Stack Developer)",
    hint: ""
  },
  contact: {
    email: "Societe62@gmail.com",
    phone: "010-2798-6852",
    birth: "1997.08.14",
    github: "https://github.com/PSK6262",
    location: "수도권(서울·경기), 충청권 및 대구 지역",
    locationDetail: "대면 출퇴근 및 원격 근무 가능 (합격 시 즉시 거주지 이전 가능)"
  }
};

export const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "Java", level: "Advanced", desc: "객체지향 프로그래밍(OOP), 컬렉션 프레임워크, 멀티스레딩" },
      { name: "JavaScript", level: "Advanced", desc: "비동기 처리(Promise, async/await), DOM 조작 및 이벤트 제어" },
      { name: "Oracle SQL", level: "Advanced", desc: "복합 쿼리 작성, 테이블 조인, DDL/DML, 트랜잭션 제어" },
      { name: "C / C++", level: "Intermediate", desc: "자료구조, 알고리즘 및 기본기" },
      { name: "Python", level: "Intermediate", desc: "데이터 수집 및 파싱, 자동화 스크립트 작성" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Java", level: "Advanced", desc: "객체지향 설계 및 핵심 비즈니스 로직 구현" },
      { name: "Spring Framework", level: "Advanced", desc: "Spring MVC 아키텍처 설계, 의존성 주입, 인터셉터 권한 제어" },
      { name: "MyBatis", level: "Intermediate", desc: "동적 쿼리(Dynamic SQL), 데이터 매핑, 서브쿼리 활용" },
      { name: "RESTful API", level: "Intermediate", desc: "성공/에러 코드 표준화 및 HTTP 상태 코드 매핑" },
      { name: "JSP / Servlet", level: "Advanced", desc: "MVC 구조 설계 및 서블릿 요청/응답 제어" },
      { name: "Apache Tomcat", level: "Advanced", desc: "서블릿 컨테이너 구동 및 WAR 배포" },
      { name: "JavaMail", level: "Advanced", desc: "SMTP 프로토콜 기반 이메일 전송 및 일회용 인증 토큰 발송" }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: "Advanced", desc: "컴포넌트 라이프사이클, 훅(Hooks) 활용, 모듈화 설계" },
      { name: "Redux Toolkit", level: "Intermediate", desc: "전역 상태 관리, 슬라이스 설계, 세션 영속화" },
      { name: "JavaScript", level: "Advanced", desc: "UI 이벤트 처리 및 비동기 API 통신 로직 구현" },
      { name: "Vite", level: "Intermediate", desc: "모던 번들러 구성, HMR, 최적화" },
      { name: "React Router", level: "Intermediate", desc: "SPA 라우팅 및 새로고침 404 오류 방지" },
      { name: "PWA", level: "Intermediate", desc: "모바일 전체화면 웹앱 뷰 및 세로모드 지원" },
      { name: "CSS / 반응형 UI", level: "Intermediate", desc: "반응형 레이아웃(Flex/Grid), CSS 변수 시스템, 모바일 뷰 최적화" }
    ]
  },
  {
    category: "Database & Security",
    items: [
      { name: "Oracle Database", level: "Advanced", desc: "관계형 데이터베이스 모델링, 트랜잭션 및 데이터 관리" },
      { name: "H2 Database", level: "Advanced", desc: "파일 DB 구성 및 테스트 환경 구축" },
      { name: "Apache DBCP", level: "Intermediate", desc: "DB 접속 연결을 미리 생성하고 재사용하여 접속 속도 및 안정성 향상" },
      { name: "SQL 쿼리 최적화", level: "Intermediate", desc: "서브쿼리를 활용한 반복 쿼리 최소화 및 페이징 처리" },
      { name: "JWT", level: "Intermediate", desc: "토큰 기반 사용자 인증/인가 및 비밀키 환경변수 관리" },
      { name: "SHA-256", level: "Advanced", desc: "Salt 결합을 통한 단방향 비밀번호 암호화" }
    ]
  },
  {
    category: "AI & API",
    items: [
      { name: "Google Gemini AI", level: "Advanced", desc: "프롬프트 구성, 축구 포지션 세부 분류, 악성 게시글 자동 검수" },
      { name: "Football-Data.org API", level: "Advanced", desc: "EPL 경기 일정/결과 실시간 데이터 수집, 시차(UTC/KST) 변환" },
      { name: "OpenWeatherMap API", level: "Advanced", desc: "위/경도 기반 실시간 기상 데이터 수집 및 날씨 위젯 연동" },
      { name: "Naver Chzzk API", level: "Advanced", desc: "실시간 라이브 방송 메타데이터 파싱 및 게임 카테고리 매핑" },
      { name: "Naver Maps API", level: "Advanced", desc: "네이버 지도 렌더링, 마커 표시 및 위치기반서비스(LBS) 연동" },
      { name: "HTML5 Geolocation API", level: "Advanced", desc: "사용자 GPS 좌표 획득 및 내 위치 중심 지도 이동" }
    ]
  },
  {
    category: "배포 및 개발 환경",
    items: [
      { name: "Oracle Cloud (OCI)", level: "Intermediate", desc: "리눅스 서버 인스턴스 구축 및 네트워크 방화벽(포트) 설정" },
      { name: "Docker", level: "Intermediate", desc: "Dockerfile 기반 컨테이너 이미지 빌드 및 실행 환경 구축" },
      { name: "Git / GitHub", level: "Advanced", desc: "브랜치 관리, 커밋/PR 워크플로우 및 팀 협업" },
      { name: "Eclipse / VS Code", level: "Advanced", desc: "통합 개발 환경 구성 및 디버깅" },
      { name: "Maven / npm", level: "Intermediate", desc: "라이브러리 의존성 및 패키지 관리" }
    ]
  }
];

// 프로젝트 진행 순서 (최신순 정렬)
export const projectsData = [
  {
    id: "buildup",
    title: "PL:UG",
    subtitle: "EPL 실시간 데이터 분석, Gemini AI 보조 및 승부예측 축구 커뮤니티 플랫폼",
    period: "2026.09 ~ 2026.10",
    role: "기술팀장 / 풀스택 아키텍처 총괄 / OCI 클라우드 배포 / AI 파이프라인 / 외부 API 연동 전담",
    teamSize: "팀 프로젝트 (휴먼교육센터)",
    category: "Full-Stack Web & Mobile PWA",
    badges: ["React", "Spring Framework", "Oracle Cloud (OCI)", "Docker", "Football-Data.org API", "Google Gemini AI", "Oracle Database", "Redux Toolkit", "PWA", "MyBatis"],
    github: "https://github.com/PSK6262/Team_BuildUp",
    demo: "https://psk6262.github.io/Team_BuildUp/#/plug/mainpage",
    thumbnail: "/images/projects/plug-main.png",
    images: [
      {
        label: "메인 인터랙션 화면",
        url: "/images/projects/plug-main.png",
        caption: "PL:UG EPL 20개 구단 인터랙티브 엠블럼 휠 및 운명의 팀 탐색 메인 비주얼"
      },
      {
        label: "경기 일정 화면",
        url: "/images/projects/plug-schedule.png",
        caption: "Football-Data.org API 기반 EPL 경기 일정 실시간 동기화, 시즌·월별·구단별 필터링 화면"
      },
      {
        label: "승부예측 화면",
        url: "/images/projects/plug-predict.png",
        caption: "EPL 경기 승부예측 및 실시간 투표율, 유저 승부예측 랭킹(Top 3) 화면"
      },
      {
        label: "리그 & 선수 랭킹",
        url: "/images/projects/plug-ranking.png",
        caption: "20개 구단 공식 순위표(승점·골득실) 및 득점·도움·공격포인트·클린시트 세부 지표 대시보드"
      },
      {
        label: "관리자 센터 대시보드",
        url: "/images/projects/plug-admin-dashboard.png",
        caption: "PL:UG 관리자 센터: 380경기 상태, 이벤트 불일치 검증, AI 블라인드 제재 및 회원 통합 모니터링 콘솔"
      },
      {
        label: "관리자 센터 포인트 변동 이력",
        url: "/images/projects/plug-admin-audit.png",
        caption: "관리자 센터 전용: 승부예측 포인트 지급 및 중복 지급 방지 처리, 실시간 포인트 변동 이력 화면"
      }
    ],
    summary:
      "프리미어리그(EPL) 실시간 경기 정보와 구단별 팬 커뮤니티를 하나로 결합하여, 경기 데이터를 확인하며 자유롭게 소통할 수 있는 축구 종합 플랫폼입니다.",
    whatMade: [
      "Football-Data.org API 연동을 통한 EPL 20개 구단 경기 일정·결과 및 실시간 순위표 제공",
      "20개 구단 전용 팬 커뮤니티 및 게시판 소통 공간 구축",
      "Google Gemini AI를 활용한 선수 15개 세부 포지션 분류, 영문 한글화 및 악성 게시글 자동 필터링",
      "승부예측 및 참여 포인트 리워드 시스템 구축",
      "나만의 스쿼드 빌더 및 전술 시뮬레이션 (커스텀 포메이션 배치, 랜덤 AI 및 실제 구단과의 가상 대결)",
      "관리자 전용 제어 콘솔 (테스트용 가상 경기 시뮬레이터 및 데이터 자동 보정)",
      "Oracle Cloud(OCI) & Docker 기반 서버 구축 및 PWA 모바일 패키징 배포"
    ],
    whatDid: [
      {
        area: "기술팀장 리딩 & 풀스택 아키텍처 및 공통 통신 규격 수립",
        details: [
          "기술팀장으로서 Spring MVC 백엔드 및 React + Redux Toolkit 프론트엔드 초기 환경 및 디렉토리 구조 전면 셋업",
          "성공/에러 코드 등 공통 응답 규격을 통일하여 프론트엔드와 백엔드 간 통신 인터페이스 표준화",
          "프론트엔드와 백엔드 간 CORS 통신 오류를 공통 설정으로 해결하고, 보안 키는 환경변수로 분리하여 안전하게 관리"
        ]
      },
      {
        area: "OCI(Oracle Cloud) 인프라 구축 및 Docker 컨테이너 서비스 배포",
        details: [
          "Oracle Cloud(OCI) 리눅스 서버 환경 구축 및 네트워크 방화벽 포트 설정",
          "클라우드 오라클 DB 연동 및 접속 정보를 환경변수로 분리하여 보안 강화",
          "백엔드 애플리케이션을 Dockerfile 기반 경량 컨테이너 이미지로 빌드 및 실행 환경 표준화",
          "Docker 컨테이너 자동 재빌드 및 재실행 스크립트 구축",
          "모바일 웹(PWA)을 안드로이드 설치용 APK 파일로 패키징하여 배포"
        ]
      },
      {
        area: "외부 축구 API(Football-Data.org API) 연동 및 실시간 스케줄러 동기화",
        details: [
          "Football-Data.org API를 활용한 20개 구단 정보, 경기 일정, 순위표, 선수 스쿼드 데이터 수집 파이프라인 개발",
          "스프링 스케줄러(@Scheduled)를 활용해 최신 경기 데이터를 주기적으로 자동 갱신",
          "영국 기준 경기 시각(UTC)을 한국 시간(KST)으로 자동 변환하여 날짜와 시간이 맞도록 보정"

        ]
      },
      {
        area: "Google Gemini AI를 활용한 데이터 분류 및 커뮤니티 관리",
        details: [
          "Google Gemini AI를 활용해 단순 4대 포지션을 15개 세부 포지션으로 정밀 분류",
          "영문 구단 및 선수명을 자연스러운 한국어로 변환하고 누락된 엠블럼 보완",
          "Gemini AI 기반 커뮤니티 악성 게시글/댓글 실시간 판별 및 자동 숨김(블라인드) 처리"
        ]
      },
      {
        area: "승부예측 시스템 및 포인트 중복 지급 방지",
        details: [
          "경기 시작 1분 전까지 자유롭게 예측을 수정할 수 있고, 킥오프 시점에 자동 마감되는 시간 제어 로직 구현",
          "많은 유저가 동시에 참여해도 오류가 없도록 DB 트랜잭션을 적용하고, 이미 포인트가 지급된 경기인지 확인하여 중복 지급을 안전하게 차단",
          "실시간 홈/무/원정 투표 비율 및 포인트 랭킹 Top 3 UI 구현"
        ]
      },
      {
        area: "관리자 시뮬레이터 및 경기 데이터 자동 일치 도구",
        details: [
          "테스트 및 시연을 위해 가상 경기 생성, 점수 조작, 강제 종료 및 포인트 지급을 원클릭으로 수행하는 관리자 전용 기능 구축",
          "외부 API에서 가져온 최종 점수와 상세 골 기록이 서로 다를 경우, 이를 자동으로 감지하여 일치시켜 주는 데이터 보정 도구 개발"
        ]
      },
      {
        area: "PWA 모바일 패키징 및 앱 최적화",
        details: [
          "주소창 없는 전체화면 뷰와 세로모드를 지원하여 모바일 앱과 동일한 환경 제공",
          "GitHub Pages 배포 환경에서 새로고침 시 404 에러가 발생하지 않도록 라우팅 처리"
        ]
      }
    ],
    troubleshooting: [
      {
        issue: "외부 축구 API에서 경기 데이터를 가져올 때, 최종 점수(예: 2-1)와 상세 골 기록(예: 골 1개만 수신)이 서로 맞지 않는 데이터 불일치 발생",
        solution: "관리자 화면에서 점수와 골 기록이 일치하는지 자동으로 확인하고, 빠진 골 기록이 있다면 자동으로 채워 넣어 데이터가 정확히 일치하도록 보정 로직 구현"
      },
      {
        issue: "승부예측 결과에 따라 포인트를 지급할 때, 동시에 여러 처리가 겹치면 포인트가 두 번 이상 중복으로 지급될 수 있는 위험 발생",
        solution: "포인트 지급 작업을 하나의 단위(DB 트랜잭션)로 묶고, 이미 처리된 경기인지 상태를 먼저 확인하는 중복 방지 로직을 구축하여 어떤 상황에서도 포인트가 딱 1번만 안전하게 지급되도록 해결"
      }
    ],
    reflection:
      "기술팀장으로서 대규모 실시간 축구 데이터와 생성형 AI를 하나의 서비스에 연동하며, 데이터가 어긋나지 않도록 맞추고 포인트 오류를 방지하는 등 실제 서비스에서 마주하는 복잡한 문제들을 깊이 경험했습니다. 프론트엔드와 백엔드가 원활히 소통할 수 있는 표준 규격의 중요성을 체감했고, 팀의 기술 중심으로서 발생한 문제를 끝까지 추적해 해결하는 끈기를 길렀습니다."
  },
  {
    id: "oasis",
    title: "5ASIS",
    subtitle: "네이버 치지직 라이브 스트리밍 방송 및 Steam API 연동 게임 종합 커뮤니티 플랫폼",
    period: "2026.08 ~ 2026.09",
    role: "기술팀장 / 백엔드 코어 인프라 / ERD 총괄 / 네이버 치지직 API 실시간 파싱 / 게시판 / 보안 인증 전담",
    teamSize: "팀 프로젝트 (휴먼교육센터)",
    category: "Full-Stack Web · Spring Framework & JSP",
    badges: ["Java", "Spring Framework", "MyBatis", "Oracle Database", "Naver Chzzk API", "Steam API", "JavaMail", "Apache DBCP"],
    github: "https://github.com/PSK6262/Team_5asis",
    thumbnail: "/images/projects/5asis-main.jpg",
    images: [
      {
        label: "메인 서비스 화면",
        url: "/images/projects/5asis-main.jpg",
        caption: "5ASIS 게이머 커뮤니티 인기 게임 TOP 6 및 실시간 방송/스팀 할인 메인 화면"
      },
      {
        label: "게임 게시판",
        url: "/images/projects/5asis-board.png",
        caption: "인기글 랭킹 및 게임별/태그별 커뮤니티 게시판 상세 화면"
      },
      {
        label: "통합 검색 화면",
        url: "/images/projects/5asis-search.png",
        caption: "MyBatis 동적 쿼리 기반 게시판·제목·내용·작성자 닉네임 통합 검색 결과 화면"
      },
      {
        label: "ERD 다이어그램",
        url: "/images/projects/5asis-erd.png",
        caption: "기술팀장으로서 총괄 설계한 5ASIS 핵심 데이터베이스 ERD 구조"
      }
    ],
    summary:
      "실시간 치지직 게임 방송과 스팀(Steam) 게임 정보를 한눈에 확인하고, 게이머들이 자유롭게 소통할 수 있는 종합 게임 커뮤니티 플랫폼입니다.",
    whatMade: [
      "네이버 치지직(CHZZK) 오픈 API 기반 실시간 게임 방송 썸네일, 스트리머 정보, 시청자 수 연동 패널",
      "Steam API 연동 및 개별 게임 게시판과 전체 통합 게시판 분기 시스템",
      "게시글 작성/수정/삭제, 댓글, 게시글 추천 이력, 첨부파일 관리",
      "조회수/추천수 가중치 기반 실시간 인기 게시글 및 인기 게시판 랭킹 시스템",
      "조건별 게시글 검색 및 페이징 기능",
      "이메일 인증 기반 일회용 보안 토큰을 활용한 안전한 비밀번호 재설정"
    ],
    whatDid: [
      {
        area: "기술팀장 리딩 & 백엔드 코어 아키텍처 / Spring 인프라 구축",
        details: [
          "기술팀장으로서 ERD 및 데이터베이스 설계를 총괄하고, 공통 DTO 구조 정의",
          "Java 기반 Spring Framework, MyBatis, Oracle JDBC, DBCP 커넥션 풀 메이븐 의존성 설계",
          "스프링 핵심 설정 파일(DB 연동, 서블릿 매핑 등) 구성",
          "회원, 게시글, 댓글, 페이징 등 계층 간 데이터 전달을 위한 DTO 정의"
        ]
      },
      {
        area: "네이버 치지직(CHZZK) 오픈 API 연동 서비스 개발",
        details: [
          "치지직 API 연동으로 실시간 방송 상태, 썸네일, 시청자 수 데이터를 수집하는 서비스 개발",
          "게임 카테고리와 치지직 방송을 매핑하여 게시판 상단에 실시간 방송 패널 표시"
        ]
      },
      {
        area: "게임 게시판 코어 백엔드/프론트엔드 개발",
        details: [
          "개별 게임 게시판 및 전체 통합 게시판(/board/all) 동적 라우팅 및 뷰 분기 로직 구현",
          "통합 게시판에서 특정 게시글 클릭 시 해당 게임 카테고리로 안전하게 이동하는 리다이렉트 핸들링",
          "현재 페이지, 블록 수, 목록 개수를 계산하는 페이징 처리 기능 구현",
          "MyBatis 동적 쿼리를 활용한 조건별 검색 및 서브쿼리로 조회 최적화"
        ]
      },
      {
        area: "JavaMail 기반 이메일 인증 및 비밀번호 재설정 기능",
        details: [
          "javax.mail 기반 SMTP 메일 발송 유틸 개발",
          "비밀번호 재설정 시 일회용 보안 토큰을 생성하고 5분 유효시간 검증 로직 구현",
          "스프링 인터셉터를 활용하여 비정상 URL 접근 및 토큰 변조 방지"
        ]
      },
      {
        area: "비즈니스 로직 분리 및 공통 코드 관리",
        details: [
          "DAO에 있던 비즈니스 로직을 Service 계층으로 분리하여 유지보수성 향상",
          "자주 쓰이는 상수 및 세션 키를 공통 코드로 분리하여 일관성 있게 관리"
        ]
      }
    ],
    troubleshooting: [
      {
        issue: "게시글 목록 조회 시 각 게시글의 댓글 개수를 가져오기 위해 쿼리가 반복 호출되어 느려지는 문제",
        solution: "게시글 목록 조회 메인 SQL 내에 서브쿼리 (SELECT COUNT(*) FROM COMMENTS WHERE POST_ID = P.POST_ID)를 결합하여 단 1회의 쿼리로 댓글 수를 함께 수집하도록 최적화"
      },
      {
        issue: "비밀번호 찾기 링크 클릭 시 권한 검증 없이 URL로 재설정 페이지에 직접 접근 가능한 보안 취약점",
        solution: "Spring HandlerInterceptor(PwResetModeInterceptor)를 구현하여 이메일 토큰 유효성 검증을 통과한 세션에만 페이지 접근을 허용하고, 5분 초과 시 즉시 만료 처리"
      }
    ],
    reflection:
      "2022년보다 나은 프로젝트를 목표로 삼았으나 팀원을 케어하느라 순탄치만은 않았습니다. 제가 설계한 ERD뿐만 아니라 전반적인 개발 지식에 대해 “이것이 왜 필요한가” 등을 묻는 팀원에게, 이를 설명하는 과정에서 두세 번 더 공부하게 되어 지식적인 측면이 크게 늘어났습니다. 기능적으로 더 넣지 못한 아쉬움은 있지만, 다른 사람을 가르치고 이끌며 깊이 있게 성장함을 확인할 수 있었습니다."
  },
  {
    id: "greenway",
    title: "GreenWay",
    subtitle: "네이버 지도 및 실시간 기상 API 기반 도심 공원 및 산책로 탐색 웹 서비스",
    period: "2026.07 ~ 2026.08",
    role: "팀장 / 프론트엔드 환경 구축 / 네이버 지도 기반 위치기반서비스(LBS) 연동 / 날씨 위젯 / 플로팅 모달 / 배포 전담",
    teamSize: "팀 프로젝트 (휴먼교육센터)",
    category: "Frontend Web Application",
    badges: ["React", "Vite", "Naver Maps API", "OpenWeatherMap API", "HTML5 Geolocation API", "react-rnd", "GitHub Pages"],
    github: "https://github.com/PSK6262/Team_OneCode",
    demo: "https://psk6262.github.io/Team_OneCode/",
    thumbnail: "/images/projects/greenway.png",
    images: [
      {
        label: "메인 지도 화면",
        url: "/images/projects/greenway.png",
        caption: "GreenWay 도심 산책로 및 둘레길 탐색 메인 비주얼"
      },
      {
        label: "상세 정보 화면",
        url: "/images/projects/greenway-detail.png",
        caption: "산책로 코스 제원(길이·소요시간), 편의시설, 실시간 날씨 및 한줄평 후기 상세 뷰"
      }
    ],
    summary:
      "도심 속 공원과 산책로 정보를 네이버 지도 위에 시각화하고, 사용자 현재 위치 및 실시간 날씨 정보를 결합하여 맞춤형 산책 코스를 추천하는 반응형 웹 서비스입니다.",
    whatMade: [
      "네이버 지도 API 기반 도심 공원 및 산책로 마커 표시 및 인터랙션",
      "현재 위치 기반 주변 산책로 탐색 기능",
      "실시간 날씨 및 기온 정보 위젯 제공",
      "산책로 코스별 상세 제원(총 거리 km, 소요 시간, 난이도, 주요 경유지) 제공",
      "나만의 산책 코스 즐겨찾기 관리",
      "지도를 보며 자유롭게 이동 및 크기 조절이 가능한 플로팅 정보창 구현"
    ],
    whatDid: [
      {
        area: "팀 리딩 및 프론트엔드 환경 구축",
        details: [
          "팀장으로서 전체 개발 방향을 이끌고 폴더 구조 및 규칙 통일",
          "Vite + React 기반 프로젝트 초기 환경 설정",
          "GitHub Pages 배포 환경에서 새로고침 시 404 오류가 발생하지 않도록 라우팅 처리",
          "네이버 지도 API Key 등 외부 인증 키를 .env 환경변수로 안전하게 격리"
        ]
      },
      {
        area: "지도 및 위치기반서비스 (Naver Maps API & HTML5 Geolocation API) 개발",
        details: [
          "네이버 지도 객체 비동기 초기화 및 지도 중심점, 줌(Zoom), 드래그 라이프사이클 제어",
          "HTML5 Geolocation API를 연동하여 사용자 위/경도 좌표를 획득하고 원클릭으로 내 위치 중심 이동 구현",
          "산책로 데이터셋(parksData.js)을 파싱하여 지도 위 마커 렌더링 및 팝업 이벤트 핸들링"
        ]
      },
      {
        area: "실시간 날씨 위젯 개발 (OpenWeatherMap API)",
        details: [
          "OpenWeatherMap API 연동으로 위/경도 기반 실시간 기온 및 날씨 아이콘 비동기 수집",
          "글로벌 네비게이션 바 상단에 위젯 컴포넌트를 마운트하여 실시간 기상 상태 확인 가능하도록 구현"
        ]
      },
      {
        area: "컴포넌트 모듈화 및 플로팅 패널 구현",
        details: [
          "목록 및 카드 컴포넌트 단위 분리로 코드 재사용성 향상",
          "지도 위에서 자유롭게 이동 및 크기 조절이 가능한 플로팅 상세 정보창 개발",
          "ESC 키 입력 시 팝업 닫기, 검색창 원클릭 초기화 버튼, 검색어 공백 제거 예외 처리 적용",
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
    ],
    reflection:
      "API 연동을 처음 접하며 언어적 장벽이나 데이터 호출 과정에서 헤매기도 했지만, AI의 도움을 받으며 이를 좋은 도구로 활용하는 법을 확실하게 알게 되었습니다. 특히 기획부터 결과 발표, 시연, API 연동까지 전부 혼자 도맡아 진행하느라 힘든 부분도 많았습니다. 하지만 모든 책임이 집중되는 상황 속에서도 프로젝트를 자연스럽게 해결해 내며 향후 어떤 업무든 주도적으로 완수할 수 있다는 자신감을 얻었습니다."
  },
  {
    id: "gamerparty",
    title: "GAMER PARTY",
    subtitle: "MVC 패턴 기반 기초 웹 아키텍처 및 H2DB 연동 게임 커뮤니티 사이트",
    period: "2021.11 ~ 2021.12",
    role: "단독 개발 / 전반적인 MVC 구조 설계 / H2DB CRUD 및 사용자 인증(JavaMail) 전담",
    teamSize: "학과 프로젝트",
    category: "Academic Web Project · JSP & MVC",
    badges: ["JSP", "Servlet", "Apache Tomcat", "H2 Database", "JavaMail", "MVC Pattern"],
    github: "https://github.com/PSK6262/2022Web",
    thumbnail: "/images/projects/gamerparty.png",
    images: [
      {
        label: "메인 커뮤니티 화면",
        url: "/images/projects/gamerparty.png",
        caption: "GAMER PARTY 게임 커뮤니티 상단 히어로 배너 및 파티원 모집 게시판/로그인 메인 화면"
      }
    ],
    summary:
      "게임별 파티원 모집과 자유로운 정보 공유 및 소통을 위해 제작한 게임 커뮤니티 플랫폼입니다.",
    whatMade: [
      "MVC 패턴 기반 커뮤니티 웹 설계 및 개발",
      "H2 DB 연동을 통한 회원 및 게시글 CRUD 기능 구현",
      "JavaMail 연동을 통한 회원가입 이메일 인증 구현",
      "게시글 목록 표시 및 페이징 기능 자체 구현"
    ],
    whatDid: [
      {
        area: "전반적인 MVC 아키텍처 및 컨트롤러/모델 설계",
        details: [
          "요청을 처리하는 서블릿 컨트롤러와 데이터 로직을 분리하는 MVC 구조 설계",
          "H2 DB를 활용한 DAO/DTO 데이터 접근 계층 구축"
        ]
      },
      {
        area: "JavaMail을 활용한 회원가입 이메일 인증",
        details: [
          "SMTP 프로토콜을 활용한 회원가입 이메일 인증 메일 발송 구현",
          "인증 토큰 유효성 검증 및 회원가입 완료 처리 로직 구현"
        ]
      }
    ],
    troubleshooting: [
      {
        issue: "처음 접한 데이터베이스 환경에서 페이지네이션 구현 중 원하는 데이터 위치를 제대로 가져오지 못하고 오류 원인을 찾기 어려웠던 문제 발생",
        solution: "요청 전달부터 SQL 쿼리 실행까지 단계별 콘솔 로그를 출력하며 데이터 흐름을 추적하여, 페이지 계산 공식의 오차를 바로잡고 안정적인 페이징 로직 구축"
      }
    ],
    reflection:
      "게임에 대해 아는 것과 웹 구현은 별개임을 깊이 깨달았고, 처음 접한 DB 환경에서 AI의 도움 없이 페이지네이션을 구현하며 에러 원인을 찾지 못해 많이 헤맸던 기억이 있습니다. 하지만 이 경험 덕분에 현재는 디버깅 측면에서 에러의 원인을 정확하게 특정하는 실력을 갖추게 되었습니다."
  }
];

export const educationData = {
  education: [
    {
      institution: "국립안동대학교",
      major: "컴퓨터공학과 (학사 졸업)",
      period: "2016.03 ~ 2022.07",
      description: "컴퓨터공학 학사 학위 취득. 자료구조, 알고리즘, 데이터베이스, 네트워크, 운영체제 등 컴퓨터 사이언스 기초 체계 이수"
    }
  ],
  trainings: [
    {
      program: "일본 현지 어학연수 과정",
      institution: "메로스 언어학원 (Meros Language School, Tokyo)",
      period: "2023.04 ~ 2023.06",
      description: "JLPT N1 취득 후 일본 도쿄 현지 어학연수 이수. 실전 비즈니스 일본어 회화 및 원활한 다문화 커뮤니케이션 역량 체득"
    },
    {
      program: "Java Spring 기반 스마트웹 & 콘텐츠 풀스택 개발자 양성과정",
      institution: "휴먼교육센터",
      period: "2026.04 ~ 2026.10",
      description: "Java, Spring Framework, React, Oracle SQL 기반의 웹 애플리케이션 프로젝트 3회 완수 및 팀장/기술팀장 역할 수행"
    }
  ],
  certifications: [
    {
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2026.05",
      status: "필기합격"
    },
    {
      name: "JLPT N1 (일본어능력시험 1급)",
      issuer: "일본국제교류기금 (Japan Foundation)",
      date: "2022.01",
      status: "합격"
    }
  ],
  military: {
    title: "병역 사항",
    status: "군필",
    period: "2017 ~ 2019"
  }
};
