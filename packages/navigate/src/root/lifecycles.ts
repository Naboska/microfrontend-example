import singleSpaHtml from "single-spa-html";

import * as tpl from 'templates';
import { htmlRunner } from './utils';

const templates = Object.entries(tpl).map(([, Template]) => Template)
const { appMount, appDestroy } = htmlRunner(templates);

const lifecycles = singleSpaHtml({
  template: appMount,
})

export const { bootstrap, mount } = lifecycles;

export const unmount = (...args: any[]) => {
  appDestroy();
  return lifecycles.unmount(...args);
}