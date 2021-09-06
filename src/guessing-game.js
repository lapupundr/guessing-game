class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.minNmb = min;
        this.maxNmb = max;
    }

    guess() {
        this.result = Math.round((this.minNmb + this.maxNmb) / 2);
        return this.result;
    }

    lower() {
        this.maxNmb = this.result;

    }

    greater() {
        this.minNmb = this.result;

    }
}

module.exports = GuessingGame;
