$(document).ready(function() {
  var thermostat = new Thermostat();
  
  updateThermostat();

  displayWeather('London');

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

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function updateThermostat() {
    $('#temperature').text(thermostat.currentTemp());
    $('#temperature').attr('class', thermostat.usage());
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var api_token = '&appid=3554791ed12c419cb07f164acf478bf6';
    var units = '&units=metric';
    $.get(url + api_token + units, function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  }
})