let buttonClicked = document.querySelector('#showCountries');

buttonClicked.addEventListener("click", showCountries);

function showCountries() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://restcountries.com/v2/all", true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      console.log("success");
      let countries = JSON.parse(this.response);
      console.log(countries);
      countries.forEach((country) => {
        const countryCard = document.createElement("div");
        countryCard.innerHTML = country.name;
        document.querySelector("#feed").appendChild(countryCard);
      });
    }
  };

  xhr.send();
}
