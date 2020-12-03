import {createEvents} from "./create-events";

type THistory = {
  pathname: string
  search: string
  hash: string
}

type THistoryEvent = (location: THistory[]) => void;

const getLocation = (): THistory => {
  const {pathname, search, hash} = window.location;
  return {pathname, search, hash}
}

export const createHistory = () => {
  let context: THistory[] = [getLocation()];

  const listener = createEvents<THistoryEvent>();

  window.onpopstate = () => {
    context.push(getLocation());
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