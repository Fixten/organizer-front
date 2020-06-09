module.exports = {
  // scriptLoading: 'defer',
  meta: [
    { charset: 'utf-8' },
    { name: 'theme-color', content: '#fff' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  minify: false,
  xhtml: true,
  inject: false,
  templateContent: ({ htmlWebpackPlugin }) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Organizer</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        ${htmlWebpackPlugin.tags.headTags}
      </head>
      <body>
        <div id='root'></div>
        ${htmlWebpackPlugin.tags.bodyTags}
      </body>
    </html>
  `,
};
