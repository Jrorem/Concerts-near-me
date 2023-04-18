   var button = document.querySelector(".btn")
   
   
   
  //  addEventListener("click", button) {
   fetch("https://api.seatgeek.com/2/events?client_id=MzMwMzM2MzJ8MTY4MTM1MTUyMi41MjQwMzgz&client_secret=505cbc8cb48518aae371b19ec2913f6a4da13d3b010e86d7561ed8bf208ec81c")
   
   
  .then(function (response){
    return response.json()
  })
  .then(function (data) {
    console.log(data)
  })
  // }
  
  
  
  
  
  
  
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