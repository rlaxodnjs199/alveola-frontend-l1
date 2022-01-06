import { lazy } from 'react';

const FileManager = lazy(() => import('./FileManager'));

const FileManagerConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'file-manager',
      element: <FileManager />,
    },
  ],
};

export default FileManagerConfig;
