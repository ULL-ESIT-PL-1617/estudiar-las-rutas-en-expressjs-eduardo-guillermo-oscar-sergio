
var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '/../txt'), {
    branch: 'master',
    repo: "https://git.gitbook.com/alu0100881677/estudiar-las-rutas-en-express.git"
  }, function(err) {
     console.log(err);
});
