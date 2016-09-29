export default [
  {
    path: '/',
    name: 'home',
    component: require('components/HomePageView'),
  },
  {
    path: '/setting/:setting',
    name: 'setting',
    component: require('components/SettingPageView'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: require('components/SettingsPageView'),
  },
  {
    path: '*',
    redirect: '/',
  },
];
