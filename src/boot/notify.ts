import { defineBoot } from '#q-app/wrappers';
import { Notify } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(() => {
  Notify.setDefaults({
    position: 'bottom',
    timeout: 2500,
    textColor: 'white',
  });
});
