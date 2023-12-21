/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
* 
* */
function getComment() {
    // Создадим объект
    let comment = {};
    
    // Сохраним свойство имени
    comment.author = prompt("Как вас зовут ?")
    if (comment.author == null){
        return
    }
    
    // Сохраним текст отзыва
    comment.text = prompt("Напишите свой отзыв")
    if (comment.text == null) {
        return
    }
    
    // Сохраним текущее время
    comment.date = new Date().toLocaleString();
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
