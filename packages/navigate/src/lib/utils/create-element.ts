type TTag = keyof HTMLElementTagNameMap;

type TEventHandler = (event: any) => unknown;

type TEvent = Record<keyof HTMLElementEventMap, TEventHandler>;

export const unsubscribe: ((...args: any) => void)[] = [];

export const el = (tag: TTag, events?: Partial<TEvent> | null, child?: Element | string) => {
  const render = () => {
    const el = document.createElement(tag);

    if (events)
      Object.entries(events).forEach(([key, event]) => {
        if (event) {
          el.addEventListener(key, event);
          unsubscribe.push(() => el.removeEventListener(key, event));
        }
      });

    if (child) {
      if ('string' === typeof child) el.innerText = child;
      else el.appendChild(child);
    }

    return el;
  };

  return render();
};
