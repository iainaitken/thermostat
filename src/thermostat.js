class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSave = true;
    this.maxtemp = 25
  }
  // Think about refactoring to pass a block to the constructor - maxtemp should
  // depend on whether powersave is on or off

  up() {
    if (this.temp < this.maxtemp) {
      this.temp ++;
    }
    else {
      throw new Error("This is the maximum temperature");
    }
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
    this.powerSave === true ? this.maxtemp = 25 : this.maxtemp = 32;
  }

  reset() {
    this.temp = 20;
  }

  usage() {
    if (this.temp < 18) {
      return "Low Usage";
    }
    else if (this.temp <=25) {
      return "Medium Usage";
    }
    else {
      return "AMERICA FUCK YEAH";
    }
  }



  // switch (this.temp) {
  //   case (this.temp < 18):
  //     return "Low Usage";
  //   case (this.temp <= 25):
  //     return "Medium Usage";
  //   case (this.temp > 25):
  //     return "AMERICA FUCK YEAH";
  // };
}
