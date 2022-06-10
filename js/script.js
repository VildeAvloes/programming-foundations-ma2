//Question 1

var pets = [
  {
    type: "cat",
    age: 5.5,
  },
  {
    type: "dog",
    age: 3.8,
  },
  {
    type: "parrot",
    age: 4.0,
  },
];

for (var i = 0; i < pets.length; i++) {
  if (pets[i].age >= 4) {
    console.log(pets[i].type);
  }
}

//Question 2
function checkBooleanValue(plant) {
  if (typeof plant === "boolean") {
    console.log("checkBooleanValue");
  } else console.log("Please pass a boolean value.");
}

checkBooleanValue("Monstera");

//Question 3
var subheading = document.querySelector("h2");
var button = document.querySelector("button");

function changeSubheading() {
  subheading.innerHTML = "Updated subheading";
  subheading.style.color = "blue";
}

button.onclick = changeSubheading;
