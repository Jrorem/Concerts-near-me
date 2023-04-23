var button = document.getElementById("btn")
var artistValue = document.getElementById("default-search") 
var title = document.querySelector("#concertName")
var venue = document.getElementById("cityState")
var nameVenue = document.getElementById("venueName")
var time = document.getElementById("timeDate")
var url = document.getElementById("url")
var resultsList = document.querySelector("text-white")
var searchArea= document.getElementById("searchArea")
var fields = document.getElementsByClassName("text-white")
var SGUrl = "https://api.seatgeek.com/2/events?q=&client_id=MzMwMzM2MzJ8MTY4MTM1MTUyMi41MjQwMzgz&client_secret=505cbc8cb48518aae371b19ec2913f6a4da13d3b010e86d7561ed8bf208ec81c"


// press enter after entering artist in search bar  
button.addEventListener("click", function displayConcert() {
event.preventDefault()
clearCearch()
getSentence()
// sentence()
 fetch("https://api.seatgeek.com/2/events?q=" + artistValue.value + "&geoip=true&taxonomies.name=concert&range=250mi&client_id=MzMwMzM2MzJ8MTY4MTM1MTUyMi41MjQwMzgz&client_secret=505cbc8cb48518aae371b19ec2913f6a4da13d3b010e86d7561ed8bf208ec81c")  
.then(function (response){
  return response.json()
})
.then(function (data) {
  console.log(data)
  // if(!response){
  //   searchArea.textcontent = "enter an aritst"
  //   return
  // }
  
  
  
  for(var i = 0; i < 5; i++){
    var concertName = data["events"][i]["title"]
    var cityState = data["events"][i]["venue"]["display_location"]
    var venueName = data["events"][i]["venue"]["name"]
    var timeDate = data["events"][i]["datetime_local"]
    var ticketUrl = data["events"][i]["url"]
    $("#concertName" + i).html(concertName)
    $("#cityState"+ i).html(cityState)
    $("#venueName"+ i).html(venueName)
    $("#timeDate"+ i).html(timeDate)
    $("#url" + i).html("<a href='" + ticketUrl + "'>" + ticketUrl + "</a>")
  
  }
  
  displayConcert()
})
// }
})
  // use the search near me button
nearButton.addEventListener("click", function displayConcert(){
  event.preventDefault()
  clearCearch()
  getSentence()
  fetch("https://api.seatgeek.com/2/events?q=&geoip=true&taxonomies.name=concert&sort=datetime_utc.asc&client_id=MzMwMzM2MzJ8MTY4MTM1MTUyMi41MjQwMzgz&client_secret=505cbc8cb48518aae371b19ec2913f6a4da13d3b010e86d7561ed8bf208ec81c")
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data)
    
    for(var i = 0; i < 5; i++){
      var concertName = data["events"][i]["title"]
      var cityState = data["events"][i]["venue"]["display_location"]
      var venueName = data["events"][i]["venue"]["name"]
      var timeDate = data["events"][i]["datetime_local"]
      var ticketUrl = data["events"][i]["url"]
      $("#concertName" + i).html(concertName)
      $("#cityState" + i).html(cityState)
      $("#venueName" + i).html(venueName)
      $("#timeDate" + i).html(timeDate)
      $("#url" + i).html("<a href='" + ticketUrl + "'>" + ticketUrl + "</a>")
  }
    displayConcert()
  })
})

//clear search area between searches
function clearCearch(){
  for (var i = 0; i < 5; i++){
    $("#concertName" + i).html("")
    $("#cityState" + i).html("")
    $("#venueName" + i).html("")
    $("#timeDate" + i).html("")
    $("#url" + i).html("")
  }
}
 
function getSentence(){
  fetch("https://binaryjazz.us/wp-json/genrenator/v1/story/"
    , {
     })
       .then(function (response) {
         return response.json();
       })
       .then(function (data) {
        var sentence = data
       $("#sentence").html("Conversation starter: " + sentence)
         console.log(data);
         return
       });
      }