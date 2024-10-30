<template>
  <div ref="canvasRef"></div>
  <div ref="imageRef"></div>
  <div ref="videoRef"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const canvasRef = ref<HTMLElement | undefined>(undefined);
const imageRef = ref<HTMLElement | undefined>(undefined);
const videoRef = ref<HTMLElement | undefined>(undefined);

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
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 5;
    ctx.fillStyle = '#aaa';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // image
    const image = document.createElement('img');
    canvasRef.value?.appendChild(image);
    image.src = 'https://picsum.photos/1500/1500';
    // setTimeout(() => {
    //   ctx.drawImage(image, 0, 0);
    // }, 1000);
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };

    // video
    const video = document.createElement('video');
    canvasRef.value?.appendChild(video);
    video.src = '/src/assets/study/videos/01.mp4';
    video.onloadeddata = () => {
      video.autoplay = true;
      video.playsInline = true;
      video.loop = true;
      video.muted = true;
      console.log('load', video.autoplay);
      draw();
    };
    function draw() {
      setTimeout(() => {
        draw();
        ctx?.drawImage(video, 100, 100, 200, 200);
      }, 1000 / 10);
    }
  }
});
</script>

<style scoped></style>
