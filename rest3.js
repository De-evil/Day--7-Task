var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    var data = JSON.parse(xhr.responseText);
    var countriesWithPopulationLessThan2Lakhs = data.filter(function(country) {
      var population = country.population;
      return population && population < 200000;
    });
    console.log("Countries with population less than 2 lakhs:", countriesWithPopulationLessThan2Lakhs.map(function(country) {
      return country.name.common;
    }));
  } else {
    console.error('Request failed with status:', xhr.status);
  }
};
xhr.onerror = function() {
  console.error('Error fetching data.');
};
xhr.send();
