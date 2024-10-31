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
  const size = 720;
  canvas.width = size * window.devicePixelRatio;
  canvas.height = size * window.devicePixelRatio;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  if (canvasRef.value) canvasRef.value.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const gravity = 0.5; // 중력 설정, 움직이기 위한 가중치 설정
    const bounceFactor = 0.7; // 바닥에 다으면 튕길 반발력 설정

    const balls = ref<typeBall[]>([]);
    const ball = ref<typeBall>();
    let handle = 0;

    // NOTE: 랜덤칼라 뽑기
    function getRandomColor() {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; ++i) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    function getRandomSize(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    canvas.onclick = (event) => {
      // 공모양 그리기
      ball.value = {
        x: 0,
        y: 0,
        radius: getRandomSize(20, 50),
        color: getRandomColor(),
        velocity: 0,
      };
      // 클릭한 위치에
      ball.value.x = event.offsetX;
      ball.value.y = event.offsetY;
      ball.value.velocity = 0; // 속도 초기화
      balls.value.push(ball.value); //클릭을 할 때 마다 여러 볼 추가 업데이트
      cancelAnimationFrame(handle); // requestAnimationFrame실행 전에 실행하여 애니메이션 프레임 요청을 취소한다.
      update();
    };
    function update() {
      handle = requestAnimationFrame(update); // 반복 작업
      if (ctx && ball.value) {
        ctx.clearRect(0, 0, size, size); // 이전에 그리던 중복된 이미지는 제거(마치 움직이는 것 처럼 보이도록 제거)
      }

      balls.value.forEach((ball: typeBall) => {
        if (!ball.x && !ball.y) return; // x, y가 없을 때에는 그리지 않기

        if (ctx === null) throw new Error('ctx Error Null');
        ctx.fillStyle = ball.color;
        ball.velocity += gravity; // 속도값은 계속 중력이 증가
        ball.y += ball.velocity; // 그만큼 속도 값을 Y좌표에 증가 표시

        // 탱탱볼 튕기기 애니메이션 효과
        if (ball.y + ball.radius > size) {
          ball.y = size - ball.radius;
          ball.velocity = -ball.velocity * bounceFactor;
        }

        drawtypeBall(ball); // 실행
      });
    }
    function drawtypeBall(ball: typeBall) {
      if (ctx) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    }
  }
});
</script>

<style scoped></style>
