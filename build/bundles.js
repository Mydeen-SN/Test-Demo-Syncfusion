// all sample files should not be minified or bundled because it messes up
// how they are shown in the browser, and thus how they are shown in the demo
// but we still want to bundle files that are not "sample" files
var nonSampleBundle = [
  "[shared/*.js]",
  "[*.js]",
  "*.html!text",
  "shared/*.html!text",
  "[installation/*.js]",
  "installation/*.html!text",
  "[test-syncfusion-bridge/**/*]",
  "[about/*.js]",
  "about/*.html!text",
  "[theme-selector/*.js]",
  "theme-selector/*.html!text"
];

var aureliaBundle = [
  "aurelia-framework",
  "aurelia-bootstrapper",
  "aurelia-router",
  "aurelia-templating-binding",
  "aurelia-templating-resources",
  "aurelia-templating-router",
  "aurelia-loader-default",
  "aurelia-history-browser",
  "aurelia-logging-console"
];

var pluginsBundle = [
   "[aurelia-syncfusion-bridge]",
  "[aurelia-syncfusion-bridge/**/*.js]",
  "aurelia-syncfusion-bridge/**/*.html!text",
  "showdown",
  "prism",
  "jquery",
  "jquery-easing",
  "jsrender",
  "css",
  "text",
  // "core-js",
  "json",
  "core-js/library/**/*",
  "babel",
  'showdown-prettify',
  // "core-js/client/**/*",
  // "babel",
  // "babel/browser/**/*",
  // "babel-runtime/helpers/**/*",
  // "babel-runtime/core-js/**/*",
  "bootstrap",
  "bootstrap/css/bootstrap.css!text"
];

// concatenate all bundle definitions
var bundle = nonSampleBundle.concat(aureliaBundle, pluginsBundle);


module.exports = {
  "bundles": {
    "src/app-build": {
      "includes": bundle,
      "options": {
        "inject": true,
        "minify": true,
        "rev": true
      }
    }
  }
}
