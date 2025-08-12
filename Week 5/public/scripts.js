const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
}

const addCards = (items) => {
  items.forEach(item => {
    let title = item.title || "No title";
    let image = item.image || "images/default.jpg";
    let link = item.link || "#";
    let description = item.description || "No description provided";

    let itemToAppend = `
      <div class="col s4 center-align">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${image}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${title}<i class="material-icons right">more_vert</i></span>
            <p><a href="#">${link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${title}<i class="material-icons right">close</i></span>
            <p class="card-text">${description}</p>
          </div>
        </div>
      </div>`;
    $(".card-section").append(itemToAppend);
  });
}


$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('#clickMeButton').click(() => {
    clickMe();
  });

  // Fetch cards from backend API
  fetch('/api/projects')
    .then(response => response.json())
    .then(data => {
      if(data.statusCode === 200){
        addCards(data.data);
      } else {
        console.error('Failed to fetch projects:', data.message);
      }
    })
    .catch(err => {
      console.error('Error fetching projects:', err);
    });
});
