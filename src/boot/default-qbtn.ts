import { App } from 'vue';
import { QBtn } from 'quasar';
import { boot } from 'quasar/wrappers';

export default boot(({ app }: { app: App }) => {
  app.component('QBtn', {
    extends: QBtn,
    props: {
      flat: {
        type: Boolean,
        default: true, // 기본값을 설정
      },
      dense: {
        type: Boolean,
        default: true, // 기본값을 설정
      },
    },
  });
});
