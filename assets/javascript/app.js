(function() {
  document.addEventListener('DOMContentLoaded', () => {

  // debounce to prevent screen flicker
    function debounce(func, wait) {
      let timeout;
      return function () {
        const context = this,
          args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          func.apply(context, args);
        }, wait);
      };
    }

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
  window.onscroll = debounce(toggleActiveSection, 100);

// Skills menu
const hexList = document.querySelectorAll('.hex');
const toggleList = document.querySelectorAll('.right-side li');
const skillMenu = document.querySelector(".right-side");
const skillMenuMobile = document.querySelector(".skills-menu-mobile");

const originalOrder = Array.from(hexList);

// Set initial state
hexList.forEach((hex, index) => {
  if (index !== 15 && index !== 16) {
    hex.style.opacity = '0';
  }
});
toggleList.forEach((toggle, index) => {
  if (index !== 3) {
    toggle.classList.remove('active');
  }
});

skillMenu.addEventListener('click', (e) => {
  const activeSkills = e.target.closest("li");
  if (!activeSkills) return;
  toggleSkills(activeSkills);
});

skillMenuMobile.addEventListener('click', (e) => {
  const activeSkills = e.target.closest("li");
  if (!activeSkills) return;

  // Remove the 'active' class from all the <li> elements
  skillMenuMobile.querySelectorAll('li').forEach(li => {
    li.classList.remove('active');
  });

  // Add the 'active' class to the clicked <li> element
  activeSkills.classList.add('active');

  // First, collapse all other groups in the .skills-menu-mobile
  let mobileMenuItems = skillMenuMobile.querySelectorAll('.menu-item-has-children');
  mobileMenuItems.forEach(function (item) {
    if (item !== activeSkills) {
      item.classList.remove('open');
    }
  });

  // Then, toggle the current group
  toggleSkills(activeSkills, false, 'mobile');
});




function toggleSkills(skillsToActivate, forceActivate = false, menuOrigin = null) {
  const skillsText = skillsToActivate.textContent.trim().toLowerCase();
  let startIndex, endIndex;

  if (skillsText === 'front end') {
    startIndex = 0;
    endIndex = 6;
  } else if (skillsText === 'tools') {
    startIndex = 6;
    endIndex = 10;
  } else if (skillsText === 'back end') {
    startIndex = 10;
    endIndex = 15;
  } else if (skillsText === 'certificates') {
    startIndex = 15;
    endIndex = 17;
  }

  if (menuOrigin === 'mobile') {
    const allGroups = [
      { start: 0, end: 6 },
      { start: 6, end: 10 },
      { start: 10, end: 15 },
      { start: 15, end: 17 },
    ];

    allGroups.forEach(group => {
      if (group.start !== startIndex || group.end !== endIndex) {
        for (let i = group.start; i < group.end; i++) {
          hexList[i].style.opacity = '0';
        }
      }
    });
  }

  let allActive = true;
  for (let i = startIndex; i < endIndex; i++) {
    if (hexList[i].style.opacity === '0') {
      allActive = false;
      break;
    }
  }

  if (allActive && !forceActivate) {
    skillsToActivate.classList.remove('active');
  } else {
    skillsToActivate.classList.add('active');
  }

  for (let i = startIndex; i < endIndex; i++) {
    if (hexList[i].style.opacity === '0' || forceActivate) {
      hexList[i].style.opacity = '1';
    } else {
      hexList[i].style.opacity = '0';
    }
  }

  const displayedHexes = Array.from(hexList).filter(hex => hex.style.opacity !== '0');
  displayedHexes.sort((a, b) => originalOrder.indexOf(a) - originalOrder.indexOf(b));

  const hexGrid = document.getElementById('hexGrid');
  hexGrid.innerHTML = '';
  displayedHexes.forEach(hex => {
    hexGrid.appendChild(hex);
  });
}



// Simulate clicking the certificates option twice on page load
const certificatesOption = toggleList[3];
toggleSkills(certificatesOption);
toggleSkills(certificatesOption);

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

  // Email validation
    $(document).ready(function () {
      // Initialize Tooltipster for input fields
      $('#name, #email, #contact_number, textarea[name="message"]').tooltipster({
        trigger: 'custom',
        onlyOne: false,
        position: 'top'
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


//Hexgrid modals
function createAndShowSkillModal(title, description, link, linkText) {
  const modal = document.createElement("div");
  modal.classList.add("skill-modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("skill-modal-content");

  const modalTitle = document.createElement("h2");
  modalTitle.innerText = title;

  const modalDescription = document.createElement("p");
  modalDescription.innerText = description;

  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalDescription);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);

  modal.style.display = "block";

  if (link) {
    const modalLink = document.createElement("a");
    modalLink.href = link || "#";
    modalLink.innerText = link ? (linkText || "Click here for more information") : "";
    modalLink.classList.add("modal-link");
    modalLink.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent bubbling up
    });

    modalContent.appendChild(modalLink);
  }

  // Close the modal when clicking anywhere
  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

const hexes = document.querySelectorAll(".hex");

hexes.forEach((hex, index) => {
  hex.addEventListener("click", (e) => {
    const title = hex.querySelector("h1");
    const description = hex.querySelector("p");
    const link = hex.getAttribute("data-link");
    const linkText = hex.getAttribute("data-link-text");

    if (title && description) {
      createAndShowSkillModal(title.innerText, description.innerText, link, linkText);
    }
  });
});
