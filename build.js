const childProcess = require('child_process');

childProcess.execSync('npx babel --presets @babel/preset-react ./src/header/header.jsx -o ./build/js/components/header.js');