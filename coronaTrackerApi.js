const countryName = document.querySelector('.country .name');
const totalCases = document.querySelector('.total-cases .value');
const newCases = document.querySelector('.total-cases .new-value');
const recovered = document.querySelector('.recovered .value');
const newRecovered = document.querySelector('.recovered .new-value');
const deaths = document.querySelector('.deaths .value');
const newDeaths = document.querySelector('.deaths .new-value');

const ctx = document.getElementById('axes-chart').getContext('2d');

// API VALUES
let appData = [],
  casesList = [],
  recoveredList = [],
  deathsList = [],
  date = [];

// GET USERS COUNTRY CODE
let countryCode = geoplugin_countryCode();
let userCountry;
countryList.forEach(country => {
  if (country.code == country.code) {
    userCountry = country.name;
  }
});