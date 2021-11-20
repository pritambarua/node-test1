const fs = require('fs');

const main = (path) => {
    return new Promise((resolve, reject) => {
    if(fs.lstatSync(path).isDirectory()){
        reject(new Error('Path is a Directory'));
    }

      fs.readFile(path, (err, data) =>{
            if(!err)
            {
                try{
                    let js = JSON.parse(data);
                    resolve(js);
                } catch(e){
                    reject(new Error('JSON Invalid'))
                }
            } else {
                reject(new Error('File Does not exist'));
            }
        });
});
};



module.exports = main;
