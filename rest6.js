var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    var data = JSON.parse(xhr.responseText);
    var usDollarCountries = data.filter(function(country) {
      var currencies = country.currencies;
      return currencies && currencies.hasOwnProperty('USD');
    });
    console.log("Countries that use US dollars as currency:");
    usDollarCountries.forEach(function(country) {
      console.log(country.name.common);
    });
  } else {
    console.error('Request failed with status:', xhr.status);
  }
};
xhr.onerror = function() {
  console.error('Error fetching data.');
};
xhr.send();
