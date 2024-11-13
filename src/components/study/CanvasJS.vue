<template>
  <p class="text-h2">Canvas API를 통해서 그리기 수단을 연습합니다.</p>
  <p class="text-h3">getContext Type: 2D</p>
  <p class="text-body1">
    2D 그래픽을 그릴 수 있는 기본적인 컨텍스트다. 이를 통해 선, 사가곃ㅇ, 텍스트, 이미지 등을 그릴 수 있다.
  </p>
  <div class="row q-gutter-md">
    <div ref="canvasRef" />
    <div ref="textCanvasRef" />
    <div ref="imageCanvasRef" />
    <div ref="videoCanvasRef" />
  </div>
  <p class="text-h3">getContext Type: webgl</p>
  <p class="text-body1">
    WebGL API를 사용하여 3D 그래픽을 그릴 수 있는 컨텍스트다. WebGL은 웹 브라우저에서 GPU를 사용한 고성능 3D 렌더링을
    지원한다.
  </p>
  <p class="text-h3">getContext Type: webgl2</p>
  <p class="text-body1">
    WebGL 2.0을 위한 컨텍스트로 WebGL 보다 향상된 기능을 제공한다. 예를 들어, 더 나은 텍스처와 셰이더 지원이 포함이
    된다.
  </p>
  <p class="text-h3">getContext Type: bitmaprenderer</p>
  <p class="text-body1">
    비트맵 이미지 데이터를 직접 캔버스에 렌더링할 때 사용된다. 주로 이미지 데이터를 빠르게 표시할 때 유용하다.
  </p>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import dummy from 'assets/dummy/data/dummy.json';

const canvasRef = ref<HTMLElement | undefined>(undefined);
const textCanvasRef = ref<HTMLElement | undefined>(undefined);
const imageCanvasRef = ref<HTMLElement | undefined>(undefined);
const videoCanvasRef = ref<HTMLElement | undefined>(undefined);

type typeBall = {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: number;
};

// NOTE: life-cycle
onMounted(() => {
  // SECTION: 첫번째 도형 연습
  const canvas1 = document.createElement('canvas');
  const width = 720;
  const height = 720;
  canvas1.width = width * window.devicePixelRatio;
  canvas1.height = height * window.devicePixelRatio;
  canvas1.style.width = width + 'px';
  canvas1.style.height = height + 'px';
  if (canvasRef.value) canvasRef.value.appendChild(canvas1);
  const ctx = canvas1.getContext('2d');
  if (ctx) {
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.fillRect(0, 0, width, height);

    // NOTE: 사각형
    ctx.fillStyle = '#F68657';
    ctx.fillRect(100, 100, 200, 200);
    // 사각형 border
    ctx.strokeStyle = '#A593E0';
    ctx.lineWidth = 5;
    ctx.strokeRect(90, 90, 220, 220);

    // NOTE: 원형
    ctx.beginPath();
    ctx.arc(500, 200, 100, 0, 2 * Math.PI);
    ctx.fillStyle = '#80d4f6';
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#534847';
    ctx.fill();
    ctx.stroke();

    // NOTE: 선
    ctx.beginPath();
    ctx.strokeStyle = '#fd999a';
    ctx.moveTo(100, 400);
    ctx.lineTo(100, 600);
    ctx.stroke();

    // NOTE: 다각형
    ctx.beginPath();
    ctx.moveTo(400, 400);
    ctx.lineTo(400, 600);
    ctx.lineTo(650, 600);
    ctx.lineTo(400, 400);
    ctx.lineCap = 'round';
    ctx.setLineDash([4, 20]);
    ctx.fillStyle = '#c72e45';
    ctx.fill();
    ctx.strokeStyle = '#cff0da';
    ctx.stroke();
  }
  // !SECTION

  // SECTION 두번째 텍스트 연습
  const canvas2 = document.createElement('canvas');
  canvas2.width = width * window.devicePixelRatio;
  canvas2.height = height * window.devicePixelRatio;
  if (textCanvasRef.value) textCanvasRef.value.appendChild(canvas2);
  const ctx2 = canvas2.getContext('2d');
  if (ctx2) {
    ctx2.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx2.fillRect(0, 0, width, height);

    ctx2.font = 'bold 30px Pretendard Variable';
    ctx2.textBaseline = 'top';
    ctx2.fillText('Hello', 50, 100);
    ctx2.fillStyle = '#f1f2f3';
    ctx2.lineWidth = 1;

    ctx2.beginPath();
    dummy.textBaseline.forEach((baseline, i) => {
      const y = 50 + i * 50;
      ctx2.strokeStyle = '#f00';
      ctx2.moveTo(50, y);
      ctx2.lineTo(550, y);
      ctx2.stroke();
      ctx2.textBaseline = baseline as CanvasTextBaseline;
      ctx2.strokeStyle = '#000';
      ctx2.fillText(baseline + ' 가나다 갃난닰 0123456789', 50, y);
      ctx2.strokeText(baseline, 50, y);
    });
  }
  // !SECTION
  // SECTION 세번째 연습 Image
  const canvas3 = document.createElement('canvas');
  canvas3.width = width * window.devicePixelRatio;
  canvas3.height = height * window.devicePixelRatio;
  canvas3.style.width = width + 'px';
  canvas3.style.height = height + 'px';
  if (imageCanvasRef.value) imageCanvasRef.value.appendChild(canvas3);
  const ctx3 = canvas3.getContext('2d');
  if (ctx3) {
    ctx3.fillStyle = '#090707';
    ctx3.fillRect(0, 0, canvas3.width, canvas3.height);
    const img = document.createElement('img');
    if (imageCanvasRef.value) imageCanvasRef.value.appendChild(img);
    // canvas가 아닌 따른곳에 표기가 됨
    // NOTE: imageCanvasRef.value에 직접 추가가 되며, DOM에 별도로 표시가 된다.
    // img.src = 'https://picsum.photos/1500/720';
    img.onload = () => {
      ctx3.drawImage(img, 10, 100);
    };
  }
  // !SECTION
  // SECTION 네번째 연습 Video
  const canvas4 = document.createElement('canvas');
  canvas4.width = width * window.devicePixelRatio;
  canvas4.height = height * window.devicePixelRatio;
  canvas4.style.width = width + 'px';
  canvas4.style.height = height + 'px';
  if (videoCanvasRef.value) videoCanvasRef.value.appendChild(canvas4);
  const ctx4 = canvas4.getContext('2d');
  if (ctx4) {
    ctx4.strokeStyle = '#000';
    ctx4.lineWidth = 2;
    ctx4.fillStyle = '#aaa';
    ctx4.fillRect(3, 3, canvas4.width - 6, canvas4.height - 6);
    ctx4.strokeRect(0, 0, canvas4.width, canvas4.height);

    const video = document.createElement('video');
    videoCanvasRef.value?.appendChild(video);

    video.onload = () => {
      video.src = '/src/assets/study/videos/01.mp4';
    };
    video.onloadeddata = () => {
      video.autoplay = true;
      video.playsInline = true;
      video.loop = true;
      video.muted = true;

      videoDraw();
    };
    function videoDraw() {
      setTimeout(() => {
        ctx4?.drawImage(video, 100, 100, 200, 200);
        videoDraw();
      }, 1000 / 10);
    }
  }

  // !SECTION
});
</script>

<style scoped></style>
