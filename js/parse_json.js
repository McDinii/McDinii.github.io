var requestURL = 'https://raw.githubusercontent.com/McDinii/McDinii.github.io/main/js/files.json';
//Начнём с того, что мы собираемся сохранить URL-адрес JSON, который мы хотим получить в переменной.

var request = new XMLHttpRequest(); //Чтобы создать запрос, нам нужно создать новый экземпляр объекта запроса из конструктора XMLHttpRequest, используя ключевое слово new.

request.open( 'GET', requestURL );//Теперь нам нужно открыть новый запрос, используя метод open().

request.responseType = 'json'; //здесь мы устанавливаем responseType в JSON, так что XHR знает, что сервер будет возвращать JSON и, что это должно быть преобразовано за кулисами в объект JavaScript. Затем мы отправляем запрос методом send()
request.send();

request.onload = function () { // ожидание ответа на возврат с сервера, а затем работы с ним
    var Json = request.response;
    leader(Json.leaders);
    slider(Json.slider);
    quality(Json.quality);

}
function leader(leaders) {
    let leader_h1 = document.querySelectorAll('.info.leader h1');
    let leader_p = document.querySelectorAll( '.info.leader p' );
    let leader_img = document.querySelectorAll( 'img.leaderImg' );
    for (var i = 0; i < leaders.length; i++) {
        leader_h1[i].innerHTML = leaders[i].name;
        leader_p[i].innerHTML = leaders[i].price ;
        leader_img[i].src = leaders[i].img;
    }
}
function slider(slides) {
    let slide_img = document.querySelectorAll('.swiper-img img');
    for ( var i=0,j=0; i < slide_img.length;i++,j++)  {
        if (j === slides.length){
            j = 0
        }
        slide_img[i].src = slides[j];
    }
}
function quality(character) {
    let img_ch = document.querySelectorAll('.character_img img');
    let text_ch = document.querySelectorAll('div.character_text');
    for ( var i=0; i < text_ch.length;i++)  {
        text_ch[i].innerHTML = character[i].text;
        img_ch[i].src = character[i].img;
    }
}

