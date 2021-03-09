class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSave = true;
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

  togglePowerSave() {
    this.powerSave === true ? this.powerSave = false : this.powerSave = true;
  }
}
