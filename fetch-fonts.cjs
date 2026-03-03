const fs = require('fs');
fetch('https://www.studiodado.com')
  .then(res => res.text())
  .then(html => {
     // Find inline font usages
     const fonts = html.match(/font-family:([^;\"']+)/g) || [];
     
     // Find CSS files
     const cssFiles = html.match(/href=[\"'](https?:\/\/[^\"']+\.css[^\"']*)[\"']/gi) || [];
     
     console.log("Inline fonts:", [...new Set(fonts)]);
     console.log("CSS Files:", cssFiles);
  });