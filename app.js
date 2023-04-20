
// получение инфо о всех категориях
const newsCatInfo = {
  "id": 0,
  "name": "info about all cat"
}

fetch("http://24api.ru/rest-news-category", {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then(data => data.json())
    .then(data => console.log(data))

// создание категории (лежит в newsCat.js)

// 
// Отрисовка категории
function createNewCat(categoty){
  // создаем див 
  const newCat = document.createElement('div');
  // спан (в нем название категории)
  const textCat = document.createElement('span');
  textCat.innerHTML = categoty.name;
  //обертка для всех категорий 
  const wrap = document.getElementsByClassName('wrapper');
  // что куда вкладываем: 
  newCat.append(textCat);
  wrap.append(newCat);
}

// Отрисовка новости
function createNewNews(news){
  // создаем див 
  const newNews = document.createElement('div');
  newNews.className = 'news'
  // спан (в нем название новости)
  const textNews = document.createElement('span');
  textNews.innerHTML = news.name;
  //обертка для всех категорий 
  const wrap = document.getElementsByClassName('wrapper');
  // что куда вкладываем: 
  newCat.append(textCat);
  wrap.append(newCat);
}


const addNewsBtn = document.getElementById('addNews');
const addNewsString = document.getElementById('addNewsString');

// Создание новости
addNewsBtn.addEventListener('click', function (event) {
  event.preventDefault()

  const news =  {
      "title": "test4",
      "body": "test4@test.ru",
      "created_at": "2022-02-18",
      "updated_at": "2022-02-18",
      "updated_by": "1",
      "category_id": "1",
      "id": 2
  }

  if (addNewsString.value.length == 0){
    addNewsString.value = 'please add some news';
  }
  else {
    fetch("http://24api.ru/rest-news", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(news)
    })
    .then(data => data.json())
    .then(data => {
        console.log(data)
        createNewNews(data)
    })
    }
    addNewsString.value = ''
})

  

