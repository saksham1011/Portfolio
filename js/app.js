var url = "./files/rest.txt";
var xmlhttp = new XMLHttpRequest();
var images = '';

xmlhttp.onreadystatechange = function () {

    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var myObj = JSON.parse(xmlhttp.responseText);

        document.getElementById('heading1').append(myObj.data.author);
        document.getElementById('heading2').append(myObj.data.birthday);
        document.getElementById('heading3').append(myObj.data.birthPlace);


        for (var i = 0; i < myObj.data.books.length; i++) {

            images += '<li><a href=' + myObj.data.books[i]['purchaseLink'] + '>' + myObj.data.books[i]['title'] + '</a>' + '<p>' + myObj.data.books[i]['PublishDate'] + '</p>' + '<img src=' + myObj.data.books[i]['imageUrl'] + ' /></li>';
        }
        
        document.getElementById('item').innerHTML = images;
    }


};

xmlhttp.open("GET", url, true);
xmlhttp.send();
