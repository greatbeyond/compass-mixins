var render = require('../helper/render');
var ruleset = require('../helper/ruleset');

describe("CSS3 Images", function () {

  it("should generate a background", function (done) {
    render(ruleset('@include background(ok);'), function(output, err) {
      expect(output).toBe(ruleset('background:-owg-ok;background:-webkit-ok;background:-moz-ok;background:-o-ok;background:ok;'));
      done();
    }, ['compass/css3/images']);
  });

  it("should generate multiple backgrounds", function (done) {
    render(ruleset('$support-for-original-webkit-gradients: false; $experimental-support-for-mozilla: false; $experimental-support-for-opera: false; @include background(a, b, c);'), function(output, err) {
      expect(output).toBe(ruleset('background:-webkit-a,-webkit-b,-webkit-c;background:a,b,c;'));
      done();
    }, ['compass/css3/images']);
  });

  it("should generate multiple backgrounds of different types", function (done) {
    render(ruleset('$support-for-original-webkit-gradients: false; $experimental-support-for-mozilla: false; $experimental-support-for-opera: false; @include background(#fff, url(1.gif), linear-gradient(white, black));'), function(output, err) {
      expect(output).toBe(ruleset('background:#fff,url(1.gif),-webkit-linear-gradient(#ffffff, #000000);background:#fff,url(1.gif),linear-gradient(#ffffff, #000000);'));
      done();
    }, ['compass/css3/images']);
  });

});
