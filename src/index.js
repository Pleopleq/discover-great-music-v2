import "./main.css";
import { GetReleases } from "./GetReleases";
import { ShowReleases } from "./ShowReleases";
import { Notification } from "./Notification";

document.addEventListener("DOMContentLoaded", function () {
  const releasesButton = document.querySelector(".input-container__getcontent");
  const inputContainer = document.querySelector(".input-container");

  releasesButton.addEventListener("click", async function () {
    if (inputContainer.children.length === 4) {
      inputContainer.lastElementChild.remove();
    }

    let releases = await GetReleases();

    if (releases.message === "Artist not found.") {
      const alert = Notification("Please, try again!", "alert");
      return inputContainer.appendChild(alert);
    }

    ShowReleases(releases);
  });
});
