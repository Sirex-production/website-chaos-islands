"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = require("jquery");
(0, jquery_1.default)(function () {
    var movingImage = (0, jquery_1.default)('#jumbotron-moving-image');
    var container = (0, jquery_1.default)('.jumbotron-container');
    // Mouse  
    container.on('mousemove', function (e) {
        var offset = container.offset();
        if (offset) {
            var x = e.clientX - offset.left;
            var y = e.clientY - offset.top;
            moveImage(x, y);
        }
    });
    container.on('mouseleave', function () {
        resetImage();
    });
    // Gyroscope  
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', handleOrientation);
    }
    function handleOrientation(event) {
        var _a, _b;
        var x = (_a = event.beta) !== null && _a !== void 0 ? _a : 0;
        var y = (_b = event.gamma) !== null && _b !== void 0 ? _b : 0;
        var normX = (x / 45) * 10;
        var normY = (y / 45) * 10;
        moveImage(normX, normY);
    }
    function moveImage(x, y) {
        var offset = container.offset();
        if (offset) {
            var centerX = container.width() / 2;
            var centerY = container.height() / 2;
            var moveX = (x - centerX) / 10;
            var moveY = (y - centerY) / 10;
            movingImage.css('transform', "translate(-50%, -50%) translate(".concat(moveX, "px, ").concat(moveY, "px)"));
        }
    }
    function resetImage() {
        movingImage.css('transform', 'translate(-50%, -50%)');
    }
});
