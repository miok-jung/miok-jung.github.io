<template>
  <q-page :style-fn="pageStyles">
    <div class="container" v-scroll="onScroll">
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
          <a href="#" class="product-name">AirMug Pro</a>
          <a href="#">개요</a>
          <a href="#">제품사양</a>
          <a href="#">구입하기</a>
        </div>
      </nav>
      <!-- SECTION: CONTAINER1 -->
      <section
        ref="scene1"
        id="scroll-section-0"
        class="scroll-section"
        :style="{ height: sceneInfo[0]?.scrollHeight + 'px' }"
      >
        <h1>AirMug Pro</h1>
        <div ref="mainMessageA" class="sticky-elem main-message">
          <p>온전히 빠져들게 하는<br />최고급 세라믹</p>
        </div>
        <div ref="mainMessageB" class="sticky-elem main-message">
          <p>주변 맛을 느끼게 해주는<br />주변 맛 허용 모드</p>
        </div>
        <div ref="mainMessageC" class="sticky-elem main-message">
          <p>온종일 편안한<br />맞춤형 손잡이</p>
        </div>
        <div ref="mainMessageD" class="sticky-elem main-message">
          <p>새롭게 입가를<br />찾아온 매혹</p>
        </div>
      </section>
      <!-- !SECTION -->
      <!-- SECTION: CONTAINER2 -->
      <section
        ref="scene2"
        id="scroll-section-1"
        class="scroll-section"
        :style="{ height: sceneInfo[1]?.scrollHeight + 'px' }"
      >
        <p class="description">
          <strong>보통 스크롤 영역</strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sint laborum deleniti
          magnam minus quaerat vel dolor autem ducimus perspiciatis nesciunt sapiente esse quae
          totam impedit, enim eaque aperiam doloremque ex. Sunt, pariatur. Totam, maiores officiis
          quasi fuga recusandae aliquid culpa optio, ipsum inventore expedita excepturi iste
          doloribus aliquam saepe molestias nemo autem dolores assumenda accusamus ullam! Nam,
          inventore dolor voluptatum odit impedit vero delectus, amet aliquam nostrum blanditiis ex
          tempore nihil quae deserunt ut culpa, reiciendis quia. Officiis, accusamus delectus
          dignissimos eaque earum libero quia qui eveniet obcaecati distinctio enim explicabo soluta
          necessitatibus amet aspernatur non veritatis ipsam a. Consequuntur nostrum exercitationem
          ut rem itaque optio, iste temporibus dolorum assumenda impedit mollitia accusamus eveniet
          esse ducimus sint dolorem commodi blanditiis perspiciatis rerum veniam fugit natus quia
          debitis? Magni harum labore cupiditate sit architecto neque commodi doloremque a enim
          voluptatibus, in consequuntur quas magnam quae itaque obcaecati excepturi eveniet nam
          numquam deserunt accusamus mollitia aliquid corporis iure? Repudiandae perferendis fuga
          eveniet! Eum odio enim maiores ut, error corporis expedita recusandae, deleniti tenetur
          natus reiciendis. Et neque recusandae, provident eligendi ullam unde eveniet quae. Iusto
          vero, at excepturi aliquam dolor ipsam harum sapiente totam ducimus nisi neque ratione
          aliquid rerum temporibus?
        </p>
      </section>
      <!-- !SECTION -->
      <!-- SECTION: CONTAINER3 -->
      <section
        ref="scene3"
        id="scroll-section-2"
        class="scroll-section"
        :style="{ height: sceneInfo[2]?.scrollHeight + 'px' }"
      >
        <div class="sticky-elem main-message">
          <p>
            <small>편안한 촉감</small>
            입과 하나 되다
          </p>
        </div>
        <div class="sticky-elem desc-message">
          <p>
            편안한 목넘김을 완성하는 디테일한 여러 구성 요소를, 우리는 이를 하나하나 새롭게 살피고
            재구성하는 과정을 거쳐 새로운 수준의 머그, AirMug Pro를 만들었습니다. 입에 뭔가 댔다는
            감각은 어느새 사라지고 오롯이 당신과 음료만 남게 되죠.
          </p>
          <div class="pin"></div>
        </div>
        <div class="sticky-elem desc-message">
          <p>디자인 앤 퀄리티 오브 스웨덴,<br />메이드 인 차이나</p>
          <div class="pin"></div>
        </div>
      </section>
      <!-- !SECTION -->
      <!-- SECTION: CONTAINER4 -->
      <section
        ref="scene4"
        id="scroll-section-3"
        class="scroll-section"
        :style="{ height: sceneInfo[3]?.scrollHeight + 'px' }"
      >
        <p class="mid-message">
          <strong>Retina 머그</strong><br />
          아이디어를 광활하게 펼칠<br />
          아름답고 부드러운 음료 공간.
        </p>
        <p class="canvas-caption">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, corporis. Aliquid
          voluptatem assumenda ullam ut expedita, officia possimus, deleniti praesentium voluptas
          hic nulla tempore nemo blanditiis velit aperiam neque. Repellat quia vitae expedita
          nesciunt quam nihil tempora est. Nobis, culpa ipsum fuga sed corrupti quam quisquam eius,
          saepe laboriosam vero consectetur? Quo eum, sapiente ipsum vel sunt corporis quia eos
          repellat amet, provident numquam officia delectus voluptates. Repellat nulla iure enim
          voluptas corporis esse doloremque repellendus maiores, mollitia possimus eveniet sit
          beatae omnis quia. Assumenda, autem esse iusto debitis ex consequatur nesciunt explicabo
          veniam cum sint expedita officia nisi quae.
        </p>
      </section>
      <!-- !SECTION -->
      <footer class="footer">2025, Jung Miok</footer>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { onMounted, ref, watch } from 'vue';

const { screen } = useQuasar();

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

// NOTE: Scene 정보 업데이트 및 세팅
type Scene = {
  type: 'sticky' | 'normal';
  heightNum: number; // 스크롤 높이의 배수값
  scrollHeight: number; // 스크롤 높이
  objs: {
    container: HTMLElement | undefined;
    mainMessageA?: HTMLElement | undefined;
    mainMessageB?: HTMLElement | undefined;
    mainMessageC?: HTMLElement | undefined;
    mainMessageD?: HTMLElement | undefined;
  };
  values?: {
    messageA_opacity: [number, number];
  };
};
const scene1 = ref<HTMLElement | undefined>(undefined);
const mainMessageA = ref<HTMLElement | undefined>(undefined);
const mainMessageB = ref<HTMLElement | undefined>(undefined);
const mainMessageC = ref<HTMLElement | undefined>(undefined);
const mainMessageD = ref<HTMLElement | undefined>(undefined);
const scene2 = ref<HTMLElement | undefined>(undefined);
const scene3 = ref<HTMLElement | undefined>(undefined);
const scene4 = ref<HTMLElement | undefined>(undefined);
const sceneInfo = ref<Scene[]>([
  {
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: undefined,
      mainMessageA: undefined,
      mainMessageB: undefined,
      mainMessageC: undefined,
      mainMessageD: undefined,
    },
  },
  {
    type: 'normal',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: undefined,
    },
  },
  {
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: undefined,
    },
  },
  {
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: undefined,
    },
  },
]);
function setLayout() {
  // 각 스크롤 섹션의 높이 세팅
  const sceneObjs = [scene1.value, scene2.value, scene3.value, scene4.value];
  for (let i = 0; i < sceneInfo.value.length; i++) {
    const scene = sceneInfo.value[i];
    if (scene) {
      scene.scrollHeight = scene.heightNum * screen.height;
      scene.objs.container = sceneObjs[i];
    }
  }
  let totalScrollHeight = 0;
  for (let i = 0; i < sceneInfo.value.length; i++) {
    const scene = sceneInfo.value[i];
    if (scene) {
      totalScrollHeight += scene.scrollHeight;
      if (totalScrollHeight >= yOffset.value) {
        currentScene.value = i;
        break;
      }
    }
  }
  document.body.setAttribute('id', `show-scene-${currentScene.value}`);
}

// NOTE: 스크롤 정보 업데이트
const yOffset = ref<number>(0); // window.pageYOffset 대신 쓸 변수
const prevScrollHeight = ref<number>(0); // 현재 스크롤 위치(yOffset) 보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
const currentScene = ref<number>(0);
const onScroll = (pos: number) => {
  yOffset.value = pos;
  scrollLoop();
};

// function calcValue(values: number[], currentYOffset: number) {}
function playAnimation() {
  const scene = sceneInfo.value[currentScene.value];
  if (scene === undefined) return;

  // const objs = scene.objs;
  const values = scene.values;
  if (values === undefined) return;
  switch (currentScene.value) {
    case 0: {
      const messageA_opacity_0 = values.messageA_opacity[0];
      const messageA_opacity_1 = values.messageA_opacity[1];

      console.log('play 0', messageA_opacity_0, messageA_opacity_1);
      break;
    }
    case 1: {
      console.log('play 1');
      break;
    }
    case 2: {
      console.log('play 2');
      break;
    }
    case 3: {
      console.log('play 3');
      break;
    }
  }
}
const scrollLoop = () => {
  prevScrollHeight.value = 0;

  for (let i = 0; i < currentScene.value; i++) {
    const sceneInformation = sceneInfo.value[i];
    if (sceneInformation) {
      prevScrollHeight.value += sceneInformation.scrollHeight;
    }
  }

  const currentSceneInfo = sceneInfo.value[currentScene.value];
  if (currentSceneInfo === undefined) return;
  if (yOffset.value > prevScrollHeight.value + currentSceneInfo?.scrollHeight) {
    currentScene.value++;
    document.body.setAttribute('id', `show-scene-${currentScene.value}`);
  }
  if (yOffset.value < prevScrollHeight.value) {
    if (currentScene.value === 0) return;
    currentScene.value--;
    document.body.setAttribute('id', `show-scene-${currentScene.value}`);
  }
  // mainMessage 애니메이션 실행
  playAnimation();
};

// NOTE: watch
watch(
  () => screen.height,
  () => {
    setLayout();
  },
);

// NOTE: life-cycle
onMounted(() => {
  setLayout();
});
</script>

<style scoped lang="scss">
@use '../../../css/side/default.scss';
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

$apple-primary: rgb(29, 29, 31);
p {
  line-height: 1.6;
}
a {
  color: $apple-primary;
  text-decoration: none;
}

.container {
  nav.global-nav {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    width: 100%;
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
  .local-nav {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    height: 52px;
    border-bottom: 1px solid #ddd;
    .local-nav-links {
      display: flex;
      align-items: center;
      margin: 0 auto;
      max-width: 1000px;
      height: 100%;
      .product-name {
        margin-right: auto;
        font-size: 1.2rem;
        font-weight: bold;
      }
      a {
        font-size: 0.8rem;
      }
      a:not(.product-name) {
        margin-left: 2em;
      }
    }
  }

  // SECTION: CONTAINER
  .scroll-section {
    padding-top: 50vh;
    .main-message {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 0;
      height: 3em;
      font-size: 2.5rem;
      p {
        font-weight: bold;
        text-align: center;
        line-height: 1.2;
      }
      small {
        display: block;
        margin-bottom: 0.5em;
        font-size: 1.2rem;
      }
    }
    .description {
      margin: 0 auto;
      padding: 0 1rem;
      max-width: 1000px;
      font-size: 1.2rem;
      color: #888;
      strong {
        float: left;
        margin-right: 0.2em;
        font-size: 3rem;
        color: $apple-primary;
      }
    }
    .sticky-elem {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }

  #scroll-section-0 {
    h1 {
      font-size: 4rem;
      text-align: center;
    }
  }
  #scroll-section-2 {
    .main-message {
      font-size: 3.5rem;
    }
    .desc-message {
      width: 50%;
      font-weight: bold;
      .pin {
        width: 1px;
        height: 100px;
        background: $apple-primary;
      }
    }
  }
  #scroll-section-3 {
    p {
      &.mid-message {
        margin: 0 auto;
        padding: 0 1rem;
        max-width: 1000px;
        font-size: 2rem;
        color: #888;
        strong {
          color: $apple-primary;
        }
      }
      &.canvas-caption {
        margin: 0 auto;
        padding: 0 1rem;
        max-width: 1000px;
        font-size: 1.2rem;
        color: #888;
      }
    }
  }
  // !SECTION
  footer.footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7rem;
    color: white;
    background: darkorange;
  }
}

#show-scene-0 #scroll-section-0 .sticky-elem,
#show-scene-1 #scroll-section-1 .sticky-elem,
#show-scene-2 #scroll-section-2 .sticky-elem,
#show-scene-3 #scroll-section-3 .sticky-elem {
  display: block !important;
}

// SECTION: MEDA QUERY
@media (min-width: 1024px) {
  .container {
    // SECTION: PC CONTAINER
    .scroll-section {
      .main-message {
        font-size: 4vw;
        small {
          font-size: 1.5rem;
        }
      }
      .description {
        font-size: 2rem;
        strong {
          font-size: 6rem;
        }
      }
    }
    #scroll-section-0 {
      h1 {
        font-size: 9vw;
      }
    }
    #scroll-section-2 {
      .main-message {
        font-size: 6vw;
      }
      .desc-message {
        width: 20%;
        .pin {
        }
      }
    }
    #scroll-section-3 {
      p {
        &.mid-message {
          font-size: 4vw;
          strong {
          }
        }
        &.canvas-caption {
          font-size: 2rem;
        }
      }
    }
    // !SECTION
  }
}
// !SECTION
</style>
