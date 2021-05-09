import {createEvents} from "./create-events";

type TLocale = 'ru' | 'en';

type TLocaleEvent = (locale: TLocale) => void;

export const createLocale = (initial: TLocale) => {
  const listener = createEvents<TLocaleEvent>();

  const validLocale: TLocale[] = ['ru', 'en'];
  let locale: TLocale = initial ?? validLocale[0];

  return {
    get current() {
      return locale;
    },
    change(next: TLocale) {
      if (validLocale.includes(next)) {
        locale = next;
        listener.call(next);
      } else throw new Error(`Valid locale: ${validLocale.join(', ')}`);
    },
    subscribe(subscriber: TLocaleEvent) {
      subscriber(locale);
      return listener.push(subscriber);
    }
  }
}