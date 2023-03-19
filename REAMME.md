1. Инструкция по настройке с сборщиком модулей webpack https://webpack.js.org/guides/getting-started/
2. создаем репозиторий
3. создаем package.json в терминале прописываем команду npm init
4. добавляем два пакета прописываем в терминале (webpack-cli -набор команд для работы из терминала с webpack)- npm install webpack webpack-cli --save-dev
5. создаем в корне файл index.html, папку src. В папке src создаем файл index.js(этот index.js будет нашей точкой входа в наше приложение, а index.html будет наш главный html файл).
6. В корне проекта создаем файл webpack.config.js . Здесь в виде объекта будем описывать настройки для webpack.
7. В webpack.config.js прописываем объект с таким названием module.exports = { } .В этот объект будем добавлять всякие плюшки интересные.
8. В этот объект помещаем точку входа и точку выхода
   module.exports = {entry: './src/index.js',
   output: {
   filename: 'my-bundle.js',
   path: path.resolve(\_\_dirname, 'build'),
   }, }
   , где в path передаем имя папки ('build'), в которой нужно выкинуть,
   а в filename- придумываем имя нашего бандла(там, где все дерево зависимости будет собрано в этот наш общий файл)
9. В webpack.config.js в самом верху добавляем встроенный модуль в Node.js(встроенная библиотека для работы с путями в файловой системе)
   const path = require('path');
10. В package.json в свойство "scripts" прописываем команду "build": "webpack":
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
    }
11. В терминале запускаем команду npm run build . В результате в проекте создается папка build, а в ней файл my-bundle.js.
12.
