// import { Details } from "./details.module.js";
import { Details } from "./details.module.js";
import { Ui } from "./display.module.js";
export class Games {
  constructor() {
    this.loading = document.getElementById("loading");
    this.games = document.getElementById("games");
    this.details = document.getElementById("details");
    this.navs = document.querySelector(".navbar");

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.changeActivelink(link);
      });
    });
    this.display = new Ui();
    this.detailsGames = new Details();
    this.getGames("mmorpg");
    document.querySelector("input[type=search]").addEventListener("input", (e) => this.searchGames(e));
  }

  async changeActivelink(link) {
    document.querySelector(".navbar-nav .active").classList.remove("active");
    link.classList.add("active");
    const category = link.dataset.category;
    this.getGames(category);
  }
  async getGames(cat) {
    this.loading.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fdb6d00a44msh32fff0ae7b3d5c0p19509djsn4f8ec06c1d4f",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
      options
    );
    const response = await api.json();
    this.display.displaygame(response);

    this.loading.classList.add("d-none");
    this.allGames = response; // Update allGames array with new data

    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click" , async () => {
        this.games.classList.add("d-none");
        this.details.classList.remove("d-none");
        this.navs.classList.add("d-none");
        this.detailsGames.getDetails();
        await this.detailsGames.fetchDetails(card.dataset.id);
      });
    });
  }
  searchGames(e) {
    const searchTerm = e.target.value.trim().toLowerCase();
    const filteredGames = this.allGames.filter(
      (game) => game.title.toLowerCase().includes(searchTerm)
    );
    if (filteredGames.length > 0) {
      this.display.displaygame(filteredGames);
      this.attachCardListeners(); // Reattach event listeners to the new cards
    } else {
      document.getElementById("rowData").innerHTML = `
        <div class="col-12 text-center text-white">
          <h3 class="m-auto">No games found for "${e.target.value}".</h3>
        </div>`;
    }
  }
  
  attachCardListeners() {
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", async () => {
        this.games.classList.add("d-none");
        this.details.classList.remove("d-none");
        this.navs.classList.add("d-none");
        this.detailsGames.getDetails();
        await this.detailsGames.fetchDetails(card.dataset.id);
      });
    });
  }
}
