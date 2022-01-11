import i18next from 'i18next';
import Dashboard from './Dashboard';
import en from './i18n/en';
import kr from './i18n/kr';

i18next.addResourceBundle('en', 'dashboardPage', en);
i18next.addResourceBundle('kr', 'dashboardPage', kr);

const DashboardConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboard/excels',
      element: <Dashboard />,
    },
  ],
};

export default DashboardConfig;

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
