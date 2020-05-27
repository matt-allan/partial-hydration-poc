import { Fragment, h } from 'preact';

import { dehydrate } from '../waterboy.js';

export const WithHydration = (Component) => (props) => {
  const hydrationID = dehydrate(Component, props);

  return h(Fragment, null, [
    h('script', {
      type: 'application/hydration-marker',
      'data-hydration-id': hydrationID,
    }),
    h(Component, props),
  ]);
}