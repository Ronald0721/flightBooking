// --------------> Swiper
var swiper = new Swiper('.home--slide', {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

var swiper = new Swiper('.recommendation--slide2', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// --------------> Bootstrap Datepicker
$(document).ready(function() {
    $('#datepicker').datepicker({
      autoclose: "true",
      format: 'DD - MM d, yyyy',
      placement: 'bottom',
      enableOnReadonly: "true",
      orientation: 'bottom'
    });
});

// --------------> Add flights
document.getElementById("add-flight-btn").addEventListener("click", function(event) {
    // Retrieve values of input fields
    event.preventDefault();
    var dateValue = document.querySelector("#datepicker .input-group-field").value;
    var timeValue = document.querySelector(".selectpicker").value;
    var durationValue = document.querySelectorAll(".selectpicker")[1].value;
    var ageValue = document.querySelector(".age").value;
  
    // Create new HTML element to display saved information
    var savedFlight = document.createElement("div");
    savedFlight.classList.add("saved-flight", "mt-4");
    savedFlight.innerHTML = `
    <p class="text-right remove-flight" style="font-size: 0.8rem; color: #e8aa02; cursor: pointer;">Remove flight</p>
    <div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <label>Date</label>
            <div class="date input-group" id="datepicker">
                <div class="input-group-field form-control">
                    <p>${dateValue}</p>
                </div>
                <div class="input-group-append">
                    <span class="input-group-text bg-white"><i class="fa fa-calendar"></i></span>
                </div>
            </div>

        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label>Time</label>
            <div class="input-group">
                <div class="input-group-field form-control">
                    <p>${timeValue}</p>
                </div>
                  
                <div class="input-group-append">
                    <span class="input-group-text"><i class="fa fa-clock"></i></span>
                </div>
            </div>

        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label>Flight Duration</label>
            <div class="input-group">
                <div class="input-group-field form-control">
                    <p>${durationValue}</p>
                </div>
                <div class="input-group-append">
                    <span class="input-group-text"><i class="fa fa-clock"></i></span>
                </div>
            </div>

        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label>Age</label>
            <div class="input-group-field form-control">
                <p>${ageValue}</p>
            </div>

        </div>
    </div>
    </div>
    `;
  
    // Append new element to container
    document.getElementById("saved-flights").appendChild(savedFlight);

    // Clear the input fields after adding
    document.querySelector("#datepicker .input-group-field").value = null;
    document.querySelector(".selectpicker").value = null;
    document.querySelectorAll(".selectpicker")[1].value = null;
    document.querySelector(".age").value = null;
});

  // Removes flight
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-flight")) {
      // Retrieve the parent node of the clicked "Remove flight" element
      var savedFlight = event.target.parentNode;
  
      // Remove the entire savedFlight div
      savedFlight.parentNode.removeChild(savedFlight);
    }
  });