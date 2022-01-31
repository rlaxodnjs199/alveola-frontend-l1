import { lazy } from 'react';

const CTScanManager = lazy(() => import('./CTScanManager'));

const CTScanManagerConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'scan-manager',
      element: <CTScanManager />,
    },
  ],
};

export default CTScanManagerConfig;
