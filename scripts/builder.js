const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');
const readFrom = '../src';

function listObjects(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;
   
    for (let file of files) {
      const pathToFile = path.join(dir, file);

      fs.stat(pathToFile, (errStat, status) => {
        if (errStat) throw errStat;

        if (status.isDirectory()) {
          listObjects(path.join(dir, file));
        } else {

          const fname = pathToFile.replace('src', 'build');
          const parse = path.parse(fname);

          if (parse.ext == '.jsx') {
            childProcess.execSync(`npx babel --presets @babel/preset-react ${pathToFile} -o ${path.join(parse.dir, parse.name + '.js')}`);
          }
          else {

            try {
              fs.readdirSync(parse.dir);
            }
            catch (e) {
              fs.mkdirSync(parse.dir, { recursive: true });
            }

            fs.copyFileSync(pathToFile, fname);
          }
        }
      });
    }
  });
}

listObjects(path.join(__dirname, readFrom));