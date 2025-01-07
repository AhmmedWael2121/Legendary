import { Ui } from "./display.module.js";

export class Details {
  constructor() {
    this.loader = document.querySelector(".loading");
  }
  getDetails() {
    document.querySelector(".btn-close").addEventListener("click", () => {
      document.getElementById("games").classList.remove("d-none");
      document.getElementById("details").classList.add("d-none");
      document.querySelector(".navbar").classList.remove("d-none");
      document.getElementById("searchId").classList.remove("d-none");
    });
  }
  async fetchDetails(id) {
    this.loader.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "fdb6d00a44msh32fff0ae7b3d5c0p19509djsn4f8ec06c1d4f",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const response = await api.json();
    this.loader.classList.add("d-none");
    new Ui().displayDetailgames(response);
  }
}
