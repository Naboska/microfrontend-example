import {v4 as uuid} from 'uuid';
import t7 from 'template7';

type TSetStateFn<State> = (state: State) => State;

type TMethods = {
  [key: string]: {
    type: string,
    event: (event: any, args?: string) => void
  }
}

export interface IHtmlTemplate {
  onAppMount?(): void;

  onAppDestroy?(): void;

  render(): string;
}

const calledFn = (called: Function | any, value: any) => typeof called === 'function'
  ? called(value)
  : ({...value, ...called});

const METHODS = '[data-\\$method]';

export class HtmlTemplate<Props extends {} = {}, State extends {} = {}> implements IHtmlTemplate {
  private compile: (arg: { props: Props; state: State }) => string;
  private rootID: string;
  private saveMethods: EventListenerObject['handleEvent'][] = [];

  protected readonly props: Props = {} as any;
  protected state: State = {} as any;
  protected template: string;
  protected methods: TMethods;

  constructor(props?: Props) {
    this.props = props;

    this.render = this.render.bind(this);
    this.setState = this.setState.bind(this);
  }

  protected getRoot(): HTMLElement {
    return document.getElementById(this.rootID)
  }

  protected setState(setStateOrState: TSetStateFn<State> | Partial<State>): void {
    this.state = calledFn(setStateOrState, this.state);
    this.render();
  }

  private getCompile(): string {
    return this.compile({props: this.props, state: this.state});
  }

  private compileTemplate() {
    this.rootID = uuid();
    this.compile = t7.compile(this.template);
  }

  private compileMethods() {
    const methods = this.methods;
    const root = this.getRoot();

    if (methods) {
      const methodsEl = root.querySelectorAll<HTMLElement>(METHODS);
      methodsEl.forEach((item, index) => {
        const {$args, $method} = item.dataset;
        const method = methods[$method];

        if (method) {
          const currentMethod = this.saveMethods[index];
          if (!currentMethod) {
            this.saveMethods[index] = (evt: Event) => method.event(evt, $args);
            item.addEventListener(method.type, this.saveMethods[index]);
          }
        }
      });
    }
  }

  public render(): string {
    if (!this.compile) {
      this.compileTemplate();
      setTimeout(this.compileMethods.bind(this));

      return `<div id=${this.rootID}>${this.getCompile()}</div>`;
    } else {
      const root = this.getRoot();
      root.innerHTML = this.getCompile();
      this.compileMethods();
    }
  }
}