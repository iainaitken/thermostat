class Thermostat {
  constructor() {
    this.DEFAULT_TEMP = 20;
    this.MIN_TEMP = 10;
    this.MAX_TEMP_POWERSAVE = 25;
    this.MAX_TEMP_NO_POWERSAVE = 32;
    this.LOW_ENERGY_USE = 18;
    this.MED_ENERGY_USE = 25;
    this.temp = this.DEFAULT_TEMP;
    this.powerSave = true;
    this.maxtemp = this.MAX_TEMP_POWERSAVE;
  }

  currentTemp() {
    return this.temp;
  }
  
  up() {
    if (this.temp < this.maxtemp) {
      this.temp ++;
    }
    else {
      throw new Error("This is the maximum temperature");
    }
  }

  down() {
    if (this.temp > this.MIN_TEMP) {
      this.temp --;
    }
    else {
      throw new Error("Cannot go below 10 Degrees");
    }
  }

  togglePowerSave() {
    this.powerSave === true ? this.powerSave = false : this.powerSave = true;
    this.powerSave === true ? this.maxtemp = this.MAX_TEMP_POWERSAVE : this.maxtemp = this.MAX_TEMP_NO_POWERSAVE;
    if (this.temp > this.maxtemp) {
      this.temp = this.maxtemp;
      // work out how to send a message to jquery to refresh temp display
    }
  }

  reset() {
    this.temp = this.DEFAULT_TEMP;
  }

  usage() {
    switch (true) {
      case (this.temp < this.LOW_ENERGY_USE):
        return "low-usage";
      case (this.temp <= this.MED_ENERGY_USE):
        return "medium-usage";
      default:
        return "high-usage";
    }
  }
}
