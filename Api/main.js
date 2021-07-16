/*(function() {
    const search = document.getElementById("search");
    const profile = document.getElementById("profile");
    //const url = "https://api.github.com/users/takenet/repos";
    const url = "https://api.github.com/users";
    const client_id = "Iv1.04a2120de9f17e8b";
    const client_secret = "7b517fc71c1d8078d8b6b2ab060a98885770061d";

    async function getLanguage(user) {
        const response = await fetch(`${url}/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`);
        //const response = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`);
        //const response = await fetch(`${url}`);
        //const responseJson = await response.json();
        //const teste = responseJson.language;

        const resultado = response.json();

        console.log(resultado);

        //if (resultado.name == "async-samples") {
        return resultado;
        //}


    }

    //function showProfile(user);

    search.addEventListener("keyup", e => {
        const user = e.target.value;

        var res = getLanguage(user).then(res => console.log(res));
        //console.log(Promise.resolve(res));
    });
})();*/


/*const search = document.getElementById("search");
const profile = document.getElementById("profile");
const url = "https://api.github.com/users/takenet/repos";
//const url = "https://api.github.com/users";
const client_id = "Iv1.04a2120de9f17e8b";
const client_secret = "7b517fc71c1d8078d8b6b2ab060a98885770061d";

function getLanguage() {
    //const response = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`);
    /*const response = await fetch(`${url}`);
    const responseJson = await response.json();
    const teste = responseJson.language;
    const resultado = response.json();

    //responseJson
    //return resultado;
    console.log("deu");
}

export default getLanguage;*/

/*const search = document.getElementById("search");
const profile = document.getElementById("profile");
const url = "https://jsonplaceholder.typicode.com/todos/";

function getLanguage() {
    //const response = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`);
    const response = await fetch(`${url}`);
    const responseJson = await response.json();
    const teste = responseJson.language;
    const resultado = response.json();

    //responseJson
    //return resultado;
    console.log("deu");
}

export default getLanguage;*/

/*
(function() {
    const search = document.getElementById("search");
    const profile = document.getElementById("profile");
    const url = "https://jsonplaceholder.typicode.com/todos/";
    const client_id = "Iv1.04a2120de9f17e8b";
    const client_secret = "7b517fc71c1d8078d8b6b2ab060a98885770061d";

    async function getLanguage(user) {
        //const response = await fetch(`${url}/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`);
        //const response = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`);
        const response = await fetch(`${url}`);
        //const responseJson = await response.json();
        //const teste = responseJson.language;

        const resultado = response.json();

        console.log(resultado);

        //if (resultado.name == "async-samples") {
        return resultado;
        //}


    }

    //function showProfile(user);

    search.addEventListener("keyup", e => {
        const user = e.target.value;

        var res = getLanguage(user).then(res => console.log(res));
        //console.log(Promise.resolve(res));
    });
})();*/

// Exemplo de requisição GET
var ajax = new XMLHttpRequest();

// Seta tipo de requisição e URL com os parâmetros
ajax.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);

// Envia a requisição
ajax.send();

// Cria um evento para receber o retorno.
ajax.onreadystatechange = function() {
    // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
    if (ajax.readyState == 4 && ajax.status == 200) {
        var data = ajax.responseText;
        var objeto = JSON.parse(data);

        // Retorno do Ajax
        //console.log(objeto);

        let i = 0;
        while (objeto.length > i) {
            for (let [key, value] of Object.entries(objeto[i])) {
                if (key == "completed" && value == true) {
                    console.log(objeto[i]);
                }

            }
            i++;
        }
    }
}