import i18next from 'i18next';
import en from './navigation-i18n/en';
import kr from './navigation-i18n/kr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('kr', 'navigation', kr);

const navigationConfig = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'dashboard-component',
        title: 'Dashboard',
        translate: 'DASHBOARD',
        type: 'collapse',
        icon: 'dashboard',
        children: [
          {
            id: 'analytics-dashboard',
            title: 'Analytics',
            type: 'item',
            icon: 'assessment',
            url: 'dashboard/analytics',
          },
          {
            id: 'excel-dashboard',
            title: 'Excels',
            type: 'item',
            icon: 'list_alt',
            url: 'dashboard/excels',
          },
        ],
      },
      {
        id: 'CTscanUploader-component',
        title: 'CTscanUploader',
        translate: 'CTSCANUPLOADER',
        type: 'item',
        icon: 'cloud_upload',
        url: 'scan-uploader',
      },
      {
        id: 'CTscanManager-component',
        title: 'CTscanManager',
        translate: 'CTSCANMANAGER',
        type: 'item',
        icon: 'folder_shared',
        url: 'scan-manager',
      },
      {
        id: 'reports-component',
        title: 'Reports',
        Translate: 'REPORTS',
        type: 'collapse',
        icon: 'library_books',
        children: [
          {
            id: 'example-reports',
            title: 'Example',
            type: 'item',
            icon: 'library_books',
            url: 'reports/example',
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
