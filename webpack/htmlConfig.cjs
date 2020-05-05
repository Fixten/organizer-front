module.exports = {
  inject: false,
  template: require('html-webpack-template'),
  title: 'Organizer',
  meta: [{ name: 'theme-color', content: '#fff' }],
  appMountIds: ['root', 'modal', 'notification', 'spinner'],
  links: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    }
  ],
  mobile: true
}
