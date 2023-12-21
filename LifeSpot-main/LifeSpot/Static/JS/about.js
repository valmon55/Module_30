/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
* 
* */
function Comment(author, text) {
    this.author = author,
        this.text = text,
        this.date = new Date().toLocaleString()
}
function getComment() {
    // Создадим объект
    // Сохраним свойство имени
    let author = prompt("Как вас зовут ?")
    if (author == null){
        return
    }
    debugger;
    // Сохраним текст отзыва
    let text = prompt("Напишите свой отзыв")
    if (text == null) {
        return
    }
    let comment = new Comment(author,text);

    // Сохраним текущее время
    //comment.date = new Date().toLocaleString();
    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')

    if (enableLikes) {
        review = Object.create(comment);
        review.rate = 0;
        writeReview(review)
    }
    else {
        writeReview(comment)
    }
}

/*
* Запишем отзыв на страницу 
* 
* */
const writeReview = review => {
    let likeCounter = '';

    // Для проверки, является ли объект отзывом, используем свойство hasOwnProperty
    if (review.hasOwnProperty('rate')) {
        likeCounter += '           <b style="color: chocolate">Рейтинг:</b>   ' + review.rate;
    }
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['author']}</b>  ${review['date']}${likeCounter}</i></p>` +
        `<p>${review['text']}</p>`  + 
        '</div>';
}
