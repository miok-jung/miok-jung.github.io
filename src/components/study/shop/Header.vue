<template>
  <!-- SECTION: 1. Header -->
  <header class="wrap">
    <!-- SECTION: 1-1. Util -->
    <nav>
      <div>
        <button>로그인</button>
        <hr class="vertical" />
        <button>고객센터</button>
        <hr class="vertical" />
        <button>이용안내</button>
      </div>
    </nav>
    <!-- !SECTION -->
    <!-- SECTION: 1-2. GNB -->
    <div class="nav">
      <!-- NOTE: 2-1. LOGO -->
      <div class="logo-wrap">
        <img class="logo" src="/src/assets/study/shop/logo.svg" alt="logo image" />
      </div>
      <!-- NOTE: 2-2. Search -->
      <div class="search-wrap">
        <input type="text" placeholder="어떤 상품을 찾으세요?" />
        <span class="mdi mdi-magnify search-icon" />
      </div>
      <!-- NOTE: 2-3. Right Logo -->
      <div class="main-icons">
        <span class="mdi mdi-bookmark-outline" />
        <span class="mdi mdi-heart-outline" />
        <span class="mdi mdi-account-outline" />
        <span class="mdi mdi-cart-outline" />
        <span class="mdi mdi-truck-outline" />
      </div>
    </div>
    <!-- !SECTION -->
  </header>
  <!-- !SECTION -->
  <hr />
  <!-- SECTION: 2. Contents -->
  <div class="contents wrap">
    <!-- SECTION: 2-1. LNB -->
    <div class="left-toggle-menu-wrap">
      <span class="mdi mdi-menu left-toggle-menu-icon" />
      <ul class="toggle-menu-list">
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </div>
    <!-- !SECTION -->
    <!-- SECTION: 2-2. GNB2 -->
    <div class="content-nav">
      <button class="nav-list">베스트상품100</button>
      <button class="nav-list">365특가</button>
      <button class="nav-list">전문관</button>
      <button class="nav-list">오늘발송</button>
      <button class="nav-list">최저가딜</button>
      <button class="nav-list">이벤트</button>
      <button class="nav-list">회언혜택</button>
      <button class="nav-list">후불거래상담</button>
    </div>
    <!-- !SECTION -->
  </div>
  <!-- !SECTION -->
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
// SECTION: 1. SCSS Header
.wrap {
  border: 1px solid blue;
  max-width: 1080px;
  margin: 0 auto;
  // SECTION: 1-1. Util
  nav {
    display: flex;
    justify-content: flex-end;
    border: 1px solid red;
    div {
      display: flex;
      hr.vertical {
        border: none;
        border-left: 1px solid hsla(200, 10%, 50%, 100);
        height: initial;
        width: 1px;
      }
    }
  }
  // !SECTION 1-1
  // SECTION 1-2. GNB
  div.nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    > div {
      &:last-child {
        margin-right: 0;
      }
    }
    .logo-wrap {
      width: 100px;
      padding: 0.5rem;
    }
    .search-wrap {
      position: relative;
      width: 500px;
      display: flex;
      align-items: center;
      > input {
        width: 100%;
        height: 50px;
        border-radius: 25px;
        border: 2px solid orange;
      }
      > input::placeholder {
        color: #ccc;
        padding-left: 1rem;
      }
      .search-icon {
        position: absolute;
        top: 50%;
        right: 20px;
        font-size: 30px;
        transform: translateY(-50%);
      }
    }
    .main-icons {
      display: flex;
      flex-direction: row;
      align-items: center;
      > span.mdi {
        margin-right: 0.5rem;
        font-size: 20px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          background: #f1f2f3;
          border-radius: 2px;
        }
      }
    }
  }
  // !SECTION 1-2
}
// !SECTION 1
// SECTION 2. Contents
.contents {
  border: 1px solid red;
  position: relative;
  display: flex;
  justify-content: center;
  .left-toggle-menu-wrap {
    position: absolute;
    top: 0;
    left: 0;
    .left-toggle-menu-icon {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      font-size: 30px;
      background: #222;
      color: #f1f2f3;
    }
    .toggle-menu-list {
      display: none;
    }
  }
  .content-nav {
    border: 1px solid blue;
    > button.nav-list {
      margin: 1rem 0rem;
      padding: 0.5rem 1rem;
    }
  }
}
// !SECTION
</style>
