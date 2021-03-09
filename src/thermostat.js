class Thermostat {
  constructor() {
    this.temp = 20;
  }

  up() {
    this.temp ++;
  }

  down() {
    if (this.temp > 10) {
      this.temp --;
    }
    else {
      throw new Error("Cannot go below 10 Degrees");
    }
  }

}
