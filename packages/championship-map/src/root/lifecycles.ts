import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import Root from './Root.vue';

const vueLifecycles = singleSpaVue({
  createApp,
    appOptions: {
      render() {
        return h(Root, {
          path: this.path
        })
      }
    }
  })
;

export const {bootstrap, mount, unmount} = vueLifecycles;
