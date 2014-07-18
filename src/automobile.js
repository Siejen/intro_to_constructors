var Automobile = function (make, model, year, color) {

    // Make the new automobile store its properties.
    // by using the `this` keyword.

    // Leave this alone
    this.isStarted = false;
};

// Create a function called start() on the Automobile's prototype
// so that each automobile created has access to it.

// Leave this alone.
Automobile.prototype.getIsStarted = function () {
    return this.isStarted;
};

module.exports = Automobile;
