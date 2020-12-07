import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import Root from './Root.vue';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h: any) => h(Root)
  },
});

export const { bootstrap, mount, unmount } = vueLifecycles;
