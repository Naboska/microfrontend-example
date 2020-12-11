import { HtmlTemplate } from 'lib';
import { TApplication } from './types';

import headerTemplate from './template.html';
import './styles.css';

type THeaderTemplateState = {
  applications: TApplication[];
}

type THeaderTemplateProps = {
  applications: TApplication[];
  history: {
    push: (path: string) => void;
    context: any[];
  }
}

export class HeaderTemplate extends HtmlTemplate<THeaderTemplateProps, THeaderTemplateState> {
  state = { applications: [] }
  template = headerTemplate;
  methods = {
    navigate: {
      type: 'click',
      event: (event: MouseEvent, path: string) => {
        const { history } = this.props;
        const context = history.context;
        const current = context[context.length - 1];

        if (current.pathname !== path)
          history.push(path === '/' ? path : `/${path}`);
      }
    }
  }

  onAppMount() {
    const { applications } = this.props;
    const onlyHeader = applications.filter(app => Boolean(app.isNavVisible));
    this.setState({ applications: onlyHeader });
  }
}

