// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.js$/);
testsContext.keys().forEach(testsContext);
