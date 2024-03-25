// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to your custom-div and the contactModal
    const customDiv = document.querySelector(".custom-div");
    const contactModal = new bootstrap.Modal(document.getElementById("contactModal"));

    // Add a click event listener to open the modal
    customDiv.addEventListener("click", function () {
        contactModal.show();
    });
});



// MARCELENO MODAL

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to your custom-div and the contactModal
    const customDiv2 = document.querySelector("marceleno");
    const contactModal2 = new bootstrap.Modal(document.getElementById("myModal"));

    // Add a click event listener to open the modal
    customDiv2.addEventListener("click", function () {
        contactModal2.show();
    });
});

// ANDRE MODAL

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to your custom-div and the contactModal
    const customDiv3 = document.querySelector("andre");
    const contactModal3 = new bootstrap.Modal(document.getElementById("andreModal"));

    // Add a click event listener to open the modal
    customDiv3.addEventListener("click", function () {
        contactModal3.show();
    });
});

function scrollToSection() {
    // Get the element with the ID "about"
    var aboutSection = document.getElementById('about');

    // Check if the element exists
    if (aboutSection) {
        // Use scrollIntoView to scroll to the "about" section
        aboutSection.scrollIntoView({ behavior: 'smooth' });
        console.log('Scrolling to section...');
    } else {
        console.log('Section not found');
    }
}


// BROWSE UNITS MODAL

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to your custom-div and the browseUnitsModal
    const browseUnitsButton = document.querySelector(".browseunits button");
    const browseUnitsModal = new bootstrap.Modal(document.getElementById("browseunitsModal"));

    // Add a click event listener to open the modal
    browseUnitsButton.addEventListener("click", function () {
        browseUnitsModal.show();
    });
});

  // Set the launch date (YYYY, MM, DD, HH, MM, SS)
  const launchDate = new Date(2024, 3, 1, 12, 0, 0).getTime();

  // Function to update the countdown timer
  function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = launchDate - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Update the countdown timer
      document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
      document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
      document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
    } else {
      // Display a message when the countdown ends
      document.getElementById('countdown').innerHTML = 'Sales Launched!';
    }
  }

  // Update the countdown timer every second
  setInterval(updateCountdown, 1000);

//   FLOOR PLAN MODAL

  document.addEventListener("DOMContentLoaded", function () {
    // Get the button and modal elements by their IDs
    const viewFloorPlansBtn = document.getElementById("viewFloorPlansBtn");
    const floorPlanModal = new bootstrap.Modal(document.getElementById("floorPlanModal"));
  
    // Add a click event listener to open the modal
    viewFloorPlansBtn.addEventListener("click", function () {
      floorPlanModal.show();
    });
  });

  //   POST WHATSAPP MESSAGE CONTENT

function sendWhatsAppMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const phoneNumber = '+27762800303';

    const whatsappMessage = `KDV: Enquiry%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

    window.location.href = whatsappURL;
}

//   OFFER TO PURCHUSE PROMPT

  document.getElementById("download-link").addEventListener("click", function(event) {
    const confirmDownload = confirm("Download King David View Offer To Purchase?");
    if (!confirmDownload) {
      event.preventDefault(); // Prevent the download if the user cancels.
    }
  });

  // Spinner Home
  var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1000);
};
spinner();
  
// Check if user has previously accepted or declined cookies
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("cookiesAccepted") === "true") {
        // Cookies accepted, do nothing
    } else if (localStorage.getItem("cookiesAccepted") === "false") {
        // Cookies declined, perform actions accordingly
        // For example, disable certain features
    } else {
        // Show the cookie consent popup if no decision has been made
        document.getElementById("cookieConsent").style.display = "block";
    }
});

// Event listeners for accepting or declining cookies
document.getElementById("acceptCookies").addEventListener("click", function() {
    // Set the local storage to indicate cookies have been accepted
    localStorage.setItem("cookiesAccepted", "true");
    // Hide the cookie consent popup
    document.getElementById("cookieConsent").style.display = "none";
    // Perform any necessary actions for accepting cookies
});

document.getElementById("declineCookies").addEventListener("click", function() {
    // Set the local storage to indicate cookies have been declined
    localStorage.setItem("cookiesAccepted", "false");
    // Hide the cookie consent popup
    document.getElementById("cookieConsent").style.display = "none";
    // Perform any necessary actions for declining cookies
});

$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});

 $(document).ready(function() {
      $('[data-fancybox="gallery"]').fancybox({
        // Add any Fancybox options or customization here
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });

  $(document).ready(function() {
      $('[data-fancybox="gallery-mobile"]').fancybox({
        // Add any Fancybox options or customization here
      });
    });

 
    // Get references to offcanvas and navigation links
    const offcanvas = document.getElementById('staticBackdrop');
    const navLinks = offcanvas.querySelectorAll('.nav-link');

    // Add event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Close the offcanvas menu
            const bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
            bsOffcanvas.hide();

            // Scroll to the target element
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Scrolls to the top of the target element
                });
            }
        });
    });
