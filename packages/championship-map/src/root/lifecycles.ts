import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import Root from './Root.vue';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      const component: any = Root;

      const path: string = this.path;
      const theme: any = this.theme;
      const setAppStyle: any = this.setAppStyle;

      return h(component, {
        path,
        theme,
        setAppStyle,
      });
    },
  },
});
export const { bootstrap, mount, unmount } = vueLifecycles;
