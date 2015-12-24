# My React Redux webpack quick start

* to make sure that webpack and webpack-dev-server work well you should install them system globally.
    1. (as system admin) `npm install -g webpack webpack-dev-server`

## compile
- plain compile: `webpack`
- compile with progress and color: `webpack --progress --color`
- compile with watcher: `webpack --progress --colors --watch`
- run dev server with browser sync: `webpack-dev-server --progress --colors`
  - compiles to memory only doesn't write compiled code out to disk.
