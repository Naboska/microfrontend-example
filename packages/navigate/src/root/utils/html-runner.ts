import css from 'css-vars-adapter';

import {IHtmlTemplate} from 'lib';

export const htmlRunner = (tpl: any[]) => {
  let templates: IHtmlTemplate[] = [];

  return {
    appDestroy() {
      templates.forEach(template => template.onAppDestroy && template.onAppDestroy())
    },

    appMount(props: any) {
      templates = tpl.map(Template => new Template(props));
      css.setVariables(props.theme.colors, { replace: false });

      const renderString = templates.map(template => {
        if (template.onAppMount) setTimeout(template.onAppMount.bind(template));

        return template.render();
      })

      return renderString.join('');
    }
  }
}