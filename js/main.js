$(document).ready(function () {
    $("a").attr({
        title: "all titles are the same too!",
        href: ""
    });
    console.log($("a").attr("href"));
});