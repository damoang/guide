import { defineConfig } from 'vitepress'

// organization 이름
const organizationName: string = 'damoang';
// 저장소 이름
const repositoryName: string = 'guide';
const repositoryUrl: string = `https://github.com/${organizationName}/${repositoryName}/`;

const customConfig = defineConfig({});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "다모앙 가이드",
  description: "다모앙 가이드",
  lang: 'ko_KR',
  base: `/${repositoryName}/`,
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo/logo-mini.png',
    externalLinkIcon: true,
    // nav: [
    //   { text: '회원', link: '/member/' },
    //   { text: '커스텀 UI', link: '/custom-ui/' },
    // ],

    sidebar: [
      {
        text: '회원',
        link: '/member/',
        items: [
          { text: '내 정보 관리', link: '/member/my-info' },
          { text: '본인인증', link: '/member/certification' },
          {
            text: '주요 기능',
            items: [
              { text: '알림', link: '/member/notification' },
              { text: '회원 메모', link: '/member/memo' },
              { text: '쪽지', link: '/member/message' },
              { text: '신고 및 차단' },
            ]
          },
        ]
      },
      {
        text: '게시판 이용하기',
        link: '/board/',
        items: [
          { text: '소모임' },
        ]
      },
      {
        text: '커스텀 UI',
        link: '/custom-ui/',
        items: [
          { text: '단축키 설정', link: '/custom-ui/shortcut' },
          { text: 'UI 설정', link: '/custom-ui/ui' },
          { text: '메뉴 설정', link: '/custom-ui/menu' },
          { text: '메모 설정', link: '/custom-ui/memo' },
          { text: '목록 설정', link: '/custom-ui/list' },
          { text: '추천 설정', link: '/custom-ui/recommend' },
          { text: '단축버튼 설정', link: '/custom-ui/expand-button' },
        ]
      },
      {
        text: '자주묻는 질문 & 팁',
        link: '/tips/',
        items: [
          // { text: '다모앙 팁', link: '/tips/angs' },
        ]
      },
      {
        text: '다모앙에 광고하기',
        link: '/advertise/',
        items: [
          { text: '이미지 배너', link: '/advertise/banner' },
          { text: '홍보 게시판', link: '/advertise/promotion' },
        ]
      },
      {
        text: '다모앙 개발 참여하기',
        link: '/contribute/',
      },
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@damoang-net' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16"><path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5"/></svg>' }, link: 'https://smartstore.naver.com/damoang-net' },
      { icon: 'github', link: repositoryUrl },
    ],

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: '이전 페이지',
      next: '다음 페이지'
    },

    editLink: {
      text: '이 페이지 수정하기',
      pattern: repositoryUrl + '/edit/main/docs/:path',
    },

    lastUpdated: {
      formatOptions: {
        dateStyle: 'long',
        timeStyle: undefined,
      }
    }
  },

  markdown: {
    lineNumbers: process.env.NODE_ENV === 'production'
  }
})
