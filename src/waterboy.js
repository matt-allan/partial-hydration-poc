import { h, render } from 'preact';

export const dehydrate = (Component, props) => {
  return JSON.stringify(props);
};

const markers = () => Array.from(
  document.querySelectorAll('script[type=\'application/hydration-marker\']')
);

export const hydrate = (components) => {
  for (const marker of markers()) {

    const name = marker.getAttribute('data-name');
    // todo: make this work w/ fragments
    const el = marker.nextElementSibling;
    const parent = el.parentElement;
    const props = JSON.parse(marker.innerHTML)

    const Component = components.find(
      (el) => el.displayName === name || el.name === name
    );

    console.log(name, parent, el, props, Component);

    render(
      h(Component, props),
      parent,
      el,
    );
  }
};