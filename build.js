const childProcess = require('child_process');

childProcess.execSync('npx babel --presets @babel/preset-react ./src/header/header.jsx -o ./build/js/components/header.js');
childProcess.execSync('npx babel --presets @babel/preset-react ./src/slider/slider.jsx -o ./build/js/components/slider.js');