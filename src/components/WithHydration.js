import { Fragment, h } from 'preact';

import { dehydrate } from '../waterboy.js';

export const WithHydration = (Component) => (props) => h(Fragment, null, [
  h('script', {
    type: 'application/hydration-marker',
    'data-name': Component.displayName || Component.name,
    dangerouslySetInnerHTML: { __html: dehydrate(Component, props) }
  }),
  h(Component, props),
]);
