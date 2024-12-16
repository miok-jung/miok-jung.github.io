<template>
  <q-page :style-fn="portfolioStyle">
    <ScrollArea :style="{ padding: '3rem', height: `calc(100vh - ${headerAndFooterHeight}px)` }">
      <div class="row justify-between" style="border: 1px solid yellow">
        <q-avatar size="200px">
          <img src="/src/assets/images/character.jpg" />
        </q-avatar>
        <div style="width: calc(100% - 200px - 48px)">
          <p>정미옥</p>
          <p>1993. 11. 02</p>
          <p>웹 개발자</p>
          <p>Vue, Quasar, TypeScript, JavaScript, Github, Git</p>
          <p>경력</p>
          <p>아이팩토리</p>
          <p>2022. 07. 18 - 재직중</p>
          <p>IPACTORY 홈페이지 유지보수 : <a href="https://www.ipactory.com/">IPACTORY HOME</a></p>
          <p>IPEDIT 홈페이지 유지보수 : <a href="https://ipedit.co/">IPEDIT HOME</a></p>
          <p>IPEDIT Draft 홈페이지 퍼블리싱 테마 작업 및 유지보수</p>
          <a href="https://draft.ipedit.co/">IPEDIT Draft HOME</a>
          <p>IPEDIT Translate 퍼블리싱 및 메인 웹개발 참여</p>
          <a href="https://translate.ipedit.co/">IPEDIT Translate HOME</a>
          <p>그 외 IPEDIT 관련되 ADMIN 홈페이지 퍼블리싱 웹개발</p>
          <hr />
          <p>주식회사 믐( 2021. 05 - 2022. 01 총 9개월)</p>
          <p>서비스 홈페이지 프론트 리뉴얼 작업</p>
          <p>업무 성과 : <a href="https://meum.me">믐 사이트 바로가기</a></p>
          <p>웹 페이지 퍼블리싱 및 반응형 페이지 제작 및 웹개발</p>
          <p>현재 리뉴얼 된 홈페이지로 순수 html, css, javascript로 제작된 홈페이지 입니다.</p>
          <p>프론트앤드 개발자 2명이서 작업하였으며 페이지별로 나누어 작업을 진행하였습니다.</p>
          <p>주 담당 페이지는 메인, 이용안내, 스토어, 고객센터, 마이페이지 등 입니다.</p>
          <p>
            또한 퍼블리싱 작업을 통해 사이트에 전반적인 레이아웃을 변수로 통합하였으며 반응형 작업도 진행하였습니다.
          </p>
          <p>이후에는 vue로 리뉴얼되어서 바뀌었습니다.</p>
          <p>믐 & PCN 갤러리엔</p>
          <p>2021-12-01 ~ 2022-01-01</p>
          <p>연계/소속회사 : 주식회사 믐, PCN</p>
          <p>수행 기간 : 2021.12~ 2021.01(약 2개월 소요)</p>
          <p>주요 역할 : 웹 페이지 퍼블리싱 및 반응형 페이지 제작과 개발</p>
          <p>업무 성과 : <a href="https://www.galleryen.co.kr/">갤러리 사이트 바로가기</a></p>
          <p>홈페이지에서 주 담당 업무는 반응형 페이지 개발 및 퍼블리싱이 주 담당이였습니다.</p>
          <p>베타서비스 배포로 원페이지를 좀 더 부드러운 작업이 가능하도록 고려를 하였습니다</p>
        </div>
      </div>
    </ScrollArea>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ScrollArea from 'src/components/common/ScrollArea.vue';

// NOTE: 포트폴리오 스타일
const headerAndFooterHeight = ref<number>(0);
function portfolioStyle(offset: number) {
  headerAndFooterHeight.value = offset;
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
  };
}
function containerStyle() {
  return {};
}
</script>
