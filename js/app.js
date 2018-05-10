//var url = "./files/rest.txt";
var url = "https://s3.amazonaws.com/api-fun/books.json";  // Fetching directily from Server Works!!. 
var xmlhttp = new XMLHttpRequest();
var images = '';
//var sortbutton = document.createElement('button');

xmlhttp.onreadystatechange = function () {

    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var myObj = JSON.parse(xmlhttp.responseText);

        document.getElementById('heading1').append(myObj.data.author);
        document.getElementById('heading2').append(myObj.data.birthday);
        document.getElementById('heading3').append(myObj.data.birthPlace);


        for (var i = 0; i < myObj.data.books.length; i++) {

            images += '<li><a href=' + myObj.data.books[i]['purchaseLink'] + '>' + myObj.data.books[i]['title'] + '</a>' + '<p>' + myObj.data.books[i]['PublishDate'] + '</p>' + '<img src=' + myObj.data.books[i]['imageUrl'] + ' /></li>';

            //myObj.data.books.sort(compareNumbers);   //Sort logic --- Sort works in console
            //console.log(myObj.data.books[i].PublishDate);
        }
        
        document.getElementById('item').innerHTML = images;

        //document.getElementById('div1').append(sortbutton);

        //Sort Button not working but the eventhandler works.

        //        sortbutton.addEventListener("click", function () {
        //            myObj.data.books.sort(compareNumbers);
        //            console.log('worked');
        //        });

    }
    //sortbutton.innerHTML = 'Sort By Date';


};

//Sort Logic
//function compareNumbers(a, b) {
//
//    return a.PublishDate - b.PublishDate;
//}

xmlhttp.open("GET", url, true);
//xmlhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
//xmlhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET');
//xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
xmlhttp.send();
