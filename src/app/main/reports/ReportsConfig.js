import Reports from './Reports';

const ReportsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'reports/example',
      element: <Reports />,
    },
  ],
};

export default ReportsConfig;
