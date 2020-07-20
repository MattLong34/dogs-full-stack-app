// const dogs = [{
//     name: "Hershey"
// },{
//    name: "Simba"
// },{
//    name: "Nala"
// }]

// fetch
fetch("http://localhost:3000/dogs")
.then(response => response.json())
.then(response => {
    const $dogs = response.dogs.map(dog => {
        // create
        const $li = document.createElement("li")
        // manipulate
        $li.textContent = dog.name
        return $li
    })
    
    // append
    const $ul = document.querySelector(".dogs")
    $dogs.forEach($dog => {
      $ul.append($dog)
    })
  })
    