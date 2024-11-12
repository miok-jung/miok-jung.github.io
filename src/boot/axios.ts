import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

const api = axios.create({
  baseURL: 'https://api.example.com',
  // NOTE: 자격 증명 정보로, 쿠키, aUTHORIZATION 헤더, tls 클라이언트 인증서 등을 포함한다.
  withCredentials: true, // 쿠키를 포함하여 요청을 보냄 (서버와의 세션 유지)
});

export default boot(({ app }) => {
  // Vue 애플리케이션에서 전역적으로 사용할 수 있도록 설정
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
