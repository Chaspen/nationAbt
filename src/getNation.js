function getNation(nation) {
    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', '../../data/all/' + nation + '.json', true);
        xobj.onreadystatechange = function() {
            if (xobj.readyState == 4 && xobj.status == "200") {

                // .open will NOT return a value but simply returns undefined in async mode so use a callback
                callback(xobj.responseText);

            } 
            else if (xobj.status == "404") {
                console.log("Could not find corresponding .json file")
            }
        }
        xobj.send(null);

    }

    // Call to function with anonymous callback
    function ReplaceInfo() {
        loadJSON(function(response) {
            dataReturn = JSON.parse(response);
            document.getElementById("name").innerHTML = dataReturn.name
            document.getElementById("capital").innerHTML = dataReturn.capital
            document.getElementById("language").innerHTML = dataReturn.language
            document.getElementById("religion").innerHTML = dataReturn.religion
            document.getElementById("population").innerHTML = dataReturn.population
            document.getElementById("currency").innerHTML = dataReturn.currency[0].name + " (" + dataReturn.currency[0].code + ")"
            document.getElementById("drivingSide").innerHTML = dataReturn.driving
            document.getElementById("films").innerHTML = dataReturn.media.films[0].film.name
            document.getElementById("films").innerHTML = dataReturn.media.films.film.director
        });
    }
    ReplaceInfo()
}