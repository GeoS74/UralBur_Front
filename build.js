const childProcess = require('child_process');

childProcess.execSync('npx babel --presets @babel/preset-react ./src/component.jsx -o ./build/component.js');
childProcess.execSync('npx babel --presets @babel/preset-react ./src/menu.jsx -o ./build/menu.js');