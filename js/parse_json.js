var requestURL = 'https://raw.githubusercontent.com/McDinii/HTML-CSS-XML/main/Course_project/js/files.json';
//Начнём с того, что мы собираемся сохранить URL-адрес JSON, который мы хотим получить в переменной.

var request = new XMLHttpRequest(); //Чтобы создать запрос, нам нужно создать новый экземпляр объекта запроса из конструктора XMLHttpRequest, используя ключевое слово new.

request.open( 'GET', requestURL );//Теперь нам нужно открыть новый запрос, используя метод open().

request.responseType = 'json'; //здесь мы устанавливаем responseType в JSON, так что XHR знает, что сервер будет возвращать JSON и, что это должно быть преобразовано за кулисами в объект JavaScript. Затем мы отправляем запрос методом send()
request.send();

request.onload = function () { // ожидание ответа на возврат с сервера, а затем работы с ним
    var Json = request.response;
    leader(Json);
}
function leader(jsonObj) {
    var leaders = jsonObj.leaders;
    console.log(leaders[0])
    let leader_h1 = document.querySelectorAll('.info h1');
    let leader_p = document.querySelectorAll( '.info p' );
    let leader_img = document.querySelectorAll( 'img.leader' );
    for (var i = 0; i < leaders.length; i++) {

        leader_h1[i].innerHTML = "хуй";
        console.log( leaders[i].name );
        leader_p[i].innerHTML = leaders[i].price ;
        console.log( leaders[i].price );
        leader_img[i].src = leaders[i].img;
    }
}


/*
function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];

    for (var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        var superPowers = heroes[i].powers;
        for (var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}
*/
