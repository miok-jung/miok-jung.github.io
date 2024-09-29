<template>
  <div ref="threeJS" :style="{ width: `${threeSize.width}px`, height: `${threeSize.height}px` }">
    <q-resize-observer :debounce="300" @resize="onResizeThreejs" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from 'three'; // Three.js를 전체 가져오기
import WebGL from 'three/examples/jsm/capabilities/WebGL';
import { Resize } from '../type';

const props = withDefaults(
  defineProps<{
    openSidebar?: boolean;
  }>(),
  {
    openSidebar: true,
  }
);

const threeJS = ref<HTMLElement | null>(null);

// NOTE: 장면 생성
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe187); // 뒷배경

// PersectiveCamera(시야각, 종횡비)
// Field of view(시야각) : 해당 시점의 화면이 보여지는 정도를 나타내는 것으로 값은 각도 값으로 설정한다.
// aspect ratio(종횡비) : 대부분의 경우 요소의 높이와 너비에 맞추어 표시하게 할텐데, 그렇지 않으면 와이드 스크린에 옛날 영화를 트는 것처럼 이미지가 틀어져서 보인다.
// near와 far 절단면 : far 값 보다 멀리 있는 요소나 near 값보다 가까이 있는 오브젝트는 렌더링 되지 않는다는 뜻이다. 고려사항은 아니지만, 앱 성능 향상을 위해 사용할 수도 있다.
const winWidth = props.openSidebar ? window.innerWidth - 300 : window.innerWidth; // Sidebar가 오픈 여부에 따라 width값 설정
const camera = new THREE.PerspectiveCamera(75, winWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 3);
camera.lookAt(0, 0, 0);

// NOTE: Ambient Light 설정 (전역 조명)
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // 흰색 빛, 강도
scene.add(ambientLight);

// NOTE: Point Light : 전구와 같은 점광원
const pointLight = new THREE.PointLight(0xffffff, 1, 10); // 흰색 빛, 강도, 거리
pointLight.position.set(0, 2, 4);
scene.add(pointLight);

// NOTE: 오래된 브라우저 혹은 모종의 사유로 WebGL을 지원 안할때의 대비용을 사용하는 것이다.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(winWidth, window.innerHeight);

// NOTE: 박스 설정
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x2e6ff2 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// NOTE: 와이어 프레임 추가 (외곽선)
const wireframeGeometry = new THREE.WireframeGeometry(geometry);
const wireframeMaterial = new THREE.LineBasicMaterial({ color: 'black' });
const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
scene.add(wireframe); // 와이어프레임을 장면에 추가

function animate() {
  requestAnimationFrame(animate);
  // 모든 프레임마다 실행되면서 (1초에 60번 회전)
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  wireframe.rotation.x += 0.01;
  wireframe.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// NOTE: Resize
const threeSize = ref<Resize>({ width: winWidth, height: window.innerHeight - 50 });
function onResizeThreejs(size: Resize) {
  threeSize.value = size;
  // 창 크기 변화 감지
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
}

// NOTE: life-cycle
onMounted(() => {
  if (WebGL.isWebGL2Available()) {
    // DOM에 마운트 된 후 렌더러의 DOM 요소를 threeJS에 추가
    if (threeJS.value) {
      threeJS.value.appendChild(renderer.domElement);
    }
    animate(); // 애니메이션 시작
  } else {
    // WebGL 호환이 안될 경우 에러 메시지 호출
    document.body.appendChild(WebGL.getWebGL2ErrorMessage());
  }
});
</script>

<style scoped></style>
