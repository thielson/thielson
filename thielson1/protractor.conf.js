exports.config = {
  specs: ['dist/bin/javatests/com/thielson/protractor/**/*.spec.js'],
  capabilities: {browserName: 'chrome', chromeOptions: {args: ['--no-sandbox']}},
  directConnect: true,
  baseUrl: 'http://localhost:5432/',
  framework: 'jasmine',
  getPageTimeout: 60 * 1000,
  allScriptsTimeout: 60 * 1000,
};
