
import {OPENWEATHER_KEY} from './api-keys';

var Fetch = require('whatwg-fetch');
var rootUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';
var apiUrl = `&appid=${OPENWEATHER_KEY}`;


module.exports = {
  get: function(place){
    return fetch(rootUrl + place + apiUrl, {
      headers: {

      }
    })
    .then(function(response){
      return response.json();
    });
  }
};
