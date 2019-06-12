let characters = [];
let list = document.getElementById("list");
let search = document.querySelector("input");

list.style.visibility = "hidden";

fetch("https://www.swapi.co/api/people")
.then(response => response.json())
.then(response => {
    characters.push(...response.results); 
})

function render(filteredArr){
    let html = filteredArr.join('');
    list.innerHTML= html;
}

function filterText(){
    //Check to show list
    if(search.value !== ""){
        list.style.visibility = "visible";
        list.style.display = "block";
        
    } 
    else{
        list.style.visibility = "hidden";
        list.style.display = "none";
    } 

    let filtered = characters.filter(val => val.name.toLowerCase()
    .includes(this.value.toLowerCase()))
    .map(val => `<li>${val.name}</li>`);

    if(filtered.length >= 1){
        render(filtered);
    }else{
        list.style.visibility = "hidden";
    }
}


search.addEventListener("keyup", filterText);