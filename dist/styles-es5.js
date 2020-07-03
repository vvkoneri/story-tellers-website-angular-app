(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/grid.css":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/grid.css ***!
    \*******************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsSrcGridCss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "\n/*  SECTIONS  ============================================================================= */\n\n.section {\n\tclear: both;\n\tpadding: 0px;\n\tmargin: 0px;\n}\n\n/*  GROUPING  ============================================================================= */\n\n.row {\n    zoom: 1; /* For IE 6/7 (trigger hasLayout) */\n}\n\n.row:before,\n.row:after {\n    content:\"\";\n    display:table;\n}\n\n.row:after {\n    clear:both;\n}\n\n/*  GRID COLUMN SETUP   ==================================================================== */\n\n.col {\n\tdisplay: block;\n\tfloat:left;\n\tmargin: 1% 0 1% 1.6%;\n}\n\n.col:first-child { margin-left: 0; }\n\n/* all browsers except IE6 and lower */\n\n/*  REMOVE MARGINS AS ALL GO FULL WIDTH AT 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.col { \n\t\t/*margin: 1% 0 1% 0%;*/\n        margin: 0;\n\t}\n}\n\n/*  GRID OF TWO   ============================================================================= */\n\n.span-2-of-2 {\n\twidth: 100%;\n}\n\n.span-1-of-2 {\n\twidth: 49.2%;\n}\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-2-of-2 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-2 {\n\t\twidth: 100%; \n\t}\n}\n\n/*  GRID OF THREE   ============================================================================= */\n\n.span-3-of-3 {\n\twidth: 100%; \n}\n\n.span-2-of-3 {\n\twidth: 66.13%; \n}\n\n.span-1-of-3 {\n\twidth: 32.26%; \n}\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-3-of-3 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-3 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-3 {\n\t\twidth: 100%;\n\t}\n}\n\n/*  GRID OF FOUR   ============================================================================= */\n\n.span-4-of-4 {\n\twidth: 100%; \n}\n\n.span-3-of-4 {\n\twidth: 74.6%; \n}\n\n.span-2-of-4 {\n\twidth: 49.2%; \n}\n\n.span-1-of-4 {\n\twidth: 23.8%; \n}\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-4-of-4 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-4 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-4 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-4 {\n\t\twidth: 100%; \n\t}\n}\n\n/*  GRID OF FIVE   ============================================================================= */\n\n.span-5-of-5 {\n\twidth: 100%;\n}\n\n.span-4-of-5 {\n  \twidth: 79.68%; \n}\n\n.span-3-of-5 {\n  \twidth: 59.36%; \n}\n\n.span-2-of-5 {\n  \twidth: 39.04%;\n}\n\n.span-1-of-5 {\n  \twidth: 18.72%;\n}\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-5-of-5 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-5 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-5 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-5 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-5 {\n\t\twidth: 100%; \n\t}\n}\n\n/*  GRID OF SIX   ============================================================================= */\n\n.span-6-of-6 {\n\twidth: 100%;\n}\n\n.span-5-of-6 {\n  \twidth: 83.06%;\n}\n\n.span-4-of-6 {\n  \twidth: 66.13%;\n}\n\n.span-3-of-6 {\n  \twidth: 49.2%;\n}\n\n.span-2-of-6 {\n  \twidth: 32.26%;\n}\n\n.span-1-of-6 {\n  \twidth: 15.33%;\n}\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-6-of-6 {\n\t\twidth: 100%; \n\t}\n\t.span-5-of-6 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-6 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-6 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-6 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-6 {\n\t\twidth: 100%; \n\t}\n}\n\n/*  GRID OF SEVEN   ============================================================================= */\n\n.span-7-of-7 {\n\twidth: 100%;\n}\n\n.span-6-of-7 {\n\twidth: 85.48%;\n}\n\n.span-5-of-7 {\n  \twidth: 70.97%;\n}\n\n.span-4-of-7 {\n  \twidth: 56.45%;\n}\n\n.span-3-of-7 {\n  \twidth: 41.94%;\n}\n\n.span-2-of-7 {\n  \twidth: 27.42%;\n}\n\n.span-1-of-7 {\n  \twidth: 12.91%;\n}\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-7-of-7 {\n\t\twidth: 100%; \n\t}\n\t.span-6-of-7 {\n\t\twidth: 100%; \n\t}\n\t.span-5-of-7 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-7 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-7 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-7 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-7 {\n\t\twidth: 100%; \n\t}\n}\n\n/*  GRID OF EIGHT   ============================================================================= */\n\n.span-8-of-8 {\n\twidth: 100%;\n}\n\n.span-7-of-8 {\n\twidth: 87.3%; \n}\n\n.span-6-of-8 {\n\twidth: 74.6%; \n}\n\n.span-5-of-8 {\n\twidth: 61.9%; \n}\n\n.span-4-of-8 {\n\twidth: 49.2%; \n}\n\n.span-3-of-8 {\n\twidth: 36.5%;\n}\n\n.span-2-of-8 {\n\twidth: 23.8%; \n}\n\n.span-1-of-8 {\n\twidth: 11.1%; \n}\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-8-of-8 {\n\t\twidth: 100%; \n\t}\n\t.span-7-of-8 {\n\t\twidth: 100%; \n\t}\n\t.span-6-of-8 {\n\t\twidth: 100%; \n\t}\n\t.span-5-of-8 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-8 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-8 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-8 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-8 {\n\t\twidth: 100%; \n\t}\n}\n\n/*  GRID OF NINE   ============================================================================= */\n\n.span-9-of-9 {\n\twidth: 100%;\n}\n\n.span-8-of-9 {\n\twidth: 88.71%;\n}\n\n.span-7-of-9 {\n\twidth: 77.42%; \n}\n\n.span-6-of-9 {\n\twidth: 66.13%; \n}\n\n.span-5-of-9 {\n\twidth: 54.84%; \n}\n\n.span-4-of-9 {\n\twidth: 43.55%; \n}\n\n.span-3-of-9 {\n\twidth: 32.26%;\n}\n\n.span-2-of-9 {\n\twidth: 20.97%; \n}\n\n.span-1-of-9 {\n\twidth: 9.68%; \n}\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-9-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-8-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-7-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-6-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-5-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-9 {\n\t\twidth: 100%; \n\t}\n}\n\n/*  GRID OF TEN   ============================================================================= */\n\n.span-10-of-10 {\n\twidth: 100%;\n}\n\n.span-9-of-10 {\n\twidth: 89.84%;\n}\n\n.span-8-of-10 {\n\twidth: 79.68%;\n}\n\n.span-7-of-10 {\n\twidth: 69.52%; \n}\n\n.span-6-of-10 {\n\twidth: 59.36%; \n}\n\n.span-5-of-10 {\n\twidth: 49.2%; \n}\n\n.span-4-of-10 {\n\twidth: 39.04%; \n}\n\n.span-3-of-10 {\n\twidth: 28.88%;\n}\n\n.span-2-of-10 {\n\twidth: 18.72%; \n}\n\n.span-1-of-10 {\n\twidth: 8.56%; \n}\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-10-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-9-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-8-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-7-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-6-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-5-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-10 {\n\t\twidth: 100%; \n\t}\n}\n\n/*  GRID OF ELEVEN   ============================================================================= */\n\n.span-11-of-11 {\n\twidth: 100%;\n}\n\n.span-10-of-11 {\n\twidth: 90.76%;\n}\n\n.span-9-of-11 {\n\twidth: 81.52%;\n}\n\n.span-8-of-11 {\n\twidth: 72.29%;\n}\n\n.span-7-of-11 {\n\twidth: 63.05%; \n}\n\n.span-6-of-11 {\n\twidth: 53.81%; \n}\n\n.span-5-of-11 {\n\twidth: 44.58%; \n}\n\n.span-4-of-11 {\n\twidth: 35.34%; \n}\n\n.span-3-of-11 {\n\twidth: 26.1%;\n}\n\n.span-2-of-11 {\n\twidth: 16.87%; \n}\n\n.span-1-of-11 {\n\twidth: 7.63%; \n}\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-11-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-10-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-9-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-8-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-7-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-6-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-5-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-11 {\n\t\twidth: 100%; \n\t}\n}\n\n/*  GRID OF TWELVE   ============================================================================= */\n\n.span-12-of-12 {\n\twidth: 100%;\n}\n\n.span-11-of-12 {\n\twidth: 91.53%;\n}\n\n.span-10-of-12 {\n\twidth: 83.06%;\n}\n\n.span-9-of-12 {\n\twidth: 74.6%;\n}\n\n.span-8-of-12 {\n\twidth: 66.13%;\n}\n\n.span-7-of-12 {\n\twidth: 57.66%; \n}\n\n.span-6-of-12 {\n\twidth: 49.2%; \n}\n\n.span-5-of-12 {\n\twidth: 40.73%; \n}\n\n.span-4-of-12 {\n\twidth: 32.26%; \n}\n\n.span-3-of-12 {\n\twidth: 23.8%;\n}\n\n.span-2-of-12 {\n\twidth: 15.33%; \n}\n\n.span-1-of-12 {\n\twidth: 6.86%; \n}\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-12-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-11-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-10-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-9-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-8-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-7-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-6-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-5-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-12 {\n\t\twidth: 100%; \n\t}\n}", "", {
      "version": 3,
      "sources": ["grid.css"],
      "names": [],
      "mappings": "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",
      "file": "grid.css",
      "sourcesContent": ["\n/*  SECTIONS  ============================================================================= */\n\n.section {\n\tclear: both;\n\tpadding: 0px;\n\tmargin: 0px;\n}\n\n/*  GROUPING  ============================================================================= */\n\n.row {\n    zoom: 1; /* For IE 6/7 (trigger hasLayout) */\n}\n\n.row:before,\n.row:after {\n    content:\"\";\n    display:table;\n}\n.row:after {\n    clear:both;\n}\n\n/*  GRID COLUMN SETUP   ==================================================================== */\n\n.col {\n\tdisplay: block;\n\tfloat:left;\n\tmargin: 1% 0 1% 1.6%;\n}\n\n.col:first-child { margin-left: 0; } /* all browsers except IE6 and lower */\n\n\n/*  REMOVE MARGINS AS ALL GO FULL WIDTH AT 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.col { \n\t\t/*margin: 1% 0 1% 0%;*/\n        margin: 0;\n\t}\n}\n\n\n/*  GRID OF TWO   ============================================================================= */\n\n\n.span-2-of-2 {\n\twidth: 100%;\n}\n\n.span-1-of-2 {\n\twidth: 49.2%;\n}\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-2-of-2 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-2 {\n\t\twidth: 100%; \n\t}\n}\n\n\n/*  GRID OF THREE   ============================================================================= */\n\n\t\n.span-3-of-3 {\n\twidth: 100%; \n}\n\n.span-2-of-3 {\n\twidth: 66.13%; \n}\n\n.span-1-of-3 {\n\twidth: 32.26%; \n}\n\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-3-of-3 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-3 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-3 {\n\t\twidth: 100%;\n\t}\n}\n\n/*  GRID OF FOUR   ============================================================================= */\n\n\t\n.span-4-of-4 {\n\twidth: 100%; \n}\n\n.span-3-of-4 {\n\twidth: 74.6%; \n}\n\n.span-2-of-4 {\n\twidth: 49.2%; \n}\n\n.span-1-of-4 {\n\twidth: 23.8%; \n}\n\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-4-of-4 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-4 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-4 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-4 {\n\t\twidth: 100%; \n\t}\n}\n\n\n/*  GRID OF FIVE   ============================================================================= */\n\n\t\n.span-5-of-5 {\n\twidth: 100%;\n}\n\n.span-4-of-5 {\n  \twidth: 79.68%; \n}\n\n.span-3-of-5 {\n  \twidth: 59.36%; \n}\n\n.span-2-of-5 {\n  \twidth: 39.04%;\n}\n\n.span-1-of-5 {\n  \twidth: 18.72%;\n}\n\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-5-of-5 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-5 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-5 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-5 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-5 {\n\t\twidth: 100%; \n\t}\n}\n\n\n/*  GRID OF SIX   ============================================================================= */\n\n\n.span-6-of-6 {\n\twidth: 100%;\n}\n\n.span-5-of-6 {\n  \twidth: 83.06%;\n}\n\n.span-4-of-6 {\n  \twidth: 66.13%;\n}\n\n.span-3-of-6 {\n  \twidth: 49.2%;\n}\n\n.span-2-of-6 {\n  \twidth: 32.26%;\n}\n\n.span-1-of-6 {\n  \twidth: 15.33%;\n}\n\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-6-of-6 {\n\t\twidth: 100%; \n\t}\n\t.span-5-of-6 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-6 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-6 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-6 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-6 {\n\t\twidth: 100%; \n\t}\n}\n\n\n\n/*  GRID OF SEVEN   ============================================================================= */\n\n\n.span-7-of-7 {\n\twidth: 100%;\n}\n\n.span-6-of-7 {\n\twidth: 85.48%;\n}\n\n.span-5-of-7 {\n  \twidth: 70.97%;\n}\n\n.span-4-of-7 {\n  \twidth: 56.45%;\n}\n\n.span-3-of-7 {\n  \twidth: 41.94%;\n}\n\n.span-2-of-7 {\n  \twidth: 27.42%;\n}\n\n.span-1-of-7 {\n  \twidth: 12.91%;\n}\n\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-7-of-7 {\n\t\twidth: 100%; \n\t}\n\t.span-6-of-7 {\n\t\twidth: 100%; \n\t}\n\t.span-5-of-7 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-7 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-7 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-7 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-7 {\n\t\twidth: 100%; \n\t}\n}\n\n\n/*  GRID OF EIGHT   ============================================================================= */\n\n\t\n.span-8-of-8 {\n\twidth: 100%;\n}\n\n.span-7-of-8 {\n\twidth: 87.3%; \n}\n\n.span-6-of-8 {\n\twidth: 74.6%; \n}\n\n.span-5-of-8 {\n\twidth: 61.9%; \n}\n\n.span-4-of-8 {\n\twidth: 49.2%; \n}\n\n.span-3-of-8 {\n\twidth: 36.5%;\n}\n\n.span-2-of-8 {\n\twidth: 23.8%; \n}\n\n.span-1-of-8 {\n\twidth: 11.1%; \n}\n\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-8-of-8 {\n\t\twidth: 100%; \n\t}\n\t.span-7-of-8 {\n\t\twidth: 100%; \n\t}\n\t.span-6-of-8 {\n\t\twidth: 100%; \n\t}\n\t.span-5-of-8 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-8 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-8 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-8 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-8 {\n\t\twidth: 100%; \n\t}\n}\n\n\n/*  GRID OF NINE   ============================================================================= */\n\n\n.span-9-of-9 {\n\twidth: 100%;\n}\n\n.span-8-of-9 {\n\twidth: 88.71%;\n}\n\n.span-7-of-9 {\n\twidth: 77.42%; \n}\n\n.span-6-of-9 {\n\twidth: 66.13%; \n}\n\n.span-5-of-9 {\n\twidth: 54.84%; \n}\n\n.span-4-of-9 {\n\twidth: 43.55%; \n}\n\n.span-3-of-9 {\n\twidth: 32.26%;\n}\n\n.span-2-of-9 {\n\twidth: 20.97%; \n}\n\n.span-1-of-9 {\n\twidth: 9.68%; \n}\n\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-9-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-8-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-7-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-6-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-5-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-9 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-9 {\n\t\twidth: 100%; \n\t}\n}\n\n\n/*  GRID OF TEN   ============================================================================= */\n\n\n.span-10-of-10 {\n\twidth: 100%;\n}\n\n.span-9-of-10 {\n\twidth: 89.84%;\n}\n\n.span-8-of-10 {\n\twidth: 79.68%;\n}\n\n.span-7-of-10 {\n\twidth: 69.52%; \n}\n\n.span-6-of-10 {\n\twidth: 59.36%; \n}\n\n.span-5-of-10 {\n\twidth: 49.2%; \n}\n\n.span-4-of-10 {\n\twidth: 39.04%; \n}\n\n.span-3-of-10 {\n\twidth: 28.88%;\n}\n\n.span-2-of-10 {\n\twidth: 18.72%; \n}\n\n.span-1-of-10 {\n\twidth: 8.56%; \n}\n\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-10-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-9-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-8-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-7-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-6-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-5-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-10 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-10 {\n\t\twidth: 100%; \n\t}\n}\n\n\n/*  GRID OF ELEVEN   ============================================================================= */\n\n.span-11-of-11 {\n\twidth: 100%;\n}\n\n.span-10-of-11 {\n\twidth: 90.76%;\n}\n\n.span-9-of-11 {\n\twidth: 81.52%;\n}\n\n.span-8-of-11 {\n\twidth: 72.29%;\n}\n\n.span-7-of-11 {\n\twidth: 63.05%; \n}\n\n.span-6-of-11 {\n\twidth: 53.81%; \n}\n\n.span-5-of-11 {\n\twidth: 44.58%; \n}\n\n.span-4-of-11 {\n\twidth: 35.34%; \n}\n\n.span-3-of-11 {\n\twidth: 26.1%;\n}\n\n.span-2-of-11 {\n\twidth: 16.87%; \n}\n\n.span-1-of-11 {\n\twidth: 7.63%; \n}\n\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-11-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-10-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-9-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-8-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-7-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-6-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-5-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-11 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-11 {\n\t\twidth: 100%; \n\t}\n}\n\n\n/*  GRID OF TWELVE   ============================================================================= */\n\n.span-12-of-12 {\n\twidth: 100%;\n}\n\n.span-11-of-12 {\n\twidth: 91.53%;\n}\n\n.span-10-of-12 {\n\twidth: 83.06%;\n}\n\n.span-9-of-12 {\n\twidth: 74.6%;\n}\n\n.span-8-of-12 {\n\twidth: 66.13%;\n}\n\n.span-7-of-12 {\n\twidth: 57.66%; \n}\n\n.span-6-of-12 {\n\twidth: 49.2%; \n}\n\n.span-5-of-12 {\n\twidth: 40.73%; \n}\n\n.span-4-of-12 {\n\twidth: 32.26%; \n}\n\n.span-3-of-12 {\n\twidth: 23.8%;\n}\n\n.span-2-of-12 {\n\twidth: 15.33%; \n}\n\n.span-1-of-12 {\n\twidth: 6.86%; \n}\n\n\n/*  GO FULL WIDTH AT LESS THAN 480 PIXELS */\n\n@media only screen and (max-width: 480px) {\n\t.span-12-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-11-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-10-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-9-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-8-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-7-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-6-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-5-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-4-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-3-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-2-of-12 {\n\t\twidth: 100%; \n\t}\n\t.span-1-of-12 {\n\t\twidth: 100%; \n\t}\n}"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/normalize.css":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/normalize.css ***!
    \************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsSrcNormalizeCss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */ /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", "", {
      "version": 3,
      "sources": ["normalize.css"],
      "names": [],
      "mappings": "AAAA,2DAA2D;;AAE3D;;;;EAIE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,0BAA0B,EAAE,MAAM;EAClC,8BAA8B,EAAE,MAAM;AACxC;;AAEA;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;+EAC+E;;AAE/E;;;;;EAKE;;AAEF;;;;;;;;;;;;;EAaE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;;;EAIE,qBAAqB,EAAE,MAAM;EAC7B,wBAAwB,EAAE,MAAM;AAClC;;AAEA;;;EAGE;;AAEF;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;;EAGE;;AAEF;;EAEE,aAAa;AACf;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;EAEE;;AAEF;;EAEE,UAAU;AACZ;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,yBAAyB;AAC3B;;AAEA;;EAEE;;AAEF;;EAEE,iBAAiB;AACnB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;;EAEE;;AAEF;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,gBAAgB;AAClB;;AAEA;;EAEE;;AAEF;EAEE,uBAAuB;EACvB,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;;;;EAIE,iCAAiC;EACjC,cAAc;AAChB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE;;AAEF;;;;;EAKE,cAAc,EAAE,MAAM;EACtB,aAAa,EAAE,MAAM;EACrB,SAAS,EAAE,MAAM;AACnB;;AAEA;;EAEE;;AAEF;EACE,iBAAiB;AACnB;;AAEA;;;;;EAKE;;AAEF;;EAEE,oBAAoB;AACtB;;AAEA;;;;;;EAME;;AAEF;;;;EAIE,0BAA0B,EAAE,MAAM;EAClC,eAAe,EAAE,MAAM;AACzB;;AAEA;;EAEE;;AAEF;;EAEE,eAAe;AACjB;;AAEA;;EAEE;;AAEF;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB;AACrB;;AAEA;;;;;;EAME;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;;;EAIE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;;EAIE;;AAEF;EACE,6BAA6B,EAAE,MAAM,EAEJ,MAAM;EACvC,uBAAuB;AACzB;;AAEA;;;;EAIE;;AAEF;;EAEE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,yBAAyB;EACzB,aAAa;EACb,8BAA8B;AAChC;;AAEA;;;EAGE;;AAEF;EACE,SAAS,EAAE,MAAM;EACjB,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,iBAAiB;AACnB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;;EAEE,UAAU;AACZ",
      "file": "normalize.css",
      "sourcesContent": ["/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  background-color: #fff;\r\n  color: #555;\r\n  font-family: 'Lato', 'Arial', sans-serif;\r\n  font-weight: 300;\r\n  font-size: 20px;\r\n  text-rendering: optimizeLegibility;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.row {\r\n  max-width: 1140px;\r\n  margin: 0 auto;\r\n}", "", {
      "version": 3,
      "sources": ["styles.css"],
      "names": [],
      "mappings": "AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,sBAAsB;EACtB,WAAW;EACX,wCAAwC;EACxC,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB",
      "file": "styles.css",
      "sourcesContent": ["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  background-color: #fff;\r\n  color: #555;\r\n  font-family: 'Lato', 'Arial', sans-serif;\r\n  font-weight: 300;\r\n  font-size: 20px;\r\n  text-rendering: optimizeLegibility;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.row {\r\n  max-width: 1140px;\r\n  margin: 0 auto;\r\n}"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/grid.css":
  /*!**********************!*\
    !*** ./src/grid.css ***!
    \**********************/

  /*! no static exports found */

  /***/
  function srcGridCss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./grid.css */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/grid.css");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  "./src/normalize.css":
  /*!***************************!*\
    !*** ./src/normalize.css ***!
    \***************************/

  /*! no static exports found */

  /***/
  function srcNormalizeCss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./normalize.css */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/normalize.css");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!*****************************************************************!*\
    !*** multi ./src/styles.css ./src/normalize.css ./src/grid.css ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! /Users/vekoneri/Documents/Google Search Engine Project/photo-portofolio-angular-app/src/styles.css */
    "./src/styles.css");

    __webpack_require__(
    /*! /Users/vekoneri/Documents/Google Search Engine Project/photo-portofolio-angular-app/src/normalize.css */
    "./src/normalize.css");

    module.exports = __webpack_require__(
    /*! /Users/vekoneri/Documents/Google Search Engine Project/photo-portofolio-angular-app/src/grid.css */
    "./src/grid.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map