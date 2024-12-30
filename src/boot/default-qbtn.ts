import { boot } from 'quasar/wrappers';

export default boot(({ app }) => {
  app.config.globalProperties.$q.btnDefaults = {
    color: 'primary',
    unelevated: true,
    rounded: true,
    size: 'md',
  };
});
