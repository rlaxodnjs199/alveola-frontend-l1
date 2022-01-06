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
        type: 'item',
        icon: 'dashboard',
        url: 'dashboard',
      },
      {
        id: 'fileManager-component',
        title: 'FileManager',
        translate: 'FILEMANAGER',
        type: 'item',
        icon: 'folderopen',
        url: 'file-manager',
      },
    ],
  },
];

export default navigationConfig;
