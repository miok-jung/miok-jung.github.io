<template>
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
        <a class="product-name" href="#"> AigMug Pro</a>
        <a href="#">개요</a>
        <a href="#">제품사양</a>
        <a href="#">구입하기</a>
      </div>
    </nav>
    <!-- SECTION: SECTION 0 -->
    <section id="scroll-section-0" class="scroll-section">
      <h1>AirMug Pro</h1>
      <div class="sticky-elem main-message">
        <p>온전히 빠져들게 하는<br />최고급 세라믹</p>
      </div>
      <div class="sticky-elem main-message">
        <p>주변 맛을 느끼게 해주는<br />주변 맛 허용 모드</p>
      </div>
      <div class="sticky-elem main-message">
        <p>온종일 편안한<br />맞춤형 손잡이</p>
      </div>
      <div class="sticky-elem main-message">
        <p>새롭게 입가를<br />찾아온 매혹</p>
      </div>
    </section>
    <!-- !SECTION END -->
    <!-- SECTION: SECTION 1 -->
    <section id="scroll-section-1" class="scroll-section">
      <p class="description">
        <strong>보통 스크롤 영역</strong>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est ipsa minima, eligendi
        error cum vel dolorum pariatur officia facilis ipsam voluptatibus ad quasi porro quod
        quisquam quidem tempora accusantium accusamus, quaerat aliquam velit exercitationem
        incidunt? Id vitae quisquam saepe quasi accusantium tempore enim! Aperiam dolorum a vero
        repellat dolor, inventore ab odit totam molestias expedita? Enim quia dolor maiores veniam
        ea! Quam illo, est incidunt ipsa reiciendis modi quisquam reprehenderit fuga velit dolorem
        odit sequi autem blanditiis, ullam commodi quibusdam. Accusamus repellat aperiam quis neque
        laudantium, dignissimos hic nisi magnam praesentium enim beatae sint architecto cum numquam
        inventore rerum animi sed nostrum quae delectus, voluptas molestiae placeat aliquid! Vel
        quaerat error officiis magnam dolorum iste aspernatur at est! Quo, consequuntur? Reiciendis,
        dolor. Quo at cupiditate in iure obcaecati voluptatum vel ea! Ab vel harum facere hic fuga
        ducimus sapiente dolore dolorem, nobis sint perferendis cumque esse! Omnis fugiat sint error
        laborum eveniet labore nam ducimus quisquam in repudiandae impedit excepturi dignissimos
        tenetur libero placeat rerum maxime tempore, aut nihil. Qui, quam? Voluptate fuga possimus
        itaque quas nesciunt iste, facilis mollitia illo qui placeat temporibus inventore obcaecati.
        Recusandae, sequi dignissimos in natus eum maiores dolorem, deleniti nobis accusantium,
        aspernatur beatae.
      </p>
    </section>
    <!-- !SECTION END -->
    <!-- SECTION: SECTION 2 -->
    <section id="scroll-section-2" class="scroll-section">
      <div class="sticky-elem sticky-elem-canvas">
        <canvas id="video-canvas-1" width="1920" height="1080"></canvas>
      </div>
      <div class="sticky-elem main-message a">
        <p>
          <small>편안한 촉감</small>
          입과 하나 되다
        </p>
      </div>
      <div class="sticky-elem desc-message b">
        <p>
          편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를 하나하나 새롭게 살피고
          재구성하는 과정을 거쳐 새로운 수준의 머그, AirMug Pro를 만들었습니다. 입에 뭔가 댔다는
          감각은 어느새 사라지고 오롯이 당신과 음료만 남게 되죠.
        </p>
        <div class="pin"></div>
      </div>
      <div class="sticky-elem desc-message c">
        <p>디자인 앤 퀄리티 오브 스웨덴,<br />메이드 인 차이나</p>
        <div class="pin"></div>
      </div>
    </section>
    <!-- !SECTION END -->
    <!-- SECTION: SECTION 3 -->
    <section id="scroll-section-3" class="scroll-section">
      <p class="mid-message">
        <strong>Retina 머그</strong><br />
        아이디어를 광활하게 펼칠<br />
        아름답고 부드러운 음료 공간.
      </p>
      <!-- <canvas class="image-blend-canvas" width="1920" height="1080"></canvas> -->
      <p class="canvas-caption">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at fuga quae perspiciatis
        veniam impedit et, ratione est optio porro. Incidunt aperiam nemo voluptas odit quisquam
        harum in mollitia. Incidunt minima iusto in corporis, dolores velit. Autem, sit dolorum
        inventore a rerum distinctio vero illo magni possimus temporibus dolores neque adipisci,
        repudiandae repellat. Ducimus accusamus similique quas earum laborum. Autem tempora
        repellendus asperiores illum ex! Velit ea corporis odit? Ea, incidunt delectus. Sapiente
        rerum neque error deleniti quis, et, quibusdam, est autem voluptate rem voluptas. Ratione
        soluta similique harum nihil vel. Quas inventore perferendis iusto explicabo animi eos
        ratione obcaecati.
      </p>
    </section>
    <!-- !SECTION END -->
    <footer class="footer">2025, Jung, MiOk</footer>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { onMounted, ref } from 'vue';

const { screen } = useQuasar();

const scenInfo = ref([
  {
    // 0
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll-section-0'),
    },
  },
  {
    // 1
    type: 'normal',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll-section-1'),
    },
  },
  {
    // 2
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll-section-2'),
    },
  },
  {
    // 3
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll-section-3'),
    },
  },
]);
function setLayout() {
  // 각 스크롤 섹션의 높이 세팅
  for (let i = 0; i < scenInfo.value.length; i++) {
    const infoStep = scenInfo.value[i];
    if (infoStep) {
      infoStep.scrollHeight = infoStep.heightNum * screen.height;
      infoStep.objs.container = document.querySelector(`#scroll-section-${i}`);
      if (infoStep.objs.container) {
        infoStep.objs.container.style.height = `${scenInfo.value[i]?.scrollHeight}px`;
      }
    }
  }
  console.log('test', scenInfo.value);
}

// NOTE:  life-cycle
onMounted(() => {
  setLayout();
});
</script>

<style scoped lang="scss">
// SECTION: COMMON
$apple-primary: #1d1d1f;
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
.container {
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  line-height: 1.2;
  word-wrap: break-word;
  overflow-x: hidden;
  color: $apple-primary;
  letter-spacing: -0.05em;
  background: white;
  -webkit-font-smoothing: antialiased;
}
p {
  line-height: 1.6;
}
a {
  color: $apple-primary;
  text-decoration: none;
}
// !SECTION  COMMON END
.container {
  nav {
    &.global-nav {
      height: 44px;
      .global-nav-links {
        justify-content: space-between;
      }
    }
    &.local-nav {
      height: 52px;
      border-bottom: 1px solid #ddd;
      .local-nav-links {
        a {
          font-size: 0.8rem;
          &.product-name {
            margin-right: auto;
            font-size: 1.4rem;
            font-weight: bold;
          }
          &:not(.product-name) {
            margin-left: 2em;
          }
        }
      }
    }
    .global-nav-links,
    .local-nav-links {
      display: flex;
      align-items: center;
      margin: 0 auto;
      max-width: 1000px;
      height: 100%;
    }
  }
  section {
    &.scroll-section {
      // border: 1px solid yellowgreen;
    }
  }
  footer {
    // border: 1px solid green;
  }
}
</style>
