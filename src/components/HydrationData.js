import { h } from 'preact';

import { flush } from '../waterboy.js';

export const HydrationData = () => h('script', {
  type: 'application/hydration-data',
  dangerouslySetInnerHTML: { __html: flush() }
});