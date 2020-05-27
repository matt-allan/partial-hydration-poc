import { h, render } from 'preact';

let hydrationCounter = 0;

let data = {};

export const dehydrate = (Component, props) => {
  let id = ++hydrationCounter;

  data[id] = props;

  return id;
};

export const flush = () => {
  const serializedData = JSON.stringify(data);

  hydrationCounter = 0;
  data = {}; 

  return serializedData;
}

const markers = () => Array.from(
  document.querySelectorAll('script[type=\'application/hydration-marker\']')
);

export const hydrate = (components) => {
  for (const marker of markers()) {
    // get the component and props

    // render it
    render(
      h(Component, props),
      parent,
      el,
    );
  }
};