(function() {
  document.addEventListener('DOMContentLoaded', () => {

  // Navbar Scroll and Active Colour Switch
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header .navbar a');
  const activeSection = document.querySelector(".navbar");
  const header = document.querySelector('header');

  function toggleActiveSection() {
    const top = window.scrollY;
    const headerHeight = header.offsetHeight;
    sections.forEach(sec => {
      let offset = sec.offsetTop - headerHeight;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
        });
      };
    });
  }

  document.addEventListener('DOMContentLoaded', toggleActiveSection);
  activeSection.addEventListener('click', toggleActiveSection);
  window.onscroll = toggleActiveSection;


  document.addEventListener('DOMContentLoaded', toggleActiveSection);
  activeSection.addEventListener('click', toggleActiveSection);
  window.onscroll = toggleActiveSection;


// Skills menu
const hexList = document.querySelectorAll('.hex');
console.log(hexList);
const toggleList = document.querySelectorAll('.right-side li');
console.log(toggleList);
const skillMenu = document.querySelector(".right-side");
console.log(skillMenu);

skillMenu.addEventListener('click', (e) => {
  const activeSkills = e.target.closest("li");
  console.log(activeSkills);
  if (!activeSkills) return;
  toggleSkills(activeSkills);
});

function toggleSkills(skillsToActivate) {
  const frontEndSkills = skillsToActivate.parentElement.querySelectorAll(".hex #frontEnd");
  console.log(frontEndSkills);
};

  // Accordion
  const accordion = document.querySelector(".accordion");

  accordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest(".accordion-panel");
    if (!activePanel) return;
    toggleAccordion(activePanel);
  });

  function toggleAccordion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll("button");
    const contents = panelToActivate.parentElement.querySelectorAll(".accordion-content");
    const titles = panelToActivate.parentElement.querySelectorAll(".panel-title");
    console.log(titles);

    buttons.forEach(button => {
      button.setAttribute("aria-expanded", false);
    });
    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

    contents.forEach(content => {
      content.setAttribute("aria-hidden", true);
    });
    panelToActivate.querySelector(".accordion-content").setAttribute("aria-hidden", false);

    titles.forEach(title => {
      title.setAttribute("aria-hidden", true);
    });
    panelToActivate.querySelector(".panel-title").setAttribute("aria-hidden", false);
  };




  // // Find the input button and create a new anchor element
  // var inputButton = document.querySelector('input[type="submit"]');
  // var anchorElement = document.createElement('a');

  // // Copy the button text and classes to the anchor element
  // anchorElement.innerHTML = inputButton.value;
  // anchorElement.className = inputButton.className;

  // // Copy any relevant attributes to the anchor element
  // var attributes = inputButton.attributes;
  // for (var i = 0; i < attributes.length; i++) {
  //   var attr = attributes[i];
  //   if (attr.name !== 'type' && attr.name !== 'value' && attr.name !== 'class') {
  //     anchorElement.setAttribute(attr.name, attr.value);
  //   }
  // }

  // // Replace the input button with the anchor element
  // inputButton.parentNode.replaceChild(anchorElement, inputButton);



  // Email validation
// app.js
$(document).ready(function () {
  // Initialize Tooltipster for input fields
  $('#name, #email, #contact_number, textarea[name="message"]').tooltipster({
    trigger: 'custom',
    onlyOne: false,
    position: 'right'
  });

  $("#contact-form").validate({
    rules: {
      from_name: {
        required: true,
        minlength: 4
      },
      reply_to: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      from_name: {
        required: "Please enter your name",
        minlength: "Please enter at least 4 characters"
      },
      reply_to: {
        required: "Please enter your email address",
        email: "Please enter a valid email address"
      },
      message: {
        required: "Please leave a message",
        minlength: "Your message must be at least 10 characters long"
      }
    },
    errorPlacement: function (error, element) {
      // Show Tooltipster error tooltips
      $(element).tooltipster('update', $(error).text());
      $(element).tooltipster('show');
    },
    success: function (label, element) {
      // Hide Tooltipster error tooltips
      $(element).tooltipster('hide');
    },
    submitHandler: function (form) {
      sendMail();
      $('#successModal').modal('show'); // Show the success modal
      return false; // Prevent the form from being submitted and refreshing the page
    }
  });
});

  // Event Listener for Scroll Animations
  // window.addEventListener('scroll', () => {
  //   document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  // }, false);


  // Glowing light
    const light = document.querySelector('.light');
    // Makes light glow follow mouse pointer
    document.addEventListener("mousemove", function (e) {
      light.style.left = `${e.clientX}px`;
      light.style.top = `${e.clientY}px`;
    });


  jQuery(function(){ //Add class to parent element to margin properly
    jQuery(".hb-lg").parent().addClass("hb-lg-margin");
    jQuery(".hb-md").parent().addClass("hb-md-margin");
    jQuery(".hb-sm").parent().addClass("hb-sm-margin");
    jQuery(".hb-xs").parent().addClass("hb-xs-margin");
  })

  jQuery(function(){ //Hover color as icon
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
  const dropMenuBlur = document.querySelector('.dropmenu-blur');

  toggleBtn.addEventListener('click', function () {
    // Toggle 'open' class for both dropDownMenu and dropMenuBlur
    dropDownMenu.classList.toggle('open');
    dropMenuBlur.classList.toggle('open');

    // Check if the dropDownMenu is open
    const isOpen = dropDownMenu.classList.contains('open');

    // Update the toggleBtnIcon based on isOpen
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
    if($(this).offset().top > ($(document).height() - $(window).height())){
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

  });
})();
