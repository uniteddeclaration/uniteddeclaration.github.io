$(document).ready(function () {
    $("a").attr({
        title: "all titles are the same too!",
        href: "index.html"
    });
    console.log($("a").attr("href"));
});