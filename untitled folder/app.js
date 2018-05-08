var url = "./rest.txt";
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {

    if (this.readyState === 4 && this.status === 200) {
        var myObj = JSON.parse(this.responseText);

        document.getElementById('heading1').append(myObj.data.author);
        document.getElementById('heading2').append(myObj.data.birthday);
        document.getElementById('heading3').append(myObj.data.birthPlace);

        var images = '';
        var i;

        for (i in myObj.data.books) {

            images += '<li><a href="' + myObj.data.books[i].purchaseLink + '">' + myObj.data.books[i].title + '</a>' + '<p>' + myObj.data.books[i].PublishDate + '</p>' + '<img src="' + myObj.data.books[i].imageUrl + '" /></li>';

            document.getElementById('item').innerHTML = images;

           // myObj.data.books.sort(compareNumbers);   FILTER LOGIC

        }
    }
};

//FILTER LOGIC

//function compareNumbers(a, b) {
//    return a.PublishDate - b.PublishDate;
//}


xmlhttp.open("GET", url, true);
//xmlhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
//xmlhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET');
//xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
xmlhttp.send();
