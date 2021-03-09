'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('increase the temperature by 1 degrees', function() {
    thermostat.up();
    expect(thermostat.temp).toEqual(21);
  });

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
