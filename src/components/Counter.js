import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';

export const Counter = ({ initial }) => {
  const [value, setValue] = useState(initial);

  return h(Fragment, null, [
    h('div', null, `Counter: ${value}`),
    h('button', { onClick: () => setValue(value + 1) }, 'Increment'),
    h('button', { onClick: () => setValue(value - 1) }, 'Decrement'),
  ]);
};