class Country {
  constructor() {
  }

  async getAllCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();

      if (!response.ok) throw response

      return data;
  } catch (error) {
    console.log(error);
    return "Error fetching data";
  }
} 
    
  async getCountryByName(name) {
    try {
      const response =  await fetch(`https://restcountries.com/v3/name/${name}`) 
      const data = await response.json();

      if (!response.ok) throw response

      console.log(data[0]);
    } catch (error) {
      console.log(error);
      return "Error fetching data";
    }
  } 
  
  async getCountryBorder(name) {
    try{
    const response = await fetch(`https://restcountries.com/v3/name/${name}`)
      const data = await response.json();
      const borders = data[0].borders;

      if (!response.ok) throw response
      
      return borders;
    } catch (error){
     console.log(error);
     return "Error fetching data";
  }
  }

  async getCountryByLanguage(language) {
    try {
      const response = await fetch(`https://restcountries.com/v3/lang/${language}`);
      const data = await response.json();
      const countryName = data[0].name.common; 

      if (!response.ok) throw response
      
      return countryName;
    } catch (error) {
      console.error(error);
      return "Error fetching data";
    }
  }

  async getCountriesByPopulation() {
    try {
    const response = await fetch('https://restcountries.com/v3/all');
    const countries = await response.json();
    const filteredCountries = countries.filter(country => country.population > 1000000000);

    if (!response.ok) throw response

    return filteredCountries;
   } catch (error) {
    console.error(error);
    return "Error fetching data";
  }
  }
}
const countriesList = new Country();
 
countriesList.getAllCountries();
countriesList.getCountryByName("Finland");
countriesList.getCountryBorder("India");
countriesList.getCountryByLanguage("Hindi");
countriesList.getCountriesByPopulation(1000000000);