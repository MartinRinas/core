(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/devices/openwb_flex/counter.vue?vue&type=template&id=91971b84":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/components/devices/openwb_flex/counter.vue?vue&type=template&id=91971b84 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nvar _hoisted_1 = {\n  class: \"device-openwb-flex-counter\"\n};\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createTextVNode\"])(\" Einstellungen für openWB-Flex Zähler \");\n\nvar _hoisted_3 = {\n  class: \"small\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_heading = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"resolveComponent\"])(\"heading\");\n\n  var _component_select_input = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"resolveComponent\"])(\"select-input\");\n\n  var _component_number_input = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"resolveComponent\"])(\"number-input\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createVNode\"])(_component_heading, null, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"withCtx\"])(function () {\n      return [_hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createElementVNode\"])(\"span\", _hoisted_3, \"(Modul: \" + Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"toDisplayString\"])(_ctx.$options.name) + \")\", 1\n      /* TEXT */\n      )];\n    }),\n    _: 1\n    /* STABLE */\n\n  }), Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createVNode\"])(_component_select_input, {\n    title: \"Zählermodell\",\n    notSelected: \"Bitte auswählen\",\n    options: [{\n      value: 0,\n      text: 'MPM3PM'\n    }, {\n      value: 1,\n      text: 'Lovato'\n    }, {\n      value: 2,\n      text: 'SDM630'\n    }],\n    \"model-value\": $props.configuration.version,\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = function ($event) {\n      return $options.updateConfiguration($event, 'configuration.version');\n    })\n  }, null, 8\n  /* PROPS */\n  , [\"model-value\"]), Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"createVNode\"])(_component_number_input, {\n    title: \"Modbus-ID\",\n    min: 1,\n    max: 255,\n    \"model-value\": $props.configuration.id,\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = function ($event) {\n      return $options.updateConfiguration($event, 'configuration.id');\n    })\n  }, null, 8\n  /* PROPS */\n  , [\"model-value\"])]);\n}\n\n//# sourceURL=webpack:///./src/components/devices/openwb_flex/counter.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/devices/openwb_flex/counter.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./src/components/devices/openwb_flex/counter.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Heading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Heading.vue */ \"./src/components/Heading.vue\");\n/* harmony import */ var _components_NumberInput_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/NumberInput.vue */ \"./src/components/NumberInput.vue\");\n/* harmony import */ var _components_SelectInput_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/SelectInput.vue */ \"./src/components/SelectInput.vue\");\n// import Alert from \"@/components/Alert.vue\";\n // import TextInput from \"@/components/TextInput.vue\";\n\n // import TextareaInput from \"@/components/TextareaInput.vue\";\n// import RangeInput from \"@/components/RangeInput.vue\";\n\n // import ButtonGroupInput from \"@/components/ButtonGroupInput.vue\";\n// import ClickButton from \"@/components/ClickButton.vue\";\n// import Avatar from \"@/components/Avatar.vue\";\n// import CheckboxInput from \"@/components/CheckboxInput.vue\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"DeviceOpenwbFlexCounter\",\n  emits: [\"update:configuration\"],\n  props: {\n    configuration: {\n      type: Object,\n      required: true\n    }\n  },\n  components: {\n    // Alert,\n    Heading: _components_Heading_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    // TextInput,\n    NumberInput: _components_NumberInput_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    // TextareaInput,\n    // RangeInput,\n    SelectInput: _components_SelectInput_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"] // ButtonGroupInput,\n    // ClickButton,\n    // Avatar,\n    // CheckboxInput,\n\n  },\n  methods: {\n    updateConfiguration: function updateConfiguration(event) {\n      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n      this.$emit(\"update:configuration\", {\n        value: event,\n        object: path\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/devices/openwb_flex/counter.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1");

/***/ }),

/***/ "./src/components/devices/openwb_flex/counter.vue":
/*!********************************************************!*\
  !*** ./src/components/devices/openwb_flex/counter.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _counter_vue_vue_type_template_id_91971b84__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter.vue?vue&type=template&id=91971b84 */ \"./src/components/devices/openwb_flex/counter.vue?vue&type=template&id=91971b84\");\n/* harmony import */ var _counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.vue?vue&type=script&lang=js */ \"./src/components/devices/openwb_flex/counter.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_counter_vue_vue_type_template_id_91971b84__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/components/devices/openwb_flex/counter.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/components/devices/openwb_flex/counter.vue?");

/***/ }),

/***/ "./src/components/devices/openwb_flex/counter.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./src/components/devices/openwb_flex/counter.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./counter.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/devices/openwb_flex/counter.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_counter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/devices/openwb_flex/counter.vue?");

/***/ }),

/***/ "./src/components/devices/openwb_flex/counter.vue?vue&type=template&id=91971b84":
/*!**************************************************************************************!*\
  !*** ./src/components/devices/openwb_flex/counter.vue?vue&type=template&id=91971b84 ***!
  \**************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_counter_vue_vue_type_template_id_91971b84__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--1-1!./counter.vue?vue&type=template&id=91971b84 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/devices/openwb_flex/counter.vue?vue&type=template&id=91971b84\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_1_1_counter_vue_vue_type_template_id_91971b84__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/devices/openwb_flex/counter.vue?");

/***/ })

}]);