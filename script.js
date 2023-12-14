user_input_form.addEventListener("submit", (e)  => {
    e.preventDefault();
    
    const PLACEHOLDER_PHOTO_URL = "https://plus.unsplash.com/premium_photo-1673264933459-808963ed1594?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXQlMjByYWluaWVyfGVufDB8fDB8fHww";

    const destinationName = destination_name.value;
    const locationName = location_name.value;
    const photoUrl = photo_url || PLACEHOLDER_PHOTO_URL;
    const desc = description.value;

    user_input_form.reset();

    console.log(destinationName, locationName, photoUrl, desc);
});