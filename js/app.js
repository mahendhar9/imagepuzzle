$(document).ready(function() {
  new WOW().init();
  $('#original').click(function(){
  bootbox.alert('<img class="img-responsive" src="img/source-img.jpg"/>');
});

  // orderColumnsRandomly();
    
    $('#toggleGrid').click(function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text('Show grid lines');
            $("img").removeClass("border1");
        } else {
            $(this).addClass('active');
            $(this).text('Hide grid lines');
            $("img").addClass("border1");
        }
    });
        
        /**
 * Returns a random integer between min and max values (inclusive)
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a uniquely generated random integer array, so we can use this as our order.
 */
function getRandomSequence(limit) {
  var arr = [];
  while (arr.length < limit) {
    var randomnumber = getRandomInt(0, limit - 1);
    var found = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == randomnumber) {
        found = true;
        break;
      }
    }
    if (!found) arr[arr.length] = randomnumber;
  }
  return arr;
}

/**
 * Shows randomly ordered columns in a container.
 */
function orderColumnsRandomly() {
  // Get the children of the container
  var columns = $("#xcontainer").children();

  // Empty the container.
  $("#xcontainer").html('');

  // Get a random sequence to show the columns
  var sequence = getRandomSequence(columns.length);

  // Loop through the column array with the given sequence and fill the container.
  for (var i = 0; i < sequence.length; i++) {
    $("#xcontainer").append($(columns[sequence[i]]));
  }
}

// Bind the button's click event.
$("#shuffle").click(orderColumnsRandomly);

//Game over
var user1=[];
function user() {  
  $('div','#xcontainer').each(function(){
    user1.push($(this).attr('id'));
    });
  console.log(user1);
}

var j = 0;  
$('#completed').click(function(){
  j = j + 1;
  user();
  gameover();
  if(j<500) {
    user1.splice(0,24);
  }
});




var checkUser = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13", "a14", "a15", "a16", "a17", "a18", "a19", "a20", "a21", "a22", "a23", "a24"];

// function gameover(){
//   var count=0;
// user1.every(function(element, index) {    
//     if (element === checkUser[index]){
//       alert('true');
//     } 
//     else {
//       alert('false');
//     }
//   });

//     // if (count==23){
//     //   console.log(count);
//     //   alert('Congratulations!');
//     // }
//     // else{
//     //   console.log(count);
//     //   alert('Dumbo');
//     // }


    
// }

function gameover(){
var count=0;
for (m=0; m<23; m++) {  
  if (user1[m] === checkUser[m]){
     count=count+1;
  }
}

if (count==23) {
  alert("Congratulations!");
  console.log("Game" + count)

}
else {
  alert("Sorry, the puzzle is incomplete.");
  console.log(count);
}



}

});