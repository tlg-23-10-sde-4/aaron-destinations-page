user_input_form.addEventListener("submit", (e)  => {
    e.preventDefault();
    
    const PLACEHOLDER_PHOTO_URL = "https://plus.unsplash.com/premium_photo-1673264933459-808963ed1594?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXQlMjByYWluaWVyfGVufDB8fDB8fHww";


    const destinationName = destination_name.value;
    const locationName = location_name.value;
    const photoUrl = photo_url.value || PLACEHOLDER_PHOTO_URL;
    const desc = description.value;

    user_input_form.reset();

    const card = createCard({destinationName, locationName, photoUrl, desc});

    cards_container.appendChild(card);
});

cards_container.addEventListener("click", (e) => {
    const clicked = e.target;

    if (clicked.getAttribute("btn_type") === "delete") {
        clicked.parentElement.parentElement.remove();
    }

    if (clicked.getAttribute("btn_type") === "edit") {
        
    }

});

function createCard({destinationName, locationName, photoUrl, desc}) {

    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style", "width: 18rem");
    card.innerHTML= `
      <img src="${photoUrl}" class="card-img-top"  alt="${destinationName} at ${locationName}">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
        ${desc && `<p class="card-text">${desc}</p>`}
    
        <button type="button" btn_type="edit" class="btn btn-info">Edit</button>
        <button type="button" btn_type="delete" class="btn btn-danger">Delete</button>
      </div>
    `;

    return card;
}

