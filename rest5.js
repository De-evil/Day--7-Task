var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    var data = JSON.parse(xhr.responseText);
    var totalPopulation = data.reduce(function(acc, country) {
      var population = country.population;
      return acc + (population ? population : 0);
    }, 0);
    console.log("Total population of countries:", totalPopulation);
  } else {
    console.error('Request failed with status:', xhr.status);
  }
};
xhr.onerror = function() {
  console.error('Error fetching data.');
};
xhr.send();
