import { HtmlTemplate } from 'lib';
import headerTemplate from './template.html';
import { TApplication } from './types';

type THeaderTemplate = {
  applications: TApplication[]
}

export class HeaderTemplate extends HtmlTemplate<THeaderTemplate, THeaderTemplate> {
  state = { applications: [] }
  template = headerTemplate;

  onAppMount() {
    const { applications } = this.props;
    const onlyHeader = applications.filter(app => Boolean(app.isNavVisible));
    this.setState({ applications: onlyHeader });
  }
}

