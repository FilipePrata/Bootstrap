document.getElementById("card").style.setProperty("display", "none", "important")

function Search() {
    document.getElementById("card").style.setProperty("display", "block", "important")
    let country = document.getElementById("country").value
    let finalURL = `https://restcountries.com/v3.1/name/${country}?fullText=true`


    fetch(finalURL)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            var name = window.document.getElementById("name")
            var capital = window.document.getElementById("capital")
            var continent = window.document.getElementById("continent")
            var population = window.document.getElementById("population")
            var flag = window.document.getElementById("flag")

            name.innerText = country
            capital.innerText = data[0].capital
            continent.innerText = data[0].continents[0]
            population.innerText = data[0].population
            flag.src = data[0].flags.svg
        })
}