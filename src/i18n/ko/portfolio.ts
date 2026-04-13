export default {
  portfolio: {
    header: {
      title: 'Mi Ok, Jung',
      navigation: {
        home: '홈',
        career: '경력',
        projects: '프로젝트',
        contact: '연락하기',
      },
    },
    home: {
      title: '보이는 것 이상의 것을 만듭니다',
      description:
        '사용자 경험을 해치지 않는 퍼블리싱,\n유지보수 가능한 UI 구조, 그리고 "왜 이렇게 만들었는지..." 설명 가능한 코드를 좋아합니다.',
    },
    career: {
      title: 'Career',
      subtitle: '웹 퍼블리셔로서 쌓아온 경력입니다.',
      present: '2026-03-16',
      items: [
        {
          company: '주식회사 아이팩토리',
          role: '웹퍼블리셔',
          from: '2022-07-01',
          to: '',
          tags: ['Vue3', 'Quasar Framework', 'HTML5', 'SCSS', 'TypeScript'],
          projects: [
            {
              name: 'IPACTORY HOME',
              link: 'https://www.ipactory.com/',
              tasks: [
                'Quasar Framework 기반 반응형 기업 웹사이트 전체 퍼블리싱 (기여도 100%)',
                '다국어 확장성을 고려한 레이아웃 구조 설계 및 UI 구현',
                '기업 아이덴티티를 반영한 UI 컴포넌트 커스터마이징 및 크로스 브라우징 대응',
              ],
            },
            {
              name: 'IPEDIT',
              link: 'https://ipedit.co',
              tasks: [
                '서비스 리뉴얼에 따른 컴포넌트 중심 UI 구조 설계 및 전체 퍼블리싱',
                '반복되는 UI 요소를 공통 컴포넌트로 구조화하여 작업 효율 및 유지보수성 향상',
                '사용자 경험(UX)을 고려한 직관적인 레이아웃 및 내비게이션 UI 구현',
              ],
            },
            {
              name: 'AIT HOME',
              link: 'https://ait.ipedit.co/',
              tasks: [
                '신규 런칭 서비스의 기획 의도에 맞춘 UI 퍼블리싱 및 레이아웃 설계',
                '디자인 시안을 기반으로 인터랙티브 UI 퍼블리싱 및 웹 접근성 고려',
                '재사용성을 고려한 컴포넌트 단위 UI 구조 설계 및 개발',
              ],
            },
            {
              name: 'Draft / Translate',
              link: 'https://draft.ipedit.co/',
              subLink: 'https://translate.ipedit.co/',
              tasks: [
                'Vue3 + Quasar 기반 대시보드 UI 퍼블리싱 및 프론트엔드 협업 개발',
                '데이터 바인딩을 고려한 동적 UI 컴포넌트 설계 및 구현',
                'API 연동을 고려한 페이지 구조 설계 및 UI 개발 참여',
              ],
            },
          ],
        },
        {
          company: '주식회사 믐',
          role: '사원',
          from: '2021-05-01',
          to: '2022-01-01',
          tags: ['HTML', 'CSS', 'JavaScript'],
          projects: [
            {
              name: '믐 서비스 리뉴얼',
              link: 'https://meum.me/',
              tasks: [
                '서비스 홈페이지 프론트 리뉴얼 작업 (순수 HTML, CSS, JavaScript)',
                '주 담당 페이지 : 메인, 이용안내, 스토어, 고객센터, 마이페이지',
                '사이트 전반적인 레이아웃을 변수로 통합 및 반응형 작업 진행',
                '프론트엔드 개발자 2인 협업, 페이지별 분담 작업',
              ],
            },
            {
              name: '믐 & PCN 갤러리엔',
              link: 'https://www.galleryen.co.kr/',
              tasks: [
                '연계 회사 : 주식회사 믐, PCN',
                '반응형 페이지 개발 및 퍼블리싱 주 담당',
                '베타서비스 배포를 고려한 원페이지 구조 설계 및 부드러운 인터랙션 구현',
              ],
            },
          ],
        },
      ],
    },
    project: {
      title: 'Projects',
      subtitle: '이전에 작업한 클론코드 프로젝트들입니다.',
      back: '목록으로',
      items: [
        {
          id: 'hanacard',
          title: '하나카드',
          description:
            '기업형 홈페이지를 기준으로 레이아웃과 UI 구조를 분석하여 퍼블리싱',
          detail:
            '실제 웹사이트를 기반으로 UI를 분해하고 컴포넌트 단위로 재구성하여 구현했습니다. 정적 레이아웃 구조와 인터랙션을 분석하며 시맨틱 마크업과 CSS 구조 설계에 집중했습니다.',
          tags: ['XHTML', 'CSS2', 'jQuery'],
          github: 'https://github.com/miok-jung/hanacard_clone',
          link: 'https://jnarin.com/hanacard_clone',
        },
        {
          id: 'cj-one',
          title: 'CJ ONE',
          description: '반응형 웹사이트 구조 분석 및 퍼블리싱 구현',
          detail:
            '디자인 시안을 기반으로 반응형 레이아웃을 구성하고, 디바이스별 UI 흐름을 고려하여 미디어쿼리를 설계했습니다. 컴포넌트 단위로 분리하여 재사용성과 유지보수성을 고려했습니다.',
          tags: ['HTML5', 'CSS3', 'JavaScript'],
          github: 'https://github.com/miok-jung/cjone_clone',
          link: 'https://jnarin.com/cjone_clone/',
        },
      ],
    },
    contact: {
      title: '저와 함께 일해봐요',
      subtitle:
        '저의 역량에 대해 더 궁금한 점이 있으시다면 편하게 문의해 주세요.',
      mail: {
        send: '메일 보내기',
        copy: '이메일 복사',
      },
      design: {
        description:
          '포트폴리오의 디자인 구성과 UI 흐름은 피그마에서 확인하실 수 있습니다.',
        view_link: '디자인 보기 링크',
      },
    },
    aria: {
      menu: {
        open: '메뉴 열기',
        close: '메뉴 닫기',
        mobile: '모바일 메뉴',
      },
      go_to_link: '링크 바로가기',
    },
  },
}
