//------------------------------------------------------------------------------------------------------------------
//1. Data i JSON som visar en bok med en array med språk. Om data kommer från ett webapi måste JSON.parse användas
//------------------------------------------------------------------------------------------------------------------

let myBook = {"title" : "Javascript introduktion", "price":"399", "lang": ["Engelska", "Svenska","Norska"]};

//Hämtar ut properties för boken och det första språket
console.log(myBook.title + " " + myBook.price + " " +  myBook.lang[0]);

//Loopar igenom alla språk och skriver ut
for(let language of myBook.lang)
{
	console.log(language);
}


//----------------------------------------------------------------------------------------------------------------
//2. Data i JSON  som beskriver en array med bokobjekt. Varje objekt har en titel och ett pris
//----------------------------------------------------------------------------------------------------------------

let myBookList = {"books": [{"title": "Javascript introduktion", "price": "299"},
							{ "title": "Java", "price": "599" }]};


//Loopar igenom alla bokobjekt och tar fram titel och pris
for(let book of myBookList.books)
{
	console.log(book.title + " " + book.price);
}

//----------------------------------------------------------------------------------------------------------------
//3. Skapar ett objekt(bok) och gör sedan om det till JSON med JSON.stringify
//---------------------------------------------------------------------------------------------------------------- 
class Bok
{
	constructor(title, price)
	{
		this.Title = title;
		this.Price = price; 
	}
}

let myBook2 = new Bok("C++ for beginners", "600");

console.log(JSON.stringify(myBook2));
