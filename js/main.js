$(document).ready(function () {
    var myItems = [];
    var myList = $("#myList");
    for (var i = 0; i < 10; i++) {
        myItems.push("<li>item : " + i + "</li>");
    }
    myList.append(myItems.join(""));
    $("#myDiv a").click(function (event) {
        event.preventDefault();
    });
    $("#myDiv a:first").attr({
        "rel": "nofollow",
        "href": function(idx, href) {
            return href;
        }
    });
    var target = document.getElementById("target");
    $(target).html("<td>table list td</td>");
});