import singleSpaSvelte from "single-spa-svelte";

import Root from "./Root.svelte";

const svelteLifecycles = singleSpaSvelte({
  component: Root,
});

export const { bootstrap, mount, unmount } = svelteLifecycles;
