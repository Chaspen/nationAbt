function getLang(lang) {
    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', '../../data/lang/' + lang + '.json', true);
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
            document.getElementById("family").innerHTML = dataReturn.family
            document.getElementById("script").innerHTML = dataReturn.writingSystem
            document.getElementById("hello").innerHTML = "Hello - " + dataReturn.samples[0].hello
            document.getElementById("gm").innerHTML = "Good Morning! - " +  dataReturn.samples[0].gm
            document.getElementById("ga").innerHTML = "Good Afternoon! - " +  dataReturn.samples[0].ga
            document.getElementById("gn").innerHTML = "Good Night! - " +  dataReturn.samples[0].gn
            document.getElementById("hru").innerHTML = "How are you? - " +  dataReturn.samples[0].hru
            document.getElementById("yourname").innerHTML = "What's your name? - " +  dataReturn.samples[0].yourname
            document.getElementById("nameis").innerHTML = "My name is ... - " +  dataReturn.samples[0].nameis
            if (dataReturn.samplesIsRomanized == true) {
                document.getElementById("phrasesLabel").innerHTML = "Phrases <a id='isRoman'>(Romanized)</a>"
            } else {
                document.getElementById("phrasesLabel").innerHTML = "Phrases"
            }
        });
    }
    ReplaceInfo()
}