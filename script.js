 let minaTal = [1, 4, 5, 8, 9, 3];

 //Filter med anonym funktion som tar fram alla tal under 5
 // //resultatet hamnar i en ny array
 let mindre5 = minaTal.filter(function(aktuelltTal) {

     return aktuelltTal < 5;
 });

 // //Samma kod med arrow function
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
 var cars = ["Volvo", "BMW", "Audi", "Skoda", "Toyota", "Ford", "Mercedes", "Seat", "Honda", "Volkswagen", "Opel", "Mazda", "Suzuki"];
 //1.a
 //cars with more than 5 characters
 var letters5 = cars.filter(function(bilN) {

     return bilN.length > 5;
 });

 console.log(letters5);

 //1.b
 //starts with V
 var nameV = cars.filter(function(name) {

     return name.startsWith("V");
 });
 console.log(nameV);

 //1.c
 //contains da
 var nameda = cars.filter(function(name) {

     return name.includes("da");
 });
 console.log(nameda);

 //1.d
 //starts with M or ends with i
 var nameMi = cars.filter(function(name) {

     return name.startsWith("M") || name.endsWith("i");
 });
 console.log(nameMi);


 //2.
 var bands = ["ACDC", "Queen", "Aerosmith", "Iron Maiden", "Megadeth", "Metallica", "Pearl Jam", "Oasis", "Kiss", "Blur",
     "Eurythmics", "Genesis", "INXS", "Midnight Oil", "Kent", "Madness", "Manic Street Preachers", "The Offspring", "Pink Floyd", "Rammstein", "Red Hot Chili Peppers", "Deep Purple", "U2"
 ];

 //2.a
 //longest name
 var longest = bands.sort(function(a, b) {
     return b.length - a.length;
 });

 console.log(longest[0]);

 //2.b
 //how many start with the same character
 var nameM = bands.filter(function(name) {

     return name.startsWith("M");
 });

 console.log(nameM.length);

 //2.c
 var two_c2 = bands.filter(band => band.length >= 10);
 console.log(two_c2.sort());

 //step1-sort alphabetically
 var alpha = bands.sort(function(a, b) {
     if (a < b) return -1;
     if (a > b) return 1;
     return 0;
 });
 console.log(alpha);

 // step2-return array with elements length
 var alphal = bands.map(function(band) {
     return band.length;
 });
 console.log(alphal);

 //2.d
 var longestF = bands.sort(function(a, b) {
     return b.length - a.length;
 });

 console.log(longestF);