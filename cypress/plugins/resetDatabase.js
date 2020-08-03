const updateJsonFile = require('update-json-file');

module.exports.resetDatabase = () => {

  const filename = './trelloapp/public/data/data.json';

  updateJsonFile(filename, (data) => { 

    data.boards = []; 
    data.lists = []; 
    data.tasks = []; 
    data.users = []; 
    
    return data;
  });

  return null;

};