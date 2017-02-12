//register babel to transpile tests
require('babel-register')();

//disable webpack css features that mocha doesnt understand
require.extensions['.css'] = function () {}


