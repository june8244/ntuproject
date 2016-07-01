var btn = $('button');
var body = $("body");

btn.on("click", function() {
  body.toggleClass("hide-images");
});