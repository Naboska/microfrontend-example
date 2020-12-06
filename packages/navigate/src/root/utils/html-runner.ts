import { IHtmlTemplate } from 'lib';

export const htmlRunner = (tpl: any[]) => {
  let templates: IHtmlTemplate[] = [];


  return {
    appDestroy() {
      templates.forEach(template => template?.onAppDestroy())
    },

    appMount(props: any) {
      templates = tpl.map(Template => new Template(props));
      return templates.map(template => {
        if (template.onAppMount) setTimeout(template.onAppMount.bind(template));
        return template.render()
      });
    }
  }
}