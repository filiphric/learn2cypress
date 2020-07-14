const fs = require('fs');

module.exports.resetDatabase = () => {

  let filename = '../public/data/data.json';
  let content = JSON.stringify({
    'boards': [],
    'tasks': [],
    'users': [],
    'lists': []
  }, null, 2);

  fs.writeFileSync(filename, content);

  return null;

};