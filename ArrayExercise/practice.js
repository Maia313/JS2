//DOM manipulation
window.onload = function() {
    init();
};


//array methods
let cars = ["Volvo", "BMW", "Audi", "Skoda",
    "Toyota", "Ford", "Mercedes", "Seat", "Honda",
    "Volkswagen", "Opel", "Mazda", "Suzuki"
];

let bands = ["ACDC", "Queen", "Aerosmith", "Iron Maiden", "Megadeth", "Metallica", "Pearl Jam", "Oasis", "Kiss", "Blur",
    "Eurythmics", "Genesis", "INXS", "Midnight Oil", "Kent", "Madness", "Manic Street Preachers", "The Offspring", "Pink Floyd", "Rammstein", "Red Hot Chili Peppers", "Deep Purple", "U2"
];

let integers = [54, 23, 76, 123, 93, 7, 3489, 88];
let countries = [{
        name: "United Kingdom",
        continent: "Europe",
        population: 65270121,
        pFemale: 0.508
    },
    {
        name: "Republic of Ireland",
        continent: "Europe",
        population: 4708209,
        pFemale: 0.499
    },
    {
        name: "Australia",
        continent: "Oceania",
        population: 24482205,
        pFemale: 0.502
    },
    {
        name: "Taiwan",
        continent: "Asia",
        population: 23522296,
        pFemale: 0.501
    },
    {
        name: "Uruguay",
        continent: "South America",
        population: 3446772,
        pFemale: 0.517
    },
    {
        name: "Morocco",
        continent: "Africa",
        population: 35010005,
        pFemale: 0.510
    },
    {
        name: "Nigeria",
        continent: "Africa",
        population: 188688090,
        pFemale: 0.494
    },
    {
        name: "Zimbabwe",
        continent: "Africa",
        population: 16051510,
        pFemale: 0.507
    },
    {
        name: "China",
        continent: "Asia",
        population: 1381321335,
        pFemale: 0.488
    },
    {
        name: "Mexico",
        continent: "North America",
        population: 129386794,
        pFemale: 0.507
    },
    {
        name: "Canada",
        continent: "North America",
        population: 36446796,
        pFemale: 0.504
    },
    {
        name: "Czech Republic",
        continent: "Europe",
        population: 10556351,
        pFemale: 0.509
    },
    {
        name: "Iceland",
        continent: "Europe",
        population: 332631,
        pFemale: 0.496
    }
];

function init() {

    //1.a
    let long5 = cars.filter(str => str.length > 5);
    console.log("Cars longer than 5: " + long5 + '\n');
    document.getElementById('long5').innerHTML = long5;

    //1.b
    let startV = cars.filter(checkV => checkV.startsWith("V"));
    console.log("Cars start with V: " + startV + '\n');
    document.getElementById('startV').innerHTML = startV;

    //1.c
    let containDa = cars.filter(stringDa => stringDa.includes("da"));
    console.log("Cars contain da: " + containDa + '\n');
    document.getElementById('containDa').innerHTML = containDa;

    //1.d
    let startEndM_i = cars.filter(stringM_i => stringM_i.startsWith("M") || stringM_i.endsWith("i"));
    console.log("Cars start with M or end with i: " + startEndM_i + '\n');
    document.getElementById('startEndM_i').innerHTML = startEndM_i;

    //2.



    //2.a
    let longest = bands.sort((a, b) => b.length - a.length);
    console.log("Band with the longest name: " + longest[0] + '\n');
    document.getElementById('longest').innerHTML = longest[0];
    //2.b
    let bandsM = bands.filter(startM => startM.startsWith('M'));
    console.log("How many band names start with M: " + bandsM.length + '\n');
    document.getElementById('bandsM').innerHTML = bandsM;
    //2.c
    let alphabetically10 = bands.filter(band => band.length >= 10);
    console.log("Band names longer >10, sorted alphabetically: " + alphabetically10.sort() + '\n');
    document.getElementById('alphabetically10').innerHTML = alphabetically10;
    //2.d
    let descending = bands.sort((a, b) => b.length - a.length);
    console.log("Longest band names first: " + descending + '\n');
    document.getElementById('descending').innerHTML = descending;
    //2.d
    //3


    //3.a
    let average = integers => integers.reduce((a, b) => a + b) / integers.length;
    console.log("Average of array elements: " + average(integers) + '\n');
    document.getElementById('average').innerHTML = average(integers);

    //3.b
    let largestNr = Math.max.apply(Math, integers);
    console.log("Largest number in the array: " + largestNr + '\n');
    document.getElementById('largestNr').innerHTML = largestNr;
    //3.c
    let integersSum = integers.reduce((total, amount) => total + amount);
    console.log("Sum of all the numbers in the array: " + integersSum + '\n');
    document.getElementById('integersSum').innerHTML = integersSum;
    //3.d
    let filtered70 = integers.filter(element => element >= 70);
    let sum70 = filtered70.reduce((a, b) => a + b, 0);
    console.log("Sum of all the numbers >70: " + sum70 + '\n');
    document.getElementById('sum70').innerHTML = sum70;

    //3.e
    let even = integers.reduce(function(arr, num) {
        if (num % 2 == 0) arr.push(num);
        return arr;
    }, []);
    console.log("Even numbers: " + even + '\n');
    document.getElementById('even').innerHTML = even;
    //3.f
    let plus2 = integers.map(val => 2 + val);
    console.log("Array with elements increased +2: " + plus2 + '\n');
    document.getElementById('plus2').innerHTML = plus2;

    //4


    //4.a

    //Array.map returns a new array based on the previous array. We must provide
    //a callback function that will handle the looping 
    let countriesName = countries.map(country => country.name); //The new array will only contain country.name
    console.log("All coutries in the array: " + countriesName);
    document.getElementById('countriesName').innerHTML = countriesName;
    //4.b

    //The reduce function here has the following parameters: previous value & current value
    //and we get a single number returned. Reduce reduces many numbers to one.
    let countriesPop = countries.reduce((totalPopulation, country) =>
        //Here we are basically doing a for-loop that does: sum += i;
        totalPopulation + country.population, 0); //0 as the second argument so totalPopulation starts at 0
    console.log("Global population: " + countriesPop);
    document.getElementById('countriesPop').innerHTML = countriesPop;
    //4.c
    function getContinentPopulation(countryArray, continent) {

        //We can chain together multiple higher order functions
        //First we filter the array, if the objects continent is the same as
        //the parameter, it will be pushed into the new array.
        return countryArray.filter(country =>
                country.continent == continent)
            //Then we take the newly create array and we reduce the values to a sum
            .reduce((totalPopulation, country) =>
                totalPopulation + country.population, 0);
    }

    console.log(getContinentPopulation(countries, "Europe"));
    document.getElementById('continentPop').innerHTML = getContinentPopulation(countries, "Europe");
    //4.d
    let leastPop = countries.reduce((previousValue, value) =>
        previousValue.population < value.population ? previousValue : value);
    console.log("Least populated country: " + leastPop.name);
    document.getElementById('leastPop').innerHTML = leastPop.name;
    //4.e
    function getContinentAveragePopulation(countryArray, continent) {
        let countries = countryArray.filter(country => country.continent == continent);
        let totalPopulation = countries.reduce((totalPop, country) =>
            totalPop += country.population, 0);
        return (totalPopulation / countries.length).toFixed(0);
    }
    console.log("Continent average population: " + getContinentAveragePopulation(countries, "Asia"));
    document.getElementById('averagePop').innerHTML = getContinentAveragePopulation(countries, "Asia");
    //4.f

    function getCountriesWithPopulationAbove(countryArray, min) {
        //Returns a new array containing only countries with pop above min
        return countryArray.filter(country => country.population > min);

    }
    console.log(getCountriesWithPopulationAbove(countries, 50000000));
    document.getElementById('abovePop').innerHTML = getCountriesWithPopulationAbove(countries, 50000000);
    //4.g
    function getCountriesWithPopulationBetween(countryArray, min, max) {
        //Just like a if statement, the filter function can take multiple conditions
        return countryArray.filter(country =>
            country.population > min && country.population < max);
    }
    console.log(getCountriesWithPopulationBetween(countries, 50000000, 500000000));
    document.getElementById('betweenPop').innerHTML = getCountriesWithPopulationBetween(countries, 50000000, 500000000);

    //function getContinentWithHighestPopulation(continentArray) {
    //return array with countries by continent 
    //return the continent with highest population
    // let highestContinentPop = Math.max.apply(Math, continentPop);

    //}
    //console.log(Object.keys(countries));
    /*function getSortedByContinent() {
        

    }*/
    let continentCountries = [];
    let continentPop = [];
    let europe = countries.filter(country => country.continent === "Europe");

    continentCountries.push(europe);

    function getContPopulation(continentArray) {

        //The reduce function here has the following parameters: previous value & current value
        //and we get a single number returned. Reduce reduces many numbers to one.
        return continentArray.reduce(function(totalPopulation, continent) {

            //Here we are basically doing a for-loop that does: sum += i;
            return totalPopulation + continent.population;
        }, 0); //0 as the second argument so totalPopulation starts at 0
    }

    let asia = countries.filter(country => country.continent === "Asia");
    let africa = countries.filter(country => country.continent === "Africa");
    let northAmerica = countries.filter(country => country.continent === "North America");
    let oceania = countries.filter(country => country.continent === "Oceania");
    let southAmerica = countries.filter(country => country.continent === "South America");

    continentCountries.push(southAmerica);
    continentCountries.push(oceania);
    continentCountries.push(africa);
    continentCountries.push(northAmerica);
    continentCountries.push(asia);
    console.log(continentCountries);

    continentPop.push(getContPopulation(europe));
    continentPop.push(getContPopulation(southAmerica));
    continentPop.push(getContPopulation(oceania));
    continentPop.push(getContPopulation(africa));
    continentPop.push(getContPopulation(northAmerica));
    continentPop.push(getContPopulation(asia));
    console.log(continentPop);

    let largestPop = Math.max.apply(Math, continentPop);
    console.log("Continent with largest population: " + largestPop);
    document.getElementById('contHighPop').innerHTML = largestPop;

}