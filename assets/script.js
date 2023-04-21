var button = document.getElementById("btn")
var artistValue = document.getElementById("default-search") 
var searchResults = document.getElementById("results-list")
var title = document.querySelector("#concertName")
var venue = document.getElementById("cityState")
var nameVenue = document.getElementById("venueName")
var time = document.getElementById("timeDate")
var url = document.getElementById("url")
var SGUrl = "https://api.seatgeek.com/2/events?q=&client_id=MzMwMzM2MzJ8MTY4MTM1MTUyMi41MjQwMzgz&client_secret=505cbc8cb48518aae371b19ec2913f6a4da13d3b010e86d7561ed8bf208ec81c"
// click button after entering artist in search bar  
 button.addEventListener("click", function displayConcert() {
 event.preventDefault()
 fetch("https://api.seatgeek.com/2/events?q=" + artistValue.value + "&geoip=true&taxonomies.name=concert&range=250mi&client_id=MzMwMzM2MzJ8MTY4MTM1MTUyMi41MjQwMzgz&client_secret=505cbc8cb48518aae371b19ec2913f6a4da13d3b010e86d7561ed8bf208ec81c")  
.then(function (response){
  return response.json()
})
.then(function (data) {
  console.log(data)
  
for(var i = 0; i < 2; i++){
    // event = event[i]
    var concertName = data["events"][i]["title"]
    var cityState = data["events"][i]["venue"]["display_location"]
    
    var venueName = data["events"][i]["venue"]["name"]
    var timeDate = data["events"][i]["datetime_utc"]
    var ticketUrl = data["events"][i]["url"]
    title.innerHTML = "Concert name: " + concertName 
    venue.innerHTML = "Location: " + cityState
    nameVenue.innerHTML = "Venue name: " + venueName
    time.innerHTML = "Date/Time :" + timeDate
    url.innerHTML = "link to Seat Geek: " + ticketUrl
}
  displayConcert()
})
  
})
  
nearButton.addEventListener("click", function displayConcert(){
  event.preventDefault()
  fetch("https://api.seatgeek.com/2/events?q=&geoip=true&taxonomies.name=concert&sort=datetime_utc.asc&client_id=MzMwMzM2MzJ8MTY4MTM1MTUyMi41MjQwMzgz&client_secret=505cbc8cb48518aae371b19ec2913f6a4da13d3b010e86d7561ed8bf208ec81c")
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data)
    for(var i = 0; i < 5; i++){
      // event = event[i]
      var concertName = data["events"][i]["title"]
      var cityState = data["events"][i]["venue"]["display_location"]
      var venueName = data["events"][i]["venue"]["name"]
      var timeDate = data["events"][i]["datetime_utc"]
      var ticketUrl = data["events"][i]["url"]
      title.innerHTML = "Concert name: " + concertName 
      venue.innerHTML = "Location: " + cityState
      nameVenue.innerHTML = "Venue name: " + venueName
      time.innerHTML = "Date/Time :" + timeDate
      url.innerHTML = "link to Seat Geek: " + ticketUrl
  }
    displayConcert()
  })
})

  
// button.addEventListener("click", function(){
  fetch("https://binaryjazz.us/wp-json/genrenator/v1/story/"
 , {
    
    
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

  // })

