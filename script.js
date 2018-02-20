let minaTal = [1,4,5,8,9,3];

//Filter med anonym funktion som tar fram alla tal under 5
//resultatet hamnar i en ny array
let mindre5 = minaTal.filter(function(aktuelltTal){

	return aktuelltTal < 5;
}
);

//Samma kod med arrow function
let mindre5Arrow = minaTal.filter(tal => tal <5);

console.log(mindre5);
console.log(mindre5Arrow);

//Kod som tar fram summan av alla tal
let summa = minaTal.reduce(function(totalVarde, aktuelltTal){

	return	totalVarde + aktuelltTal;

});

//Samma kod som summerar fast med arrow function
let summaArrow = minaTal.reduce( (total, varde) => total+ varde);

console.log(summa);
console.log(summaArrow);


let namnLista = ["Kalle", "Kajsa", "Emma", "Lisa" , "Leif", "Olle"];

//Filter som arbetar med strängvärden istället
let namnK = namnLista.filter(function(namn){

	return namn.startsWith("K");
});

//Samma kod fast med arrow function istället
let namnKArrow = namnLista.filter(namn => namn.startsWith("K"));

console.log(namnK);
console.log(namnKArrow);

//Det går att lägga på flera villkor, här namn som börjar på K och slutar på a
let namnKaArrow = namnLista.filter(namn => namn.startsWith("K") && namn.endsWith("a") );

console.log(namnKaArrow);
