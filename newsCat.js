const addCat = document.getElementsByClassName('newsCat1')

// создание категории

// const newsCat = {
//   "id": 0,
//   "name": "newCategory"
// }

// fetch("http://24api.ru/rest-news-category", {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newsCat)
// })
//     .then(data => data.json())
//     .then(data => console.log(data))


// Создание категории
addCat.addEventListener('click', function (event) {
  event.preventDefault()

  const newsCat = {
  "id": 0,
  "name": `${addCat.innerText}`
}
  

  if (addCat.innerText.length == 0){
    addCat.innerText = 'please add some task';
  }
  else {
    fetch("http://24api.ru/rest-news-category", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newsCat)
    })
   
    .then(data => data.json())
    .then(data => {
        console.log(data)
        createNewCat(data)
    })
    }
    addCat.innerText = ''
})