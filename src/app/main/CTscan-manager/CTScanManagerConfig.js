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
      path: 'CTscan-manager',
      element: <CTScanManager />,
    },
  ],
};

export default CTScanManagerConfig;
