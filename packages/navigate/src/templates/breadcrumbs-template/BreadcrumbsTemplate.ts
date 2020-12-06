import { HtmlTemplate } from 'lib';
import breadcrumbsTemplate from './template.html';

export class BreadcrumbsTemplate extends HtmlTemplate<{ history: any }> {
  state = { history: [] }
  template = breadcrumbsTemplate;

  unSubscribe: () => void;

  onAppMount() {
    const { history } = this.props;
    const subscribe = (history: any) => {
      this.setState({history});
    };

    this.unSubscribe = history.subscribe(subscribe)
  }

  onAppDestroy() {
    if (this.unSubscribe) this.unSubscribe();
  }
}

