export class Ui {
  constructor() {}

  displaygame(data) {
    let gameContainer = ``;
    
    for (let index = 0; index < data.length; index++) {
      gameContainer += `
      <div class="col">
          <div data-id="${
            data[index].id
          }" class="card bg-transparent m-auto" style="width: 18rem;" role="button">
                   <img class="card-img-top" src="${data[index].thumbnail}" />
                   <div class="card-body">
                      <div class="mb-3 d-flex align-items-center justify-content-between">
                        <h3 class=" card-title  h5 text-white ">${
                          data[index].title
                        }</h3>
                        <span class="badge  text-bg-primary p-2">Free</span>
                      </div>
                   <p class="card-text small fnt-title text-white text-center">
                      ${data[index].short_description.split(" ", 8).join(" ")}
                   </p>
                  </div>
                  <div class="card-footer fnt-title small hstack justify-content-between">
                     <span class="text-white   rounded-4 bg-success p-1">${
                       data[index].genre
                     }</span>
                     <span class="rounded-4 bg-success p-1 text-white">${
                       data[index].platform
                     }</span>
                  </div>
          </div>
          </div>
       </div>
        `;
    }
    document.getElementById("rowData").innerHTML = gameContainer;
  }
  displayDetailgames(data) {
    let detailContainer = ``;
    detailContainer += `<div class="col-md-4">
              <img src="${data.thumbnail}" class="w-100 m-auto shadow rounded-4" alt="{ID img}"
              />
            </div>
            <div class="col-md-6 fw-normal d-flex flex-column gap-4">
              <h3 id="details-title" class="text-white fnt-sec-title text-capitalize">title :<span class=" fnt-title"> ${data.title}</span></h3>
              <p class="text-white  h5">genre : <span class="bg-btn-secondary rounded-4 fnt-title  px-2 py-1 text-white">${data.genre}</span></p>
              <p class="text-white  h5">platform : <span class="bg-btn-secondary rounded-4 fnt-title  px-2 py-1 text-white">${data.platform}</span></p>
              <p class="text-white  h5">status : <span class="bg-btn-secondary rounded-4 fnt-title  px-2 py-1 text-white">${data.status}</span></p>
              <p class= "text-white  small fnt-sec-title">${data.description}</P>
             <a class="btn btn-outline-success w-50 m-auto mb-5 h3" target="_blank" href="${data.game_url}">Show Game</a>
            </div>`;
    document.getElementById("detailRow").innerHTML = detailContainer;
  }
}
