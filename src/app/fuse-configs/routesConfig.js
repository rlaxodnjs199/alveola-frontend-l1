import { Navigate } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import DashboardConfig from 'app/main/dashboard/DashboardConfig';
import CTScanManagerConfig from 'app/main/CTscan-manager/CTScanManagerConfig';
import FuseLoading from '@fuse/core/FuseLoading';
import Error404Page from 'app/main/404/Error404Page';
import ReportsConfig from 'app/main/reports/ReportsConfig';
import CTScanUploaderConfig from 'app/main/CTscan-uploader/CTScanUploaderConfig';

const routeConfigs = [
  DashboardConfig,
  CTScanManagerConfig,
  ReportsConfig,
  CTScanUploaderConfig,
];

const routes = [
  // if you want to make whole app auth protected by default change defaultAuth for example:
  // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
  // The individual route configs which has auth option won't be overridden.
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
  {
    path: '/',
    element: <Navigate to="dashboard/total" />,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '404',
    element: <Error404Page />,
  },
  {
    path: '*',
    element: <Navigate to="404" />,
  },
];

export default routes;
