function sendMail() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_3a3y7xf', 'template_ci7p1oh', '#contact-form')
        .then(function() {
          console.log('SUCCESS!');
          let success = document.getElementById("sendButton");
          let contactForm = document.getElementById("contact-form");
          contactForm.reset();
          success.innerHTML = "Successfully sent"
          success.style.backgroundColor = "green";
          setInterval(() => window.location.reload(true), 3000)
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}
