//Event listener for glowing light
document.addEventListener("DOMContentLoaded", function() {
  const light = document.querySelector('.light');

  //Makes light glow follow mouse pointer
  document.addEventListener("mousemove", function (e) {
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
  });
});

jQuery(function(){ //Add class to parent element to margin properly
	jQuery(".hb-lg").parent().addClass("hb-lg-margin");
	jQuery(".hb-md").parent().addClass("hb-md-margin");
	jQuery(".hb-sm").parent().addClass("hb-sm-margin");
	jQuery(".hb-xs").parent().addClass("hb-xs-margin");
})

jQuery(function(){ //Hover color as icon

	//Gmail
	// jQuery( ".hb .fa fa-paper-plane,.hb .fa fa-paper-plane-square").parent().addClass("fa fa-paper-plane");
	// jQuery( ".hb.inv .fa fa-paper-plane,.hb.inv .fa fa-paper-plane-square").parent().addClass("fa fa-paper-plane-inv").removeClass("fa fa-paper-plane");

	//Linkedin
	jQuery( ".hb .fa-linkedin,.hb .fa-linkedin-square").parent().addClass("hb-linkedin");
	jQuery( ".hb.inv .fa-linkedin,.hb.inv .fa-linkedin-square").parent().addClass("hb-linkedin-inv").removeClass("hb-linkedin");

	//Github
	jQuery( ".hb .fa-github,.hb .fa-github-square, .hb .fa-github-alt").parent().addClass("hb-github");
	jQuery( ".hb.inv .fa-github,.hb.inv .fa-github-square, .hb.inv .fa-github-alt").parent().addClass("hb-github-inv").removeClass("hb-github");

});

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');

  toggleBtnIcon.className = isOpen
    ? 'fa fa-caret-up'
    : 'fa fa-bars';
});


// Electric Current Effect
chars = ["⬤"];
allStreams = [];
textCol1 = "#030a1e";
textCol2 = "#030a1e";
style = 0;
var i = 0;

/* ----- Settings ----- */
// Time Delay between String Spawn
minStringDelay = 200;
maxStringDelay = 350;

// Nr. of Chars for Strings
minStringLength = 4;
maxStringLength = 12;

// Speed of the Char-Strings (Lower = Faster)
minStringSpeed = 3;
maxStringSpeed = 5;
/* ----- Settings END ----- */

// Create a String with random Chars
function matrixString(){
  ranTime = Math.floor(Math.random() * maxStringDelay + minStringDelay);
  ranLen = Math.floor(Math.random() * maxStringLength + minStringLength);
  leftPos = Math.floor(Math.random() * $("#text-output").width() + 0);

  singleStream = [];
  for(j=0; j<ranLen;j++){
    ranChar = Math.floor(Math.random() * chars.length + 0);
    singleStream[j] = chars[ranChar];
  }

  // 2 different Nodes for the Colors
  if($(".matrixString").length % 2 == 0){
    $("#text-output").append("<div style='color:" + textCol1 + "; text-shadow: 0px 0px 15px " + textCol1 + ", 0px 0px 10px " + textCol1 + ", 0px 0px 5px " + textCol1 + "; top:-500px; left:" + leftPos + "px' class='matrixString ms-col1'>" + singleStream.join("") + "</div>");
  } else {
    $("#text-output").append("<div style='color:" + textCol2 + "; text-shadow: 0px 0px 15px " + textCol2 + ", 0px 0px 10px " + textCol2 + ", 0px 0px 5px " + textCol2 + "; top:-500px; left:" + leftPos + "px' class='matrixString ms-col2'>" + singleStream.join("") + "</div>");
  }

  // Remove the finished Strings
  $('.matrixString').each(function(i, obj) {
    if($(this).offset().top > 1500){
      $(this).remove();
    }
  });

  // Recursive Function Call with a randomized Delay
  setTimeout(function() {
    i++;
    // Make sure there are not too many Nodes
    if ($(".matrixString").length < 200) {
      matrixString();
    } else {
      $(".matrixString:lt(2)").remove();
      matrixString();
    }
  }, ranTime);

  // Animate the Strings
  minStringSpeed2 = minStringSpeed * 10000; maxStringSpeed2 = maxStringSpeed * 10000;
  ranSpeed = Math.floor(Math.random() * maxStringSpeed2 + minStringSpeed2);
  $(".matrixString").animate({ "top": "1500px" }, ranSpeed );
}
matrixString();
