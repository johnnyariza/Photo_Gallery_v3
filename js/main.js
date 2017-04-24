function searching() {
    var input = document.getElementById('search');
    var filter = input.value.toUpperCase();
    var ul = document.getElementById('photos');
    var li = ul.getElementsByTagName('li');
    var i;
    var a;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0].getAttribute('data-title');
        if (a.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//$('#search').hideseek({
//    attribute: 'title'
//});

$('.search').sticky({
    topSpacing: 8,
});