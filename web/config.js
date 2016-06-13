System.config({
  defaultJSExtensions: true,
  transpiler: "ts",
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  meta: {
    "bootstrap": {
      "deps": [
        "jquery"
      ]
    }
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.2.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1",
    "aurelia-configuration": "github:vheissu/aurelia-configuration@1.0.6",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.2.5",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.3",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.1",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.4",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.2",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.4",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.5",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.1",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "deep-extend": "npm:deep-extend@0.4.1",
    "fetch": "github:github/fetch@0.11.1",
    "font-awesome": "npm:font-awesome@4.6.1",
    "jquery": "npm:jquery@2.2.3",
    "text": "github:systemjs/plugin-text@0.0.3",
    "ts": "npm:babel-core@5.8.38",
    "ts-runtime": "npm:babel-runtime@5.8.38",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.4"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "npm:jquery@2.2.3"
    },
    "github:vheissu/aurelia-configuration@1.0.6": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.2.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.6"
    },
    "npm:aurelia-binding@1.0.0-beta.1.3.5": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.3",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.4",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.6",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.4",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.5",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-framework@1.0.0-beta.1.2.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.6"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.2.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.2.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-loader@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.1.4": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-router@1.0.0-beta.1.2.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.5",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.6"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.6"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.2.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.2",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.6"
    },
    "npm:aurelia-templating@1.0.0-beta.1.2.6": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.1"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:deep-extend@0.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:font-awesome@4.6.1": {
      "css": "github:systemjs/plugin-css@0.1.21"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  },
  bundles: {
    "app-build-9e80f16916.js": [
      "app.html!github:systemjs/plugin-text@0.0.3.js",
      "app.js",
      "main.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.3.js",
      "time-entries-list.html!github:systemjs/plugin-text@0.0.3.js",
      "time-entries-list.js",
      "timer.html!github:systemjs/plugin-text@0.0.3.js",
      "timer.js"
    ],
    "aurelia-e8ae0e1826.js": [
      "github:twbs/bootstrap@3.3.6.js",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-text@0.0.3.js",
      "github:twbs/bootstrap@3.3.6/js/bootstrap.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.1.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.1/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.5.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.5/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.5.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.5/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.3.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.3/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.1.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.1/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.2.1.js",
      "npm:aurelia-history@1.0.0-beta.1.2.1/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.2.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.2/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.1.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.1/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.1.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.1.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.1/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.1.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.2.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.2/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.2.2.js",
      "npm:aurelia-path@1.0.0-beta.1.2.2/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.4.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.4/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.2.2.js",
      "npm:aurelia-router@1.0.0-beta.1.2.2/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.1.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.1/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.4.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.4/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.6.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.6/aurelia-templating.js",
      "npm:jquery@2.2.3.js",
      "npm:jquery@2.2.3/dist/jquery.js"
    ]
  },
  depCache: {
    "main.js": [
      "bootstrap"
    ],
    "time-entries-list.js": [
      "aurelia-framework"
    ],
    "timer.js": [
      "aurelia-framework",
      "aurelia-fetch-client",
      "aurelia-configuration",
      "fetch"
    ],
    "npm:jquery@2.2.3.js": [
      "npm:jquery@2.2.3/dist/jquery"
    ],
    "github:twbs/bootstrap@3.3.6.js": [
      "github:twbs/bootstrap@3.3.6/js/bootstrap",
      "jquery"
    ],
    "github:twbs/bootstrap@3.3.6/js/bootstrap.js": [
      "jquery"
    ],
    "npm:aurelia-logging-console@1.0.0-beta.1.2.1.js": [
      "npm:aurelia-logging-console@1.0.0-beta.1.2.1/aurelia-logging-console"
    ],
    "npm:aurelia-logging-console@1.0.0-beta.1.2.1/aurelia-logging-console.js": [
      "aurelia-pal",
      "aurelia-logging"
    ],
    "npm:aurelia-pal@1.0.0-beta.1.2.2.js": [
      "npm:aurelia-pal@1.0.0-beta.1.2.2/aurelia-pal"
    ],
    "npm:aurelia-logging@1.0.0-beta.1.2.1.js": [
      "npm:aurelia-logging@1.0.0-beta.1.2.1/aurelia-logging"
    ],
    "npm:aurelia-history-browser@1.0.0-beta.1.2.1.js": [
      "npm:aurelia-history-browser@1.0.0-beta.1.2.1/aurelia-history-browser"
    ],
    "npm:aurelia-history-browser@1.0.0-beta.1.2.1/aurelia-history-browser.js": [
      "aurelia-pal",
      "aurelia-history"
    ],
    "npm:aurelia-history@1.0.0-beta.1.2.1.js": [
      "npm:aurelia-history@1.0.0-beta.1.2.1/aurelia-history"
    ],
    "npm:aurelia-loader-default@1.0.0-beta.1.2.2.js": [
      "npm:aurelia-loader-default@1.0.0-beta.1.2.2/aurelia-loader-default"
    ],
    "npm:aurelia-loader-default@1.0.0-beta.1.2.2/aurelia-loader-default.js": [
      "aurelia-loader",
      "aurelia-pal",
      "aurelia-metadata"
    ],
    "npm:aurelia-loader@1.0.0-beta.1.2.0.js": [
      "npm:aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader"
    ],
    "npm:aurelia-metadata@1.0.0-beta.1.2.1.js": [
      "npm:aurelia-metadata@1.0.0-beta.1.2.1/aurelia-metadata"
    ],
    "npm:aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader.js": [
      "aurelia-path",
      "aurelia-metadata"
    ],
    "npm:aurelia-metadata@1.0.0-beta.1.2.1/aurelia-metadata.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-path@1.0.0-beta.1.2.2.js": [
      "npm:aurelia-path@1.0.0-beta.1.2.2/aurelia-path"
    ],
    "npm:aurelia-templating-router@1.0.0-beta.1.2.1.js": [
      "npm:aurelia-templating-router@1.0.0-beta.1.2.1/aurelia-templating-router"
    ],
    "npm:aurelia-templating-router@1.0.0-beta.1.2.1/aurelia-templating-router.js": [
      "aurelia-router",
      "./route-loader",
      "./router-view",
      "./route-href"
    ],
    "npm:aurelia-router@1.0.0-beta.1.2.2.js": [
      "npm:aurelia-router@1.0.0-beta.1.2.2/aurelia-router"
    ],
    "npm:aurelia-router@1.0.0-beta.1.2.2/aurelia-router.js": [
      "aurelia-logging",
      "aurelia-route-recognizer",
      "aurelia-dependency-injection",
      "aurelia-history",
      "aurelia-event-aggregator"
    ],
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1.js": [
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1/aurelia-route-recognizer"
    ],
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3.js": [
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3/aurelia-dependency-injection"
    ],
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1.js": [
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1/aurelia-event-aggregator"
    ],
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.1/aurelia-route-recognizer.js": [
      "aurelia-path"
    ],
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.3/aurelia-dependency-injection.js": [
      "aurelia-metadata",
      "aurelia-pal"
    ],
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.1/aurelia-event-aggregator.js": [
      "aurelia-logging"
    ],
    "npm:aurelia-templating-router@1.0.0-beta.1.2.1/route-loader.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-router",
      "aurelia-path",
      "aurelia-metadata"
    ],
    "npm:aurelia-templating-router@1.0.0-beta.1.2.1/router-view.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-router",
      "aurelia-metadata",
      "aurelia-pal"
    ],
    "npm:aurelia-templating@1.0.0-beta.1.2.6.js": [
      "npm:aurelia-templating@1.0.0-beta.1.2.6/aurelia-templating"
    ],
    "npm:aurelia-templating@1.0.0-beta.1.2.6/aurelia-templating.js": [
      "aurelia-logging",
      "aurelia-pal",
      "aurelia-metadata",
      "aurelia-path",
      "aurelia-loader",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "aurelia-task-queue"
    ],
    "npm:aurelia-binding@1.0.0-beta.1.3.5.js": [
      "npm:aurelia-binding@1.0.0-beta.1.3.5/aurelia-binding"
    ],
    "npm:aurelia-task-queue@1.0.0-beta.1.2.1.js": [
      "npm:aurelia-task-queue@1.0.0-beta.1.2.1/aurelia-task-queue"
    ],
    "npm:aurelia-binding@1.0.0-beta.1.3.5/aurelia-binding.js": [
      "aurelia-logging",
      "aurelia-pal",
      "aurelia-task-queue",
      "aurelia-metadata"
    ],
    "npm:aurelia-task-queue@1.0.0-beta.1.2.1/aurelia-task-queue.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-templating-router@1.0.0-beta.1.2.1/route-href.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "aurelia-router",
      "aurelia-pal",
      "aurelia-logging"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5.js": [
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/aurelia-templating-resources"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/aurelia-templating-resources.js": [
      "./compose",
      "./if",
      "./with",
      "./repeat",
      "./show",
      "./hide",
      "./sanitize-html",
      "./replaceable",
      "./focus",
      "./compile-spy",
      "./view-spy",
      "aurelia-templating",
      "./css-resource",
      "aurelia-pal",
      "./html-sanitizer",
      "./binding-mode-behaviors",
      "./throttle-binding-behavior",
      "./debounce-binding-behavior",
      "./signal-binding-behavior",
      "./binding-signaler",
      "./update-trigger-binding-behavior",
      "./abstract-repeater",
      "./repeat-strategy-locator",
      "./html-resource-plugin",
      "./null-repeat-strategy",
      "./array-repeat-strategy",
      "./map-repeat-strategy",
      "./set-repeat-strategy",
      "./number-repeat-strategy",
      "./repeat-utilities",
      "./analyze-view-factory"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/signal-binding-behavior.js": [
      "./binding-signaler"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/repeat-strategy-locator.js": [
      "./null-repeat-strategy",
      "./array-repeat-strategy",
      "./map-repeat-strategy",
      "./set-repeat-strategy",
      "./number-repeat-strategy"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/map-repeat-strategy.js": [
      "./repeat-utilities"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/set-repeat-strategy.js": [
      "./repeat-utilities"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/number-repeat-strategy.js": [
      "./repeat-utilities"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/compose.js": [
      "aurelia-dependency-injection",
      "aurelia-task-queue",
      "aurelia-templating",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/if.js": [
      "aurelia-templating",
      "aurelia-dependency-injection"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/with.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/repeat.js": [
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-templating",
      "./repeat-strategy-locator",
      "./repeat-utilities",
      "./analyze-view-factory",
      "./abstract-repeater"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/show.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/sanitize-html.js": [
      "aurelia-binding",
      "aurelia-dependency-injection",
      "./html-sanitizer"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/replaceable.js": [
      "aurelia-dependency-injection",
      "aurelia-templating"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/hide.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/focus.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "aurelia-task-queue",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/compile-spy.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "aurelia-logging",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/view-spy.js": [
      "aurelia-templating",
      "aurelia-logging"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/css-resource.js": [
      "aurelia-templating",
      "aurelia-loader",
      "aurelia-dependency-injection",
      "aurelia-path",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/binding-mode-behaviors.js": [
      "aurelia-binding",
      "aurelia-metadata"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/throttle-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/debounce-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/binding-signaler.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/update-trigger-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/html-resource-plugin.js": [
      "aurelia-templating",
      "./dynamic-element"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/array-repeat-strategy.js": [
      "./repeat-utilities",
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/repeat-utilities.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.5/dynamic-element.js": [
      "aurelia-templating"
    ],
    "npm:aurelia-polyfills@1.0.0-beta.1.1.4.js": [
      "npm:aurelia-polyfills@1.0.0-beta.1.1.4/aurelia-polyfills"
    ],
    "npm:aurelia-polyfills@1.0.0-beta.1.1.4/aurelia-polyfills.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.4.js": [
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.4/aurelia-templating-binding"
    ],
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.4/aurelia-templating-binding.js": [
      "aurelia-logging",
      "aurelia-binding",
      "aurelia-templating"
    ],
    "npm:aurelia-animator-css@1.0.0-beta.1.2.1.js": [
      "npm:aurelia-animator-css@1.0.0-beta.1.2.1/aurelia-animator-css"
    ],
    "npm:aurelia-animator-css@1.0.0-beta.1.2.1/aurelia-animator-css.js": [
      "aurelia-templating",
      "aurelia-pal"
    ],
    "npm:aurelia-fetch-client@1.0.0-beta.1.2.5.js": [
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.5/aurelia-fetch-client"
    ],
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1.js": [
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1/aurelia-bootstrapper"
    ],
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.1/aurelia-bootstrapper.js": [
      "aurelia-pal",
      "aurelia-pal-browser",
      "aurelia-polyfills"
    ],
    "npm:aurelia-pal-browser@1.0.0-beta.1.2.1.js": [
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.1/aurelia-pal-browser"
    ],
    "npm:aurelia-pal-browser@1.0.0-beta.1.2.1/aurelia-pal-browser.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-framework@1.0.0-beta.1.2.3.js": [
      "npm:aurelia-framework@1.0.0-beta.1.2.3/aurelia-framework"
    ],
    "npm:aurelia-framework@1.0.0-beta.1.2.3/aurelia-framework.js": [
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-metadata",
      "aurelia-templating",
      "aurelia-loader",
      "aurelia-task-queue",
      "aurelia-path",
      "aurelia-pal",
      "aurelia-logging"
    ]
  }
});