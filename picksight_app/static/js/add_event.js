

/********************************Guests list **************************/

const container = document.querySelector(".table-container");
const cardTemplate = document.getElementById("row-template");
const targetEl = document.getElementById('add-guests');
const modal = new Modal(targetEl);
for (let i = 0; i < 3; i++) {
  container.append(cardTemplate.content.cloneNode(true));
}
setTimeout(function () {
  fetch("http://127.0.0.1:8000/static/data/guests.json", {
    method: "GET",
    headers: { "access-Control-Allow-Origin": "*" }
  })
    .then((response) => response.json())
    .then((guests) => {
      container.innerHTML = "";
      guests.forEach((guest) => {
        const div = cardTemplate.content.cloneNode(true);
        createTableRow(div, container, guest);
      });
    });
}, 1000)

function getElement (elemnt) {
  document.getElementById('selectedGuestImg').src = elemnt.querySelector('.child2').src;
  document.getElementById('selectedGuestCode').textContent = elemnt.querySelector('.child1').innerText ;
  $('selectedGuestCountry').text(elemnt.querySelector('.child3').innerText);
};

$("#add-guest-btn").click(function () {
  const guest = {
    "id": "05", "guests_name": "", "phone_number": "", "status": "ok", "status_message": "Sent at 3/5/2022 at 14:00"
  };
  const guest_name = $("#input-guest-name").val();
  const guest_phone = $("#guest-phone-input").val();

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMinutes();

  

  let currentDate = `{% blocktrans %}Sent {% endblocktrans %} ${day}/${month}/${year} at ${hour}:${minute}`;

  if(guest_name && $.isNumeric(guest_phone))  {
    guest.guests_name = guest_name;
    guest.phone_number = $('#selectedGuestCode').text()+guest_phone;
    guest.status_message = currentDate;
    const newRow = cardTemplate.content.cloneNode(true);
    createTableRow(newRow, container, guest);
    modal.hide();
    showSnackBar('New guest successfully added!')
  } else {
    modal.hide();
    showSnackBar('Oops. Something went wrong when adding new guest!')
  }
});

$("#add-single-guest").click(function () {
  modal.show();
});

$("#guest-close-btn").click(function () {
  modal.hide();
});



function createTableRow (el, parent, item) {
  if (item.status === "error") {
    el.getElementById("guest-name").innerHTML = `<img class="w-4 h-4" src="/static/images/warning.svg" /> <span class="rtl:mr-2">` + item.guests_name + `</span>`;
  } else {
    el.getElementById("guest-name").textContent = item.guests_name;
  }
  el.getElementById("guest-phone").textContent = item.phone_number;
  el.getElementById("guest-status").textContent = item.status_message;
  el.getElementById("guest-status").classList.add(item.status);
  el.getElementById("guest_action").innerHTML =
    ` <a href="/add-event"><img src="/static/images/edit_guests.svg" /></a>
    <a href="#"><img src="/static/images/delete_guests.svg" /></a>`;
  parent.append(el);
}

function showSnackBar(text, status) {
  $("#snackbar").text( text );
  $("#snackbar").addClass( "show" );
  setTimeout(function(){ 
    $("#snackbar").removeClass( "show" );
  }, 2000);
};

const datepickerEvent = document.getElementById('datepickerEvent');
new Datepicker(datepickerEvent, {});
const datepickerMessage = document.getElementById('datepickerMessageDate');
new Datepicker(datepickerMessage, {});