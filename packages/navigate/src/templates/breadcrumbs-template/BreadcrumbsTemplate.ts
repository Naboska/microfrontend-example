import { HtmlTemplate } from 'lib';

import breadcrumbsTemplate from './template.html';
import './style.css';

type TProps = {
  history: any
}

type TState = {
  history: any[];
  offsetLeft: number;
}

export class BreadcrumbsTemplate extends HtmlTemplate<TProps, TState> {
  state = { history: [], offsetLeft: -500 }
  template = breadcrumbsTemplate;

  historyUnListen: () => void;

  onAppMount() {
    const { history } = this.props;

    const subscriber = (history: any) => {
      this.setState({history});
    };

    window.addEventListener('keydown', this.onCheckClick);

    this.historyUnListen = history.subscribe(subscriber);
  }

  onAppDestroy() {
    if (this.historyUnListen) this.historyUnListen();

    window.removeEventListener('keydown', this.onCheckClick);
  }

  onCheckClick = (event: KeyboardEvent) => {
    if (event.key === 'Escape') this.setState(prev => ({
      ...prev,
      offsetLeft: prev.offsetLeft === -500 ? 0 : -500
    }))
  }
}

