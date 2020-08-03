const updateJsonFile = require('update-json-file');

module.exports.resetTasks = () => {

  const filename = './trelloapp/public/data/data.json';

  updateJsonFile(filename, (data) => { 

    data.tasks = []; 
    
    return data;
    
  });

  return null;

};