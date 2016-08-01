var data = JSON.parse(require("./dist.json"));
var useragent = require("useragent");

//TODO: make things look pretty
exports.benchmark = function(weights){

    var webglVersion = window.location.search.indexOf("v=2") > 0 ? 2 : 1;


    var renderer;
    var canvas = $("<canvas />", { width: "1", height: "1" }).appendTo("body");
    var gl;
    var possibleNames = (webglVersion === 2) ? ["webgl2", "experimental-webgl2"] : ["webgl", "experimental-webgl"];
    var contextName = _.find(possibleNames, function (name) {
        gl = canvas[0].getContext(name, { stencil: true });
        return !!gl;
    });
    canvas.remove();

	if (!gl) {
        // The browser supports WebGL, but initialization failed
        return 0;
	}

	var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
	if (dbgRenderInfo != null) {
		renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
	}
	console.log("renderer", renderer);
	console.log("data", data);


}