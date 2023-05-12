    // BACK TO TOP - BTN
    //_________________________________________________________________________

// Get btn
let mybutton = document.getElementById("myBtn");

// When the user scrolls 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;               // For Safari(?)
  document.documentElement.scrollTop = 0;    // For Chrome, Firefox & Opera
}
//________________________________________________________________________________
