export default [
  {
    path: '/',
    name: 'home',
    component: require('components/HomePageView'),
  },
  {
    path: '/settings',
    name: 'home',
    component: require('components/SettingsPageView'),
  },
  {
    path: '*',
    redirect: '/',
  },
];
