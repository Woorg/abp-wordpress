/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./assets/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./markup/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./markup/assets/js/main.js":
/*!**********************************!*\
  !*** ./markup/assets/js/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fast_average_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-average-color */ "./node_modules/fast-average-color/dist/index.esm.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);


 // import { tns } from "tiny-slider/src/tiny-slider";
// import $ from 'jquery';

(function ($) {
  svg4everybody__WEBPACK_IMPORTED_MODULE_0___default()();
  let styles = ['padding: 2px 9px', 'background: #1b1e64', 'color: #fff', 'display: inline-block', 'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset', 'line-height: 1.52', 'text-align: left', 'font-size: 14px', 'font-weight: 400'].join(';');
  console.log('%c developed by igor gorlov gorlov https://igrlv.ru', styles);
  window.addEventListener('load', function () {
    const ac = new fast_average_color__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const items = document.querySelectorAll('.books__category');

    for (var i = 0; i < items.length; i++) {
      if ($(window).width() >= 500) {
        const item = items[i],
              image = item.querySelector('img'),
              picture = item.querySelector('.books__picture'),
              isBottom = item.classList.contains('item_bottom'),
              gradient = item.querySelector('.books__gradient'),
              size = 200,
              color = ac.getColor(image, isBottom ? {
          top: height - size,
          height: size
        } : {
          height: size
        }),
              colorEnd = [].concat(color.value.slice(0, 3), 0.5).join(','),
              lg = 'linear-gradient(to bottom, rgb(0, 0, 0, 0) 0%,  rgba(0, 0, 0, 0.5) 77%)';
        gradient.style.backgroundColor = 'rgba(' + colorEnd + ')';
        gradient.style.backgroundImage = lg;
      } else {
        const item = items[i],
              image = item.querySelector('img'),
              picture = item.querySelector('.books__picture'),
              isBottom = item.classList.contains('item_bottom'),
              gradient = item.querySelector('.books__gradient'),
              size = 100,
              color = ac.getColor(image, isBottom ? {
          top: width - size,
          width: size
        } : {
          width: size
        }),
              colorEnd = [].concat(color.value.slice(0, 3), 0.5).join(','),
              lg = 'linear-gradient(to left, rgb(0, 0, 0, 0) 0%,  rgba(0, 0, 0, 0.5) 91%)';
        gradient.style.backgroundColor = 'rgba(' + colorEnd + ')';
        gradient.style.backgroundImage = lg;
      }
    }
  }, false);
  $(function () {
    /*
       Lazyload images
     */
    let lazyLoadInstance = new LazyLoad({
      elements_selector: '.lazy',
      load_delay: 50,
      use_native: true
    });

    if (lazyLoadInstance) {
      lazyLoadInstance.update();
    } // Cookies


    const $cookie = document.querySelector('.cookies');
    const $cookieClose = document.querySelector('.cookies__close');

    function agreeWithCookies() {
      var age = 60 * 60 * 24 * 30;
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('agreedWithCookies', 'agreedWithCookies', {
        expires: age
      });
    }

    if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('agreedWithCookies') === 'agreedWithCookies') {
      // console.log(Cookies.get('agreedWithCookies'));
      document.body.classList.remove("page__cookie-visible");
    } else {
      // console.log(Cookies.get('agreedWithCookies'));
      document.body.classList.add("page__cookie-visible");
      $cookieClose.addEventListener('click', function (e) {
        e.preventDefault();
        agreeWithCookies();
        document.body.classList.remove("page__cookie-visible");
      });
    } // Nav


    const $header = $('.header');
    const $navTrigger = $('.nav__trigger');
    $navTrigger.on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('nav__trigger_active');
      $header.toggleClass('header_open');
    }); // Close nav

    $(document).on('click', function (e) {
      if (!$(e.target).closest('.nav__trigger_active').length) {
        $navTrigger.removeClass('nav__trigger_active');
        $header.removeClass('header_open');
      }
    }); // ScrollTo
    // $('.home .nav__list a, .home .nav-sec__list a').on('click', function (e) {
    //   e.preventDefault();
    //   let _scroll = $(this).attr('href');
    //   if (_scroll != '#' && $(_scroll).length) {
    //     $('html, body').animate({
    //       scrollTop: $(_scroll).offset().top - 0
    //     }, 300);
    //   }
    // });
    // HeaderSlider

    const $headerSlider = $('.header__slider');

    if ($headerSlider.length > 0) {
      $headerSlider.slick({
        slidesToScroll: 1,
        dots: false,
        slidesToShow: 1,
        mobileFirst: true,
        // loop: true,
        accessibility: true,
        infinite: true,
        speed: 600,
        focusOnSelect: true,
        waitForAnimate: false,
        adaptiveHeight: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        // autoplay: false,
        autoplaySpeed: 20000,
        arrows: false
      });
    } // Story slider


    const $storySlider = $('.story__timeline'); // const $storySlider = $('.story__timeline');

    if ($storySlider.length > 0) {
      $storySlider.slick({
        dots: true,
        mobileFirst: true,
        focusOnSelect: true,
        waitForAnimate: true,
        // adaptiveHeight: true,
        adaptiveHeight: false,
        arrows: false,
        infinite: false,
        responsive: [{
          breakpoint: 1,
          settings: {
            slidesToShow: 1,
            // initialSlide: 5,
            centerMode: true,
            centerPadding: '0px' // fade: true,
            // adaptiveHeight: true,

          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2 // adaptiveHeight: true,

          }
        }, {
          breakpoint: 1200,
          settings: 'unslick'
        }]
      }); // $('.slider-nav').slick({
      //   slidesToShow: 6,
      //   slidesToScroll: 4,
      //   asNavFor: '.slider-for',
      //   dots: true,
      //   centerMode: true,
      //   focusOnSelect: true
      // });
    } // Press slider


    const $pressSlider = $('.press__slider');

    if ($pressSlider.length > 0) {
      $pressSlider.slick({
        slidesToScroll: 3,
        dots: true,
        mobileFirst: true,
        loop: true,
        speed: 300,
        focusOnSelect: true,
        waitForAnimate: false,
        adaptiveHeight: false,
        arrows: false,
        responsive: [{
          breakpoint: 1,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false
          }
        }, {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            prevArrow: '.press__arrow_back',
            nextArrow: '.press__arrow_next'
          }
        }]
      });
    } // Books


    const $booksCategory = $(".books__category");

    if ($(window).width() >= 768) {
      $booksCategory.eq(2).addClass('books__category_active');

      if (!$booksCategory.hasClass('.books__category_active')) {
        $booksCategory.siblings('.books__category').find('.books__cat-w').addClass('books__cat-w_active');
      }

      $booksCategory.hover(function () {
        $(".books__categories").find(".books__category_active").removeClass("books__category_active");
        $(this).addClass("books__category_active");

        if (!$(this).hasClass('.books__category_active')) {
          $(this).siblings('.books__category').find('.books__cat-w').addClass('books__cat-w_active');
        }
      }, function () {
        $(".books__categories").children(".books__category_active").removeClass("books__category_active");
        $(this).siblings('.books__category').find('.books__cat-w').removeClass('books__cat-w_active');
      });
    } else {
      $booksCategory.eq(2).addClass('books__category_active');
      $booksCategory.hover(function () {
        $(".books__categories").find(".books__category_active").removeClass("books__category_active");
        $(this).addClass("books__category_active");

        if (!$(this).hasClass('.books__category_active')) {
          $(this).siblings('.books__category').find('.books__cat-w').addClass('books__cat-w_active');
        }
      });
    } // Middle color

  });
})(jQuery);

/***/ }),

/***/ "./node_modules/fast-average-color/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/fast-average-color/dist/index.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! Fast Average Color | © 2020 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */
function isIgnoredColor(arr, num, ignoredColor) {
    return arr[num] === ignoredColor[0] && // red
        arr[num + 1] === ignoredColor[1] && // green
        arr[num + 2] === ignoredColor[2] && // blue
        arr[num + 3] === ignoredColor[3]; // alpha
}

function dominantAlgorithm(arr, len, options) {
    const colorHash = {};
    const divider = 24;
    const ignoredColor = options.ignoredColor;

    for (let i = 0; i < len; i += options.step) {
        let red = arr[i];
        let green = arr[i + 1];
        let blue = arr[i + 2];
        let alpha = arr[i + 3];

        if (ignoredColor && isIgnoredColor(arr, i, ignoredColor)) {
            continue;
        }

        const key = Math.round(red / divider) + ',' +
                Math.round(green / divider) + ',' +
                Math.round(blue / divider);

        if (colorHash[key]) {
            colorHash[key] = [
                colorHash[key][0] + red * alpha,
                colorHash[key][1] + green * alpha,
                colorHash[key][2] + blue * alpha,
                colorHash[key][3] + alpha,
                colorHash[key][4] + 1
            ];
        } else {
            colorHash[key] = [red * alpha, green * alpha, blue * alpha, alpha, 1];
        }
    }

    const buffer = Object.keys(colorHash).map(key => {
        return colorHash[key];
    }).sort((a, b) => {
        const countA = a[4];
        const countB = b[4];

        return countA > countB ?  -1 : countA === countB ? 0 : 1;
    });

    const max = buffer[0];

    const redTotal = max[0];
    const greenTotal = max[1];
    const blueTotal = max[2];

    const alphaTotal = max[3];
    const count = max[4];

    return alphaTotal ? [
        Math.round(redTotal / alphaTotal),
        Math.round(greenTotal / alphaTotal),
        Math.round(blueTotal / alphaTotal),
        Math.round(alphaTotal / count)
    ] : options.defaultColor;
}

function simpleAlgorithm(arr, len, options) {
    let redTotal = 0;
    let greenTotal = 0;
    let blueTotal = 0;
    let alphaTotal = 0;
    let count = 0;

    const ignoredColor = options.ignoredColor;

    for (let i = 0; i < len; i += options.step) {
        const alpha = arr[i + 3];
        const red = arr[i] * alpha;
        const green = arr[i + 1] * alpha;
        const blue = arr[i + 2] * alpha;

        if (ignoredColor && isIgnoredColor(arr, i, ignoredColor)) {
            continue;
        }

        redTotal += red;
        greenTotal += green;
        blueTotal += blue;
        alphaTotal += alpha;
        count++;
    }

    return alphaTotal ? [
        Math.round(redTotal / alphaTotal),
        Math.round(greenTotal / alphaTotal),
        Math.round(blueTotal / alphaTotal),
        Math.round(alphaTotal / count)
    ] : options.defaultColor;
}

function sqrtAlgorithm(arr, len, options) {
    let redTotal = 0;
    let greenTotal = 0;
    let blueTotal = 0;
    let alphaTotal = 0;
    let count = 0;

    const ignoredColor = options.ignoredColor;

    for (let i = 0; i < len; i += options.step) {
        const red = arr[i];
        const green = arr[i + 1];
        const blue = arr[i + 2];
        const alpha = arr[i + 3];

        if (ignoredColor && isIgnoredColor(arr, i, ignoredColor)) {
            continue;
        }

        redTotal += red * red * alpha;
        greenTotal += green * green * alpha;
        blueTotal += blue * blue * alpha;
        alphaTotal += alpha;
        count++;
    }

    return alphaTotal ? [
        Math.round(Math.sqrt(redTotal / alphaTotal)),
        Math.round(Math.sqrt(greenTotal / alphaTotal)),
        Math.round(Math.sqrt(blueTotal / alphaTotal)),
        Math.round(alphaTotal / count)
    ] : options.defaultColor;
}

const ERROR_PREFIX = 'FastAverageColor: ';

class FastAverageColor {
    /**
     * Get asynchronously the average color from not loaded image.
     *
     * @param {HTMLImageElement | string | null} resource
     * @param {Object} [options]
     * @param {Array}  [options.defaultColor=[0, 0, 0, 0]] [red, green, blue, alpha]
     * @param {Array}  [options.ignoredColor] [red, green, blue, alpha]
     * @param {string} [options.mode="speed"] "precision" or "speed"
     * @param {string} [options.algorithm="sqrt"] "simple", "sqrt" or "dominant"
     * @param {number} [options.step=1]
     * @param {number} [options.left=0]
     * @param {number} [options.top=0]
     * @param {number} [options.width=width of resource]
     * @param {number} [options.height=height of resource]
     * @param {boolean} [options.silent] Disable error output via console.error
     *
     * @returns {Promise}
     */
    getColorAsync(resource, options) {
        if (!resource) {
            return Promise.reject(Error(`${ERROR_PREFIX}call .getColorAsync() without resource.`));
        } else if (typeof resource === 'string') {
            const img = new Image();
            img.crossOrigin = '';
            img.src = resource;
            return this._bindImageEvents(img, options);
        } else if (resource.complete) {
            const result = this.getColor(resource, options);
            return result.error ? Promise.reject(result.error) : Promise.resolve(result);
        } else {
            return this._bindImageEvents(resource, options);
        }
    }

    /**
     * Get the average color from images, videos and canvas.
     *
     * @param {HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | null} resource
     * @param {Object} [options]
     * @param {Array}  [options.defaultColor=[0, 0, 0, 0]] [red, green, blue, alpha]
     * @param {Array}  [options.ignoredColor] [red, green, blue, alpha]
     * @param {string} [options.mode="speed"] "precision" or "speed"
     * @param {string} [options.algorithm="sqrt"] "simple", "sqrt" or "dominant"
     * @param {number} [options.step=1]
     * @param {number} [options.left=0]
     * @param {number} [options.top=0]
     * @param {number} [options.width=width of resource]
     * @param {number} [options.height=height of resource]
     * @param {boolean} [options.silent] Disable error output via console.error
     *
     * @returns {Object}
     */
    getColor(resource, options) {
        options = options || {};

        const defaultColor = this._getDefaultColor(options);

        let value = defaultColor;
        if (!resource) {
            this._outputError(options, 'call .getColor(null) without resource.');

            return this._prepareResult(defaultColor);
        }

        const originalSize = this._getOriginalSize(resource);
        const size = this._prepareSizeAndPosition(originalSize, options);

        if (!size.srcWidth || !size.srcHeight || !size.destWidth || !size.destHeight) {
            this._outputError(options, `incorrect sizes for resource "${resource.src}".`);

            return this._prepareResult(defaultColor);
        }

        if (!this._ctx) {
            this._canvas = this._makeCanvas();
            this._ctx = this._canvas.getContext && this._canvas.getContext('2d');

            if (!this._ctx) {
                this._outputError(options, 'Canvas Context 2D is not supported in this browser.');

                return this._prepareResult(defaultColor);
            }
        }

        this._canvas.width = size.destWidth;
        this._canvas.height = size.destHeight;

        try {
            this._ctx.clearRect(0, 0, size.destWidth, size.destHeight);
            this._ctx.drawImage(
                resource,
                size.srcLeft, size.srcTop,
                size.srcWidth, size.srcHeight,
                0, 0,
                size.destWidth, size.destHeight
            );

            const bitmapData = this._ctx.getImageData(0, 0, size.destWidth, size.destHeight).data;
            value = this.getColorFromArray4(bitmapData, options);
        } catch (e) {
            this._outputError(options, `security error (CORS) for resource ${resource.src}.\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image`, e);
        }

        return this._prepareResult(value);
    }

    /**
     * Get the average color from a array when 1 pixel is 4 bytes.
     *
     * @param {Array|Uint8Array} arr
     * @param {Object} [options]
     * @param {string} [options.algorithm="sqrt"] "simple", "sqrt" or "dominant"
     * @param {Array}  [options.defaultColor=[0, 0, 0, 0]] [red, green, blue, alpha]
     * @param {Array}  [options.ignoredColor] [red, green, blue, alpha]
     * @param {number} [options.step=1]
     *
     * @returns {Array} [red (0-255), green (0-255), blue (0-255), alpha (0-255)]
     */
    getColorFromArray4(arr, options) {
        options = options || {};

        const bytesPerPixel = 4;
        const arrLength = arr.length;
        const defaultColor = this._getDefaultColor(options);

        if (arrLength < bytesPerPixel) {
            return defaultColor;
        }

        const len = arrLength - arrLength % bytesPerPixel;
        const step = (options.step || 1) * bytesPerPixel;

        let algorithm;

        switch (options.algorithm || 'sqrt') {
            case 'simple':
                algorithm = simpleAlgorithm;
                break;
            case 'sqrt':
                algorithm = sqrtAlgorithm;
                break;
            case 'dominant':
                algorithm = dominantAlgorithm;
                break;
            default:
                throw Error(`${ERROR_PREFIX}${options.algorithm} is unknown algorithm.`);
        }

        return algorithm(arr, len, {
            defaultColor,
            ignoredColor: options.ignoredColor,
            step
        });
    }

    /**
     * Destroy the instance.
     */
    destroy() {
        delete this._canvas;
        delete this._ctx;
    }

    _getDefaultColor(options) {
        return this._getOption(options, 'defaultColor', [0, 0, 0, 0]);
    }

    _getOption(options, name, defaultValue) {
        return typeof options[name] === 'undefined' ? defaultValue : options[name];
    }

    _prepareSizeAndPosition(originalSize, options) {
        let
            srcLeft = this._getOption(options, 'left', 0),
            srcTop = this._getOption(options, 'top', 0),
            srcWidth = this._getOption(options, 'width', originalSize.width),
            srcHeight = this._getOption(options, 'height', originalSize.height),
            destWidth = srcWidth,
            destHeight = srcHeight;

        if (options.mode === 'precision') {
            return {
                srcLeft,
                srcTop,
                srcWidth,
                srcHeight,
                destWidth,
                destHeight
            };
        }

        const maxSize = 100;
        const minSize = 10;

        let factor;

        if (srcWidth > srcHeight) {
            factor = srcWidth / srcHeight;
            destWidth = maxSize;
            destHeight = Math.round(destWidth / factor);
        } else {
            factor = srcHeight / srcWidth;
            destHeight = maxSize;
            destWidth = Math.round(destHeight / factor);
        }

        if (
            destWidth > srcWidth || destHeight > srcHeight ||
            destWidth < minSize || destHeight < minSize
        ) {
            destWidth = srcWidth;
            destHeight = srcHeight;
        }

        return {
            srcLeft,
            srcTop,
            srcWidth,
            srcHeight,
            destWidth,
            destHeight
        };
    }

    _bindImageEvents(resource, options) {
        return new Promise((resolve, reject) => {
            const onload = () => {
                unbindEvents();

                const result = this.getColor(resource, options);

                if (result.error) {
                    reject(result.error);
                } else {
                    resolve(result);
                }
            };

            const onerror = () => {
                unbindEvents();

                reject(Error(`${ERROR_PREFIX}Error loading image ${resource.src}.`));
            };

            const onabort = () => {
                unbindEvents();

                reject(Error(`${ERROR_PREFIX}Image "${resource.src}" loading aborted.`));
            };

            const unbindEvents = () => {
                resource.removeEventListener('load', onload);
                resource.removeEventListener('error', onerror);
                resource.removeEventListener('abort', onabort);
            };

            resource.addEventListener('load', onload);
            resource.addEventListener('error', onerror);
            resource.addEventListener('abort', onabort);
        });
    }

    _prepareResult(value) {
        const rgb = value.slice(0, 3);
        const rgba = [].concat(rgb, value[3] / 255);
        const isDark = this._isDark(value);

        return {
            value,
            rgb: 'rgb(' + rgb.join(',') + ')',
            rgba: 'rgba(' + rgba.join(',') + ')',
            hex: this._arrayToHex(rgb),
            hexa: this._arrayToHex(value),
            isDark,
            isLight: !isDark
        };
    }

    _getOriginalSize(resource) {
        if (resource instanceof HTMLImageElement) {
            return {
                width: resource.naturalWidth,
                height: resource.naturalHeight
            };
        }

        if (resource instanceof HTMLVideoElement) {
            return {
                width: resource.videoWidth,
                height: resource.videoHeight
            };
        }

        return {
            width: resource.width,
            height: resource.height
        };
    }

    _toHex(num) {
        let str = num.toString(16);

        return str.length === 1 ? '0' + str : str;
    }

    _arrayToHex(arr) {
        return '#' + arr.map(this._toHex).join('');
    }

    _isDark(color) {
        // http://www.w3.org/TR/AERT#color-contrast
        const result = (color[0] * 299 + color[1] * 587 + color[2] * 114) / 1000;

        return result < 128;
    }

    _makeCanvas() {
        return typeof window === 'undefined' ?
            new OffscreenCanvas(1, 1) :
            document.createElement('canvas');
    }

    _outputError(options, error, details) {
        if (!options.silent) {
            console.error(`${ERROR_PREFIX}${error}`);

            if (details) {
                console.error(details);
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (FastAverageColor);


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/svg4everybody/dist/svg4everybody.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg4everybody/dist/svg4everybody.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
     true ? // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return root.svg4everybody = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYXN0LWF2ZXJhZ2UtY29sb3IvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyJdLCJuYW1lcyI6WyIkIiwic3ZnNGV2ZXJ5Ym9keSIsInN0eWxlcyIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFjIiwiRmFzdEF2ZXJhZ2VDb2xvciIsIml0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsIndpZHRoIiwiaXRlbSIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsInBpY3R1cmUiLCJpc0JvdHRvbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZ3JhZGllbnQiLCJzaXplIiwiY29sb3IiLCJnZXRDb2xvciIsInRvcCIsImhlaWdodCIsImNvbG9yRW5kIiwiY29uY2F0IiwidmFsdWUiLCJzbGljZSIsImxnIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsYXp5TG9hZEluc3RhbmNlIiwiTGF6eUxvYWQiLCJlbGVtZW50c19zZWxlY3RvciIsImxvYWRfZGVsYXkiLCJ1c2VfbmF0aXZlIiwidXBkYXRlIiwiJGNvb2tpZSIsIiRjb29raWVDbG9zZSIsImFncmVlV2l0aENvb2tpZXMiLCJhZ2UiLCJDb29raWVzIiwic2V0IiwiZXhwaXJlcyIsImdldCIsImJvZHkiLCJyZW1vdmUiLCJhZGQiLCJlIiwicHJldmVudERlZmF1bHQiLCIkaGVhZGVyIiwiJG5hdlRyaWdnZXIiLCJvbiIsInRvZ2dsZUNsYXNzIiwidGFyZ2V0IiwiY2xvc2VzdCIsInJlbW92ZUNsYXNzIiwiJGhlYWRlclNsaWRlciIsInNsaWNrIiwic2xpZGVzVG9TY3JvbGwiLCJkb3RzIiwic2xpZGVzVG9TaG93IiwibW9iaWxlRmlyc3QiLCJhY2Nlc3NpYmlsaXR5IiwiaW5maW5pdGUiLCJzcGVlZCIsImZvY3VzT25TZWxlY3QiLCJ3YWl0Rm9yQW5pbWF0ZSIsImFkYXB0aXZlSGVpZ2h0IiwiZmFkZSIsImNzc0Vhc2UiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJhcnJvd3MiLCIkc3RvcnlTbGlkZXIiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCIkcHJlc3NTbGlkZXIiLCJsb29wIiwicHJldkFycm93IiwibmV4dEFycm93IiwiJGJvb2tzQ2F0ZWdvcnkiLCJlcSIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJzaWJsaW5ncyIsImZpbmQiLCJob3ZlciIsImNoaWxkcmVuIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0Y7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFCQUFxQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdFQUFnRTtBQUM1RjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9hc3NldHMvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbWFya3VwL2Fzc2V0cy9qcy9tYWluLmpzXCIpO1xuIiwiaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XG5pbXBvcnQgRmFzdEF2ZXJhZ2VDb2xvciBmcm9tICdmYXN0LWF2ZXJhZ2UtY29sb3InO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbi8vIGltcG9ydCB7IHRucyB9IGZyb20gXCJ0aW55LXNsaWRlci9zcmMvdGlueS1zbGlkZXJcIjtcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cblxuKGZ1bmN0aW9uICgkKSB7XG5cbiAgc3ZnNGV2ZXJ5Ym9keSgpO1xuXG4gIGxldCBzdHlsZXMgPSBbXG4gICAgJ3BhZGRpbmc6IDJweCA5cHgnLFxuICAgICdiYWNrZ3JvdW5kOiAjMWIxZTY0JyxcbiAgICAnY29sb3I6ICNmZmYnLFxuICAgICdkaXNwbGF5OiBpbmxpbmUtYmxvY2snLFxuICAgICdib3gtc2hhZG93OiAwIC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgaW5zZXQsIDAgNXB4IDNweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAtMTNweCA1cHggLTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIGluc2V0JyxcbiAgICAnbGluZS1oZWlnaHQ6IDEuNTInLFxuICAgICd0ZXh0LWFsaWduOiBsZWZ0JyxcbiAgICAnZm9udC1zaXplOiAxNHB4JyxcbiAgICAnZm9udC13ZWlnaHQ6IDQwMCdcbiAgXS5qb2luKCc7Jyk7XG5cbiAgY29uc29sZS5sb2coJyVjIGRldmVsb3BlZCBieSBpZ29yIGdvcmxvdiBnb3Jsb3YgaHR0cHM6Ly9pZ3Jsdi5ydScsIHN0eWxlcyk7XG5cblxuXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhYyA9IG5ldyBGYXN0QXZlcmFnZUNvbG9yKCk7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va3NfX2NhdGVnb3J5Jyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gNTAwKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldLFxuICAgICAgICAgIGltYWdlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKSxcbiAgICAgICAgICBwaWN0dXJlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYm9va3NfX3BpY3R1cmUnKSxcblxuICAgICAgICAgIGlzQm90dG9tID0gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1fYm90dG9tJyksXG4gICAgICAgICAgZ3JhZGllbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5ib29rc19fZ3JhZGllbnQnKSxcblxuICAgICAgICAgIHNpemUgPSAyMDAsXG5cbiAgICAgICAgICBjb2xvciA9IGFjLmdldENvbG9yKGltYWdlLCBpc0JvdHRvbSA/IHtcbiAgICAgICAgICAgIHRvcDogaGVpZ2h0IC0gc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZVxuICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IHNpemVcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb2xvckVuZCA9IFtdLmNvbmNhdChjb2xvci52YWx1ZS5zbGljZSgwLCAzKSwgMC41KS5qb2luKCcsJyksXG5cbiAgICAgICAgICBsZyA9ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMCwgMCwgMCwgMCkgMCUsICByZ2JhKDAsIDAsIDAsIDAuNSkgNzclKSc7XG4gICAgICAgIGdyYWRpZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKCcgKyBjb2xvckVuZCArICcpJztcbiAgICAgICAgZ3JhZGllbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gbGc7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3RcbiAgICAgICAgICBpdGVtID0gaXRlbXNbaV0sXG4gICAgICAgICAgaW1hZ2UgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLFxuICAgICAgICAgIHBpY3R1cmUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5ib29rc19fcGljdHVyZScpLFxuXG4gICAgICAgICAgaXNCb3R0b20gPSBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaXRlbV9ib3R0b20nKSxcbiAgICAgICAgICBncmFkaWVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmJvb2tzX19ncmFkaWVudCcpLFxuXG4gICAgICAgICAgc2l6ZSA9IDEwMCxcblxuICAgICAgICAgIGNvbG9yID0gYWMuZ2V0Q29sb3IoaW1hZ2UsIGlzQm90dG9tID8ge1xuICAgICAgICAgICAgdG9wOiB3aWR0aCAtIHNpemUsXG4gICAgICAgICAgICB3aWR0aDogc2l6ZVxuICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICB3aWR0aDogc2l6ZVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbG9yRW5kID0gW10uY29uY2F0KGNvbG9yLnZhbHVlLnNsaWNlKDAsIDMpLCAwLjUpLmpvaW4oJywnKSxcbiAgICAgICAgICBsZyA9ICdsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDAsIDAsIDAsIDApIDAlLCAgcmdiYSgwLCAwLCAwLCAwLjUpIDkxJSknO1xuICAgICAgICBncmFkaWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgnICsgY29sb3JFbmQgKyAnKSc7XG4gICAgICAgIGdyYWRpZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGxnO1xuXG4gICAgICB9XG5cbiAgICB9XG5cblxuXG4gIH0sIGZhbHNlKTtcblxuXG5cbiAgJChmdW5jdGlvbigpIHtcblxuICAgICAvKlxuICAgICAgICBMYXp5bG9hZCBpbWFnZXNcbiAgICAgICovXG5cbiAgICAgIGxldCBsYXp5TG9hZEluc3RhbmNlID0gbmV3IExhenlMb2FkKHtcbiAgICAgICAgZWxlbWVudHNfc2VsZWN0b3I6ICcubGF6eScsXG4gICAgICAgIGxvYWRfZGVsYXk6IDUwLFxuICAgICAgICB1c2VfbmF0aXZlOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGxhenlMb2FkSW5zdGFuY2UpIHtcbiAgICAgICAgbGF6eUxvYWRJbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH1cblxuXG4gICAgLy8gQ29va2llc1xuXG4gICAgY29uc3QgJGNvb2tpZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWVzJyk7XG4gICAgY29uc3QgJGNvb2tpZUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2tpZXNfX2Nsb3NlJyk7XG5cblxuICAgIGZ1bmN0aW9uIGFncmVlV2l0aENvb2tpZXMoKSB7XG4gICAgICB2YXIgYWdlID0gNjAgKiA2MCAqIDI0ICogMzA7XG4gICAgICBDb29raWVzLnNldCgnYWdyZWVkV2l0aENvb2tpZXMnLCAnYWdyZWVkV2l0aENvb2tpZXMnLCB7IGV4cGlyZXM6IGFnZSB9KTtcbiAgICB9XG5cbiAgICBpZiAoIENvb2tpZXMuZ2V0KCdhZ3JlZWRXaXRoQ29va2llcycpID09PSAnYWdyZWVkV2l0aENvb2tpZXMnICkge1xuICAgICAgLy8gY29uc29sZS5sb2coQ29va2llcy5nZXQoJ2FncmVlZFdpdGhDb29raWVzJykpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwicGFnZV9fY29va2llLXZpc2libGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKENvb2tpZXMuZ2V0KCdhZ3JlZWRXaXRoQ29va2llcycpKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInBhZ2VfX2Nvb2tpZS12aXNpYmxlXCIpO1xuXG4gICAgICAkY29va2llQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFncmVlV2l0aENvb2tpZXMoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwicGFnZV9fY29va2llLXZpc2libGVcIik7XG4gICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgLy8gTmF2XG5cbiAgICBjb25zdCAkaGVhZGVyID0gJCgnLmhlYWRlcicpO1xuICAgIGNvbnN0ICRuYXZUcmlnZ2VyID0gJCgnLm5hdl9fdHJpZ2dlcicpO1xuXG4gICAgJG5hdlRyaWdnZXIub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ25hdl9fdHJpZ2dlcl9hY3RpdmUnKTtcbiAgICAgICRoZWFkZXIudG9nZ2xlQ2xhc3MoJ2hlYWRlcl9vcGVuJyk7XG5cblxuICAgIH0pO1xuXG4gICAgLy8gQ2xvc2UgbmF2XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCcubmF2X190cmlnZ2VyX2FjdGl2ZScpLmxlbmd0aCkge1xuICAgICAgICAkbmF2VHJpZ2dlci5yZW1vdmVDbGFzcygnbmF2X190cmlnZ2VyX2FjdGl2ZScpO1xuICAgICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKCdoZWFkZXJfb3BlbicpO1xuXG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIFNjcm9sbFRvXG5cbiAgICAvLyAkKCcuaG9tZSAubmF2X19saXN0IGEsIC5ob21lIC5uYXYtc2VjX19saXN0IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgbGV0IF9zY3JvbGwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICAvLyAgIGlmIChfc2Nyb2xsICE9ICcjJyAmJiAkKF9zY3JvbGwpLmxlbmd0aCkge1xuICAgIC8vICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgLy8gICAgICAgc2Nyb2xsVG9wOiAkKF9zY3JvbGwpLm9mZnNldCgpLnRvcCAtIDBcbiAgICAvLyAgICAgfSwgMzAwKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcblxuXG4gICAgLy8gSGVhZGVyU2xpZGVyXG5cbiAgICBjb25zdCAkaGVhZGVyU2xpZGVyID0gJCgnLmhlYWRlcl9fc2xpZGVyJyk7XG5cbiAgICBpZiAoJGhlYWRlclNsaWRlci5sZW5ndGggPiAwKSB7XG5cbiAgICAgICRoZWFkZXJTbGlkZXIuc2xpY2soe1xuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgIC8vIGxvb3A6IHRydWUsXG4gICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogNjAwLFxuICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogZmFsc2UsXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAvLyBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAwLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuXG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIFN0b3J5IHNsaWRlclxuXG4gICAgY29uc3QgJHN0b3J5U2xpZGVyID0gJCgnLnN0b3J5X190aW1lbGluZScpO1xuICAgIC8vIGNvbnN0ICRzdG9yeVNsaWRlciA9ICQoJy5zdG9yeV9fdGltZWxpbmUnKTtcblxuXG4gICAgaWYgKCRzdG9yeVNsaWRlci5sZW5ndGggPiAwKSB7XG4gICAgICAkc3RvcnlTbGlkZXIuc2xpY2soe1xuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcbiAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXG4gICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG5cbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgIC8vIGluaXRpYWxTbGlkZTogNSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzBweCcsXG4gICAgICAgICAgICAgIC8vIGZhZGU6IHRydWUsXG4gICAgICAgICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgLy8gYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICBzZXR0aW5nczogJ3Vuc2xpY2snLFxuICAgICAgICB9XVxuICAgICAgfSk7XG5cbiAgICAgIC8vICQoJy5zbGlkZXItbmF2Jykuc2xpY2soe1xuICAgICAgLy8gICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAvLyAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgLy8gICBhc05hdkZvcjogJy5zbGlkZXItZm9yJyxcbiAgICAgIC8vICAgZG90czogdHJ1ZSxcbiAgICAgIC8vICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgIC8vICAgZm9jdXNPblNlbGVjdDogdHJ1ZVxuICAgICAgLy8gfSk7XG5cbiAgICB9XG5cblxuXG5cbiAgICAvLyBQcmVzcyBzbGlkZXJcblxuICAgIGNvbnN0ICRwcmVzc1NsaWRlciA9ICQoJy5wcmVzc19fc2xpZGVyJyk7XG5cbiAgICBpZiAoJHByZXNzU2xpZGVyLmxlbmd0aCA+IDApIHtcblxuICAgICAgJHByZXNzU2xpZGVyLnNsaWNrKHtcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgICAgICAgIHdhaXRGb3JBbmltYXRlOiBmYWxzZSxcbiAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcblxuICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnLnByZXNzX19hcnJvd19iYWNrJyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICcucHJlc3NfX2Fycm93X25leHQnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcblxuXG5cbiAgICB9XG5cblxuICAgIC8vIEJvb2tzXG5cbiAgICBjb25zdCAkYm9va3NDYXRlZ29yeSA9ICQoXCIuYm9va3NfX2NhdGVnb3J5XCIpO1xuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDc2OCkge1xuICAgICAgJGJvb2tzQ2F0ZWdvcnkuZXEoMikuYWRkQ2xhc3MoJ2Jvb2tzX19jYXRlZ29yeV9hY3RpdmUnKTtcbiAgICAgIGlmICghJGJvb2tzQ2F0ZWdvcnkuaGFzQ2xhc3MoJy5ib29rc19fY2F0ZWdvcnlfYWN0aXZlJykpIHtcbiAgICAgICAgJGJvb2tzQ2F0ZWdvcnlcbiAgICAgICAgICAuc2libGluZ3MoJy5ib29rc19fY2F0ZWdvcnknKVxuICAgICAgICAgIC5maW5kKCcuYm9va3NfX2NhdC13JylcbiAgICAgICAgICAuYWRkQ2xhc3MoJ2Jvb2tzX19jYXQtd19hY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgJGJvb2tzQ2F0ZWdvcnkuaG92ZXIoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICQoXCIuYm9va3NfX2NhdGVnb3JpZXNcIikuZmluZChcIi5ib29rc19fY2F0ZWdvcnlfYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYm9va3NfX2NhdGVnb3J5X2FjdGl2ZVwiKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImJvb2tzX19jYXRlZ29yeV9hY3RpdmVcIik7XG4gICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnLmJvb2tzX19jYXRlZ29yeV9hY3RpdmUnKSkge1xuICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgIC5zaWJsaW5ncygnLmJvb2tzX19jYXRlZ29yeScpXG4gICAgICAgICAgICAuZmluZCgnLmJvb2tzX19jYXQtdycpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2Jvb2tzX19jYXQtd19hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLmJvb2tzX19jYXRlZ29yaWVzXCIpLmNoaWxkcmVuKFwiLmJvb2tzX19jYXRlZ29yeV9hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJib29rc19fY2F0ZWdvcnlfYWN0aXZlXCIpO1xuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgLnNpYmxpbmdzKCcuYm9va3NfX2NhdGVnb3J5JylcbiAgICAgICAgICAuZmluZCgnLmJvb2tzX19jYXQtdycpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdib29rc19fY2F0LXdfYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICRib29rc0NhdGVnb3J5LmVxKDIpLmFkZENsYXNzKCdib29rc19fY2F0ZWdvcnlfYWN0aXZlJyk7XG5cbiAgICAgICRib29rc0NhdGVnb3J5LmhvdmVyKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAkKFwiLmJvb2tzX19jYXRlZ29yaWVzXCIpLmZpbmQoXCIuYm9va3NfX2NhdGVnb3J5X2FjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImJvb2tzX19jYXRlZ29yeV9hY3RpdmVcIik7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJib29rc19fY2F0ZWdvcnlfYWN0aXZlXCIpO1xuICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJy5ib29rc19fY2F0ZWdvcnlfYWN0aXZlJykpIHtcbiAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAuc2libGluZ3MoJy5ib29rc19fY2F0ZWdvcnknKVxuICAgICAgICAgICAgLmZpbmQoJy5ib29rc19fY2F0LXcnKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdib29rc19fY2F0LXdfYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG5cblxuICAgIH1cblxuXG4gICAgLy8gTWlkZGxlIGNvbG9yXG5cblxuXG5cblxuXG4gIH0pO1xuXG5cblxuXG59KShqUXVlcnkpO1xuIiwiLyohIEZhc3QgQXZlcmFnZSBDb2xvciB8IMKpIDIwMjAgRGVuaXMgU2VsZXpuZXYgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9mYXN0LWF2ZXJhZ2UtY29sb3IvZmFzdC1hdmVyYWdlLWNvbG9yICovXG5mdW5jdGlvbiBpc0lnbm9yZWRDb2xvcihhcnIsIG51bSwgaWdub3JlZENvbG9yKSB7XG4gICAgcmV0dXJuIGFycltudW1dID09PSBpZ25vcmVkQ29sb3JbMF0gJiYgLy8gcmVkXG4gICAgICAgIGFycltudW0gKyAxXSA9PT0gaWdub3JlZENvbG9yWzFdICYmIC8vIGdyZWVuXG4gICAgICAgIGFycltudW0gKyAyXSA9PT0gaWdub3JlZENvbG9yWzJdICYmIC8vIGJsdWVcbiAgICAgICAgYXJyW251bSArIDNdID09PSBpZ25vcmVkQ29sb3JbM107IC8vIGFscGhhXG59XG5cbmZ1bmN0aW9uIGRvbWluYW50QWxnb3JpdGhtKGFyciwgbGVuLCBvcHRpb25zKSB7XG4gICAgY29uc3QgY29sb3JIYXNoID0ge307XG4gICAgY29uc3QgZGl2aWRlciA9IDI0O1xuICAgIGNvbnN0IGlnbm9yZWRDb2xvciA9IG9wdGlvbnMuaWdub3JlZENvbG9yO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gb3B0aW9ucy5zdGVwKSB7XG4gICAgICAgIGxldCByZWQgPSBhcnJbaV07XG4gICAgICAgIGxldCBncmVlbiA9IGFycltpICsgMV07XG4gICAgICAgIGxldCBibHVlID0gYXJyW2kgKyAyXTtcbiAgICAgICAgbGV0IGFscGhhID0gYXJyW2kgKyAzXTtcblxuICAgICAgICBpZiAoaWdub3JlZENvbG9yICYmIGlzSWdub3JlZENvbG9yKGFyciwgaSwgaWdub3JlZENvbG9yKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXkgPSBNYXRoLnJvdW5kKHJlZCAvIGRpdmlkZXIpICsgJywnICtcbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKGdyZWVuIC8gZGl2aWRlcikgKyAnLCcgK1xuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoYmx1ZSAvIGRpdmlkZXIpO1xuXG4gICAgICAgIGlmIChjb2xvckhhc2hba2V5XSkge1xuICAgICAgICAgICAgY29sb3JIYXNoW2tleV0gPSBbXG4gICAgICAgICAgICAgICAgY29sb3JIYXNoW2tleV1bMF0gKyByZWQgKiBhbHBoYSxcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVsxXSArIGdyZWVuICogYWxwaGEsXG4gICAgICAgICAgICAgICAgY29sb3JIYXNoW2tleV1bMl0gKyBibHVlICogYWxwaGEsXG4gICAgICAgICAgICAgICAgY29sb3JIYXNoW2tleV1bM10gKyBhbHBoYSxcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVs0XSArIDFcbiAgICAgICAgICAgIF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2xvckhhc2hba2V5XSA9IFtyZWQgKiBhbHBoYSwgZ3JlZW4gKiBhbHBoYSwgYmx1ZSAqIGFscGhhLCBhbHBoYSwgMV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBidWZmZXIgPSBPYmplY3Qua2V5cyhjb2xvckhhc2gpLm1hcChrZXkgPT4ge1xuICAgICAgICByZXR1cm4gY29sb3JIYXNoW2tleV07XG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBjb3VudEEgPSBhWzRdO1xuICAgICAgICBjb25zdCBjb3VudEIgPSBiWzRdO1xuXG4gICAgICAgIHJldHVybiBjb3VudEEgPiBjb3VudEIgPyAgLTEgOiBjb3VudEEgPT09IGNvdW50QiA/IDAgOiAxO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWF4ID0gYnVmZmVyWzBdO1xuXG4gICAgY29uc3QgcmVkVG90YWwgPSBtYXhbMF07XG4gICAgY29uc3QgZ3JlZW5Ub3RhbCA9IG1heFsxXTtcbiAgICBjb25zdCBibHVlVG90YWwgPSBtYXhbMl07XG5cbiAgICBjb25zdCBhbHBoYVRvdGFsID0gbWF4WzNdO1xuICAgIGNvbnN0IGNvdW50ID0gbWF4WzRdO1xuXG4gICAgcmV0dXJuIGFscGhhVG90YWwgPyBbXG4gICAgICAgIE1hdGgucm91bmQocmVkVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChncmVlblRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoYmx1ZVRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoYWxwaGFUb3RhbCAvIGNvdW50KVxuICAgIF0gOiBvcHRpb25zLmRlZmF1bHRDb2xvcjtcbn1cblxuZnVuY3Rpb24gc2ltcGxlQWxnb3JpdGhtKGFyciwgbGVuLCBvcHRpb25zKSB7XG4gICAgbGV0IHJlZFRvdGFsID0gMDtcbiAgICBsZXQgZ3JlZW5Ub3RhbCA9IDA7XG4gICAgbGV0IGJsdWVUb3RhbCA9IDA7XG4gICAgbGV0IGFscGhhVG90YWwgPSAwO1xuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBjb25zdCBpZ25vcmVkQ29sb3IgPSBvcHRpb25zLmlnbm9yZWRDb2xvcjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IG9wdGlvbnMuc3RlcCkge1xuICAgICAgICBjb25zdCBhbHBoYSA9IGFycltpICsgM107XG4gICAgICAgIGNvbnN0IHJlZCA9IGFycltpXSAqIGFscGhhO1xuICAgICAgICBjb25zdCBncmVlbiA9IGFycltpICsgMV0gKiBhbHBoYTtcbiAgICAgICAgY29uc3QgYmx1ZSA9IGFycltpICsgMl0gKiBhbHBoYTtcblxuICAgICAgICBpZiAoaWdub3JlZENvbG9yICYmIGlzSWdub3JlZENvbG9yKGFyciwgaSwgaWdub3JlZENvbG9yKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICByZWRUb3RhbCArPSByZWQ7XG4gICAgICAgIGdyZWVuVG90YWwgKz0gZ3JlZW47XG4gICAgICAgIGJsdWVUb3RhbCArPSBibHVlO1xuICAgICAgICBhbHBoYVRvdGFsICs9IGFscGhhO1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYVRvdGFsID8gW1xuICAgICAgICBNYXRoLnJvdW5kKHJlZFRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoZ3JlZW5Ub3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGJsdWVUb3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGFscGhhVG90YWwgLyBjb3VudClcbiAgICBdIDogb3B0aW9ucy5kZWZhdWx0Q29sb3I7XG59XG5cbmZ1bmN0aW9uIHNxcnRBbGdvcml0aG0oYXJyLCBsZW4sIG9wdGlvbnMpIHtcbiAgICBsZXQgcmVkVG90YWwgPSAwO1xuICAgIGxldCBncmVlblRvdGFsID0gMDtcbiAgICBsZXQgYmx1ZVRvdGFsID0gMDtcbiAgICBsZXQgYWxwaGFUb3RhbCA9IDA7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGNvbnN0IGlnbm9yZWRDb2xvciA9IG9wdGlvbnMuaWdub3JlZENvbG9yO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gb3B0aW9ucy5zdGVwKSB7XG4gICAgICAgIGNvbnN0IHJlZCA9IGFycltpXTtcbiAgICAgICAgY29uc3QgZ3JlZW4gPSBhcnJbaSArIDFdO1xuICAgICAgICBjb25zdCBibHVlID0gYXJyW2kgKyAyXTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBhcnJbaSArIDNdO1xuXG4gICAgICAgIGlmIChpZ25vcmVkQ29sb3IgJiYgaXNJZ25vcmVkQ29sb3IoYXJyLCBpLCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZFRvdGFsICs9IHJlZCAqIHJlZCAqIGFscGhhO1xuICAgICAgICBncmVlblRvdGFsICs9IGdyZWVuICogZ3JlZW4gKiBhbHBoYTtcbiAgICAgICAgYmx1ZVRvdGFsICs9IGJsdWUgKiBibHVlICogYWxwaGE7XG4gICAgICAgIGFscGhhVG90YWwgKz0gYWxwaGE7XG4gICAgICAgIGNvdW50Kys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFscGhhVG90YWwgPyBbXG4gICAgICAgIE1hdGgucm91bmQoTWF0aC5zcXJ0KHJlZFRvdGFsIC8gYWxwaGFUb3RhbCkpLFxuICAgICAgICBNYXRoLnJvdW5kKE1hdGguc3FydChncmVlblRvdGFsIC8gYWxwaGFUb3RhbCkpLFxuICAgICAgICBNYXRoLnJvdW5kKE1hdGguc3FydChibHVlVG90YWwgLyBhbHBoYVRvdGFsKSksXG4gICAgICAgIE1hdGgucm91bmQoYWxwaGFUb3RhbCAvIGNvdW50KVxuICAgIF0gOiBvcHRpb25zLmRlZmF1bHRDb2xvcjtcbn1cblxuY29uc3QgRVJST1JfUFJFRklYID0gJ0Zhc3RBdmVyYWdlQ29sb3I6ICc7XG5cbmNsYXNzIEZhc3RBdmVyYWdlQ29sb3Ige1xuICAgIC8qKlxuICAgICAqIEdldCBhc3luY2hyb25vdXNseSB0aGUgYXZlcmFnZSBjb2xvciBmcm9tIG5vdCBsb2FkZWQgaW1hZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnQgfCBzdHJpbmcgfCBudWxsfSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgW29wdGlvbnMuZGVmYXVsdENvbG9yPVswLCAwLCAwLCAwXV0gW3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhXVxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBbb3B0aW9ucy5pZ25vcmVkQ29sb3JdIFtyZWQsIGdyZWVuLCBibHVlLCBhbHBoYV1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubW9kZT1cInNwZWVkXCJdIFwicHJlY2lzaW9uXCIgb3IgXCJzcGVlZFwiXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmFsZ29yaXRobT1cInNxcnRcIl0gXCJzaW1wbGVcIiwgXCJzcXJ0XCIgb3IgXCJkb21pbmFudFwiXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnN0ZXA9MV1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubGVmdD0wXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy50b3A9MF1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMud2lkdGg9d2lkdGggb2YgcmVzb3VyY2VdXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmhlaWdodD1oZWlnaHQgb2YgcmVzb3VyY2VdXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5zaWxlbnRdIERpc2FibGUgZXJyb3Igb3V0cHV0IHZpYSBjb25zb2xlLmVycm9yXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBnZXRDb2xvckFzeW5jKHJlc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChFcnJvcihgJHtFUlJPUl9QUkVGSVh9Y2FsbCAuZ2V0Q29sb3JBc3luYygpIHdpdGhvdXQgcmVzb3VyY2UuYCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXNvdXJjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gJyc7XG4gICAgICAgICAgICBpbWcuc3JjID0gcmVzb3VyY2U7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluZEltYWdlRXZlbnRzKGltZywgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzb3VyY2UuY29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0Q29sb3IocmVzb3VyY2UsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5lcnJvciA/IFByb21pc2UucmVqZWN0KHJlc3VsdC5lcnJvcikgOiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9iaW5kSW1hZ2VFdmVudHMocmVzb3VyY2UsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBhdmVyYWdlIGNvbG9yIGZyb20gaW1hZ2VzLCB2aWRlb3MgYW5kIGNhbnZhcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudCB8IEhUTUxWaWRlb0VsZW1lbnQgfCBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGx9IHJlc291cmNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBbb3B0aW9ucy5kZWZhdWx0Q29sb3I9WzAsIDAsIDAsIDBdXSBbcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGFdXG4gICAgICogQHBhcmFtIHtBcnJheX0gIFtvcHRpb25zLmlnbm9yZWRDb2xvcl0gW3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5tb2RlPVwic3BlZWRcIl0gXCJwcmVjaXNpb25cIiBvciBcInNwZWVkXCJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuYWxnb3JpdGhtPVwic3FydFwiXSBcInNpbXBsZVwiLCBcInNxcnRcIiBvciBcImRvbWluYW50XCJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuc3RlcD0xXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5sZWZ0PTBdXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRvcD0wXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy53aWR0aD13aWR0aCBvZiByZXNvdXJjZV1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuaGVpZ2h0PWhlaWdodCBvZiByZXNvdXJjZV1cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnNpbGVudF0gRGlzYWJsZSBlcnJvciBvdXRwdXQgdmlhIGNvbnNvbGUuZXJyb3JcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0Q29sb3IocmVzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdGhpcy5fZ2V0RGVmYXVsdENvbG9yKG9wdGlvbnMpO1xuXG4gICAgICAgIGxldCB2YWx1ZSA9IGRlZmF1bHRDb2xvcjtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgdGhpcy5fb3V0cHV0RXJyb3Iob3B0aW9ucywgJ2NhbGwgLmdldENvbG9yKG51bGwpIHdpdGhvdXQgcmVzb3VyY2UuJyk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcmVwYXJlUmVzdWx0KGRlZmF1bHRDb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcmlnaW5hbFNpemUgPSB0aGlzLl9nZXRPcmlnaW5hbFNpemUocmVzb3VyY2UpO1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5fcHJlcGFyZVNpemVBbmRQb3NpdGlvbihvcmlnaW5hbFNpemUsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmICghc2l6ZS5zcmNXaWR0aCB8fCAhc2l6ZS5zcmNIZWlnaHQgfHwgIXNpemUuZGVzdFdpZHRoIHx8ICFzaXplLmRlc3RIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuX291dHB1dEVycm9yKG9wdGlvbnMsIGBpbmNvcnJlY3Qgc2l6ZXMgZm9yIHJlc291cmNlIFwiJHtyZXNvdXJjZS5zcmN9XCIuYCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcmVwYXJlUmVzdWx0KGRlZmF1bHRDb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2N0eCkge1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzID0gdGhpcy5fbWFrZUNhbnZhcygpO1xuICAgICAgICAgICAgdGhpcy5fY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQgJiYgdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fY3R4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb3V0cHV0RXJyb3Iob3B0aW9ucywgJ0NhbnZhcyBDb250ZXh0IDJEIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLicpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXBhcmVSZXN1bHQoZGVmYXVsdENvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHNpemUuZGVzdFdpZHRoO1xuICAgICAgICB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gc2l6ZS5kZXN0SGVpZ2h0O1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHNpemUuZGVzdFdpZHRoLCBzaXplLmRlc3RIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICByZXNvdXJjZSxcbiAgICAgICAgICAgICAgICBzaXplLnNyY0xlZnQsIHNpemUuc3JjVG9wLFxuICAgICAgICAgICAgICAgIHNpemUuc3JjV2lkdGgsIHNpemUuc3JjSGVpZ2h0LFxuICAgICAgICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgc2l6ZS5kZXN0V2lkdGgsIHNpemUuZGVzdEhlaWdodFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgYml0bWFwRGF0YSA9IHRoaXMuX2N0eC5nZXRJbWFnZURhdGEoMCwgMCwgc2l6ZS5kZXN0V2lkdGgsIHNpemUuZGVzdEhlaWdodCkuZGF0YTtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5nZXRDb2xvckZyb21BcnJheTQoYml0bWFwRGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMuX291dHB1dEVycm9yKG9wdGlvbnMsIGBzZWN1cml0eSBlcnJvciAoQ09SUykgZm9yIHJlc291cmNlICR7cmVzb3VyY2Uuc3JjfS5cXG5EZXRhaWxzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9IVE1ML0NPUlNfZW5hYmxlZF9pbWFnZWAsIGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXBhcmVSZXN1bHQodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYXZlcmFnZSBjb2xvciBmcm9tIGEgYXJyYXkgd2hlbiAxIHBpeGVsIGlzIDQgYnl0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fFVpbnQ4QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuYWxnb3JpdGhtPVwic3FydFwiXSBcInNpbXBsZVwiLCBcInNxcnRcIiBvciBcImRvbWluYW50XCJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgW29wdGlvbnMuZGVmYXVsdENvbG9yPVswLCAwLCAwLCAwXV0gW3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhXVxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBbb3B0aW9ucy5pZ25vcmVkQ29sb3JdIFtyZWQsIGdyZWVuLCBibHVlLCBhbHBoYV1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuc3RlcD0xXVxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5fSBbcmVkICgwLTI1NSksIGdyZWVuICgwLTI1NSksIGJsdWUgKDAtMjU1KSwgYWxwaGEgKDAtMjU1KV1cbiAgICAgKi9cbiAgICBnZXRDb2xvckZyb21BcnJheTQoYXJyLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGNvbnN0IGJ5dGVzUGVyUGl4ZWwgPSA0O1xuICAgICAgICBjb25zdCBhcnJMZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSB0aGlzLl9nZXREZWZhdWx0Q29sb3Iob3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKGFyckxlbmd0aCA8IGJ5dGVzUGVyUGl4ZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZW4gPSBhcnJMZW5ndGggLSBhcnJMZW5ndGggJSBieXRlc1BlclBpeGVsO1xuICAgICAgICBjb25zdCBzdGVwID0gKG9wdGlvbnMuc3RlcCB8fCAxKSAqIGJ5dGVzUGVyUGl4ZWw7XG5cbiAgICAgICAgbGV0IGFsZ29yaXRobTtcblxuICAgICAgICBzd2l0Y2ggKG9wdGlvbnMuYWxnb3JpdGhtIHx8ICdzcXJ0Jykge1xuICAgICAgICAgICAgY2FzZSAnc2ltcGxlJzpcbiAgICAgICAgICAgICAgICBhbGdvcml0aG0gPSBzaW1wbGVBbGdvcml0aG07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzcXJ0JzpcbiAgICAgICAgICAgICAgICBhbGdvcml0aG0gPSBzcXJ0QWxnb3JpdGhtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZG9taW5hbnQnOlxuICAgICAgICAgICAgICAgIGFsZ29yaXRobSA9IGRvbWluYW50QWxnb3JpdGhtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgJHtFUlJPUl9QUkVGSVh9JHtvcHRpb25zLmFsZ29yaXRobX0gaXMgdW5rbm93biBhbGdvcml0aG0uYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWxnb3JpdGhtKGFyciwgbGVuLCB7XG4gICAgICAgICAgICBkZWZhdWx0Q29sb3IsXG4gICAgICAgICAgICBpZ25vcmVkQ29sb3I6IG9wdGlvbnMuaWdub3JlZENvbG9yLFxuICAgICAgICAgICAgc3RlcFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fY2FudmFzO1xuICAgICAgICBkZWxldGUgdGhpcy5fY3R4O1xuICAgIH1cblxuICAgIF9nZXREZWZhdWx0Q29sb3Iob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0T3B0aW9uKG9wdGlvbnMsICdkZWZhdWx0Q29sb3InLCBbMCwgMCwgMCwgMF0pO1xuICAgIH1cblxuICAgIF9nZXRPcHRpb24ob3B0aW9ucywgbmFtZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb3B0aW9uc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBvcHRpb25zW25hbWVdO1xuICAgIH1cblxuICAgIF9wcmVwYXJlU2l6ZUFuZFBvc2l0aW9uKG9yaWdpbmFsU2l6ZSwgb3B0aW9ucykge1xuICAgICAgICBsZXRcbiAgICAgICAgICAgIHNyY0xlZnQgPSB0aGlzLl9nZXRPcHRpb24ob3B0aW9ucywgJ2xlZnQnLCAwKSxcbiAgICAgICAgICAgIHNyY1RvcCA9IHRoaXMuX2dldE9wdGlvbihvcHRpb25zLCAndG9wJywgMCksXG4gICAgICAgICAgICBzcmNXaWR0aCA9IHRoaXMuX2dldE9wdGlvbihvcHRpb25zLCAnd2lkdGgnLCBvcmlnaW5hbFNpemUud2lkdGgpLFxuICAgICAgICAgICAgc3JjSGVpZ2h0ID0gdGhpcy5fZ2V0T3B0aW9uKG9wdGlvbnMsICdoZWlnaHQnLCBvcmlnaW5hbFNpemUuaGVpZ2h0KSxcbiAgICAgICAgICAgIGRlc3RXaWR0aCA9IHNyY1dpZHRoLFxuICAgICAgICAgICAgZGVzdEhlaWdodCA9IHNyY0hlaWdodDtcblxuICAgICAgICBpZiAob3B0aW9ucy5tb2RlID09PSAncHJlY2lzaW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzcmNMZWZ0LFxuICAgICAgICAgICAgICAgIHNyY1RvcCxcbiAgICAgICAgICAgICAgICBzcmNXaWR0aCxcbiAgICAgICAgICAgICAgICBzcmNIZWlnaHQsXG4gICAgICAgICAgICAgICAgZGVzdFdpZHRoLFxuICAgICAgICAgICAgICAgIGRlc3RIZWlnaHRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXhTaXplID0gMTAwO1xuICAgICAgICBjb25zdCBtaW5TaXplID0gMTA7XG5cbiAgICAgICAgbGV0IGZhY3RvcjtcblxuICAgICAgICBpZiAoc3JjV2lkdGggPiBzcmNIZWlnaHQpIHtcbiAgICAgICAgICAgIGZhY3RvciA9IHNyY1dpZHRoIC8gc3JjSGVpZ2h0O1xuICAgICAgICAgICAgZGVzdFdpZHRoID0gbWF4U2l6ZTtcbiAgICAgICAgICAgIGRlc3RIZWlnaHQgPSBNYXRoLnJvdW5kKGRlc3RXaWR0aCAvIGZhY3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmYWN0b3IgPSBzcmNIZWlnaHQgLyBzcmNXaWR0aDtcbiAgICAgICAgICAgIGRlc3RIZWlnaHQgPSBtYXhTaXplO1xuICAgICAgICAgICAgZGVzdFdpZHRoID0gTWF0aC5yb3VuZChkZXN0SGVpZ2h0IC8gZmFjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGRlc3RXaWR0aCA+IHNyY1dpZHRoIHx8IGRlc3RIZWlnaHQgPiBzcmNIZWlnaHQgfHxcbiAgICAgICAgICAgIGRlc3RXaWR0aCA8IG1pblNpemUgfHwgZGVzdEhlaWdodCA8IG1pblNpemVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBkZXN0V2lkdGggPSBzcmNXaWR0aDtcbiAgICAgICAgICAgIGRlc3RIZWlnaHQgPSBzcmNIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjTGVmdCxcbiAgICAgICAgICAgIHNyY1RvcCxcbiAgICAgICAgICAgIHNyY1dpZHRoLFxuICAgICAgICAgICAgc3JjSGVpZ2h0LFxuICAgICAgICAgICAgZGVzdFdpZHRoLFxuICAgICAgICAgICAgZGVzdEhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9iaW5kSW1hZ2VFdmVudHMocmVzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB1bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0Q29sb3IocmVzb3VyY2UsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgb25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB1bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihgJHtFUlJPUl9QUkVGSVh9RXJyb3IgbG9hZGluZyBpbWFnZSAke3Jlc291cmNlLnNyY30uYCkpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgb25hYm9ydCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB1bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihgJHtFUlJPUl9QUkVGSVh9SW1hZ2UgXCIke3Jlc291cmNlLnNyY31cIiBsb2FkaW5nIGFib3J0ZWQuYCkpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgdW5iaW5kRXZlbnRzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbmxvYWQpO1xuICAgICAgICAgICAgICAgIHJlc291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbmFib3J0KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbmxvYWQpO1xuICAgICAgICAgICAgcmVzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICAgICAgICAgIHJlc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25hYm9ydCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9wcmVwYXJlUmVzdWx0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJnYiA9IHZhbHVlLnNsaWNlKDAsIDMpO1xuICAgICAgICBjb25zdCByZ2JhID0gW10uY29uY2F0KHJnYiwgdmFsdWVbM10gLyAyNTUpO1xuICAgICAgICBjb25zdCBpc0RhcmsgPSB0aGlzLl9pc0RhcmsodmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHJnYjogJ3JnYignICsgcmdiLmpvaW4oJywnKSArICcpJyxcbiAgICAgICAgICAgIHJnYmE6ICdyZ2JhKCcgKyByZ2JhLmpvaW4oJywnKSArICcpJyxcbiAgICAgICAgICAgIGhleDogdGhpcy5fYXJyYXlUb0hleChyZ2IpLFxuICAgICAgICAgICAgaGV4YTogdGhpcy5fYXJyYXlUb0hleCh2YWx1ZSksXG4gICAgICAgICAgICBpc0RhcmssXG4gICAgICAgICAgICBpc0xpZ2h0OiAhaXNEYXJrXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2dldE9yaWdpbmFsU2l6ZShyZXNvdXJjZSkge1xuICAgICAgICBpZiAocmVzb3VyY2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiByZXNvdXJjZS5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiByZXNvdXJjZS5uYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc291cmNlIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogcmVzb3VyY2UudmlkZW9XaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHJlc291cmNlLnZpZGVvSGVpZ2h0XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiByZXNvdXJjZS53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogcmVzb3VyY2UuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX3RvSGV4KG51bSkge1xuICAgICAgICBsZXQgc3RyID0gbnVtLnRvU3RyaW5nKDE2KTtcblxuICAgICAgICByZXR1cm4gc3RyLmxlbmd0aCA9PT0gMSA/ICcwJyArIHN0ciA6IHN0cjtcbiAgICB9XG5cbiAgICBfYXJyYXlUb0hleChhcnIpIHtcbiAgICAgICAgcmV0dXJuICcjJyArIGFyci5tYXAodGhpcy5fdG9IZXgpLmpvaW4oJycpO1xuICAgIH1cblxuICAgIF9pc0RhcmsoY29sb3IpIHtcbiAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvQUVSVCNjb2xvci1jb250cmFzdFxuICAgICAgICBjb25zdCByZXN1bHQgPSAoY29sb3JbMF0gKiAyOTkgKyBjb2xvclsxXSAqIDU4NyArIGNvbG9yWzJdICogMTE0KSAvIDEwMDA7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdCA8IDEyODtcbiAgICB9XG5cbiAgICBfbWFrZUNhbnZhcygpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgICAgIG5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkgOlxuICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgfVxuXG4gICAgX291dHB1dEVycm9yKG9wdGlvbnMsIGVycm9yLCBkZXRhaWxzKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7RVJST1JfUFJFRklYfSR7ZXJyb3J9YCk7XG5cbiAgICAgICAgICAgIGlmIChkZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihkZXRhaWxzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFzdEF2ZXJhZ2VDb2xvcjtcbiIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVjb2RlIChzKSB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvKCVbMC05QS1aXXsyfSkrL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSA/XG5cdFx0XHRcdGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSA6XG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpXG5cdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHRcdC5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0Ly8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuXHRcdFx0XHQvLyAgICAgY2hhcmFjdGVyOlxuXHRcdFx0XHQvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuXHRcdFx0XHQvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldCAoa2V5LCBqc29uKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBqYXIgPSB7fTtcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIWpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gZGVjb2RlKHBhcnRzWzBdKTtcblx0XHRcdFx0XHRjb29raWUgPSAoY29udmVydGVyLnJlYWQgfHwgY29udmVydGVyKShjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRkZWNvZGUoY29va2llKTtcblxuXHRcdFx0XHRcdGlmIChqc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGphcltuYW1lXSA9IGNvb2tpZTtcblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGtleSA/IGphcltrZXldIDogamFyO1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBzZXQ7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCBmYWxzZSAvKiByZWFkIGFzIHJhdyAqLyk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCB0cnVlIC8qIHJlYWQgYXMganNvbiAqLyk7XG5cdFx0fTtcblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0c2V0KGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcbiIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbiAgICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgLyohIHN2ZzRldmVyeWJvZHkgdjIuMS45IHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbiAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgdmlld0JveCA9ICFzdmcuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICAgICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc2V0IHRoZSB2aWV3Qm94IG9uIHRoZSBzdmdcbiAgICAgICAgICAgIHZpZXdCb3ggJiYgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlld0JveCk7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcbiAgICAgICAgICAgIGZvciAoLy8gY2xvbmUgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSghMCk7IGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocikge1xuICAgICAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdCBpcyByZWFkeVxuICAgICAgICAgICAgaWYgKDQgPT09IHhoci5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudCBiYXNlZCBvbiB0aGUgeGhyIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQgfHwgKGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSwgXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0LCB4aHIuX2NhY2hlZFRhcmdldCA9IHt9KSwgLy8gY2xlYXIgdGhlIHhociBlbWJlZHMgbGlzdCBhbmQgZW1iZWQgZWFjaCBpdGVtXG4gICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgfHwgKHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdID0gY2FjaGVkRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIC8vIHdoaWxlIHRoZSBpbmRleCBleGlzdHMgaW4gdGhlIGxpdmUgPHVzZT4gY29sbGVjdGlvblxuICAgICAgICAgICAgZm9yICgvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDsgaW5kZXggPCB1c2VzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IDx1c2U+XG4gICAgICAgICAgICAgICAgdmFyIHVzZSA9IHVzZXNbaW5kZXhdLCBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSwgc3ZnID0gZ2V0U1ZHQW5jZXN0b3IocGFyZW50KSwgc3JjID0gdXNlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikgfHwgdXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMgJiYgb3B0cy5hdHRyaWJ1dGVOYW1lICYmIChzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKG9wdHMuYXR0cmlidXRlTmFtZSkpLCBcbiAgICAgICAgICAgICAgICBzdmcgJiYgc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5ZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIDx1c2U+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgc3JjIGFuZCBnZXQgdGhlIHVybCBhbmQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLCB1cmwgPSBzcmNTcGxpdC5zaGlmdCgpLCBpZCA9IHNyY1NwbGl0LmpvaW4oXCIjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGlzIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociB8fCAoeGhyID0gcmVxdWVzdHNbdXJsXSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLCB4aHIub3BlbihcIkdFVFwiLCB1cmwpLCB4aHIuc2VuZCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMgPSBbXSksIC8vIGFkZCB0aGUgc3ZnIGFuZCBpZCBhcyBhbiBpdGVtIHRvIHRoZSB4aHIgZW1iZWRzIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvLyBwcmVwYXJlIHRoZSB4aHIgcmVhZHkgc3RhdGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraW5kZXgsICsrbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGludWUgdGhlIGludGVydmFsXG4gICAgICAgICAgICAoIXVzZXMubGVuZ3RoIHx8IHVzZXMubGVuZ3RoIC0gbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID4gMCkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uaW50ZXJ2YWwsIDY3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9seWZpbGwsIG9wdHMgPSBPYmplY3QocmF3b3B0cyksIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLCB3ZWJraXRVQSA9IC9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8sIG9sZGVyRWRnZVVBID0gL1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8sIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sIGluSWZyYW1lID0gd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGY7XG4gICAgICAgIHBvbHlmaWxsID0gXCJwb2x5ZmlsbFwiIGluIG9wdHMgPyBvcHRzLnBvbHlmaWxsIDogbmV3ZXJJRVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gob2xkZXJFZGdlVUEpIHx8IFtdKVsxXSA8IDEwNTQ3IHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHdlYmtpdFVBKSB8fCBbXSlbMV0gPCA1MzcgfHwgZWRnZVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgaW5JZnJhbWU7XG4gICAgICAgIC8vIGNyZWF0ZSB4aHIgcmVxdWVzdHMgb2JqZWN0XG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQsIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSwgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDtcbiAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuICAgICAgICBwb2x5ZmlsbCAmJiBvbmludGVydmFsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNWR0FuY2VzdG9yKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgc3ZnID0gbm9kZTsgXCJzdmdcIiAhPT0gc3ZnLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKHN2ZyA9IHN2Zy5wYXJlbnROb2RlKTsgKSB7fVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=