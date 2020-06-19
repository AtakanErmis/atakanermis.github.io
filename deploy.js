const ghpages = require('gh-pages');

console.log("Starting to deploy into gh-pages.")
ghpages.publish('public', (err) => {
    if (err) throw err
    console.log("Deployment to gh-pages successful.")
})