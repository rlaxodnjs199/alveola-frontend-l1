import i18next from 'i18next';
import Example from './Example';
import en from './i18n/en';
import kr from './i18n/kr';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('kr', 'examplePage', kr);

const ExampleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'example',
      element: <Example />,
    },
  ],
};

export default ExampleConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';
const Example = React.lazy(() => import('./Example'));

const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : 'example',
            element: <Example/>
        }
    ]
};

export default ExampleConfig;

*/
