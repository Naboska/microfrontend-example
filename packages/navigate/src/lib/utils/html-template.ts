import {v4 as uuid} from 'uuid';
import t7 from 'template7';

type TSetStateFn<State> = (state: State) => State;

export interface IHtmlTemplate {
  onAppMount?(): void;
  onAppDestroy?(): void;
  render(): string;
}

const calledFn = (called: Function | any, value: any) => typeof called === 'function'
  ? called(value)
  : ({...value, ...called});

export class HtmlTemplate<Props extends {} = {}, State extends {} = {}> implements IHtmlTemplate {
  private compile: (arg: { props: Props; state: State }) => string;
  private rootID: string;

  protected readonly props: Props = {} as any;
  protected state: State = {} as any;
  protected template: string;

  constructor(props?: Props) {
    this.props = props;

    this.render = this.render.bind(this);
    this.setState = this.setState.bind(this);
  }

  protected setState(setStateOrState: TSetStateFn<State> | State): void {
    this.state = calledFn(setStateOrState, this.state);
    this.render();
  }

  private getCompile(): string {
    return this.compile({ props: this.props, state: this.state });
  }

  private compileTemplate() {
    this.rootID = uuid();
    this.compile = t7.compile(this.template);
  }

  public render(): string {
    if (!this.compile) {
      this.compileTemplate();
      return `<div id=${this.rootID}>${this.getCompile()}</div>`;
    }

    const rootElement = document.getElementById(this.rootID);
    return rootElement.innerHTML = this.getCompile();
  }
}