$(document).ready(function () {
    $(".contact-us-btn").on("click", function () {
      $("#contactUsModal").modal("show");
    });
  
    $(".read-more-btn").on("click", function () {
      window.open("https://fylehq.com", "_blank");
    });
  
      var $firstProjectInfo = $(".project-info.active");
      var defaultImageSrc = $firstProjectInfo.data("image");
      $("#project-image").attr("src", defaultImageSrc);
  
      $(".project-info").on("click", function () {
        $("#project-image").attr("src", $(this).data("image"));
        $(".project-info").removeClass("active");
        $(this).addClass("active");
    });
  
    
    $(".carousel").carousel({
      interval: 3000,
    });
  
    $(".growth-card").hover(
      function () {
        $(this).addClass("highlight");
      },
      function () {
        $(this).removeClass("highlight");
      }
    );
  });
  
  const projectInfoDivs = document.querySelectorAll('.project-info');
  const projectImage = document.getElementById('project-image');
  
  projectInfoDivs.forEach(div => {
      div.addEventListener('click', () => {
          projectInfoDivs.forEach(div => div.classList.remove('active'));
  
          div.classList.add('active');
  
          const imageSource = div.dataset.image;
          projectImage.src = imageSource;
      });
  });
  
  
  $(document).ready(function () {
    $("#contactForm").on("submit", function (e) {
      e.preventDefault();
  
      var formData = $(this).serialize();
  
      $.ajax({
        type: "POST",
          url: $(this).attr("action"),
        data: formData,
        success: function (response) {
          alert("Form submitted successfully!");
          $("#contactForm")[0].reset();
          $("#contactUsModal").modal("hide");
        },
        error: function (xhr, status, error) {
          alert(
            "An error occurred while submitting the form. Please try again later."
          );
          console.error(error);
        },
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var inputs = document.querySelectorAll(".form-control");
    inputs.forEach(function (input) {
      if (input.value) {
        input.classList.add("not-empty");
      }
  
      input.addEventListener("input", function () {
        if (this.value) {
          this.classList.add("not-empty");
        } else {
          this.classList.remove("not-empty");
        }
      });
    });
  });
  
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    var dots = document.querySelectorAll(".dot");
    var cards = document.querySelectorAll(".service-card");
    var currentIndex = 0;
    var transitionDuration = 0.5; 
    var transitionDelay = 0.125;
  
    function showCard(index) {
      var offset = -index * 200;
      cards.forEach(function (card) {
        card.style.transition = `transform ${transitionDuration}s ease-in-out`;
        card.style.transform = `translateX(${offset}%)`;
      });
  
      dots.forEach(function (dot) {
        dot.classList.remove("active");
      });
      dots[index].classList.add("active");
    }
  
    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        currentIndex = index;
        showCard(currentIndex);
      });
    });
  
    showCard(currentIndex);
  
    cards.forEach(function (card) {
      card.addEventListener("transitionend", function () {
        card.style.transition = ""; 
      });
    });
  });