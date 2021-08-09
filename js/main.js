$(document).ready(function () {
    var myItems = [];
    var myList = $("#myList");
    for (var i = 0; i < 10; i++) {
        myItems.push("<li>item : " + i + "</li>");
    }
    myList.append(myItems.join(""));
});