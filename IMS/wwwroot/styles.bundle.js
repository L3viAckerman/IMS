webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n    Layer Control\n */\n.Hide {\n  display: none !important;\n}\n.page-body{\n  margin-top: 90px;\n}\n@media (min-width: 992px) {\n  .modal-xxl {\n    max-width: 1200px;\n  }\n}\n/* You can add global styles to this file, and also import other style files */\n.text-danger{\n  opacity: 1 !important;\n}\n.fpt-navbar {\n  background-color: #0064b4;\n}\n.fpt-nav-link {\n  font-size: 13px;\n  padding: 12px;\n  color: white !important;\n}\n.fpt-nav-link:hover {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default;\n}\n.active-link {\n  background-color: #2A92D8;\n}\n.active-sublink {\n  background-color: #2A92D8 !important;\n}\n.fpt-dropdown-menu {\n  font-size: 13px;\n  background-color: #0064b4;\n}\n#SpinnerBar {\n  display: none;\n}\n.table-responsive {\n  overflow-y: hidden;\n}\n.SpinnerBarBackdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000000;\n  background-color: rgba(0, 0, 0, 0.7);\n  opacity: 0.1;\n  height: 100%;\n  width: 100%;\n  z-index: 20000;\n}\n@-webkit-keyframes bounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n@keyframes bounceDelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n\n  40% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n.page-spinner-bar {\n  position: fixed;\n  z-index: 10051;\n  width: 100px;\n  top: 40%;\n  left: 50%;\n  margin-left: -55px;\n  text-align: center;\n}\n.page-spinner-bar > div {\n  margin: 0 5px;\n  width: 18px;\n  height: 18px;\n  background: #eee;\n  border-radius: 100% !important;\n  display: inline-block;\n  -webkit-animation: bounceDelay 1.4s infinite ease-in-out;\n  animation: bounceDelay 1.4s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.page-spinner-bar .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n  background-color: rgb(12, 76, 163);\n}\n.page-spinner-bar .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n  background-color: rgb(243, 112, 34);\n}\n.page-spinner-bar .bounce3 {\n  background-color: rgb(77, 183, 72);\n}\n/*All*/\n/*CSS chung*/\n/*-------------------------------------\n-------------------------------------*/\n/*TABLE*/\ntable {\n  font-family: sans-serif;\n  margin-top: 20px;\n  line-height: 17px;\n  font-size: 12px;\n}\nth {\n  text-align: center;\n  background-color: #0064b4;\n  color: #ffffff;\n  font-size: 12px;\n}\ntr:nth-child(1) {\n  border: none;\n}\ntr td {\n  white-space: nowrap;\n  line-height: 17px;\n}\n.row {\n  margin: 5px;\n}\n/*TITLE*/\n.caption {\n  text-transform: uppercase;\n  float: left;\n  font-size: 18px;\n  line-height: 17px;\n  padding: 10px 0;\n  font-family: \"Open Sans\", sans-serif;\n  margin: 5px 5px 0 5px;\n}\ntitle {\n  display: block;\n  font-size: 30px;\n  text-align: center;\n}\n/*END TITLE*/\n/*ICON*/\n.delete {\n  background-color: red;\n  border: none;\n}\nbtn-success {\n  background-color: #4CAF50;\n}\n.btn-collapse {\n  position: relative;\n  cursor: pointer;\n  color: #0064b4 !important;\n  padding: 0!important;\n  width: 19px!important;\n  height: 14px!important;\n}\n.adddown {\n  margin-left: 10%;\n  padding-top: 8.9%;\n  padding-bottom: 8.9%;\n  padding-left: 12%;\n}\n.edittrash {\n  margin-left: 10%;\n  padding-top: 1.5%;\n  padding-bottom: 1.5%;\n  padding-left: 12%;\n}\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n}\n/*END ICON*/\n/*INPUT SEARCH*/\n.SearchBox {\n  width: 100%;\n  max-height: 30px;\n}\n.ui.input input {\n  padding: 0.5em 1em !important;\n}\n.ui.search .prompt {\n  border-radius: 4px !important;\n}\n/*END INPUT SEARCH*/\n/*PADING*/\napp-paging {\n  float: left !important;\n  padding-top: 1% !important;\n}\n/*END PADING*/\n/*  Start Css for fieldset*/\nfieldset.scheduler-border {\n  border: 1px solid #eceeef !important;\n  padding: 0 1.4em 1.4em 1.4em !important;\n  margin: 2em 2em 1.2em 2em !important;\n  -webkit-box-shadow: 0px 0px 0px 0px #eceeef;\n  box-shadow: 0px 0px #eceeef;\n}\nlegend.scheduler-border {\n  border: none;\n  width: 260px;\n  color: #0064b4;\n}\n.position-in-fieldset {\n  padding-left: 1%;\n  margin-top: 2%;\n}\n.position-in-fieldset div p {\n  display: inline;\n}\n/*End css for fieldset*/\n/*END CSS chung*/\n/*-------------------------------------\n-------------------------------------*/\n/*CSS VỚI MODAL NHIỀU TRƯỜNG*/\n@media (min-width: 768px) {\n  .modal-xl {\n    width: 90%;\n    max-width: 1000px;\n  }\n}\n/*END CSS VỚI MODAL NHIỀU TRƯỜNG*/\n/*-------------------------------------\n-------------------------------------*/\n/*CSS VỚI MODAL NHIỀU RESPONSIVE 3 TABLE*/\n.threetable {\n  width: 100%;\n}\n.threetable td {\n  padding: 2px;\n  line-height: 17px;\n}\n@media (min-width: 768px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 14.2%;\n    padding-bottom: 14.2%;\n    padding-left: 2%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    padding-left: 2%;\n  }\n}\n@media (min-width: 912px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 13.3%;\n    padding-bottom: 13.3%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 972px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 12.5%;\n    padding-bottom: 12.5%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1018px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 11.9%;\n    padding-bottom: 11.9%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1066px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 11.4%;\n    padding-bottom: 11.4%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1114px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 11.2%;\n    padding-bottom: 11.2%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 2%;\n    padding-bottom: 2%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1138px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 10.7%;\n    padding-bottom: 10.7%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1.5%;\n    padding-bottom: 1.5%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1186px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 10.4%;\n    padding-bottom: 10.4%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1.5%;\n    padding-bottom: 1.5%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1210px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 10.1%;\n    padding-bottom: 10.1%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1.5%;\n    padding-bottom: 1.5%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1246px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 9.8%;\n    padding-bottom: 9.8%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1.5%;\n    padding-bottom: 1.5%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1282px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 9.5%;\n    padding-bottom: 9.5%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1.5%;\n    padding-bottom: 1.5%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1318px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 9.2%;\n    padding-bottom: 9.2%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1.5%;\n    padding-bottom: 1.5%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1354px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 6.5%;\n    padding-bottom: 6.5%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1.5%;\n    padding-bottom: 1.5%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1402px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 8.6%;\n    padding-bottom: 8.6%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1.5%;\n    padding-bottom: 1.5%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1450px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 8.3%;\n    padding-bottom: 8.3%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1.5%;\n    padding-bottom: 1.5%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1486px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 8.3%;\n    padding-bottom: 8.3%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1.3%;\n    padding-bottom: 1.3%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1498px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 8%;\n    padding-bottom: 8%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1.3%;\n    padding-bottom: 1.3%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1546px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 7.7%;\n    padding-bottom: 7.7%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1.3%;\n    padding-bottom: 1.3%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1607px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 7.4%;\n    padding-bottom: 7.4%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1.3%;\n    padding-bottom: 1.3%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1667px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 7.1%;\n    padding-bottom: 7.1%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1.3%;\n    padding-bottom: 1.3%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1703px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 7.1%;\n    padding-bottom: 7.1%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1%;\n    padding-bottom: 1%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1739px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 6.8%;\n    padding-bottom: 6.8%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1%;\n    padding-bottom: 1%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1811px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 6.6%;\n    padding-bottom: 6.6%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1%;\n    padding-bottom: 1%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1860px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 4.8%;\n    padding-bottom: 4.8%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1%;\n    padding-bottom: 1%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 1943px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 6%;\n    padding-bottom: 6%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 1%;\n    padding-bottom: 1%;\n    padding-left: 12%;\n  }\n}\n@media (min-width: 2185px) {\n  .adddown {\n    margin-left: 10%;\n    padding-top: 5.5%;\n    padding-bottom: 5.5%;\n    padding-left: 12%;\n  }\n\n  .edittrash {\n    margin-left: 10%;\n    padding-top: 0.9%;\n    padding-bottom: 0.9%;\n    padding-left: 12%;\n  }\n}\n/*style tree*/\n.ui-tree {\n  width: 100%\n}\nui-treenode-content ui-treenode-selectable {\n  width: 70px;\n}\n.ui-widget-content {\n  border: 0;\n}\n.ui-tree .ui-treenode-icon {\n  color: #dbc056;\n}\n.ui-treenode-content {\n  width: 68px;\n}\n/*End style tree*/\n/*END CSS VỚI MODAL NHIỀU RESPONSIVE 3 TABLE*/\n/* Portlet */\n.portlet {\n  background: #fff;\n  padding: 20px;\n}\n.portlet.portlet-gray {\n  background: #f7f7f7;\n}\n.portlet.portlet-bordered {\n  border: 1px solid #eee;\n}\n/* Portlet Title */\n.portlet-title {\n  padding: 0;\n  min-height: 40px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 18px;\n}\n.caption-portlet {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 18px;\n}\n.caption-portlet.caption-portlet-green .caption-portlet-subject,\n.caption-portlet.caption-portlet-green i {\n  color: #4db3a2;\n  font-weight: 200;\n}\n.caption-portlet.caption-portlet-red .caption-portlet-subject,\n.caption-portlet.caption-portlet-red i {\n  color: #e26a6a;\n  font-weight: 200;\n}\n.caption-portlet.caption-portlet-purple .caption-portlet-subject,\n.caption-portlet.caption-portlet-purple i {\n  color: #8775a7;\n  font-weight: 400;\n}\n.caption-portlet i {\n  color: #777;\n  font-size: 15px;\n  font-weight: 300;\n  margin-top: 3px;\n}\n.caption-portlet-subject {\n  color: #666;\n  font-size: 16px;\n  font-weight: bold;\n}\n.caption-portlet-helper {\n  padding: 0;\n  margin: 0;\n  line-height: 13px;\n  color: #9eacb4;\n  font-size: 13px;\n  font-weight: 400;\n}\n.addnewrow {\n  position: relative;\n  cursor: pointer;\n  color: #0064b4 !important;\n}\n.addLinkrow {\n  position: relative;\n  cursor: pointer;\n}\n.text-vertical {\n  display: table-cell;\n  vertical-align: middle;\n}\n.fams-error {\n  color: #FFF !important;\n  background-color: #ff0019 !important;\n}\n.fams-info {\n  color: #FFF !important;\n  background-color: #2A92D8 !important;\n}\n.fams-warning {\n  color: #FFF !important;\n  background-color: #f06e28 !important;\n}\n.fams-success {\n  color: #FFF !important;\n  background-color: #DFF2BF !important;\n}\n.farm-running {\n  color: #FFF !important;\n  background-color: #e6e6e6 !important;\n}\n.fams-none {\n  color: #FFF !important;\n  background-color: #a09c9c !important;\n}\n.fams-approve {\n  color: #FFF !important;\n  background-color: #268307 !important;\n}\n.list-group-item:hover {\n  color: #fff;\n  background-color: #2A92D8;\n  cursor: pointer;\n}\n.li-selected {\n  color: #fff;\n  background-color: #0064b4 !important;\n}\n.li-active {\n  color: #fff;\n  background-color: #2A92D8 !important;\n}\n.fams-header-blue {\n  background-color: #0064B4;\n  color: #fff;\n}\n.table-header {\n  text-align: center;\n}\n.table-header th {\n  vertical-align: middle !important;\n  padding: 0.3rem !important;\n}\n.table-header td {\n  padding: 0.3rem !important;\n}\n.TagsInput input{\n  border: 0;\n  outline: 0;\n}\n.row-number{\n  text-align: right;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  font-family: sans-serif;\n  font-size: 12px;\n  opacity: .4!important;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  font-family: sans-serif;\n  opacity: .3!important;\n  font-size: 12px;\n}\n:-ms-input-placeholder { /* IE 10+ */\n  font-family: sans-serif;\n  opacity: .3!important;\n  font-size: 12px;\n}\n:-moz-placeholder { /* Firefox 18- */\n  font-family: sans-serif;\n  opacity: .3!important;\n  font-size: 12px;\n}\n.selected-box {\n  border: solid #4CAF50 1px;\n  float: left;\n  margin: 2px;\n  padding: 2px 15px;\n}\n.fams-font-size{\n  font-size: 12px !important;\n}\n.fams-active {\n  background: #2A92D8!important;\n}\n.ui-widget{\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 1em;\n}\n/*body{*/\n/*font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;*/\n/*font-size: 1em;*/\n/*}*/\n.ui-rating {\n  font-size: 200% !important;\n}\n.ui-rating a {\n  color: red;\n}\n.ui-rating a:focus, .ui-rating a:hover{\n  text-decoration:none;\n}\n.mod-width{\n  max-width: 100px;\n}\n.fams-style{\n  width: 140px;\n}\n.n-p-l{\n  padding-left: 0px !important;\n}\n.n-p-r{\n  padding-right: 0px !important;\n}\n.fams-header-light {\n  background-color: #D6D6D6;\n  color: #000;\n}\nbody{\n  font-size: 12px;\n}\n.form-control{\n  font-size: 12px;\n}\n.top-place {\n  bottom: 100%;\n  top:auto;\n}\n.input-dropdown::after{\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.3em;\n  vertical-align: middle;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-left: 0.3em solid transparent;\n}\n.btn-secondary.nohover:hover {\n  cursor: default !important;\n  opacity: 0.9;\n}\n/*Style Tooltip*/\n.ng-tooltip {\n  max-width: 200px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 8px;\n  position: absolute;\n  z-index: 1000;\n  display: block;\n  opacity: 0;\n  -webkit-transition: opacity 300ms;\n  transition: opacity 300ms;\n}\n.ng-tooltip-show {\n  opacity: 1;\n}\n.ng-tooltip::after {\n  content: \"\";\n  position: absolute;\n  border-style: solid;\n}\n.ng-tooltip-top::after {\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-color: black transparent transparent transparent;\n}\n.ng-tooltip-bottom::after {\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-color: transparent transparent black transparent;\n}\n.ng-tooltip-left::after {\n  top: 50%;\n  left: 100%;\n  margin-top: -5px;\n  border-width: 5px;\n  border-color: transparent transparent transparent black;\n}\n.ng-tooltip-right::after {\n  top: 50%;\n  right: 100%;\n  margin-top: -5px;\n  border-width: 5px;\n  border-color: transparent black transparent transparent;\n}\n/*.tooltip {\n    top: 102px !important;\n    left: 360px !important;\n    position: fixed !important;\n}*/\n.MinHeightTable{\n  min-height: 486.67px;\n}\n.table-nowhitespace td {\n  white-space: normal !important;\n}\n.ExpiredText {\n  color: #d9534f !important;\n  text-decoration: line-through;\n}\nul.fams-tab {\n  margin: 0;\n  padding: 0;\n  display: table;\n  width: 100%;\n  border-bottom: 1px solid #0064B4;\n  margin-bottom: 15px;\n}\nul.fams-tab > li {\n  display: table-cell;\n  vertical-align: middle;\n  width: 1000em;\n  padding: 10px;\n  text-align: center;\n  font-weight: bold;\n}\nul.fams-tab > li:hover,\nul.fams-tab > li.active {\n  background-color: #0064B4;\n  color: #fff;\n}\n.disabled {\n  pointer-events: none;\n  opacity:0.9;\n}\n/*.ng-tns-c5-0{\n    font-size: 19px;\n}*/\n.owl-calendar-controlContent{\n  font-size: 14px;\n}\n.owl-calendar-day{\n  margin-top: 8px;\n}\nowl-date-time table thead{\n  font-size: 19px;\n}\n/*.owl-weekday{\n    text-align: center;\n}*/\n.owl-weekdays th.owl-weekday {\n  background-color: white;\n  text-align: center!important;\n}\n.owl-datetime-main-input{\n  height: 30px!important;\n}\n/*.ui-chkbox-label {\n    margin-bottom: 3px !important;\n}*/\n.fams-modal-width{\n  width:700px !important;\n}\n.n-p-l {\n  padding-left: 0 !important;\n}\n.n-p-r {\n  padding-right: 0 !important;\n}\n.n-p-t {\n  padding-top: 0 !important;\n}\nn-m {\n  margin: 0 !important;\n}\n.ModText {\n  color: #0b40e7;\n}\n.n-p-l {\n  padding-left: 0 !important;\n}\n.n-p-r {\n  padding-right: 0 !important;\n}\n.n-p-t {\n  padding-top: 0 !important;\n}\n.pointer {\n  cursor: pointer;\n}\n/*P-Checkbox*/\n.ui-state-disabled {\n  cursor: not-allowed !important;\n}\n/*Text-editor*/\n.ngx-editor-button:focus {\n  background-color: #f1f1f1 !important;\n}\n.ngx-editor-button:visited {\n  background-color: #f1f1f1 !important;\n}\n.fr-wrapper{\n  height: 240px!important;\n}\n.ngx-editor-textarea{\n  height: 240px !important;\n}\n/* Portlet */\n.portlet {\n  background: #fff;\n  padding: 10px;\n}\n.portlet.portlet-gray {\n  background: #f7f7f7;\n}\n.portlet.portlet-bordered {\n  border: 1px solid #eee;\n}\n/* Portlet Title */\n.portlet-title {\n  padding: 0;\n  /*min-height: 40px;*/\n  border-bottom: 1px solid #eee;\n  margin-bottom: 5px;\n}\n.caption-portlet {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 18px;\n}\n.caption-portlet.caption-portlet-green .caption-portlet-subject,\n.caption-portlet.caption-portlet-green i {\n  color: #4db3a2;\n  font-weight: 200;\n}\n.caption-portlet.caption-portlet-red .caption-portlet-subject,\n.caption-portlet.caption-portlet-red i {\n  color: #e26a6a;\n  font-weight: 200;\n}\n.caption-portlet.caption-portlet-purple .caption-portlet-subject,\n.caption-portlet.caption-portlet-purple i {\n  color: #8775a7;\n  font-weight: 400;\n}\n.caption-portlet i {\n  color: #777;\n  font-size: 15px;\n  font-weight: 300;\n  margin-top: 3px;\n}\n.caption-portlet-subject {\n  color: #666;\n  font-size: 16px;\n  font-weight: bold;\n}\n.caption-portlet-helper {\n  padding: 0;\n  margin: 0;\n  line-height: 13px;\n  color: #9eacb4;\n  font-size: 13px;\n  font-weight: 400;\n}\n.ModText {\n  color: #0b40e7;\n}\n/*edit table ben tieu chi bid*/\n.ui-treetable table {\n  margin-top: 5px;\n\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[5]);
//# sourceMappingURL=styles.bundle.js.map