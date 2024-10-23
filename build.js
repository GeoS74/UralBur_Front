const childProcess = require('child_process');

childProcess.execSync('npx babel --presets @babel/preset-react ./src/header/header.jsx -o ./build/js/components/header.js');
childProcess.execSync('npx babel --presets @babel/preset-react ./src/slider/slider.jsx -o ./build/js/components/slider.js');

// const childProcess = require('child_process');
// const fs = require('fs');
// const path = require('path');
// const readFrom = './src';

// function listObjects(dir) {
//   fs.readdir(dir, (err, files) => {
//     if (err) throw err;

//     for (let file of files) {
//       const pathToFile = path.join(__dirname, dir, file);

//       fs.stat(pathToFile, (errStat, status) => {
//         if (errStat) throw errStat;

//         if (status.isDirectory()) {
//           listObjects(`${dir}/${file}`);
//         } else {

//           const fname = pathToFile.replace('src', 'build');
//           const parse = path.parse(fname);

//           if (parse.ext == '.jsx') {
//             childProcess.execSync(`npx babel --presets @babel/preset-react ${pathToFile} -o ${path.join(parse.dir, parse.name + '.js')}`);
//           }
//           else {

//             try {
//               fs.readdirSync(parse.dir);
//             }
//             catch (e) {
//               fs.mkdirSync(parse.dir, { recursive: true });
//             }

//             fs.copyFileSync(pathToFile, fname);
//           }
//         }
//       });
//     }
//   });
// }

// listObjects(readFrom);