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

type typeBall = {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: number;
};

// NOTE: life-cycle
onMounted(() => {
  const canvas = document.createElement('canvas');
  const width = 720;
  const height = 250;
  canvas.width = width * window.devicePixelRatio;
  canvas.height = height * window.devicePixelRatio;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  if (canvasRef.value) canvasRef.value.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.fillRect(0, 0, width, height);

    const audio = new Audio(); // document.createElement('audio'); 와 동일한 방식
    audio.src = '/src/assets/study/audio/01.mp3';
    // audio.onloadeddata = () => {
    //   audio.play();
    // };

    canvas.onclick = () => {
      audio.play();
      const analyser = connectAudio();
      draw(analyser);
    };

    function connectAudio() {
      // window.webkitAudioContext의 경우 구 버전 Safari까지 지원을 하는게 아니라면 굳이 필요가 없음
      const audioContext = new window.AudioContext();
      const audioSource = audioContext.createMediaElementSource(audio);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      audioSource.connect(analyser);
      analyser.connect(audioContext.destination);
      return analyser;
    }

    function draw(analyser: AnalyserNode) {
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser.getByteFrequencyData(dataArray);

      if (ctx === null) throw new Error('ctx New Error Audio');
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      const barWidth = (width / bufferLength) * 2;
      let barHeight = 0;
      let x = 0;

      ctx?.save(); // ctx.restore(); -> 기존에 있던 설정 값들을 stact에 담는다?
      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        if (ctx === null) throw new Error('ctx New Error Audio');
        ctx.fillStyle = '#55b';
        ctx.fillRect(x, height - barHeight, barWidth, barHeight);
        x += barWidth;
      }

      ctx?.restore();
      requestAnimationFrame(() => draw(analyser));
    }
  }
});
</script>

<style scoped></style>
