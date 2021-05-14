const fetch = require('node-fetch');
const url = "https://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json";

const unfetch = new Promise((resolve, reject)=>{

});

const fetchCocktails = async (url) => {
    const data = await fetch(url);
    fetchedName = await data.json();
   console.log(fetchedName);

};
fetchCocktails(url); 