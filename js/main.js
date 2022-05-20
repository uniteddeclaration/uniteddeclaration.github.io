$(document).ready(function () {
    var myItems = [];
    var myList = $("#myList");
    for (var i = 0; i < 1; i++) {
        myItems.push("<li>原则 " + "" + "</li>");
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
    $(target).html("<td>暂未开放...</td>");
});