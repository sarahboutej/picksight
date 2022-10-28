/********************************Event list*************************** */

    const eventContainer = document.querySelector(".event-cards-container");
    const eventCardTemplate = document.getElementById("event-card-template");
    for (let i = 0; i < 8; i++) {
      eventContainer.append(eventCardTemplate.content.cloneNode(true));
    } 
 
    setTimeout(function() {
      fetch("http://127.0.0.1:8000/static/data/events.json", {
        method: "GET",
        headers: {"access-Control-Allow-Origin": "*"}
      })
      .then((response) => response.json())
      .then((events) => {
        eventContainer.innerHTML = "";
        events.forEach((event) => {
          const div = eventCardTemplate.content.cloneNode(true);
          div.getElementById("event-img").innerHTML = ` <img src="/static/`+event.avatar+`" />`;
          div.getElementById("event-title").textContent = event.event_name ;
          div.getElementById("event-date").textContent = `{% blocktrans %}Event Date: {% endblocktrans %}`+event.event_date ;
          if(event.status === "pending") {
            div.getElementById("pending-event").innerHTML = `<p class="bg-[#FFEEEE] text-[#F26B6D] text-sm font-medium px-4 py-1 rounded-full inline">
             {% blocktrans %}Pending {% endblocktrans %}
         </p>`;
          }
          div.getElementById("message-details").textContent = `{% blocktrans %}Message Details {% endblocktrans %}`;
          div.getElementById("message-btn").classList.add('bg-[#FFB4C6]', 'border', 'border-[#FFB4C6]', 'hover:bg-transparent', 'hover:text-[#FFB4C6]','transition', 'duration-300');
          div.getElementById("image-btn").classList.add('bg-transparent', 'border', 'border-2', 'border-[#FFB4C6]','px-1');
          div.getElementById("image-btn").classList.remove('flex-1');
          if(event.status === "pending") {
            div.getElementById("message-btn").textContent = `{% blocktrans %}Go to Gallery {% endblocktrans %}`
            div.getElementById("image-btn").innerHTML = ` <img src="/static/images/edit.svg" />`;
          } else {
            div.getElementById("message-btn").textContent = `{% blocktrans %}Dashboard {% endblocktrans %}`
            div.getElementById("image-btn").innerHTML = ` <img src="/static/images/photos.svg" />`;
          }
          div.getElementById("message-date").innerHTML = `
          <span>{% blocktrans %}Date:  {% endblocktrans %}</span> 
           <span class="rtl:mr-1">`+event.sent_date+`</span>`;
 
          div.getElementById("message-time").innerHTML = `
          <span>{% blocktrans %}Time:  {% endblocktrans %}</span> 
           <span class="rtl:mr-1">`+event.time+`</span>`;
 
           div.getElementById("message-event").innerHTML = `
          <span>{% blocktrans %}Message:  {% endblocktrans %}</span> 
           <span class="rtl:mr-1">`+event.text+`</span>`;
 
          div.getElementById("contact-event").innerHTML = `
          <span>{% blocktrans %}Contacts:  {% endblocktrans %}</span> 
           <span class="rtl:mr-1">`+event.contacts+`</span>`;
 
         eventContainer.append(div);
        });
       const addEvent = document.createElement('div');
       addEvent.classList.add('flex', 'items-center', 'justify-center', 'p-6', 'border-2', 'border-dashed', 'rounded-xl', 'border-[#CFD8DC]');
       addEvent.innerHTML = `<a href="/add-event"><img src="/static/images/add-event.svg" /></a>`;
       eventContainer.append(addEvent);
      });
    },1000)
  