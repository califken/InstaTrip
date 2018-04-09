var mashapeauthkey = "Eg0ZQFdgZrmshgRuNT3elKYlPu0Mp1yQbzPjsnIocSuKYu0yV5";
//use lat lon from alt app to populate coordinates
var lat = 33;
var lon = -109;
var lat2 = 30;
var lon2 = -112;
var endpoint =
  "https://webcamstravel.p.mashape.com/webcams/list/bbox=" +
  lat +
  "," +
  lon +
  "," +
  lat2 +
  "," +
  lon2 +
  "?show=webcams%3Aimage%2Clocation";

function queryMashape() {
  this.endpoint = endpoint;
  $.ajax({
    url: this.endpoint,
    type: "POST", // The HTTP Method
    data: {},
    dataType: "json",
    error: function(err) {
      console.log(err);
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", mashapeauthkey);
    }
  }).done(function(data) {
    // $.each(data.result.webcams, function(key, value ) {
   
   
    for (var i = 0; i < data.result.webcams.length; i++) {

  // create a "card" variable, it's going to be a div
  var card = $("<div>");
  
  // give that div a class "card"
  card.addClass("card");

  //create another variable for the image div
  var imagediv = $("<div>");
  
  // give that image div the class of card-image
  imagediv.addClass("card-image");

  // create a 3rd variable called img, it will be an <img> element
  var img = $("<img>");

  // we give that img element a src attribute from the data
  img.attr("src", data.result.webcams[i].image.current.preview);

  // set the HTML for the imagediv div to contain the img element
  // <div class="card-image"><img src="whateverthesrcis"></div>
  imagediv.html(img);

  // <div class="card"><div class="card-image"><img src...></div></div>
  card.html(imagediv);

  // another variable cardcontent is a div
  var cardcontent = $("<div>");

  // give that div a class of card-content
  cardcontent.addClass("card-content");

  // yet another variable cardtitle
  var cardtitle = $("<div>");

  // add card-title class to that div
  cardtitle.addClass("card-title");

  // set text of card-title div to say the webcam title
  cardtitle.text(data.result.webcams[i].title);
  
  // cardcontent div should contain the card title
  cardcontent.html(cardtitle);

  // append the card content variable to the div with the class of card
  card.append(cardcontent);


//  $("#webcams").html(webcamdiv);
$("#webcams").append(card);
 }
  });
}
queryMashape();

// console.log(data.result.webcams[0].image.current.preview);

/** 
 * 
 * 
 * 
var lat = 44;
var lon = -110;
var lat2 = 22;
var lon2 = -112;


var urlv = "https://webcamstravel.ppmashape.com/webcams/list/bbox=" + lat + ","
+ lon + "," + lat2 + "," + lon2 + "?show=webcams%3Aimage%2Clocation";

console.log(urlv);

$.ajax({
    url: urlv,
    type: 'POST' , //the HTTP :-ms-input-placeholder
    data: {} , //Additional Parameters header
    dataType: 'json' , error: function(err) {},
    beforeSend: function(xhr) {
        xhr.setRequestHeader        ("x-Mashape-Authorizationmoz7KAXDYSmshUWMZ64uu36b3tVbp17g12LjsnPw15PdpB6lIf")
    }   
}).done(function(data) {
    console.log(data);
    $.each(data.result.webcams, function(key, value) {
   
    }
}





})
consol.log(window.cams);
*/
