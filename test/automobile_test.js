var expect = require("chai").expect;
var Automobile = require("../src/automobile.js");

describe("Automobile tests", function () {

    it("should be constructed properly", function () {
        var auto = new Automobile("Ford", "Mustang", 1999, "Black");
        expect(auto).instanceof(Automobile);
        expect(auto.make).to.equal("Ford");
        expect(auto.model).to.equal("Mustang");
        expect(auto.year).to.equal(1999);
        expect(auto.color).to.equal("Black");
    });

    it("should have a start() method defined on Automobile.prototype", function () {
        var auto = new Automobile("Ford", "Mustang", 1999, "Black");
        var testValue = auto.getIsStarted();
        expect(testValue).to.equal(false);
        expect(auto.start).to.exist;
        auto.start();
        expect(auto.getIsStarted()).to.equal(true);
    });
});
