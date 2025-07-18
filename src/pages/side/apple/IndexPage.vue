<template>
  <q-page :style-fn="pageStyles">
    <div class="container">
      <nav class="global-nav">
        <div class="global-nav-links">
          <a href="#" class="global-nav-item">Rooms</a>
          <a href="#" class="global-nav-item">Ideas</a>
          <a href="#" class="global-nav-item">Stores</a>
          <a href="#" class="global-nav-item">Contact</a>
        </div>
      </nav>
      <nav class="local-nav">
        <div class="local-nav-links">
          <a href="" class="product-name">AirMug Pro</a>
          <a href="#">개요</a>
          <a href="#">제품사양</a>
          <a href="#">구입하기</a>
        </div>
      </nav>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const pageStyles = () => {
  return {
    fontFamily: '"Noto Sans KR", sans-serif',
    fontSize: '14px',
    overflowX: 'hidden',
    color: 'rgb(29, 29, 31)',
    letterSpacing: '0.05em',
    background: 'white',
  };
};
</script>

<style lang="scss">
@use '../../../css/side/default.scss';
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

p {
  line-height: 1.6;
}

.container {
  nav.global-nav {
    height: 44px;
    .global-nav-links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1000px;
      height: 100%;
    }
  }
}
</style>
