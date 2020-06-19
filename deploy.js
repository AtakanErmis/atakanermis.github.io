const ghpages = require('gh-pages');

ghpages.publish('public', (err) => {
    if (err) throw err
    console.log("Deployment to gh-pages success.")
})