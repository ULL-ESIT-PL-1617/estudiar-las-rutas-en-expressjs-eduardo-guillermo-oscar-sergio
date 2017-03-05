var CMDDESC = "Deploying on Github Pages";

var repositorio = require('../package.json').repository.url;
var ghpages = require('gh-pages');
ghpages.publish('../gh-pages', {
  repo: repositorio,
  logger: function(m) {
	   console.error(m);
  }
});
