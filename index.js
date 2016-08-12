var data = require("./dist.json");
var platform = require("platform");


exports.calibrate = function(){
    var canvas = document.createElement("canvas");
    var gl = (
        canvas.getContext("webgl") ||
        canvas.getContext("webgl-experimental") ||
        canvas.getContext("experimental-webgl")
    );
	if (!gl) {
        return 0;
	}

    var renderer;
	var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
	if (dbgRenderInfo != null) {
		renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
	}
    canvas.remove();

	console.log("renderer", renderer);
    console.log("data", data);
    console.log("platform", platform);


    Object.keys(data).forEach(function(val){
        for (var i=0, iLen=data[val].length; i<iLen; i++) {
            //find your values
        }
    });
}