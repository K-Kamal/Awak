
var q_url = "https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";

//get parameters for quote and author
function getQuote() {
  $.getJSON(q_url, function(response) {
    $("p.quote").html(response.quoteText);
    $("i.author").html(response.quoteAuthor);
  }); 
}
getQuote();

/**function ChangeBackground() {
  var x = document.getElementsByClassName('hs-item set-bg sp-pad');
  x.setAttribue("data-setbg", "https://picsum.photos/1920/1280")
}**/

//Need to implement a way to change background without comprimising inner "div" elements
/**function changeBackground()
{ 
    $( "#divID" ).load(document.URL + " #divID" );
    //location.href+" #divToReload>*",""
}**/
setInterval(function() {
  getQuote();
  // method to be executed;
}, 15000);
$(document).keydown(function(e){
    if (e.keyCode == 32) { 
       getQuote();
       //changeBackground();

    }
});