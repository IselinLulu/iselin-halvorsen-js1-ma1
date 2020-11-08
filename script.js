
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
    
];



//Question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
};

cat.complain();



//Question 2

const header = document.querySelector("h3");

console.log(header);

header.innerHTML = "Updated heading";


//Question 3

header.style.fontSize = "2em";


//Question 4



console.log(header.classList);

header.classList.add = "subheading";


//Question 5

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].innerHTML);
    paragraphs[i].style.color = "red";
}



//Question 6


const resultsContainer = document.querySelector(".results");
console.log(resultsContainer.innerHTML);

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.backgroundColor = "yellow";


//Question 7

let list;

function myPets(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(cats[i].name);
    }
}

myPets(cats);


//Question 8



function createCats(cats) {

let html ="";

    for (let i = 0; i < cats.length; i++) {

        html = html + "<h5>" + cats[i].name + "</h5>";

        if(cats[i].age ){
            html = html + "<p>" + cats[i].age + "</p>";
            
        }else {
            html = html + "<p>" + "Age unknown" + "</p>"; 
        }
    }

    const wrapperCats = "<div>" + html + "</div>";
    
    return wrapperCats;
}

createCats(cats);

const lastStep = createCats(cats);

const createdCats = document.querySelector(".cat-container");
createdCats.innerHTML = lastStep;