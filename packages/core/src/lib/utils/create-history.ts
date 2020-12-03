import {createEvents} from "./create-events";

type THistoryEvent = (location: Location[]) => void;

export const createHistory = () => {
  let context: Location[] = [window.location];

  const listener = createEvents<THistoryEvent>();

  window.onpopstate = () => {
    context.push(window.location);
    listener.call(context)
  }

  return {
    subscribe(fn: THistoryEvent) {
      const subscriber = () => fn(context)
      return listener.push(subscriber)
    },
    context
  }
}