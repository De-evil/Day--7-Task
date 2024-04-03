var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    var data = JSON.parse(xhr.responseText);
    data.forEach(function(country) {
      var name = country.name.common;
      var capital = country.capital;
      var flag = country.flags.png;
      
      console.log("Name:", name);
      console.log("Capital:", capital);
      console.log("Flag:", flag);
      console.log("------------");
    });
  } else {
    console.error('Request failed with status:', xhr.status);
  }
};
xhr.onerror = function() {
  console.error('Error fetching data.');
};
xhr.send();
