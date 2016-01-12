var eeFaceDetection = require('ee-face-detection');
var eeImage = require('ee-image-worker');

// create an instacne
var detector =  new eeFaceDetection();


// get focal point for an image
detector.detect(imageBuffer, function(err, focalPoint) {
    if (err) log('#Fail :(');
    else if (focalPoint) log('Yeah, we got it! x %s, y %s :)', focalPoint.x, focalPoint.y);
    else log('sorry, failed to detect any faces in this image ...');
});

var trans = eeImage.createTransformation();
var image = eeImage.createImage(buffer);
##crop(width, height, [ offsets ]) Crops the image to width and height. - width number - height number - offsets {top, left, bottom, right} (all are optional, left and top have higher priority)