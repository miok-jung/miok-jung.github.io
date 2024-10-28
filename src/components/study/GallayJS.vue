<template>
  <div ref="canvasRef"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const canvasRef = ref<HTMLElement | undefined>(undefined);
// NOTE: life-cycle
onMounted(() => {
  const canvas = document.createElement('canvas');
  const size = 720;
  canvas.width = size * window.devicePixelRatio;
  canvas.height = size * window.devicePixelRatio;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  if (canvasRef.value) canvasRef.value.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  if (ctx) {
    // ctx.strokeStyle = '#000';
    // ctx.lineWidth = 5;
    // ctx.fillStyle = '#aaa';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.strokeRect(0, 0, canvas.width, canvas.height);
    // // 사각형
    // ctx.fillStyle = '#f00';
    // ctx.fillRect(100, 100, 200, 200);
    // ctx.strokeRect(100, 100, 200, 200);
    // // 원형
    // ctx.fillStyle = '#0f0';
    // ctx.beginPath();
    // ctx.arc(200, 200, 50, 0, 2 * Math.PI);
    // ctx.fill();
    // ctx.stroke();
    // // 선
    // ctx.beginPath();
    // ctx.strokeStyle = '#00f';
    // ctx.moveTo(400, 100);
    // ctx.lineTo(400, 300);
    // ctx.stroke();
    // // 다각형
    // ctx.beginPath();
    // ctx.moveTo(450, 100);
    // ctx.lineTo(450, 300);
    // ctx.lineTo(650, 300);
    // ctx.lineTo(450, 100);
    // ctx.fill();
    // ctx.stroke();

    ctx.fillStyle = '#fff';
    // ctx.fillRect(50, 100, 550, 200);

    ctx.font = 'bold 30px Arial';
    // ctx.fillStyle = '#000';
    // ctx.textBaseline = 'top';
    // ctx.fillText('hello', 50, 100);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'].forEach((baseline, i) => {
      const y = 50 + i * 50;
      ctx.strokeStyle = '#f00';
      ctx.moveTo(50, y);
      ctx.lineTo(550, y);
      ctx.stroke();
      ctx.textBaseline = baseline as CanvasTextBaseline; // 명시적 타입 단언
      ctx.strokeStyle = '#000';
      ctx.fillText(baseline, 50, y);
      ctx.strokeText(baseline, 50, y);
    });
  }
});
</script>

<style scoped></style>
