export default {
  portfolio: {
    header: {
      title: 'Mi Ok, Jung',
      navigation: {
        home: '홈',
        projects: '프로젝트',
        contact: '연락하기',
      },
    },
    home: {
      title: '보이는 것 이상의 것을 만듭니다',
      description:
        '사용자 경험을 해치지 않는 퍼블리싱,\n유지보수 가능한 UI 구조, 그리고 "왜 이렇게 만들었는지..." 설명 가능한 코드를 좋아합니다.',
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
