<template>
  <div class="q-mb-md" ref="canvasRef" />
  <div class="q-mb-md" ref="textCanvasRef" />
  <div class="q-mb-md" ref="imageRef" />
  <div ref="videoRef" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const canvasRef = ref<HTMLElement | undefined>(undefined);
const textCanvasRef = ref<HTMLElement | undefined>(undefined);
const imageRef = ref<HTMLElement | undefined>(undefined);
const videoRef = ref<HTMLElement | undefined>(undefined);

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
  // const canvas2 =
  // !SECTION
});
</script>

<style scoped></style>
