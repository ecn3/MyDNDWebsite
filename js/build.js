const URL = "http://dnd5eapi.co/api/";
// I had to disabale cors on my browser to get anything to work.  Have  been struggling with this
// set 6 problem b and just gave up.  After several hours of research this is the only solution
// I could come up that worked without having to turn my POS laptop into a proxy server just to get
// fetch to work.
fetch(URL + "classes/", {
    mode: 'cors', 
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin' : '*'
    }
}).then(response => response.json())
.then((response) => {
    for(let i = 0; i < response.results.length; i++) {
        $('#Classes').append(`<option value="` + response.results[i].name + `">`);
    }
}).catch(e => console.log("This did not work as expected"));

fetch(URL + "races/", {
    mode: 'cors', 
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin' : '*'
    }
}).then(response => response.json())
.then((response) => {
    for(let i = 0; i < response.results.length; i++) {
        $('#Races').append(`<option value="` + response.results[i].name + `" class="race">`);
    }
}).catch(e => console.log("This did not work as expected"));

function addSubrace() {
    let sel = document.getElementById('race').value;
    fetch(URL + "races/", {
        mode: 'cors', 
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        }
    }).then(response => response.json())
    .then((response) => {
        for(let i = 0; i < response.results.length; i++) {
            if(response.results[i].name === sel) {
                fetch(response.results[i].url, {
                    mode: 'cors',
                    method: 'GET',
                    headers: {
                        'Accept': 'applicaion/json',
                        'Access-control-Allow-Origin': '*'
                    }
                }).then(response => response.json())
                .then((data) => {
                    if(data && data.subraces && data.subraces.length > 0) {
                        for(let i = 0; i < data.subraces.length; i++) {
                            $('#Subraces').append(`<option value="` + data.subraces[i].name + `">`);
                        }
                    }
                });
            }
        }
    });
}

