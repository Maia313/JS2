 let minaTal = [1, 4, 5, 8, 9, 3];

 //Filter med anonym funktion som tar fram alla tal under 5
 //resultatet hamnar i en ny array
 let mindre5 = minaTal.filter(function(aktuelltTal) {

     return aktuelltTal < 5;
 });

 // Samma kod med arrow function
 let mindre5Arrow = minaTal.filter(tal => tal < 5);

 console.log(mindre5);
 console.log(mindre5Arrow);

 //Kod som tar fram summan av alla tal
 let summa = minaTal.reduce(function(totalVarde, aktuelltTal) {

     return totalVarde + aktuelltTal;

 });

 //Samma kod som summerar fast med arrow function
 let summaArrow = minaTal.reduce((total, varde) => total + varde);

 console.log(summa);
 console.log(summaArrow);


 let namnLista = ["Kalle", "Kajsa", "Emma", "Lisa", "Leif", "Olle"];

 //Filter som arbetar med strängvärden istället
 let namnK = namnLista.filter(function(namn) {

     return namn.startsWith("K");
 });

 // //Samma kod fast med arrow function istället
 let namnKArrow = namnLista.filter(namn => namn.startsWith("K"));

 console.log(namnK);
 console.log(namnKArrow);

 //Det går att lägga på flera villkor, här namn som börjar på K och slutar på a
 let namnKaArrow = namnLista.filter(namn => namn.startsWith("K") && namn.endsWith("a"));

 console.log(namnKaArrow);

 // Book example

 class Book {
     constructor(title, price, lang) {
         this.Title = title;
         this.Price = price;
         this.Lang = lang;
     }
 };

 //Lägger in 8 böcker i arrayen
 let book1 = new Book("Moby Dick", 299, "Engelska");
 let book2 = new Book("Java för nybörjare", 599, "Svenska");
 let book3 = new Book("C++ advanced", 799, "Engelska");
 let book4 = new Book("Requiem", 799, "Engelska");
 let book5 = new Book("C# programming", 299, "Engelska");
 let book6 = new Book("Javascript introduktion", 399, "Svenska");
 let book7 = new Book("Angular step by step", 299, "Engelska");
 let book8 = new Book("Python", "299", "Engelska");

 let bookList = [book1, book2, book3, book4, book5, book6, book7, book8];

 //Skapar ett filter som tar fram bara svenska böcker
 let myFilterArrow = bookList.filter(currentBook => currentBook.Lang == "Svenska");
 let myFilter = bookList.filter(function(currentBook) { return currentBook.Lang == "Svenska" });

 for (let thisBook of myFilter) {
     console.log(thisBook.Title + " " + thisBook.Price);
 }

 for (let thisBook of myFilterArrow) {
     console.log(thisBook.Title + " " + thisBook.Price);
 }

 //Skapar ett filter som tar fram böcker som kostar mellan 200 och 400 kr och som är på engelska
 let price200_400Arrow = bookList.filter(book => book.Price >= 200 && book.Price <= 400 && book.Lang == "Engelska");
 let price200_400 = bookList.filter(function(book) { return book.Price >= 200 && book.Price <= 400 && book.Lang == "Engelska" })

 for (let thisBook of price200_400) {
     console.log(thisBook.Title + " " + thisBook.Price);
 }

 for (let thisBook of price200_400Arrow) {
     console.log(thisBook.Title + " " + thisBook.Price);
 }


 //array exercises
 //1
 let cars = ["Volvo", "BMW", "Audi", "Skoda", "Toyota", "Ford", "Mercedes", "Seat", "Honda", "Volkswagen", "Opel", "Mazda", "Suzuki"];
 //1.a
 //cars with more than 5 characters
 let letters5 = cars.filter(function(bilN) {

     return bilN.length > 5;
 });

 console.log(letters5);

 //1.b
 //starts with V
 let nameV = cars.filter(function(name) {

     return name.startsWith("V");
 });
 console.log(nameV);

 //1.c
 //contains da
 let nameda = cars.filter(function(name) {

     return name.includes("da");
 });
 console.log(nameda);

 //1.d
 //starts with M or ends with i
 let nameMi = cars.filter(function(name) {

     return name.startsWith("M") || name.endsWith("i");
 });
 console.log(nameMi);


 //2.
 let bands = ["ACDC", "Queen", "Aerosmith", "Iron Maiden", "Megadeth", "Metallica", "Pearl Jam", "Oasis", "Kiss", "Blur",
     "Eurythmics", "Genesis", "INXS", "Midnight Oil", "Kent", "Madness", "Manic Street Preachers", "The Offspring", "Pink Floyd", "Rammstein", "Red Hot Chili Peppers", "Deep Purple", "U2"
 ];

 //2.a
 //longest name
 let longest = bands.sort(function(a, b) {
     return b.length - a.length;
 });

 console.log(longest[0]);

 //2.b
 //how many start with the same character
 let nameM = bands.filter(function(name) {

     return name.startsWith("M");
 });

 console.log(nameM.length);

 //2.c
 let two_c2 = bands.filter(band => band.length >= 10);
 console.log(two_c2.sort());

 //step1-sort alphabetically
 let alpha = bands.sort(function(a, b) {
     if (a < b) return -1;
     if (a > b) return 1;
     return 0;
 });
 console.log(alpha);

 // step2-return array with elements length
 let alphal = bands.map(function(band) {
     return band.length;
 });
 console.log(alphal);

 //2.d
 let longestF = bands.sort(function(a, b) {
     return b.length - a.length;
 });

 console.log(longestF);

 //3
 let integers = [54, 23, 76, 123, 93, 7, 3489, 88];

 //3.a
 //average of all the elements in the array
 let average = (array) => array.reduce((a, b) => a + b) / array.length;
 console.log(average(integers));

 //3.b
 //the biggest number
 let largest = Math.max.apply(Math, integers);
 console.log(largest);

 //3.c
 //sum of all the elements
 let sum = integers.reduce(add, 0);

 function add(a, b) {
     return a + b;
 }

 console.log(sum);
 //arrow function solution
 sum = integers.reduce((a, b) => a + b, 0);
 console.log(sum);
 //or
 let numbers = integers.reduce((total, amount) => total + amount);
 console.log(numbers);

 //3.d
 //logs sum of numbers >70
 function isBigEnough(value) {
     return function(element) {
         return (element >= value);
     }
 }
 let filtered70 = integers.filter(isBigEnough(70));
 let sum70 = filtered70.reduce((a, b) => a + b, 0);
 console.log(sum70);

 //3.e
 //logs all even numbers
 let even = integers.reduce(function(arr, num) {
     if (num % 2 == 0) arr.push(num);
     return arr;
 }, []);
 console.log(even);

 //3.f
 //adds 2 to every element in the array
 let plus2 = integers.map(function(val) { return 2 + val; });
 console.log(plus2);

 //4
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
         continent: " Europe ",
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

 //4.a
 //logs all the country names
 function getAllCountryNames(countryArray) {

     //Array.map returns a new array based on the previous array. We must provide
     //a callback function that will handle the looping 
     return countryArray.map(function(country) {
         return country.name; //The new array will only contain country.name
     });
 }

 //4.b
 //returns the total population of all countries in list

 function getGlobalPopulation(countryArray) {

     //The reduce function here has the following parameters: previous value & current value
     //and we get a single number returned. Reduce reduces many numbers to one.
     return countryArray.reduce(function(totalPopulation, country) {

         //Here we are basically doing a for-loop that does: sum += i;
         return totalPopulation + country.population;
     }, 0); //0 as the second argument so totalPopulation starts at 0
 }


 //4.c
 // Get a continents population based on passed parameter

 function getContinentPopulation(countryArray, continent) {

     //We can chain together multiple higher order functions
     //First we filter the array, if the objects continent is the same as
     //the parameter, it will be pushed into the new array.
     return countryArray.filter(function(country) {
             return country.continent == continent;
         })
         //Then we take the newly create array and we reduce the values to a sum
         .reduce(function(totalPopulation, country) {
             return totalPopulation + country.population;
         }, 0);
 }


 //4.d
 // Gets the least populated country in the list

 function getLeastPopulatedCountry(countryArray) {
     return countryArray.reduce(function(previousValue, value) {
         return previousValue.population < value.population ? previousValue : value;
     });
 }


 //4.e
 // Get average population of all countries on a continent
 function getContinentAveragePopulation(countryArray, continent) {
     var countries = countryArray.filter(function(country) {
         return country.continent == continent;
     });
     var totalPopulation = countries.reduce(function(totalPop, country) {
         return totalPop += country.population;
     }, 0);
     return (totalPopulation / countries.length).toFixed(0);
 }

 //4.f
 //Gets countries with population above a certain value

 function getCountriesWithPopulationAbove(countryArray, min) {
     //Returns a new array containing only countries with pop above min
     return countryArray.filter(function(country) {
         return country.population > min;
     });
 }

 //4.g
 // Gets countries between an interval

 function getCountriesWithPopulationBetween(countryArray, min, max) {
     //Just like a if statement, the filter function can take multiple conditions
     return countryArray.filter(function(country) {
         return country.population > min && country.population < max;
     });
 }


 //Gets continent with the highest population
 function getContinentWithHighestPopulation(countryArray) {


     return countryArray.filter(function(country) {
             return country.continent == continent;
         })
         //Then we take the newly created array and we reduce the values to a sum
         .reduce(function(totalPopulation, country) {
             return totalPopulation + country.population;
         }, 0)
         .reduce((totalPopulation, continent) => totalPopulation + continent);
 }

 // Helper function that prints the data passed to it with console log

 function print(data) {
     if (typeof data === 'array') { //If it's an array, map every value
         data.map(function(countryData) {
             console.log(countryData);
         })
     }
     console.log(data); //else just print the value
 }

 //1
 print(getAllCountryNames(countries));
 //2
 print(getGlobalPopulation(countries));
 //3
 print(getContinentPopulation(countries, 'Europe'));
 //4
 print(getLeastPopulatedCountry(countries));
 //5
 print(getContinentAveragePopulation(countries, 'Africa'));
 //6
 print(getCountriesWithPopulationAbove(countries, 50000000));
 //7
 print(getCountriesWithPopulationBetween(countries, 8000000, 15000000));
 //
 print(getCountriesWithPopulationBetween(countries, ));