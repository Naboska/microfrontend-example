import { el } from 'lib';

type TAppProps = {
  domElement: Element;
};

export const bootstrap = () => Promise.resolve();

const CreateKek = () => {
  console.log(this);
  return el('span', null, 'kek');
};

export const mount = async ({ domElement }: TAppProps) => {
  domElement.appendChild(
    el(
      'div',
      {
        click: (event: MouseEvent) => {
          console.log(event);
        },
      },
      CreateKek()
    )
  );
};

export const unmount = async ({ domElement }: TAppProps) => {
  domElement.childNodes.forEach(el => domElement.removeChild(el));
};
