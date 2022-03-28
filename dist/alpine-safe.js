(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/cssfilter/lib/default.js
  var require_default = __commonJS({
    "node_modules/cssfilter/lib/default.js"(exports) {
      function getDefaultWhiteList() {
        var whiteList = {};
        whiteList["align-content"] = false;
        whiteList["align-items"] = false;
        whiteList["align-self"] = false;
        whiteList["alignment-adjust"] = false;
        whiteList["alignment-baseline"] = false;
        whiteList["all"] = false;
        whiteList["anchor-point"] = false;
        whiteList["animation"] = false;
        whiteList["animation-delay"] = false;
        whiteList["animation-direction"] = false;
        whiteList["animation-duration"] = false;
        whiteList["animation-fill-mode"] = false;
        whiteList["animation-iteration-count"] = false;
        whiteList["animation-name"] = false;
        whiteList["animation-play-state"] = false;
        whiteList["animation-timing-function"] = false;
        whiteList["azimuth"] = false;
        whiteList["backface-visibility"] = false;
        whiteList["background"] = true;
        whiteList["background-attachment"] = true;
        whiteList["background-clip"] = true;
        whiteList["background-color"] = true;
        whiteList["background-image"] = true;
        whiteList["background-origin"] = true;
        whiteList["background-position"] = true;
        whiteList["background-repeat"] = true;
        whiteList["background-size"] = true;
        whiteList["baseline-shift"] = false;
        whiteList["binding"] = false;
        whiteList["bleed"] = false;
        whiteList["bookmark-label"] = false;
        whiteList["bookmark-level"] = false;
        whiteList["bookmark-state"] = false;
        whiteList["border"] = true;
        whiteList["border-bottom"] = true;
        whiteList["border-bottom-color"] = true;
        whiteList["border-bottom-left-radius"] = true;
        whiteList["border-bottom-right-radius"] = true;
        whiteList["border-bottom-style"] = true;
        whiteList["border-bottom-width"] = true;
        whiteList["border-collapse"] = true;
        whiteList["border-color"] = true;
        whiteList["border-image"] = true;
        whiteList["border-image-outset"] = true;
        whiteList["border-image-repeat"] = true;
        whiteList["border-image-slice"] = true;
        whiteList["border-image-source"] = true;
        whiteList["border-image-width"] = true;
        whiteList["border-left"] = true;
        whiteList["border-left-color"] = true;
        whiteList["border-left-style"] = true;
        whiteList["border-left-width"] = true;
        whiteList["border-radius"] = true;
        whiteList["border-right"] = true;
        whiteList["border-right-color"] = true;
        whiteList["border-right-style"] = true;
        whiteList["border-right-width"] = true;
        whiteList["border-spacing"] = true;
        whiteList["border-style"] = true;
        whiteList["border-top"] = true;
        whiteList["border-top-color"] = true;
        whiteList["border-top-left-radius"] = true;
        whiteList["border-top-right-radius"] = true;
        whiteList["border-top-style"] = true;
        whiteList["border-top-width"] = true;
        whiteList["border-width"] = true;
        whiteList["bottom"] = false;
        whiteList["box-decoration-break"] = true;
        whiteList["box-shadow"] = true;
        whiteList["box-sizing"] = true;
        whiteList["box-snap"] = true;
        whiteList["box-suppress"] = true;
        whiteList["break-after"] = true;
        whiteList["break-before"] = true;
        whiteList["break-inside"] = true;
        whiteList["caption-side"] = false;
        whiteList["chains"] = false;
        whiteList["clear"] = true;
        whiteList["clip"] = false;
        whiteList["clip-path"] = false;
        whiteList["clip-rule"] = false;
        whiteList["color"] = true;
        whiteList["color-interpolation-filters"] = true;
        whiteList["column-count"] = false;
        whiteList["column-fill"] = false;
        whiteList["column-gap"] = false;
        whiteList["column-rule"] = false;
        whiteList["column-rule-color"] = false;
        whiteList["column-rule-style"] = false;
        whiteList["column-rule-width"] = false;
        whiteList["column-span"] = false;
        whiteList["column-width"] = false;
        whiteList["columns"] = false;
        whiteList["contain"] = false;
        whiteList["content"] = false;
        whiteList["counter-increment"] = false;
        whiteList["counter-reset"] = false;
        whiteList["counter-set"] = false;
        whiteList["crop"] = false;
        whiteList["cue"] = false;
        whiteList["cue-after"] = false;
        whiteList["cue-before"] = false;
        whiteList["cursor"] = false;
        whiteList["direction"] = false;
        whiteList["display"] = true;
        whiteList["display-inside"] = true;
        whiteList["display-list"] = true;
        whiteList["display-outside"] = true;
        whiteList["dominant-baseline"] = false;
        whiteList["elevation"] = false;
        whiteList["empty-cells"] = false;
        whiteList["filter"] = false;
        whiteList["flex"] = false;
        whiteList["flex-basis"] = false;
        whiteList["flex-direction"] = false;
        whiteList["flex-flow"] = false;
        whiteList["flex-grow"] = false;
        whiteList["flex-shrink"] = false;
        whiteList["flex-wrap"] = false;
        whiteList["float"] = false;
        whiteList["float-offset"] = false;
        whiteList["flood-color"] = false;
        whiteList["flood-opacity"] = false;
        whiteList["flow-from"] = false;
        whiteList["flow-into"] = false;
        whiteList["font"] = true;
        whiteList["font-family"] = true;
        whiteList["font-feature-settings"] = true;
        whiteList["font-kerning"] = true;
        whiteList["font-language-override"] = true;
        whiteList["font-size"] = true;
        whiteList["font-size-adjust"] = true;
        whiteList["font-stretch"] = true;
        whiteList["font-style"] = true;
        whiteList["font-synthesis"] = true;
        whiteList["font-variant"] = true;
        whiteList["font-variant-alternates"] = true;
        whiteList["font-variant-caps"] = true;
        whiteList["font-variant-east-asian"] = true;
        whiteList["font-variant-ligatures"] = true;
        whiteList["font-variant-numeric"] = true;
        whiteList["font-variant-position"] = true;
        whiteList["font-weight"] = true;
        whiteList["grid"] = false;
        whiteList["grid-area"] = false;
        whiteList["grid-auto-columns"] = false;
        whiteList["grid-auto-flow"] = false;
        whiteList["grid-auto-rows"] = false;
        whiteList["grid-column"] = false;
        whiteList["grid-column-end"] = false;
        whiteList["grid-column-start"] = false;
        whiteList["grid-row"] = false;
        whiteList["grid-row-end"] = false;
        whiteList["grid-row-start"] = false;
        whiteList["grid-template"] = false;
        whiteList["grid-template-areas"] = false;
        whiteList["grid-template-columns"] = false;
        whiteList["grid-template-rows"] = false;
        whiteList["hanging-punctuation"] = false;
        whiteList["height"] = true;
        whiteList["hyphens"] = false;
        whiteList["icon"] = false;
        whiteList["image-orientation"] = false;
        whiteList["image-resolution"] = false;
        whiteList["ime-mode"] = false;
        whiteList["initial-letters"] = false;
        whiteList["inline-box-align"] = false;
        whiteList["justify-content"] = false;
        whiteList["justify-items"] = false;
        whiteList["justify-self"] = false;
        whiteList["left"] = false;
        whiteList["letter-spacing"] = true;
        whiteList["lighting-color"] = true;
        whiteList["line-box-contain"] = false;
        whiteList["line-break"] = false;
        whiteList["line-grid"] = false;
        whiteList["line-height"] = false;
        whiteList["line-snap"] = false;
        whiteList["line-stacking"] = false;
        whiteList["line-stacking-ruby"] = false;
        whiteList["line-stacking-shift"] = false;
        whiteList["line-stacking-strategy"] = false;
        whiteList["list-style"] = true;
        whiteList["list-style-image"] = true;
        whiteList["list-style-position"] = true;
        whiteList["list-style-type"] = true;
        whiteList["margin"] = true;
        whiteList["margin-bottom"] = true;
        whiteList["margin-left"] = true;
        whiteList["margin-right"] = true;
        whiteList["margin-top"] = true;
        whiteList["marker-offset"] = false;
        whiteList["marker-side"] = false;
        whiteList["marks"] = false;
        whiteList["mask"] = false;
        whiteList["mask-box"] = false;
        whiteList["mask-box-outset"] = false;
        whiteList["mask-box-repeat"] = false;
        whiteList["mask-box-slice"] = false;
        whiteList["mask-box-source"] = false;
        whiteList["mask-box-width"] = false;
        whiteList["mask-clip"] = false;
        whiteList["mask-image"] = false;
        whiteList["mask-origin"] = false;
        whiteList["mask-position"] = false;
        whiteList["mask-repeat"] = false;
        whiteList["mask-size"] = false;
        whiteList["mask-source-type"] = false;
        whiteList["mask-type"] = false;
        whiteList["max-height"] = true;
        whiteList["max-lines"] = false;
        whiteList["max-width"] = true;
        whiteList["min-height"] = true;
        whiteList["min-width"] = true;
        whiteList["move-to"] = false;
        whiteList["nav-down"] = false;
        whiteList["nav-index"] = false;
        whiteList["nav-left"] = false;
        whiteList["nav-right"] = false;
        whiteList["nav-up"] = false;
        whiteList["object-fit"] = false;
        whiteList["object-position"] = false;
        whiteList["opacity"] = false;
        whiteList["order"] = false;
        whiteList["orphans"] = false;
        whiteList["outline"] = false;
        whiteList["outline-color"] = false;
        whiteList["outline-offset"] = false;
        whiteList["outline-style"] = false;
        whiteList["outline-width"] = false;
        whiteList["overflow"] = false;
        whiteList["overflow-wrap"] = false;
        whiteList["overflow-x"] = false;
        whiteList["overflow-y"] = false;
        whiteList["padding"] = true;
        whiteList["padding-bottom"] = true;
        whiteList["padding-left"] = true;
        whiteList["padding-right"] = true;
        whiteList["padding-top"] = true;
        whiteList["page"] = false;
        whiteList["page-break-after"] = false;
        whiteList["page-break-before"] = false;
        whiteList["page-break-inside"] = false;
        whiteList["page-policy"] = false;
        whiteList["pause"] = false;
        whiteList["pause-after"] = false;
        whiteList["pause-before"] = false;
        whiteList["perspective"] = false;
        whiteList["perspective-origin"] = false;
        whiteList["pitch"] = false;
        whiteList["pitch-range"] = false;
        whiteList["play-during"] = false;
        whiteList["position"] = false;
        whiteList["presentation-level"] = false;
        whiteList["quotes"] = false;
        whiteList["region-fragment"] = false;
        whiteList["resize"] = false;
        whiteList["rest"] = false;
        whiteList["rest-after"] = false;
        whiteList["rest-before"] = false;
        whiteList["richness"] = false;
        whiteList["right"] = false;
        whiteList["rotation"] = false;
        whiteList["rotation-point"] = false;
        whiteList["ruby-align"] = false;
        whiteList["ruby-merge"] = false;
        whiteList["ruby-position"] = false;
        whiteList["shape-image-threshold"] = false;
        whiteList["shape-outside"] = false;
        whiteList["shape-margin"] = false;
        whiteList["size"] = false;
        whiteList["speak"] = false;
        whiteList["speak-as"] = false;
        whiteList["speak-header"] = false;
        whiteList["speak-numeral"] = false;
        whiteList["speak-punctuation"] = false;
        whiteList["speech-rate"] = false;
        whiteList["stress"] = false;
        whiteList["string-set"] = false;
        whiteList["tab-size"] = false;
        whiteList["table-layout"] = false;
        whiteList["text-align"] = true;
        whiteList["text-align-last"] = true;
        whiteList["text-combine-upright"] = true;
        whiteList["text-decoration"] = true;
        whiteList["text-decoration-color"] = true;
        whiteList["text-decoration-line"] = true;
        whiteList["text-decoration-skip"] = true;
        whiteList["text-decoration-style"] = true;
        whiteList["text-emphasis"] = true;
        whiteList["text-emphasis-color"] = true;
        whiteList["text-emphasis-position"] = true;
        whiteList["text-emphasis-style"] = true;
        whiteList["text-height"] = true;
        whiteList["text-indent"] = true;
        whiteList["text-justify"] = true;
        whiteList["text-orientation"] = true;
        whiteList["text-overflow"] = true;
        whiteList["text-shadow"] = true;
        whiteList["text-space-collapse"] = true;
        whiteList["text-transform"] = true;
        whiteList["text-underline-position"] = true;
        whiteList["text-wrap"] = true;
        whiteList["top"] = false;
        whiteList["transform"] = false;
        whiteList["transform-origin"] = false;
        whiteList["transform-style"] = false;
        whiteList["transition"] = false;
        whiteList["transition-delay"] = false;
        whiteList["transition-duration"] = false;
        whiteList["transition-property"] = false;
        whiteList["transition-timing-function"] = false;
        whiteList["unicode-bidi"] = false;
        whiteList["vertical-align"] = false;
        whiteList["visibility"] = false;
        whiteList["voice-balance"] = false;
        whiteList["voice-duration"] = false;
        whiteList["voice-family"] = false;
        whiteList["voice-pitch"] = false;
        whiteList["voice-range"] = false;
        whiteList["voice-rate"] = false;
        whiteList["voice-stress"] = false;
        whiteList["voice-volume"] = false;
        whiteList["volume"] = false;
        whiteList["white-space"] = false;
        whiteList["widows"] = false;
        whiteList["width"] = true;
        whiteList["will-change"] = false;
        whiteList["word-break"] = true;
        whiteList["word-spacing"] = true;
        whiteList["word-wrap"] = true;
        whiteList["wrap-flow"] = false;
        whiteList["wrap-through"] = false;
        whiteList["writing-mode"] = false;
        whiteList["z-index"] = false;
        return whiteList;
      }
      function onAttr(name, value, options) {
      }
      function onIgnoreAttr(name, value, options) {
      }
      var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;
      function safeAttrValue(name, value) {
        if (REGEXP_URL_JAVASCRIPT.test(value))
          return "";
        return value;
      }
      exports.whiteList = getDefaultWhiteList();
      exports.getDefaultWhiteList = getDefaultWhiteList;
      exports.onAttr = onAttr;
      exports.onIgnoreAttr = onIgnoreAttr;
      exports.safeAttrValue = safeAttrValue;
    }
  });

  // node_modules/cssfilter/lib/util.js
  var require_util = __commonJS({
    "node_modules/cssfilter/lib/util.js"(exports, module) {
      module.exports = {
        indexOf: function(arr, item) {
          var i, j;
          if (Array.prototype.indexOf) {
            return arr.indexOf(item);
          }
          for (i = 0, j = arr.length; i < j; i++) {
            if (arr[i] === item) {
              return i;
            }
          }
          return -1;
        },
        forEach: function(arr, fn, scope) {
          var i, j;
          if (Array.prototype.forEach) {
            return arr.forEach(fn, scope);
          }
          for (i = 0, j = arr.length; i < j; i++) {
            fn.call(scope, arr[i], i, arr);
          }
        },
        trim: function(str) {
          if (String.prototype.trim) {
            return str.trim();
          }
          return str.replace(/(^\s*)|(\s*$)/g, "");
        },
        trimRight: function(str) {
          if (String.prototype.trimRight) {
            return str.trimRight();
          }
          return str.replace(/(\s*$)/g, "");
        }
      };
    }
  });

  // node_modules/cssfilter/lib/parser.js
  var require_parser = __commonJS({
    "node_modules/cssfilter/lib/parser.js"(exports, module) {
      var _ = require_util();
      function parseStyle(css, onAttr) {
        css = _.trimRight(css);
        if (css[css.length - 1] !== ";")
          css += ";";
        var cssLength = css.length;
        var isParenthesisOpen = false;
        var lastPos = 0;
        var i = 0;
        var retCSS = "";
        function addNewAttr() {
          if (!isParenthesisOpen) {
            var source = _.trim(css.slice(lastPos, i));
            var j2 = source.indexOf(":");
            if (j2 !== -1) {
              var name = _.trim(source.slice(0, j2));
              var value = _.trim(source.slice(j2 + 1));
              if (name) {
                var ret = onAttr(lastPos, retCSS.length, name, value, source);
                if (ret)
                  retCSS += ret + "; ";
              }
            }
          }
          lastPos = i + 1;
        }
        for (; i < cssLength; i++) {
          var c = css[i];
          if (c === "/" && css[i + 1] === "*") {
            var j = css.indexOf("*/", i + 2);
            if (j === -1)
              break;
            i = j + 1;
            lastPos = i + 1;
            isParenthesisOpen = false;
          } else if (c === "(") {
            isParenthesisOpen = true;
          } else if (c === ")") {
            isParenthesisOpen = false;
          } else if (c === ";") {
            if (isParenthesisOpen) {
            } else {
              addNewAttr();
            }
          } else if (c === "\n") {
            addNewAttr();
          }
        }
        return _.trim(retCSS);
      }
      module.exports = parseStyle;
    }
  });

  // node_modules/cssfilter/lib/css.js
  var require_css = __commonJS({
    "node_modules/cssfilter/lib/css.js"(exports, module) {
      var DEFAULT = require_default();
      var parseStyle = require_parser();
      var _ = require_util();
      function isNull(obj) {
        return obj === void 0 || obj === null;
      }
      function shallowCopyObject(obj) {
        var ret = {};
        for (var i in obj) {
          ret[i] = obj[i];
        }
        return ret;
      }
      function FilterCSS(options) {
        options = shallowCopyObject(options || {});
        options.whiteList = options.whiteList || DEFAULT.whiteList;
        options.onAttr = options.onAttr || DEFAULT.onAttr;
        options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
        options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
        this.options = options;
      }
      FilterCSS.prototype.process = function(css) {
        css = css || "";
        css = css.toString();
        if (!css)
          return "";
        var me = this;
        var options = me.options;
        var whiteList = options.whiteList;
        var onAttr = options.onAttr;
        var onIgnoreAttr = options.onIgnoreAttr;
        var safeAttrValue = options.safeAttrValue;
        var retCSS = parseStyle(css, function(sourcePosition, position, name, value, source) {
          var check = whiteList[name];
          var isWhite = false;
          if (check === true)
            isWhite = check;
          else if (typeof check === "function")
            isWhite = check(value);
          else if (check instanceof RegExp)
            isWhite = check.test(value);
          if (isWhite !== true)
            isWhite = false;
          value = safeAttrValue(name, value);
          if (!value)
            return;
          var opts = {
            position,
            sourcePosition,
            source,
            isWhite
          };
          if (isWhite) {
            var ret = onAttr(name, value, opts);
            if (isNull(ret)) {
              return name + ":" + value;
            } else {
              return ret;
            }
          } else {
            var ret = onIgnoreAttr(name, value, opts);
            if (!isNull(ret)) {
              return ret;
            }
          }
        });
        return retCSS;
      };
      module.exports = FilterCSS;
    }
  });

  // node_modules/cssfilter/lib/index.js
  var require_lib = __commonJS({
    "node_modules/cssfilter/lib/index.js"(exports, module) {
      var DEFAULT = require_default();
      var FilterCSS = require_css();
      function filterCSS(html, options) {
        var xss2 = new FilterCSS(options);
        return xss2.process(html);
      }
      exports = module.exports = filterCSS;
      exports.FilterCSS = FilterCSS;
      for (i in DEFAULT)
        exports[i] = DEFAULT[i];
      var i;
      if (typeof window !== "undefined") {
        window.filterCSS = module.exports;
      }
    }
  });

  // node_modules/xss/lib/util.js
  var require_util2 = __commonJS({
    "node_modules/xss/lib/util.js"(exports, module) {
      module.exports = {
        indexOf: function(arr, item) {
          var i, j;
          if (Array.prototype.indexOf) {
            return arr.indexOf(item);
          }
          for (i = 0, j = arr.length; i < j; i++) {
            if (arr[i] === item) {
              return i;
            }
          }
          return -1;
        },
        forEach: function(arr, fn, scope) {
          var i, j;
          if (Array.prototype.forEach) {
            return arr.forEach(fn, scope);
          }
          for (i = 0, j = arr.length; i < j; i++) {
            fn.call(scope, arr[i], i, arr);
          }
        },
        trim: function(str) {
          if (String.prototype.trim) {
            return str.trim();
          }
          return str.replace(/(^\s*)|(\s*$)/g, "");
        },
        spaceIndex: function(str) {
          var reg = /\s|\n|\t/;
          var match = reg.exec(str);
          return match ? match.index : -1;
        }
      };
    }
  });

  // node_modules/xss/lib/default.js
  var require_default2 = __commonJS({
    "node_modules/xss/lib/default.js"(exports) {
      var FilterCSS = require_lib().FilterCSS;
      var getDefaultCSSWhiteList = require_lib().getDefaultWhiteList;
      var _ = require_util2();
      function getDefaultWhiteList() {
        return {
          a: ["target", "href", "title"],
          abbr: ["title"],
          address: [],
          area: ["shape", "coords", "href", "alt"],
          article: [],
          aside: [],
          audio: [
            "autoplay",
            "controls",
            "crossorigin",
            "loop",
            "muted",
            "preload",
            "src"
          ],
          b: [],
          bdi: ["dir"],
          bdo: ["dir"],
          big: [],
          blockquote: ["cite"],
          br: [],
          caption: [],
          center: [],
          cite: [],
          code: [],
          col: ["align", "valign", "span", "width"],
          colgroup: ["align", "valign", "span", "width"],
          dd: [],
          del: ["datetime"],
          details: ["open"],
          div: [],
          dl: [],
          dt: [],
          em: [],
          figcaption: [],
          figure: [],
          font: ["color", "size", "face"],
          footer: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          header: [],
          hr: [],
          i: [],
          img: ["src", "alt", "title", "width", "height"],
          ins: ["datetime"],
          li: [],
          mark: [],
          nav: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          section: [],
          small: [],
          span: [],
          sub: [],
          summary: [],
          sup: [],
          strong: [],
          strike: [],
          table: ["width", "border", "align", "valign"],
          tbody: ["align", "valign"],
          td: ["width", "rowspan", "colspan", "align", "valign"],
          tfoot: ["align", "valign"],
          th: ["width", "rowspan", "colspan", "align", "valign"],
          thead: ["align", "valign"],
          tr: ["rowspan", "align", "valign"],
          tt: [],
          u: [],
          ul: [],
          video: [
            "autoplay",
            "controls",
            "crossorigin",
            "loop",
            "muted",
            "playsinline",
            "poster",
            "preload",
            "src",
            "height",
            "width"
          ]
        };
      }
      var defaultCSSFilter = new FilterCSS();
      function onTag(tag, html, options) {
      }
      function onIgnoreTag(tag, html, options) {
      }
      function onTagAttr(tag, name, value) {
      }
      function onIgnoreTagAttr(tag, name, value) {
      }
      function escapeHtml(html) {
        return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
      }
      function safeAttrValue(tag, name, value, cssFilter) {
        value = friendlyAttrValue(value);
        if (name === "href" || name === "src") {
          value = _.trim(value);
          if (value === "#")
            return "#";
          if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value.substr(0, 11) === "data:image/" || value.substr(0, 6) === "ftp://" || value.substr(0, 2) === "./" || value.substr(0, 3) === "../" || value[0] === "#" || value[0] === "/")) {
            return "";
          }
        } else if (name === "background") {
          REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
          if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
            return "";
          }
        } else if (name === "style") {
          REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
          if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
            return "";
          }
          REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
          if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
            REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
            if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
              return "";
            }
          }
          if (cssFilter !== false) {
            cssFilter = cssFilter || defaultCSSFilter;
            value = cssFilter.process(value);
          }
        }
        value = escapeAttrValue(value);
        return value;
      }
      var REGEXP_LT = /</g;
      var REGEXP_GT = />/g;
      var REGEXP_QUOTE = /"/g;
      var REGEXP_QUOTE_2 = /&quot;/g;
      var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
      var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
      var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
      var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
      var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
      var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
      function escapeQuote(str) {
        return str.replace(REGEXP_QUOTE, "&quot;");
      }
      function unescapeQuote(str) {
        return str.replace(REGEXP_QUOTE_2, '"');
      }
      function escapeHtmlEntities(str) {
        return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str2, code) {
          return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10));
        });
      }
      function escapeDangerHtml5Entities(str) {
        return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
      }
      function clearNonPrintableCharacter(str) {
        var str2 = "";
        for (var i = 0, len = str.length; i < len; i++) {
          str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
        }
        return _.trim(str2);
      }
      function friendlyAttrValue(str) {
        str = unescapeQuote(str);
        str = escapeHtmlEntities(str);
        str = escapeDangerHtml5Entities(str);
        str = clearNonPrintableCharacter(str);
        return str;
      }
      function escapeAttrValue(str) {
        str = escapeQuote(str);
        str = escapeHtml(str);
        return str;
      }
      function onIgnoreTagStripAll() {
        return "";
      }
      function StripTagBody(tags, next) {
        if (typeof next !== "function") {
          next = function() {
          };
        }
        var isRemoveAllTag = !Array.isArray(tags);
        function isRemoveTag(tag) {
          if (isRemoveAllTag)
            return true;
          return _.indexOf(tags, tag) !== -1;
        }
        var removeList = [];
        var posStart = false;
        return {
          onIgnoreTag: function(tag, html, options) {
            if (isRemoveTag(tag)) {
              if (options.isClosing) {
                var ret = "[/removed]";
                var end = options.position + ret.length;
                removeList.push([
                  posStart !== false ? posStart : options.position,
                  end
                ]);
                posStart = false;
                return ret;
              } else {
                if (!posStart) {
                  posStart = options.position;
                }
                return "[removed]";
              }
            } else {
              return next(tag, html, options);
            }
          },
          remove: function(html) {
            var rethtml = "";
            var lastPos = 0;
            _.forEach(removeList, function(pos) {
              rethtml += html.slice(lastPos, pos[0]);
              lastPos = pos[1];
            });
            rethtml += html.slice(lastPos);
            return rethtml;
          }
        };
      }
      function stripCommentTag(html) {
        var retHtml = "";
        var lastPos = 0;
        while (lastPos < html.length) {
          var i = html.indexOf("<!--", lastPos);
          if (i === -1) {
            retHtml += html.slice(lastPos);
            break;
          }
          retHtml += html.slice(lastPos, i);
          var j = html.indexOf("-->", i);
          if (j === -1) {
            break;
          }
          lastPos = j + 3;
        }
        return retHtml;
      }
      function stripBlankChar(html) {
        var chars = html.split("");
        chars = chars.filter(function(char) {
          var c = char.charCodeAt(0);
          if (c === 127)
            return false;
          if (c <= 31) {
            if (c === 10 || c === 13)
              return true;
            return false;
          }
          return true;
        });
        return chars.join("");
      }
      exports.whiteList = getDefaultWhiteList();
      exports.getDefaultWhiteList = getDefaultWhiteList;
      exports.onTag = onTag;
      exports.onIgnoreTag = onIgnoreTag;
      exports.onTagAttr = onTagAttr;
      exports.onIgnoreTagAttr = onIgnoreTagAttr;
      exports.safeAttrValue = safeAttrValue;
      exports.escapeHtml = escapeHtml;
      exports.escapeQuote = escapeQuote;
      exports.unescapeQuote = unescapeQuote;
      exports.escapeHtmlEntities = escapeHtmlEntities;
      exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
      exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
      exports.friendlyAttrValue = friendlyAttrValue;
      exports.escapeAttrValue = escapeAttrValue;
      exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
      exports.StripTagBody = StripTagBody;
      exports.stripCommentTag = stripCommentTag;
      exports.stripBlankChar = stripBlankChar;
      exports.cssFilter = defaultCSSFilter;
      exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;
    }
  });

  // node_modules/xss/lib/parser.js
  var require_parser2 = __commonJS({
    "node_modules/xss/lib/parser.js"(exports) {
      var _ = require_util2();
      function getTagName(html) {
        var i = _.spaceIndex(html);
        if (i === -1) {
          var tagName = html.slice(1, -1);
        } else {
          var tagName = html.slice(1, i + 1);
        }
        tagName = _.trim(tagName).toLowerCase();
        if (tagName.slice(0, 1) === "/")
          tagName = tagName.slice(1);
        if (tagName.slice(-1) === "/")
          tagName = tagName.slice(0, -1);
        return tagName;
      }
      function isClosing(html) {
        return html.slice(0, 2) === "</";
      }
      function parseTag(html, onTag, escapeHtml) {
        "use strict";
        var rethtml = "";
        var lastPos = 0;
        var tagStart = false;
        var quoteStart = false;
        var currentPos = 0;
        var len = html.length;
        var currentTagName = "";
        var currentHtml = "";
        chariterator:
          for (currentPos = 0; currentPos < len; currentPos++) {
            var c = html.charAt(currentPos);
            if (tagStart === false) {
              if (c === "<") {
                tagStart = currentPos;
                continue;
              }
            } else {
              if (quoteStart === false) {
                if (c === "<") {
                  rethtml += escapeHtml(html.slice(lastPos, currentPos));
                  tagStart = currentPos;
                  lastPos = currentPos;
                  continue;
                }
                if (c === ">") {
                  rethtml += escapeHtml(html.slice(lastPos, tagStart));
                  currentHtml = html.slice(tagStart, currentPos + 1);
                  currentTagName = getTagName(currentHtml);
                  rethtml += onTag(tagStart, rethtml.length, currentTagName, currentHtml, isClosing(currentHtml));
                  lastPos = currentPos + 1;
                  tagStart = false;
                  continue;
                }
                if (c === '"' || c === "'") {
                  var i = 1;
                  var ic = html.charAt(currentPos - i);
                  while (ic.trim() === "" || ic === "=") {
                    if (ic === "=") {
                      quoteStart = c;
                      continue chariterator;
                    }
                    ic = html.charAt(currentPos - ++i);
                  }
                }
              } else {
                if (c === quoteStart) {
                  quoteStart = false;
                  continue;
                }
              }
            }
          }
        if (lastPos < html.length) {
          rethtml += escapeHtml(html.substr(lastPos));
        }
        return rethtml;
      }
      var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;
      function parseAttr(html, onAttr) {
        "use strict";
        var lastPos = 0;
        var retAttrs = [];
        var tmpName = false;
        var len = html.length;
        function addAttr(name, value) {
          name = _.trim(name);
          name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
          if (name.length < 1)
            return;
          var ret = onAttr(name, value || "");
          if (ret)
            retAttrs.push(ret);
        }
        for (var i = 0; i < len; i++) {
          var c = html.charAt(i);
          var v, j;
          if (tmpName === false && c === "=") {
            tmpName = html.slice(lastPos, i);
            lastPos = i + 1;
            continue;
          }
          if (tmpName !== false) {
            if (i === lastPos && (c === '"' || c === "'") && html.charAt(i - 1) === "=") {
              j = html.indexOf(c, i + 1);
              if (j === -1) {
                break;
              } else {
                v = _.trim(html.slice(lastPos + 1, j));
                addAttr(tmpName, v);
                tmpName = false;
                i = j;
                lastPos = i + 1;
                continue;
              }
            }
          }
          if (/\s|\n|\t/.test(c)) {
            html = html.replace(/\s|\n|\t/g, " ");
            if (tmpName === false) {
              j = findNextEqual(html, i);
              if (j === -1) {
                v = _.trim(html.slice(lastPos, i));
                addAttr(v);
                tmpName = false;
                lastPos = i + 1;
                continue;
              } else {
                i = j - 1;
                continue;
              }
            } else {
              j = findBeforeEqual(html, i - 1);
              if (j === -1) {
                v = _.trim(html.slice(lastPos, i));
                v = stripQuoteWrap(v);
                addAttr(tmpName, v);
                tmpName = false;
                lastPos = i + 1;
                continue;
              } else {
                continue;
              }
            }
          }
        }
        if (lastPos < html.length) {
          if (tmpName === false) {
            addAttr(html.slice(lastPos));
          } else {
            addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
          }
        }
        return _.trim(retAttrs.join(" "));
      }
      function findNextEqual(str, i) {
        for (; i < str.length; i++) {
          var c = str[i];
          if (c === " ")
            continue;
          if (c === "=")
            return i;
          return -1;
        }
      }
      function findBeforeEqual(str, i) {
        for (; i > 0; i--) {
          var c = str[i];
          if (c === " ")
            continue;
          if (c === "=")
            return i;
          return -1;
        }
      }
      function isQuoteWrapString(text) {
        if (text[0] === '"' && text[text.length - 1] === '"' || text[0] === "'" && text[text.length - 1] === "'") {
          return true;
        } else {
          return false;
        }
      }
      function stripQuoteWrap(text) {
        if (isQuoteWrapString(text)) {
          return text.substr(1, text.length - 2);
        } else {
          return text;
        }
      }
      exports.parseTag = parseTag;
      exports.parseAttr = parseAttr;
    }
  });

  // node_modules/xss/lib/xss.js
  var require_xss = __commonJS({
    "node_modules/xss/lib/xss.js"(exports, module) {
      var FilterCSS = require_lib().FilterCSS;
      var DEFAULT = require_default2();
      var parser = require_parser2();
      var parseTag = parser.parseTag;
      var parseAttr = parser.parseAttr;
      var _ = require_util2();
      function isNull(obj) {
        return obj === void 0 || obj === null;
      }
      function getAttrs(html) {
        var i = _.spaceIndex(html);
        if (i === -1) {
          return {
            html: "",
            closing: html[html.length - 2] === "/"
          };
        }
        html = _.trim(html.slice(i + 1, -1));
        var isClosing = html[html.length - 1] === "/";
        if (isClosing)
          html = _.trim(html.slice(0, -1));
        return {
          html,
          closing: isClosing
        };
      }
      function shallowCopyObject(obj) {
        var ret = {};
        for (var i in obj) {
          ret[i] = obj[i];
        }
        return ret;
      }
      function FilterXSS(options) {
        options = shallowCopyObject(options || {});
        if (options.stripIgnoreTag) {
          if (options.onIgnoreTag) {
            console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time');
          }
          options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
        }
        options.whiteList = options.whiteList || options.allowList || DEFAULT.whiteList;
        options.onTag = options.onTag || DEFAULT.onTag;
        options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
        options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
        options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
        options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
        options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
        this.options = options;
        if (options.css === false) {
          this.cssFilter = false;
        } else {
          options.css = options.css || {};
          this.cssFilter = new FilterCSS(options.css);
        }
      }
      FilterXSS.prototype.process = function(html) {
        html = html || "";
        html = html.toString();
        if (!html)
          return "";
        var me = this;
        var options = me.options;
        var whiteList = options.whiteList;
        var onTag = options.onTag;
        var onIgnoreTag = options.onIgnoreTag;
        var onTagAttr = options.onTagAttr;
        var onIgnoreTagAttr = options.onIgnoreTagAttr;
        var safeAttrValue = options.safeAttrValue;
        var escapeHtml = options.escapeHtml;
        var cssFilter = me.cssFilter;
        if (options.stripBlankChar) {
          html = DEFAULT.stripBlankChar(html);
        }
        if (!options.allowCommentTag) {
          html = DEFAULT.stripCommentTag(html);
        }
        var stripIgnoreTagBody = false;
        if (options.stripIgnoreTagBody) {
          var stripIgnoreTagBody = DEFAULT.StripTagBody(options.stripIgnoreTagBody, onIgnoreTag);
          onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
        }
        var retHtml = parseTag(html, function(sourcePosition, position, tag, html2, isClosing) {
          var info = {
            sourcePosition,
            position,
            isClosing,
            isWhite: whiteList.hasOwnProperty(tag)
          };
          var ret = onTag(tag, html2, info);
          if (!isNull(ret))
            return ret;
          if (info.isWhite) {
            if (info.isClosing) {
              return "</" + tag + ">";
            }
            var attrs = getAttrs(html2);
            var whiteAttrList = whiteList[tag];
            var attrsHtml = parseAttr(attrs.html, function(name, value) {
              var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
              var ret2 = onTagAttr(tag, name, value, isWhiteAttr);
              if (!isNull(ret2))
                return ret2;
              if (isWhiteAttr) {
                value = safeAttrValue(tag, name, value, cssFilter);
                if (value) {
                  return name + '="' + value + '"';
                } else {
                  return name;
                }
              } else {
                var ret2 = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
                if (!isNull(ret2))
                  return ret2;
                return;
              }
            });
            var html2 = "<" + tag;
            if (attrsHtml)
              html2 += " " + attrsHtml;
            if (attrs.closing)
              html2 += " /";
            html2 += ">";
            return html2;
          } else {
            var ret = onIgnoreTag(tag, html2, info);
            if (!isNull(ret))
              return ret;
            return escapeHtml(html2);
          }
        }, escapeHtml);
        if (stripIgnoreTagBody) {
          retHtml = stripIgnoreTagBody.remove(retHtml);
        }
        return retHtml;
      };
      module.exports = FilterXSS;
    }
  });

  // node_modules/xss/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/xss/lib/index.js"(exports, module) {
      var DEFAULT = require_default2();
      var parser = require_parser2();
      var FilterXSS = require_xss();
      function filterXSS(html, options) {
        var xss2 = new FilterXSS(options);
        return xss2.process(html);
      }
      exports = module.exports = filterXSS;
      exports.filterXSS = filterXSS;
      exports.FilterXSS = FilterXSS;
      for (i in DEFAULT)
        exports[i] = DEFAULT[i];
      var i;
      for (i in parser)
        exports[i] = parser[i];
      var i;
      if (typeof window !== "undefined") {
        window.filterXSS = module.exports;
      }
      function isWorkerEnv() {
        return typeof self !== "undefined" && typeof DedicatedWorkerGlobalScope !== "undefined" && self instanceof DedicatedWorkerGlobalScope;
      }
      if (isWorkerEnv()) {
        self.filterXSS = module.exports;
      }
    }
  });

  // src/index.js
  var import_xss = __toESM(require_lib2(), 1);
  function src_default(Alpine) {
    Alpine.safe = (html) => (0, import_xss.default)(html.toString());
    Alpine.magic("safe", () => (html) => Alpine.safe(html));
    Alpine.directive("safe", (el, { expression }, { effect, evaluateLater }) => {
      const evaluate = evaluateLater(expression);
      effect(() => evaluate((html) => el.innerHTML = Alpine.safe(html)));
    });
  }

  // builds/browser.js
  document.addEventListener("alpine:init", () => window.Alpine.plugin(src_default));
})();
//# sourceMappingURL=alpine-safe.js.map
