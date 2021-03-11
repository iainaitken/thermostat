$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateThermostat() {
    $('#temperature').text(thermostat.currentTemp());
    $('#temperature').attr('class', thermostat.usage());
  }

  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateThermostat();
  })

  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateThermostat();
  })

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateThermostat();
  })

  $('#powersave-mode').on('click', function() {
    thermostat.togglePowerSave();
    if (thermostat.powerSave === true) {
      $('#power-saving-status').text('on');
    }
    else {
      $('#power-saving-status').text('off');
    }
  })
})