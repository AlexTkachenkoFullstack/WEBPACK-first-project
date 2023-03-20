1. Инструкция по настройке с сборщиком модулей webpack https://webpack.js.org/guides/getting-started/
2. создаем репозиторий
3. создаем package.json в терминале прописываем команду npm init
4. добавляем два пакета прописываем в терминале (webpack-cli -набор команд для работы из терминала с webpack)- npm install webpack webpack-cli --save-dev
5. создаем в корне файл index.html, папку src. В папке src создаем файл index.js(этот index.js будет нашей точкой входа в наше приложение, а index.html будет наш главный html файл).
6. В корне проекта создаем файл webpack.config.js . Здесь в виде объекта будем описывать настройки для webpack.
7. В webpack.config.js прописываем объект с таким названием module.exports = { } .В этот объект будем добавлять всякие плюшки интересные.
8. В этот объект помещаем точку входа и точку выхода
   module.exports = {

   entry: './src/index.js',
   output: {
   path: path.resolve(\_\_dirname, 'build'),
   filename: 'my-bundle.js',
   }, }
   , где в path передаем имя папки ('build'), в которой нужно выкинуть,
   а в filename- придумываем имя нашего бандла(там, где все дерево зависимости будет собрано в этот наш общий файл)

9. В webpack.config.js в самом верху добавляем встроенный модуль в Node.js(встроенная библиотека для работы с путями в файловой системе)
   const path = require('path');
10. В package.json в свойство "scripts" прописываем команд разработчиков (https://webpack.js.org/configuration/mode/#mode-development):
    "scripts": {
    "dev":"webpack --mode=development",
    "prod":"webpack --mode=production"
    }
11. В терминале в зависимости от потребности запускаем команду npm run dev или npm run prod. В результате в проекте создается папка build, а в ней файл my-bundle.js.
12. Добавляем пакет webpack-dev-server с ссылки https://webpack.js.org/configuration/dev-server/ - прописываем в терминале
13. В package.json в свойстве scripts заменим значение dev(https://github.com/webpack/webpack-dev-server#with-npm-scripts)
    "dev": "webpack serve --mode=development"
    и добавим "start": "webpack --mode=development",
    Тоесть мы не webpack будем вызывать, а webpack serve, который под капотом вызывает webpack + еще поднимает веб-сервер для разработки.
14. Можем изменить порт (https://webpack.js.org/configuration/dev-server/#devserver). Для этого в webpack.config.js добавляем в объект module.exports добавляем свойство
    devServer: {
    port: 9000,
    },
    , где devServer - это аналог LiveServer. Открывает страничку в браузере.
15. Для того, чтоб внести изменения нажимаем Crtr+C (перезагружаем) и прописываем снова команду npm run dev
16. Добавляем загрузчики Loaders(https://webpack.js.org/concepts/loaders). Для этого в webpack.config.js в module.exports добавляем:
    module: {
    rules: [
    { test: /\.css$/, use: 'css-loader' },
    { test: /\.ts$/, use: 'ts-loader' },
    ],
    },
    , где module - это объект, а в этом объекте в свойстве rules находится массив правил, в котором каждый объект будет описывать отдельный тип загрузчиков(один для CSS, другой для JS и т.д.)
17. Устанавливаем загрузчик для CSS npm install --save-dev css-loader (https://webpack.js.org/loaders/css-loader#getting-started) и в конфигурацию webpack.config.js добавляем
    {
    test: /\.css$/i,
    use: ["style-loader","css-loader"],
    },
    , где в test находятся регулярные выражения (ищет все файлы, которые заканчиваются на .css)
    А в use находится массив загрухчиков, которые будут обрабатывать эти файлы (эти загрузчики находятся в packsge.json в свойстве devDependencies). Для этого устанавливаем загрузчик npm install --save-dev style-loader (https://webpack.js.org/loaders/style-loader/#getting-started)
18. C сайта Babel https://babeljs.io/setup#installation копируем ссылку npm install --save-dev babel-loader @babel/core и запускаем через терминал и добавляем в webpack.config.js в массив rules этот объект
    {test: /\.m?js$/,
    exclude: /node_modules/,
    use: ["babel-loader"]
    }
    ,где в exclude указываем папке, которую не нужно включать в разработку;
    в test указываем, что за файлы(на какое окончание файлы);
    в use указываем массив загрузчика, которые вызываются с конца.
19. создаем в корне проекта файл babel.config.json и добавляем в него {
    "presets": ["@babel/preset-env"]
    }. И запускаем в терминале npm install @babel/preset-env --save-dev

20. В разделе LOADERS находится много загрузчиков, которые мы можем добавить.
21. В конце можем применять плагины. Плагины применяются на весь файл, а не на его отдельные файлы(например, на весь CSS, или на весь бандер JS).
22. a. Например, HtmlWebpackPlugin позволяет использовать HTML и автоматически туда подставить CSS, JS.
    Для этого в терминале запкскаем npm install --save-dev html-webpack-plugin (ссылка - https://webpack.js.org/plugins/html-webpack-plugin/).
    b.В webpack.config.js импортируем(прописыем) const HtmlWebpackPlugin = require('html-webpack-plugin'); Это как class. А чуть ниже в объект module.exports копируем plugins: [new HtmlWebpackPlugin()], тоесть первый элемент массива plugins - это результат вызова конструктора HtmlWebpackPlugin(). Запускаем npm start. В результате в папке build появился файд html, в котором bundle.js уже подключен.
    c.https://github.com/jantimon/html-webpack-plugin#options здесь есть опции для плагина.
    d. Выбираем опцию template (шаблон). До этого наш файл index.html с корня проекта перетаскиваем в папке src.
    e. В webpack.config.js в конструктор массива plugins добавляем объект настроек настроек добавляем plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})]
    , где template - опция плагина, которая создаем шаблон;
    'src/index.html' - путь к нашему файлу.  
    Запускаем npm start. В результате в наш результирующий HTML файл добавляется скрипт <script src='bundle.js'></script>
    f. Теперь можем запустить команду npm run build и наши стили, разметка будет отображаться на живой страничке.
23. a. Устанавливаем плагин MiniCssExtractPlugin (https://webpack.js.org/plugins/mini-css-extract-plugin/) - этот плагин позволяет вытянуть весь css в отдельный css файл.
    Для этого в терминале прописываем и запускаем npm install --save-dev mini-css-extract-plugin
    b. В webpack.config.js добавляем (импортим) const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    с. Добавляем MiniCssExtractPlugin.loader в webpack.config.js --> module: --> rules -->use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
    d. Добавляем конструктор new MiniCssExtractPlugin() в массив plugins: [new HtmlWebpackPlugin({template: 'src/index.html'}), new MiniCssExtractPlugin()]
    e. Запускаем npm start. В папке build создается файл main.css и ссылка на этот файл добавляется в head файла index.html
24. В index.js импортируются все файлы через слово import, которіе мы создаем в проекте import './css/name.css'; Но webpack эти все файлы будет сшивать все в один главный main.css, который находится в папке build
