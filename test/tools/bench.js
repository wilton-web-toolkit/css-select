define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var ben = require("ben"),
	testString = "doo, *#foo > elem.bar[class$=bAz i]:not([ id *= \"2\" ]):nth-child(2n)",
	helper = require("css-select/helper.js"),
	CSSselect = helper.CSSselect,
	compile = CSSselect.compile,
	dom = helper.getDefaultDom();

//console.log("Parsing took:", ben(1e5, function(){compile(testString);}));
var compiled = compile(testString);
console.log("Executing took:", ben(1e6, function(){CSSselect(compiled, dom);})*1e3);

return module.exports;});
