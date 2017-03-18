(function (global) {
  System.config({

    paths: {
      'npm:': 'node_modules/'
    },

    map: {
      app: 'app',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'angular2.leaflet.components': 'npm:angular2.leaflet.components',
      'leaflet': 'npm:leaflet',
      'ts': 'npm:plugin-typescript@4.0.10/lib/plugin.js',
      'typescript': 'npm:typescript@2.0.3/lib/typescript.js'
    },
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'angular2.leaflet.components': {
        main: './index',
        defaultExtension: 'js',
        meta: {
          "format": "register"
        }
      },
      'leaflet': {
        main: './dist/leaflet-src.js',
        defaultExtension: 'js',
        meta: {
          './dist/leaflet.css': {loader: 'css'}
        }
      },
      "ts": {
        "main": "plugin.js"
      },
      "typescript": {
        "main": "typescript.js",
        "meta": {
          "lib/typescript.js": {
            "exports": "ts"
          }
        }
      }
    }
  });
})(this);