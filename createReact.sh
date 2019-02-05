echo -n "Project Name:"
read projectName
mkdir $projectName
cd $projectName

npm init -y
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin clean-webpack-plugin
npm install --save react react-dom @babel/polyfill
npm install --save-dev babel-cli babel-loader @babel/core @babel/preset-env @babel/preset-react style-loader css-loader


gsed -i '/scripts/a\'\
'    "build": "webpack",\n'\
'    "start": "webpack-dev-server --open",\n'\
'    "watch": "webpack --watch",'\
 package.json

mkdir src
mkdir build
mkdir public

cp ../template/webpack.config.js ./
cp ../template/index.js ./src/
cp ../template/index.html ./public/

npm run start


