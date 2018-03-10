function init() {
    let person = {
        "fornamn": "Lisa",
        "efternamn": "Lind",
        "adress": {
            "gata": "Storgatan 3",
            "postort": "Södertälje",
            "postnr": "11122"
        },
        "kurser": ["Javascript1 ", "Javascript2 ", "Webbdesign "]
    };

    //1
    console.log(person.fornamn + ' ' + person.efternamn + '\n');
    //document.getElementById('person').innerHTML = person.fornamn + ' ' + person.efternamn + '\n';
    //2
    for (let kurs in person.kurser) {
        console.log(person.kurser[kurs]);
        //document.getElementById('kurs').innerHTML += '<li>' + person.kurser[kurs] + '\n' + '</li>';
    }

    console.log('\n');

    //3
    for (let adress in person.adress) {
        console.log(person.adress[adress]);
        //document.getElementById('adress').innerHTML += person.adress[adress] + ',' + '\n';
    }
    console.log('\n');


    let fend = {
        "className": "FEND17",
        "students": [{
                "name": "Lisa Lind",
                "email": "Lisalind @gmail.com "
            },
            {
                "name": "Kalle Karlsson ",
                "email ": "kalleK @gmail.com "
            },
            {
                "name": "Anna Persson ",
                "email": "annaP @gmail.com "
            }
        ]
    };



    //6
    console.log(fend.className);
    //document.getElementById('fend').innerHTML = fend.className;

    for (let student in fend.students) {
        console.log(fend.students[student].name);
        //document.getElementById('student').innerHTML += '<li>' + fend.students[student].name;
    }

    let phones = {
        "products": [{
            "name": "Samsung Galaxy S8",
            "price": "5999",
            "image ": "https://s7d2.scene7.com/is/image/SamsungUS/hero-SM-G892AZAAATT-081217-v2?$product-details-jpg$ "
        }, {
            "name": "iPhone 8",
            "price": "6999",
            "image ": "https://i.gadgets360cdn.com/large/iphone8_benjamingesking_main_1502349465364.jpg?output-quality=70&output-format=webp"
        }, {
            "name": "Huawei 10",
            "price": "6999",
            "image ": "https://www.vopmart.com/media/catalog/product/cache/1/image/470x470/9df78eab33525d08d6e5fb8d27136e95/u/a/uawei-p10-plus-green_1.jpg"
        }]
    };

    for (let product in phones.products) {
        console.log(phones.products[product].name);
        document.getElementById('product').innerHTML += '<li>' + phones.products[product].name;
    }


}



init();

let input = document.getElementById("myInput");
input.addEventListener('onkeyup', myFunction());

function myFunction() {
    let filter, ul, li, a, i;
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

//5
class Produkt {
    constructor(namn, pris, beskrivning) {
        this.namn = namn;
        this.pris = pris;
        this.beskrivning = beskrivning;
    }
}

let produkt1 = new Produkt("Penna", "2 kr", "black");
console.log(produkt1);

console.log(JSON.stringify(produkt1));