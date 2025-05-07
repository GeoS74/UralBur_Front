const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');
const htmlMinifier = require('html-minifier');
const readFrom = '../src';

const minifyOptions = {
  collapseWhitespace: true, // пробелы
  removeComments: true // комментарии
};

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

          try {
            fs.readdirSync(parse.dir);
          }
          catch (e) {
            fs.mkdirSync(parse.dir, { recursive: true });
          }

          if (parse.ext == '.jsx') {
            childProcess.execSync(`npx babel --presets minify --presets @babel/preset-react ${pathToFile} -o ${path.join(parse.dir, parse.name + '.js')}`);
          }
          else if(parse.ext == '.html' || parse.ext == '.css'){
            const html = fs.readFileSync(pathToFile, 'utf-8');
            const m = htmlMinifier.minify(html, minifyOptions);
            fs.writeFileSync(path.join(parse.dir, parse.base), m, {flag: 'w'});
          }
          else {
            fs.copyFileSync(pathToFile, fname);
          }
        }


      });
    }
  });
}

listObjects(path.join(__dirname, readFrom, process.argv[2] || ''));