let countryList = [
  { name: 'USA', code: 'US' },
  { name: 'Spain', code: 'ES' },
  { name: 'Italy', code: 'IT' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'GE' },
  { name: 'UK', code: 'GB' },
  { name: 'Turkey', code: 'TR' },
  { name: 'Iran', code: 'IR' },
  { name: 'Russia', code: 'RU' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Brazil', code: 'BR' },
  { name: 'Canada', code: 'CA' },
  { name: 'Nertherlands', code: 'NL' },
  { name: 'Switzerland', code: 'CH' },
  { name: 'Portugal', code: 'PT' },
  { name: 'India', code: 'IN' },
  { name: 'Austria', code: 'AT' },
  { name: 'Peru', code: 'PE' },
  { name: 'Sweden', code: 'SE' },
  { name: 'Japan', code: 'JP' },
  { name: 'South Korea', code: 'KR' },
  { name: 'Chile', code: 'CL' },
  { name: 'Saudi Arabia', code: 'SA' },
  { name: 'Poland', code: 'PL' },
  { name: 'Romania', code: 'RO' },
  { name: 'Pakistan', code: 'PK' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Nigeria', code: 'NG' },
  { name: 'Demnark', code: 'DK' }
];

// SELECT SEARCH COUNTRY ELEMENT
const searchCountry = document.querySelector('.search-country');
const allCountryList = document.querySelector('.country-list');
const changeCountryBtn = document.querySelector('.change-country');
const closeListBtn = document.querySelector('.close');
const input = document.querySelector('#search-input');

// CREATE THE COUNTRY LIST
function createCountryList() {
  const numOfCountries = countryList.length;


  let i = 0, ulListId;

  countryList.forEach((country, index) => {
    if (index % Math.ceil(numOfCountries / numOfUlList) == 0) {
      ulListId = `list-${i}`;
      // allCountryList.innerHTML += `<ul id="${ulListId}"></ul>`;
      const ul = document.createElement('ul');
      ul.id = ulListId;
      const li = document.createElement('li');
      li.id = country.name;
      li.innerText = country.name;
      li.setAttribute = onclick = "fetchData(country.name)";
      li.addEventListener('click', () => {
        // fetchData(country.name);
      });
      ul.appendChild(li);
      allCountryList.appendChild(ul);
      i++;
    }

    // document.getElementById(`${ulListId}`).inerHTML += `
    //   <li onclick="fetchData('${country.name}')" id="${country.name}">
    //   ${country.name}
    //   </li>
    // `;
  });
}
let numOfUlList = countryList.length;

createCountryList();

// SHOW/HIDE THE COUNTRY LIST ON CLICK EVENT
changeCountryBtn.addEventListener('click', () => {
  input.value = '';
  resetCountryList();

  searchCountry.classList.toggle('hide');
  searchCountry.classList.add('fadeIn');
});

closeListBtn.addEventListener('click', () => {
  searchCountry.classList.toggle('hide');
});

allCountryList.addEventListener('click', () => {
  searchCountry.classList.toggle('hide');
});

// FILTER COUNTRY
input.addEventListener('input', () => {
  let inputValue = input.value.toUpperCase();

  countryList.forEach(country => {
    if (country.name.toUpperCase().startsWith(inputValue)) {
      document.getElementById(country.name).classList.remove('hide');
    } else {
      document.getElementById(country.name).classList.add('hide');
    }
  });
});

// RESET COUNTRY LIST (SHOW ALL THE COUNTRIES)
function resetCountryList() {
  countryList.forEach(country => {
    document.getElementById(country.name).classList.remove('hide');
  })
}