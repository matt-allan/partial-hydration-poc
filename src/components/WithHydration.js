import { Fragment, h } from 'preact';

export const WithHydration = (Component) => (props) => h(Fragment, null, [
  h('script', {
    type: 'application/hydration-marker',
    'data-name': Component.displayName || Component.name,
    dangerouslySetInnerHTML: { __html: JSON.stringify(props) }
  }),
  h(Component, props),
]);
