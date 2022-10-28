/********************************Guests list **************************/

const container = document.querySelector(".table-container");
const cardTemplate = document.getElementById("row-template");
for (let i = 0; i < 3; i++) {
  container.append(cardTemplate.content.cloneNode(true));
} 
setTimeout(function() {
  fetch("http://127.0.0.1:8000/static/data/guests.json", {
    method: "GET",
    headers: {"access-Control-Allow-Origin": "*"}
  })
  .then((response) => response.json())
  .then((posts) => {
    container.innerHTML = "";
    posts.forEach((post) => {
      const div = cardTemplate.content.cloneNode(true);
      if(post.status === "error") {
        div.getElementById("guest-name").innerHTML = `<img class="w-4 h-4" src="/static/images/warning.svg" /> <span class="rtl:mr-2">`+post.guests_name+`</span>`;
      } else {
        div.getElementById("guest-name").textContent = post.guests_name;
      }
      div.getElementById("guest-phone").textContent = post.phone_number;
      div.getElementById("guest-status").textContent = post.status_message;
      div.getElementById("guest-status").classList.add(post.status);
      div.getElementById("guest_action").innerHTML = 
      ` <a href="/add-event"><img src="/static/images/edit_guests.svg" /></a>
      <a href="#"><img src="/static/images/delete_guests.svg" /></a>`;
      container.append(div);
    });
  });
},3000)
const datepickerEvent = document.getElementById('datepickerEvent');
new Datepicker(datepickerEvent, {}); 
const datepickerMessage = document.getElementById('datepickerMessageDate');
new Datepicker(datepickerMessage, {});