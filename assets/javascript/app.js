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

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onClick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa fa-xmark'
  : 'fa fa-bars'
}
