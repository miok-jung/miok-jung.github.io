<template>
  <div class="wrap">
    <!-- SECTION: 헤더 -->
    <header>
      <h2>검색</h2>
    </header>
    <!-- !SECTION 헤더 END -->
    <!-- SECTION: 컨테이너 -->
    <section>
      <form action="">
        <div class="search-wrap">
          <input ref="inputRef" class="search" type="text" placeholder="검색어를 입력하세요" autofocus />
          <button type="reset" class="btn-reset">
            <span class="mdi mdi-window-close" />
          </button>
        </div>
      </form>
    </section>
    <div class="search-result-wrap">
      <template v-for="n in 9" :key="n">
        <div class="result-wrap">
          <span class="img-inner-wrap">
            <img src="https://picsum.photos/300/200" />
          </span>
          <div class="result-content">
            <p>
              <b>[키친르쎌]</b>
              이탈리아 파티 세트 3~4인분
            </p>
            <p>
              <span class="mdi mdi-calendar-clock" />
              <b>OPEN: </b>09: 00 - 22: 00
            </p>
            <p>
              <span class="mdi mdi-coffee-outline" />
              <b>BREAK: </b>15: 00 - 17: 00
            </p>
            <p>
              <span class="mdi mdi-phone-outline" />
              <b>PHONE: </b>010 - 2345 - 6789
            </p>
          </div>
        </div>
      </template>
    </div>
    <!-- !SECTION: 컨테이너 END -->
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

// NOTE reset 버튼 활성화/비활성화
const inputRef = ref<HTMLInputElement | undefined>(undefined);
function onInputEvent() {
  const resetBtn = document.querySelector('.btn-reset') as HTMLElement;
  if (inputRef.value !== undefined && inputRef.value.value !== '') resetBtn.style.display = 'block';
  else resetBtn.style.display = 'none';
}

// NOTE: life-cycle
onMounted(() => {
  // 삭제 버튼 활성화

  if (inputRef.value) {
    inputRef.value.addEventListener('input', onInputEvent);
  }
  console.log('onMounted');
});
onBeforeUnmount(() => {
  if (inputRef.value) {
    inputRef.value.removeEventListener('input', onInputEvent);
  }
  console.log('onBeforeUnmount');
});
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 500px;
  border: 1px solid red;
  header {
    width: 100%;
    padding: 0 8px;
    border-bottom: 1px #ccc solid;
    h2 {
      padding: 8px 0;
      text-align: center;
    }
  }
  section {
    width: 100%;
    form {
      .search-wrap {
        position: relative;
        display: flex;
        flex-direction: row;
        margin: 15px 0 15px 0;
        input[type='text'] {
          display: block;
          box-sizing: border-box;
          width: 100%;
          height: 40px;
          padding: 8px 16px;
          font-size: 14px;
          line-height: 1.5;
          border: 1px solid #cccccc;
          border-radius: 4px;
        }
        .btn-reset {
          position: absolute;
          display: none;
          padding: 2px 6px;
          top: 0px;
          right: 8px;
          width: 24px;
          height: 24px;
          background: #ccc;
          border-radius: 50%;
          border: none;
          transform: translateY(calc(50% - 4px));
        }
      }
    }
  }
  .search-result-wrap {
    width: 100%;
    .result-wrap {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-items: center;
      margin-bottom: 0.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #ccc;
      &:last-child {
        margin-bottom: 0;
        border-bottom: none;
      }
      .img-inner-wrap {
        width: 100px;
        position: relative;
        display: flex;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100%;
          background: #f1f2f3;
          border-radius: 4px;
        }
        img {
          object-fit: scale-down;
          z-index: 1;
        }
      }
      .result-content {
        background: #f1f2f3;
        border-radius: 4px;
        width: calc(100% - 108px);
        margin-left: 0.5rem;
        padding: 0.5rem;
        > p {
          display: -webkit-box;
          overflow: hidden;
          word-break: break-word;
          text-overflow: ellipsis;
          margin-bottom: 0.2rem;
          line-clamp: 2;
          -webkit-line-clamp: 2; // 원하는 라인수
          -webkit-box-orient: vertical;
          &:last-child {
            margin-bottom: 0;
          }
          > span.mdi {
            margin-right: 0.3rem;
          }
          > b {
            margin-right: 0.5rem;
            white-space: nowrap;
          }
        }
      }
    }
  }
}

// .container {
//   margin: 0 15px 0 15px;
// }
// .content {
//   border: 1px solid #ccc;
// }
// ul.tabs {
//   display: flex;
// }
// .tabs li {
//   display: inline-block;
//   width: 50%;
//   padding: 15px;
//   text-align: center;
//   box-sizing: border-box;
//   border-bottom: 1px solid #ccc;
//   background-color: #eee;
//   color: #999;
// }
// .tabs li.active {
//   background-color: #2ac1bc;
//   color: #fff;
// }
// .list li {
//   box-sizing: border-box;
//   display: block;
//   padding: 15px;
//   border-bottom: 1px solid #ccc;
//   position: relative;
// }
// .list li:last-child {
//   border-bottom: none;
// }
// .list li .number {
//   margin-right: 15px;
//   color: #ccc;
// }
// .list li .date {
//   position: absolute;
//   right: 50px;
//   top: 15px;
//   margin-right: 15px;
//   color: #ccc;
// }
// .list li .btn-remove {
//   position: absolute;
//   right: 0px;
//   top: 15px;
//   margin-right: 15px;
// }

// form {
//   position: relative;
// }
// .btn-reset,
// .btn-remove {
//   border-radius: 50%;
//   background-color: #ccc;
//   color: white;
//   border: none;
//   padding: 2px 5px;
// }
// .btn-reset {
//   position: absolute;
//   top: 12px;
//   right: 10px;
// }
// .btn-reset::before,
// .btn-remove::before {
//   content: 'X';
// }

// #search-result li {
//   display: flex;
//   margin-bottom: 15px;
// }
// #search-result img {
//   width: 30%;
//   height: 30%;
// }
</style>
