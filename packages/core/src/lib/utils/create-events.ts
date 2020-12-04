type Events<T> = {
  length: number;
  push: (fn: T) => () => void;
  call: (arg: any) => void;
};

export const createEvents = <T extends Function>(): Events<T> => {
  let handlers: T[] = [];

  return {
    get length() {
      return handlers.length;
    },
    push(fn: T) {
      fn();
      handlers.push(fn);

      return () => {
        handlers = handlers.filter(handler => handler !== fn);
      };
    },
    call(arg) {
      handlers.forEach(fn => fn && fn(arg));
    }
  };
}