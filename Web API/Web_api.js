
//Detta är det gamla sättet som använder XMLHttpRequest
//och kräver en callback metod
function getData(url, callbackMethod)
{
	let myRequest = new XMLHttpRequest();
	
	myRequest.onreadystatechange = function() {
    	if (myRequest.readyState == XMLHttpRequest.DONE) {    		
       		callbackMethod(myRequest.responseText);
    	}
	}
				
	myRequest.open('GET',url , true);
	myRequest.send(null);
}


//Det nya sättet som använder fetch API:t
//Funktionen sätts till async vilket gör att man kan 
//använda await dvs den går inte vidare i koden utan svaret
async function fetchData(url) {

	//Först körs en fetch som returnerar en promise
    let promise = await fetch(url);

    //När svaret kommer läggs det över i en variabel
    let data = await promise.json();

    //Resultatet är från början ett objekt. Det görs om till en sträng 
    //innan det returneras
    return JSON.stringify(data);
 
}

