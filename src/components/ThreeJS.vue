<template>
  <div ref="threeJS" style="width: 100vw; height: calc(100vh - 50px)">
    <q-resize-observer :debounce="300" @resize="onResizeThreejs" />
  </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'; // Three.js를 전체 가져오기
import { onMounted, ref } from 'vue';

const threeJS = ref<HTMLElement | null>(null);

const scene = new THREE.Scene();

// PersectiveCamera(시야각, 종횡비)
// Field of view(시야각) : 해당 시점의 화면이 보여지는 정도를 나타내는 것으로 값은 각도 값으로 설정한다.
// aspect ratio(종횡비) : 대부분의 경우 요소의 높이와 너비에 맞추어 표시하게 할텐데, 그렇지 않으면 와이드 스크린에 옛날 영화를 트는 것처럼 이미지가 틀어져서 보인다.
// near와 far 절단면 : far 값 보다 멀리 있는 요소나 near 값보다 가까이 있는 오브젝트는 렌더링 되지 않는다는 뜻이다. 고려사항은 아니지만, 앱 성능 향상을 위해 사용할 수도 있다.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// NOTE: 오래된 브라우저 혹은 모종의 사유로 WebGL을 지원 안할때의 대비용을 사용하는 것이다.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// NOTE: 기본 정육면체 설정
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'pink' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// NOTE: 와이어 프레임 추가 (외곽선)
const wireframeGeometry = new THREE.WireframeGeometry(geometry);
const wireframeMaterial = new THREE.LineBasicMaterial({ color: 'black' });
const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
scene.add(wireframe); // 와이어프레임을 장면에 추가

camera.position.z = 5;

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
// FIXME: Resize 통합하기
type ThreeResize = {
  width: number;
  height: number;
};
const threeSize = ref<ThreeResize>({ width: 0, height: 0 });
function onResizeThreejs(size: ThreeResize) {
  threeSize.value = size;
  // 창 크기 변화 감지
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
}

// NOTE: life-cycle
onMounted(() => {
  // DOM에 마운트 된 후 렌더러의 DOM 요소를 threeJS에 추가
  if (threeJS.value) {
    threeJS.value.appendChild(renderer.domElement);
  }

  // 애니메이션 시작
  animate();
});
</script>

<style scoped></style>
