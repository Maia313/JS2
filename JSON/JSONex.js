
//--------------------------------------------------------------------
//**1. Du har följande json sträng. Ta emot strängen i en variabel 
//**   och skriv sedan ut förnamn och efternamn med console.log
//--------------------------------------------------------------------

var person= {"fornamn": "Lisa", "efternamn": "Lind", "adress": { "gata": "Storgatan 3", "postort": "Södertälje", "postnr": "11122"},"kurser":[ "Javascript1", "Javascript2", "Webbdesign" ]};

console.log("Du heter " + person.fornamn + " " + person.efternamn);

//--------------------------------------------------------------------
//** 2. Ta sedan fram alla kurser ur strängen och skriv ut med 
//**    console.log 
//--------------------------------------------------------------------

console.log("Du har klarat följande kurser");

for(var kurs of person.kurser)
{
	console.log(kurs);
}

//--------------------------------------------------------------------
//***3.	Ta ut alla adress uppgifter och skriv ut med console.log.
//--------------------------------------------------------------------
console.log(person.adress.gata);
console.log(person.adress.postort);
console.log(person.adress.postnr);

//--------------------------------------------------------------------
//**4.	Koppla nu det du gjort i uppgift 1-3 till en webbsida. Du 
//**    skall skapa element på sidan där du lägger värdena från 
//**    json-filen. Tänk dig att du öppnar learnpoint och visar en 
//**    översiktssida över en student. Lägg alla kurser i en lista. 
//**    Välj vilken typ av element du visar de andra värdena med.
//--------------------------------------------------------------------

//Skapa rubrik med namnet
var studentName = document.createElement('h1'); 
var text = document.createTextNode(person.fornamn + " " + person.efternamn);
studentName.appendChild(text);
document.body.appendChild(studentName); 

//Skapa adress med uppgifter
var adress = document.createElement('h3'); 
text = document.createTextNode(person.adress.gata + "," + person.adress.postnr + " " + person.adress.postort);
adress.appendChild(text);
document.body.appendChild(adress); 

//Skapa kurser med en lista på alla kurser
var kurser = document.createElement('h3'); 
text = document.createTextNode("Du har klarat följande kurser");
kurser.appendChild(text);
var kursList = document.createElement('ul');

//Loopa igenom alla kurser i JSON strängen och skapa listitems
for(var kurs of person.kurser)
{
	let kursRow = document.createElement('li');
	text = document.createTextNode(kurs);
	kursRow.appendChild(text);
	kursList.appendChild(kursRow);
}

kurser.appendChild(kursList);
document.body.appendChild(kurser); 


//--------------------------------------------------------------------
//**5.	Skapa en klass som du kallar för product . Den skall ha 
//**    egenskaperna namn, pris och beskrivning. Skapa upp en instans 
//**    av klassen och sätt alla värden. Gör sedan om det till en json 
//**    sträng och skriv ut texten i json format via console.log.
//--------------------------------------------------------------------

class Product{ 
	constructor(name, price, description) 
	{ this.Productname = name; 
	  this.Price = price; 	
	  this.Description = description;
	} 
} 

var product = new Product("iPhone", "5999", "New phone with extra functions");

var jSONProduct = JSON.stringify(product); 

console.log(jSONProduct);

//--------------------------------------------------------------------
//**6.	Ta emot följande json-sträng och skriv ut en klasslista på en
//**    webbsida med en rubrik med klassens namn och en lista med alla studenter
//--------------------------------------------------------------------

var classList= {"className": "FEND17","students": [{ "name":"Lisa Lind", "email": "Lisalind@gmail.com" },{"name":"Kalle Karlsson", "email": "kalleK@gmail.com" },{ "name":"Anna Persson", "email": "annaP@gmail.com" }]};

//SKapa rubrik med klassens namn
var newHeader = document.createElement('h1'); 
var text = document.createTextNode(classList.className);
newHeader.appendChild(text);
document.body.appendChild(newHeader); 

//Skapa en lista med alla studenter
var myList = document.createElement('ul');

//Loopa igenom alla studenter och skapa listitems
for(var student of classList.students)
{
	let listRow = document.createElement('li');
	text = document.createTextNode(student.name);
	listRow.appendChild(text);
	myList.appendChild(listRow);
}

document.body.appendChild(myList); 

//--------------------------------------------------------------------
//**7.	Ta emot följande JSON fil med produkter och skriv ut den 
//**    på webbsidan genom att skapa en lista/table/divar där alla värden 
//**    läggs in. Testa att bygga en sökfunktion där det går att ange ett 
//**	produktnamn och sedan söka i filen på en produkt med det namnet.
//--------------------------------------------------------------------

var productList = {"products": [{ "name":"Samsung Galaxy S8",  "price": "5999" ,  "image": "https://s7d2.scene7.com/is/image/SamsungUS/hero-SM-G892AZAAATT-081217-v2?$product-details-jpg$"},        { "name":"iPhone 8", "price": "6999" ,"image": "https://i.gadgets360cdn.com/large/iphone8_benjamingesking_main_1502349465364.jpg?output-quality=70&output-format=webp" }, { "name":"Huawei 10",  "price": "6999" ,"image": "https://www.vopmart.com/media/catalog/product/cache/1/image/470x470/9df78eab33525d08d6e5fb8d27136e95/u/a/uawei-p10-plus-green_1.jpg" }]};


