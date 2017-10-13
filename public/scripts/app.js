console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $.ajax({
     method: 'GET',
     url: '/api/profile',
     success: handleSuccess,
     error: handleError
   });

// TODO: make an ajax GET request for ALL of your dogs
  $.ajax({
     method: 'GET',
     url: '/api/dogs',
     success: getDogSuccess,
     error: getDogError
   });

// TODO: iterate through your dogs and for each dog, append the dog information to your dom.

// TODO: make a form so someone can create a dog
// TODO: make an ajax POST request to send that dog info to your back end
  $('#newDogForm').on('submit', function(e) {
    e.preventDefault();
    console.log('new dog serialized', $(this).serializeArray());
    $.ajax({
      method: 'POST',
      url: '/api/dogs',
      data: $(this).serializeArray(),
      success: newDogSuccess,
      error: newDogError
    });
  });
// TODO: in your ajax POST request success function, append that new dog to your dom.

function handleSuccess(json){
  console.log(json);
  $('#profile').append(`
    <div>
    <img src=${json.githubProfileImage}>
      <h4>
       My name is ${json.name}, and this is my dog.
       I currently live in ${json.currentCity}, and this is the link to my GitHub:
       <a href=${json.githubLink}>
      </h4>
    </div>


    `)
}
function newDogSuccess(json){
  console.log(json);
  $('#dogs').append(`
    <div>
    
    </div>


    `)
}

function handleError(a, b, c){
  console.log(b, c);
}


});
