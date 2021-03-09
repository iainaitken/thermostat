'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temp', function() {
    it('has a default temperature of 20 degrees', function() {
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('up', function() {
    it('increase the temperature by 1 degrees', function() {
      thermostat.up();
      expect(thermostat.temp).toEqual(21);
    });
  });

  describe('down', function() {
    it('decreases the temperature by 1 degrees', function() {
      thermostat.down();
      expect(thermostat.temp).toEqual(19);
    });

    it('cannot go below 10 degrees', function() {
      for(var i=20; i>=11; i-=1) {
        thermostat.down();
      };
      expect(function() { thermostat.down() }).toThrow(new Error("Cannot go below 10 Degrees"));
    });
  });

  describe('power saving', function() {
    it('power saving is on by default', function() {
      expect(thermostat.powerSave).toEqual(true);
    });

    it('power saving can be turned off', function() {
      thermostat.togglePowerSave();
      expect(thermostat.powerSave).toEqual(false);
    });

    it('max temp with powersave is 25 degrees', function() {
      for(var i=20; i<25; i+=1) {
        thermostat.up();
      };
      expect(function() { thermostat.up() }).toThrow(new Error("This is the maximum temperature"));
    });

    it('max temp without powersave is 32 degrees', function() {
      thermostat.togglePowerSave();
      for(var i=20; i<32; i+=1) {
        thermostat.up();
      };
      expect(function() { thermostat.up() }).toThrow(new Error("This is the maximum temperature"));
    });
  });

  describe('reset', function() {

    it('can reset the temperature to 20', function() {
      thermostat.up();
      expect(thermostat.temp).toEqual(21);
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('current energy usage', function() {
    it('will show me a low usage below 18 degrees', function() {
      for(var i=20; i>15; i-=1) {
        thermostat.down();
      };
      expect(thermostat.usage()).toEqual("Low Usage");
    });

    it('will show me a medium usage between 18 & 25 degrees', function() {
      expect(thermostat.usage()).toEqual("Medium Usage");
    });

    it('will show me a high usage above 25 degrees', function() {
      thermostat.togglePowerSave()
      for(var i=20; i<28; i+=1) {
        thermostat.up();
      };
      expect(thermostat.usage()).toEqual("High Usage");
    });
  });

});
