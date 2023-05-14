
var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});

// global handler
document.addEventListener('click', function (e) { 
  if (e.target.className.indexOf('modal-target') !== -1) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content");
      var captionText = document.getElementById("modal-caption");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
   }
});



$(document).ready(function(){
    var
      images = "#gallery > img" // image selector
    , interval = 4000           // milliseconds between transitions
    , index = 0                 // starting index
    , count = $(images).length  // image count
      // the transition loop
    , handle = setInterval(function() {
        // fade out the current image
        $(images + ":eq(" + index + ")").fadeOut('slow');
        // get the next index, or cycle back to 0
        if (++index === count) index = 0;
        // fade in the next image
        $(images + ":eq(" + index + ")").fadeIn('slow');
      }
      , interval
    )
    , stop = function(){
        clearInterval(handle);
    };
  });

// ======================================== quantity button ==========================



  


  