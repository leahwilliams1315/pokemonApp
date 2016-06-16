/**
 * Created by leah on 2016-06-15.
 */

const BASE_URL = "http://pokeapi.co/api/v2/pokemon?limit=811";

angular
    .module('pokemonApp', [])
    .controller('myController', function ($http) {

        this.greeting = "Hello World!";


        var pokemonResult = $http.get(BASE_URL);

        pokemonResult.then(res => this.pokemonList = res.data.results.filter((item, index) => index < 20), e => console.log(e));

    });
