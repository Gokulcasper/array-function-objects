//Array

// let myArray=[1,2,"three",4,0.5];
//assign
// myArray[2]=3;
//find
// console.log(myArray[1]);
//find length
// console.log("Length Of Array ",myArray.length);
//push
// console.log(myArray.push(true,23,"gokul",50));
//pop
// let lastItem=myArray.pop();
// console.log(lastItem);

// console.log(myArray);


//Function

//declare
// function dispalyMessage(){
//     console.log("1 Hi , Hello How Are You !");
// }
// dispalyMessage();

//expression
// let dispalyMessage1 = function(){
//     console.log("2 Hi , Hello How Are You !");
// };
// dispalyMessage1();

//DOM Manipulations

let divContainer = document.getElementById("myContainer");

let newElement= document.createElement("h1");
newElement.textContent="Web Technology";
newElement.style.marginBottom="20px";
divContainer.appendChild(newElement);
// console.log(newElement);

let btnE1 = document.createElement("button");
btnE1.textContent="Change Heading"
divContainer.appendChild(btnE1);


let btnE2 = document.createElement("button");
btnE2.textContent="Remove ClassStyle"
divContainer.appendChild(btnE2);

btnE1.onclick = function(){
    newElement.textContent="MERN Technology";
    newElement.classList.add("h1Container")
    // newElement.id.add("h1ContainerId")
}

btnE2.onclick = function(){
    newElement.textContent="MERN Technology";
    newElement.classList.remove("h1Container")
}

console.log(newElement);