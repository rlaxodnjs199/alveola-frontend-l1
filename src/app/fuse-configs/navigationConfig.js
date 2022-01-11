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
        id: 'CTscanManager-component',
        title: 'CTscanManager',
        translate: 'CTSCANMANAGER',
        type: 'item',
        icon: 'biotech',
        url: 'CTscan-manager',
      },
      {
        id: 'reports-component',
        title: 'Reports',
        Translate: 'REPORTS',
        type: 'collapse',
        icon: 'storage',
        children: [
          {
            id: 'example-reports',
            title: 'Example',
            type: 'item',
            icon: 'wysiwyg',
            url: 'reports/example',
          },
        ],
      },
    ],
  },
];

export default navigationConfig;
