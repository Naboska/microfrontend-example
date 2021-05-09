import { start } from "single-spa";

import { createBrowserHistory, createLocale, registerModule, theme } from 'lib';
import { applications } from './applications';

export const root = async () => {
  try {
    const locale = createLocale('ru');
    const history = createBrowserHistory();

    const props = { applications, theme, locale, history };

    for (const config of applications) registerModule(config, props);

    start();
  } catch ({ message }) {
    console.log(message);
  }
};