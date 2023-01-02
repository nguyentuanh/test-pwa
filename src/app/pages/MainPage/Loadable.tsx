/**
 * Asynchronously loads the component for MainPage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const MainPage = lazyLoad(
  () => import('./index'),
  module => module.MainPage,
  {
    fallback: <LoadingIndicator />,
  },
);
