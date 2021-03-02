module.exports = {
  Balls: [
    'introduction',
    {
      type: 'category',
      label: 'User Documentation',
      items: [
        'user-documentation/getting-started',
        'user-documentation/upload-download',
        'user-documentation/track-upload',
        'user-documentation/pss',
        // 'user-documentation/feeds',
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/create-dapp',
      ],
      collapsed: false
    },
    {
      type: 'category',
      label: 'API Reference',
      items: require('./typedoc-sidebar.js'),
      collapsed: true
    }
  ]
};