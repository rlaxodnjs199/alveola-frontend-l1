import CTScanUploader from './CTScanUploader';

const CTScanUploaderConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'scan-uploader',
      element: <CTScanUploader />,
    },
  ],
};

export default CTScanUploaderConfig;
