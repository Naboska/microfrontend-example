import { createEvents } from './create-events';

type THistory = {
  pathname: string;
  search: string;
  hash: string;
  href: string;
};

type THistoryEvent = (location: THistory[]) => void;

const getLocation = (): THistory => {
  const { pathname, search, hash, href } = window.location;
  return { pathname, search, hash, href };
};

const equalLocation = (current: THistory, check?: THistory) => {
  if (!check) return false;

  return (
    check.pathname === current.pathname &&
    check.search === current.search &&
    check.hash === current.hash
  );
};

export const createBrowserHistory = () => {
  let context: THistory[] = [getLocation()];

  const listener = createEvents<THistoryEvent>();

  window.addEventListener('popstate', () => {
    const currentLocation = getLocation();
    const { pathname, hash, search } = currentLocation;

    const prev = context[context.length - 2];
    const isCurrentPath =
      pathname === prev?.pathname && (hash === prev?.hash || search === prev?.search);
    const isPrevPage = equalLocation(currentLocation, prev);
    const isNeedReplace = isCurrentPath || isPrevPage;
    const sliceOn = isPrevPage ? -2 : -1;

    context = [...(isNeedReplace ? context.slice(0, sliceOn) : context), currentLocation];

    listener.call(context);
  });

  return {
    get context() {
      return context;
    },
    get current() {
      return context[context.length - 1] ?? null;
    },
    get prev() {
      return context[context.length - 2] ?? null;
    },
    get length() {
      return context.length;
    },
    subscribe(subscriber: THistoryEvent) {
      subscriber(context);
      return listener.push(subscriber);
    },
    replace(path: string) {
      history.replaceState({}, path, path);
    },
    push(path: string) {
      history.pushState({}, path, path);
    },
    back() {
      const lastPath = context[context.length - 2];
      return lastPath ? history.pushState({}, 'back page', lastPath.pathname) : null;
    },
  };
};
