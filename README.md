# vue-template 项目模板

> [Vue3](https://cn.vuejs.org/guide/introduction.html) + [TypeScript](https://www.typescriptlang.org/zh/docs/) + [Vite](https://cn.vitejs.dev/guide/) + [VueRouter](https://router.vuejs.org/zh/guide/) + [Axios](http://www.axios-js.com/zh-cn/docs/) + [ESLint](https://eslint.nodejs.cn/docs/latest/use/getting-started)

---

## 初始化项目

```JavaScript
    npm init vite@latest // 该模板已执行，省略
    npm install
    npm run dev
```

---

## 项目结构

> public：不需要编译构建的纯静态资源
> **src**：需编译构建的源码目录
> > **api**：接口请求
> > **assets**：静态资源
> > **components**：公共组件
> > **composables**：组合式API
> > **layout**：页面布局模板
> > **plugins**：插件
> > **router**：路由
> > **store**：Vuex存储
> > **styles**：样式
> > **utils**：工具模块
> > **views**：页面
> > **App.vue**：根组件
> > **main.ts**：入口模块，挂载根组件
>
> .gitignore：git忽略文件
> index.html：单页面应用的入口文件
> package.json：项目配置文件
> tsconfig.json：TypeScript配置文件
> vite.config.ts：Vite配置文件

---

## 配置 ESLint

### 安装 ESLint

```JavaScript
    npm install eslint --save-dev
    npx eslint --init
```

[Standard 代码风格规范文档](https://standardjs.com/readme-zhcn)

### 配置 ESLint 脚本

> 执行脚本自动修复，省去手动逐个修复

```JavaScript
    // package.json
    "scripts": {
        ...
        "lint": "eslint ./src/**/*.{js,jsx,vue,ts,tsx} --fix"
    }
```

### 配置 ESLint Vue3 强规则

```JavaScript
    // .eslintrc.cjs
    "extends": [
        ...
        "plugin:vue/vue3-strongly-recommended" // vue3强规则
    ]
```

[eslint-plugin-vue 文档](https://eslint.vuejs.org/user-guide/)

### 问题

如果看到不符合规范的错误提示，如何按照项目中的 ESLint 规则要求进行格式化？

在VSCode中：

1. 卸载/禁用 Vetur 插件
2. 安装 ESLint 插件
   - 只要安装并启用了这个插件，它就会自动查找项目中的 eslint 配置规范，并给出验证提示；
   - 如何格式化？ ESLint 提供了格式化工具，但是需要先手动配置。
3. 安装 Volar 插件

配置：

- eslint.format.enable 设置为 true
- eslint.run 设置为 onType
- 配置默认格式化程序为 ESLint
  - 在js,jsx,vue,ts,tsx文件中右键，选择[使用...格式化文档] -> 选择 [ESLint]

### 在开发和构建配置 ESLint

安装 [vite-plugin-eslint](https://github.com/gxmari007/vite-plugin-eslint)

```JavaScript
    npm install vite-plugin-eslint --save-dev
```

配置

```JavaScript
    // vite.config.ts
    import eslintPlugin from 'vite-plugin-eslint'

    defineConfig({
        ...
        plugins: [
            ...
            eslintPlugin({})
        ]
    })
```

---

## 配置转换 JSX/TSX

安装插件 [plugin-vue-jsx](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx)

```JavaScript
    npm i -D @vitejs/plugin-vue-jsx
```

配置插件

```JavaScript
    // vite.config.js
    import vueJsx from '@vitejs/plugin-vue-jsx'

    defineConfig({
        ...
        plugins: [
            ...
            vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
            })
        ]
    })
```

配置 ESLint

```JavaScript
    // .eslintrc.cjs
    "parserOptions": {
        ...
        "extraFileExtensions": ['.vue'],
        "ecmaFeatures": {
            "jsx": true
        }
    }
```

[bable-plugin-jsx 语法文档](https://github.com/vuejs/babel-plugin-jsx/blob/main/packages/babel-plugin-jsx/README-zh_CN.md)

---

## 配置 VueRouter

安装 [vue-router](https://router.vuejs.org/zh/guide/)

```JavaScript
    npm install vue-router@4
```

---

## Git Commit 规范

暂不配置
