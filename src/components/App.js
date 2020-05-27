import { Fragment, h } from 'preact';

import { Counter } from './Counter.js';
import { WithHydration } from './WithHydration.js';
import { HydrationData } from './HydrationData.js';

export const App = () => h(Fragment, null, [
  h('h1', null, 'My App'),
  h('p', null, 'A simple preact app. This paragraph is statically rendered. However this counter is not 👇'),
  h(WithHydration(Counter), { initial: 2 }),
  h(HydrationData),
]);
