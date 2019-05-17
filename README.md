# ⚛️ Blank Redux store

> Blank store when you need to create a new one.

## AiO

Made to work with :
- ⚛️ [Redux](Redux) for state management
- 🔀 [Redux Thunk](https://github.com/reduxjs/redux-thunk) for middlewares
- 🐞 [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension) for debugging

Those are the full recommended dependencies (additional to [CRA deps](https://facebook.github.io/create-react-app/)) :

```sh
$ yarn add redux react-redux redux-thunk redux-devtools-extension
```

## How to use

### 1. Use from Github

```sh
$ wget https://github.com/Yago/blank-redux/archive/master.zip
$ unzip master.zip
$ mv ./blank-redux-master/src/store ./path/to/store
$ rm -rf ./master.zip ./blank-redux-master
```

### 2. Reuse from local

Simply copy and rename blank store

```sh
$ cp -r ./path/to/store/Blank ./path/to/store/NewStore
# Edit everything
```

